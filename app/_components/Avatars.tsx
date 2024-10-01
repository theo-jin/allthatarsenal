import React from "react";
import { Avatar, Link } from "@nextui-org/react";
import { Session } from "next-auth";

export const MyPage = ({ session }: { session: Session | null }) => {
	return (
		<Link href={"/mypage"}>
			<Avatar className="mr-2" radius="sm" name={session?.user.name} />
		</Link>
	);
};
