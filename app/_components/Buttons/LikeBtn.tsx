import { Button } from "@nextui-org/button";
import { HeartIcon } from "../icons";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/providers";

export const LikeBtn = ({ data }: any) => {
	let list = data.favorites;
	let target = data.player._id;

	let checkFavoritesValue = list ? list.hasOwnProperty(target) : false;

	const [liked, setLiked] = React.useState(checkFavoritesValue);
	const { mutate } = useMutation({
		mutationFn: async () => {
			const res = await (
				await fetch("/api/like/likePlayer", {
					method: "POST",
					body: data.player._id,
				})
			).json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["comments"] });
		},
	});
	return (
		<Button
			isIconOnly
			className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
			radius="full"
			variant="light"
			onPress={() => setLiked((v: any) => !v)}
		>
			<HeartIcon
				className={liked ? "[&>path]:stroke-transparent" : ""}
				fill={liked ? "currentColor" : "none"}
			/>
		</Button>
	);
};
