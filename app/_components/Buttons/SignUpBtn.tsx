"use client";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
export const SignUpBtn = () => {
	const router = useRouter();
	return (
		<Button
			as={Link}
			className="text-sm font-normal text-default-600 bg-default-100 mr-2"
			onClick={() => router.push("/register")}
			variant="flat"
		>
			Sign Up
		</Button>
	);
};
