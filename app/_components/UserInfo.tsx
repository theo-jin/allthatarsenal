"use client";
import React from "react";
import { User } from "@nextui-org/react";

export default function UserInfo({ session }: any) {
	return (
		<User name={session.user.name} description={`${session.user.role}등급`} />
	);
}
