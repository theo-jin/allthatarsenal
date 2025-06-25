import React from "react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Metadata } from "next";
import { getServerSession, Session } from "next-auth";
import { title } from "@/app/_components/primitives";

import { LikeTable } from "@/app/_components/LikeTable";
import UserInfo from "@/app/_components/UserInfo";

export const metadata: Metadata = {
	//Metadata는 모든 페이지의 head태그와 같은 역할을 한다고 생각하자.
	title: "Mypage",
	description: "Mypage",
};

export default async function Page() {
	// 미들웨어에서 인증을 처리하므로 여기서는 세션이 항상 존재함
	const session: Session | null = await getServerSession(authOptions);

	// 안전성을 위해 session 존재 여부를 확인하지만, 미들웨어에 의해 항상 존재해야 함
	if (!session) {
		// 이론적으로는 실행되지 않아야 하는 코드
		throw new Error("인증되지 않은 접근");
	}

	return (
		<>
			<main className="flex flex-col items-center space-y-10 pb-10">
				<div className={title()}>{session.user.name}님의 즐겨찾기</div>
			</main>
			<div className="flex flex-col items-center space-y-10 p-24">
				<UserInfo session={session} />
				<LikeTable />
			</div>
		</>
	);
}
