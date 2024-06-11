"use client";

import { Button } from "@nextui-org/button";
import { HeartIcon } from "../icons";
import React from "react";
export const LikeBtn = (id: any) => {
	const [liked, setLiked] = React.useState(false);
	return (
		<Button
			isIconOnly
			className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
			radius="full"
			variant="light"
			onPress={() => setLiked((v) => !v)}
		>
			<HeartIcon
				className={liked ? "[&>path]:stroke-transparent" : ""}
				fill={liked ? "currentColor" : "none"}
			/>
		</Button>
	);
};
