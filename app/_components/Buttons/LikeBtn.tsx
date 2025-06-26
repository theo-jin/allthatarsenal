"use client";

import React, { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/app/providers";
import { Player } from "@/app/_types";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LikeList {
	[playerId: string]: string;
}

export const LikeBtn = ({ player }: { player: Player }) => {
	const { data } = useQuery({
		queryKey: ["likeList"],
		queryFn: async (): Promise<LikeList> => {
			const res = await fetch(`/api/like/likeLists`);
			if (!res.ok) throw new Error("Network response was not ok");
			return res.json();
		},
		staleTime: 5000,
		gcTime: 40000,
	});

	const list = data || {};
	const checkFavoritesValue = list ? list.hasOwnProperty(player._id) : false;

	const [liked, setLiked] = React.useState(checkFavoritesValue);

	useEffect(() => {
		setLiked(checkFavoritesValue);
	}, [checkFavoritesValue]);

	const mutation = useMutation({
		mutationFn: async (newList: LikeList) => {
			const res = await fetch("/api/like/likePlayer", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ favorites: newList }),
			});

			if (!res.ok) {
				throw new Error("Failed to update like status");
			}

			return res.json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["likeList"] });
			queryClient.invalidateQueries({ queryKey: ["favorites", player._id] });
		},
		onError: (error) => {
			//  롤백로직직
			console.error("Like update failed:", error);
			setLiked(checkFavoritesValue); // 서버의 실제 값으로 롤백
		},
	});

	const handlePress = () => {
		// 현재 상태 저장 (롤백용)
		const previousLiked = liked;

		setLiked((prev: boolean) => {
			const updatedLiked = !prev;
			const newList = { ...list };

			if (updatedLiked) {
				newList[player._id] = player.name;
			} else {
				delete newList[player._id];
			}

			// 낙관적 업데이트와 함께 서버 요청
			mutation.mutate(newList);

			return updatedLiked;
		});
	};


	const isLoading = mutation.isPending;

	const star =
		list ?
			<StarIcon
				className={`transition-colors duration-200 ${
					liked ? "fill-current text-yellow-400" : "text-gray-400"
				} ${isLoading ? "opacity-50" : ""}`}
				fill={liked ? "currentColor" : "none"}
			/>
		:	<StarIcon fill="none" className="text-gray-400" />;

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={handlePress}
			disabled={isLoading}
			className={`transition-all duration-200 ${
				isLoading ? "cursor-not-allowed" : "hover:bg-gray-100"
			}`}
		>
			{star}
		</Button>
	);
};
