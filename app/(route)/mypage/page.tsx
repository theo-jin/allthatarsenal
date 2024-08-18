import React from "react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Metadata } from "next";
import { getServerSession, Session } from "next-auth";
import Link from "next/link";
import { title } from "@/app/_components/primitives";

import { LikeTable } from "@/app/_components/LikeTable";
import UserInfo from "@/app/_components/UserInfo";
export const metadata: Metadata = {
	//Metadata는 모든 페이지의 head태그와 같은 역할을 한다고 생각하자.
	title: "Myspage",
	description: "Mypage",
};

export default async function App() {
	let session:Session | null = await getServerSession(authOptions);

	return (
		<>
			{session != null ?
				<>
					<main className="flex  flex-col items-center space-y-10 pb-10">
						<div className={title()}> {session.user.name}님의 즐겨찾기</div>
					</main>
					<div className="'flex flex-col items-center space-y-10 p-24'">
						<UserInfo session={session} />
						<LikeTable />
					</div>
				</>
			:	<main className="flex min-h-screen flex-col items-center space-y-10 p-24">
					<Link className={title()} href="/signin">
						로그인 해주세요
					</Link>
				</main>
			}
		</>
	);
}
