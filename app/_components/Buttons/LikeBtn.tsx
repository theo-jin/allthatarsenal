"use client";

import React, { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/app/providers";
import { Player } from "@/app/_types";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LikeBtn = ({ player }: { player: Player }) => {
	const { data } = useQuery({
		queryKey: ["likeList"],
		queryFn: async () => {
			const res = await fetch(`/api/like/likeLists`);
			if (!res.ok) throw new Error("Network response was not ok");
			return res.json();
		},
		staleTime: 5000,
		gcTime: 40000,
	});
	const list = data || {};
	let checkFavoritesValue = list ? list.hasOwnProperty(player._id) : false;

	let target = player;

	const [liked, setLiked] = React.useState(checkFavoritesValue);
	useEffect(() => {
		setLiked(checkFavoritesValue);
	}, [checkFavoritesValue]);

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
	let star;
	if (list) {
		star = (
			<StarIcon
				className={liked ? "fill-current text-yellow-400" : ""}
				fill={liked ? "currentColor" : "none"}
			/>
		);
	} else {
		star = <StarIcon fill={"none"} />;
	}
	return (
		<Button variant="ghost" size="icon" onClick={handlePress}>
			{star}
		</Button>
	);
};
