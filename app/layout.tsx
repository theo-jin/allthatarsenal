import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/app/_config/site";
import { fontSans } from "@/app/_config/fonts";
import { Providers1 } from "./providers";
import { Navbar } from "@/app/_components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import type { Viewport } from "next";

export const viewport: Viewport = {
	themeColor: [{ media: "(prefers-color-scheme: light)", color: "cyan" }],
};
export const metadata: Metadata = {
	//Metadata는 모든 페이지의 head태그와 같은 영할을 한다고 생각하자.
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	let session: Session | null = await getServerSession(authOptions);

	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<Providers1>
					<div className="relative flex flex-col h-screen">
						<Navbar session={session} />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://github.com/theo-jin"
								title="theo-jin.github"
							>
								<span className="text-default-600">Made by</span>
								<p className="text-primary">theo-jin</p>
							</Link>
						</footer>
					</div>
				</Providers1>
			</body>
		</html>
	);
}
