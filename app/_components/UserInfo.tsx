import React from "react";
import { User } from "@nextui-org/react";
import { Session } from "next-auth";

export default function UserInfo({ session }: { session: Session | null }) {
	return (
		<User name={session?.user.name} description={`${session?.user.role}등급`} />
	);
}
