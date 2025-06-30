import { title, subtitle } from "@/app/_components/primitives";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export const dynamic = "force-static";

export default function Page() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>가입성공!&nbsp;</h1>
				<br />
				<h1 className={title({ color: "pink" })}>ALL THAT ARSENAL&nbsp;</h1>
				<h1 className={title()}>의 가입을 환영합니다!&nbsp;</h1>
			</div>

			<div className="flex gap-3">
				<Button variant="light" className={subtitle()} as={Link} href="/signin">
					로그인하기
				</Button>
			</div>
		</section>
	);
}
