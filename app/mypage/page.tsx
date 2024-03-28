import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import React from "react";

export default async function App() {
	let session: any = await getServerSession(authOptions);
	console.log(session.user);
	return (
		<>
			<p>{session.user.name}님의 mypage </p>
		</>
	);
}
