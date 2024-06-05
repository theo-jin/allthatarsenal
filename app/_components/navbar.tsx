import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";

import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/app/_config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/app/_components/theme-switch";
import { MyPage } from "./Avatars";
import { LogOutBtn } from "./Buttons/LogOutBtn";
import { SignInBtn } from "./Buttons/SignInBtn";
import { SignUpBtn } from "./Buttons/SignUpBtn";
import { Logo } from "./Logo";

export const Navbar = ({ session }: any) => {
	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="hidden lg:flex gap-4 font-bold text-inherit">
							ALL THAT ARSENAL
						</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium",
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<ThemeSwitch />
				</NavbarItem>
				{session ?
					<NavbarItem className="hidden md:flex">
						<MyPage session={session} />
						<LogOutBtn />
					</NavbarItem>
				:	<NavbarItem className="hidden md:flex">
						<SignUpBtn />
						<SignInBtn />
					</NavbarItem>
				}
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{session ?
					<MyPage session={session} />
				:	<SignUpBtn />}
				{session ? null : <SignInBtn />}

				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link color={"foreground"} href={item.href} size="lg">
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
				{session ?
					<LogOutBtn />
				:	null}
			</NavbarMenu>
		</NextUINavbar>
	);
};
