import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import React from "react";
export const metadata: Metadata = {
	//Metadata는 모든 페이지의 head태그와 같은 역할을 한다고 생각하자.
	title: "Myspage",
	description: "Mypage",
};

export default async function App() {
	let session: any = await getServerSession(authOptions);

	return (
		<>
			<p>{session.user.name}님의 Mypage </p>
		</>
	);
}
