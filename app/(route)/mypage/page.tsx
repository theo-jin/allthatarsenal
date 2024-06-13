import React from "react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

import Link from "next/link";
import { title } from "@/app/_components/primitives";
import likeList from "@/pages/api/like/likeList";
import { LikeTable } from "@/app/_components/LikeTable";
export const metadata: Metadata = {
	//Metadata는 모든 페이지의 head태그와 같은 역할을 한다고 생각하자.
	title: "Myspage",
	description: "Mypage",
};

export default async function App() {
	let session: any = await getServerSession(authOptions);
	const favorites = await likeList();

	return (
		<>
			{session != null ?
				<main className="flex min-h-screen flex-col items-center space-y-10 p-24">
					<div className={title()}> {session.user.name}님의 Mypage</div>
					<LikeTable favorites={favorites} />
				</main>
			:	<main className="flex min-h-screen flex-col items-center space-y-10 p-24">
					<Link className={title()} href="/signin">
						로그인 해주세요
					</Link>
				</main>
			}
		</>
	);
}
