import { Button } from "@nextui-org/button";
import { HeartIcon } from "../icons";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/providers";

export const LikeBtn = ({ data }: any) => {
	let list = data.favorites;
	let target = data.player;
	
	let checkFavoritesValue = list ? list.hasOwnProperty(target._id) : false;

	const [liked, setLiked] = React.useState(checkFavoritesValue);

	const mutation = useMutation({
		mutationFn: async (newList) => {
			const res = await (
				await fetch("/api/like/likePlayer", {
					method: "POST",
					body: JSON.stringify({ favorites: newList }),
				})
			).json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["favorites", target._id] });
		},
	});
	const handlePress = () => {
		setLiked((prev: any) => {
			const updatedLiked = !prev;
			const newList = { ...list };
			if (updatedLiked) {
				newList[target._id] = target.name;
			} else {
				delete newList[target._id];
			}
			mutation.mutate(newList);
			return updatedLiked;
		});
	};
	let heart;
	if (list) {
		heart = (
			<HeartIcon
				className={liked ? "[&>path]:stroke-transparent" : ""}
				fill={liked ? "currentColor" : "none"}
			/>
		);
	} else {
		heart = <HeartIcon fill={"none"} />;
	}
	return (
		<Button
			isIconOnly
			className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
			radius="full"
			variant="light"
			onPress={handlePress}
		>
			{heart}
		</Button>
	);
};
