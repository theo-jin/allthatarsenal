import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export const SignInBtn = () => {
	return (
		<Button
			className="text-sm font-normal text-default-600 bg-default-100 mr-2"
			variant="flat"
			as={Link}
			href="/signin"
		>
			Sign In
		</Button>
	);
};
