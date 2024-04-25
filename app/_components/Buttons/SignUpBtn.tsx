"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
export const SignUpBtn = () => {
	return (
		<Button
			as={Link}
			className="text-sm font-normal text-default-600 bg-default-100 mr-2"
			href={"/register"}
			variant="flat"
		>
			Sign Up
		</Button>
	);
};
