"use client";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";

export const SignInBtn = () => {
	const router = useRouter();
	return (
		<Button
			className="text-sm font-normal text-default-600 bg-default-100 mr-2"
			variant="flat"
			onClick={() => router.push("/signin")}
		>
			Sign In
		</Button>
	);
};
