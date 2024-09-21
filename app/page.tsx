import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/app/_config/site";
import { title, subtitle } from "@/app/_components/primitives";
import { KakaoIcon } from "@/app/_components/icons";
import Swiper from "@/app/_components/swiper";
export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Welcome to&nbsp;</h1>
				<br />
				<h1 className={title({ color: "pink" })}>ALL THAT ARSENAL&nbsp;</h1>
				<br />
				<h1 className={title()}>Go!&nbsp;</h1>
				<h1 className={title({ color: "pink" })}>Gunners!&nbsp;</h1>
		
				<h2 className={subtitle({ class: "mt-4" })}>
					Beautiful Football Club ARSENAL FC
				</h2>
			</div>
			<Swiper />
			<div className="flex gap-3">
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.officialpage}
					className={buttonStyles({ color: "primary", radius: "full" })}
				>
					Official Page
				</Link>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.kakao}
				>
					<KakaoIcon size={20} />
					Kakao Fan Chat
				</Link>
			</div>
		</section>
	);
}
