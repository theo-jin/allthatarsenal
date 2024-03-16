"use client";

import React from "react";
import { Avatar } from "@nextui-org/react";

export const Avatars = ({ session }: any) => {
	return <Avatar className="mr-2" radius="sm" name={session.user.name} />;
};
