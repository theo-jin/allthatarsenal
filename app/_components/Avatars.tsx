"use client";

import React from "react";
import { Avatar, Link } from "@nextui-org/react";

export const MyPage = ({ session }: any) => {
	return (
		<Link href={"/mypage"}>
			<Avatar className="mr-2" radius="sm" name={session.user.name} />
		</Link>
	);
};
