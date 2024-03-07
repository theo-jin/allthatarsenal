import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import { Avatars } from "./Avatars";
import { LogOutBtn } from "./LogOutBtn";
import { SignInBtn } from "./SignInBtn";
import { Logo } from "@/components/Logo";
import { SignInModal } from "./SignInModal";

export const Navbar = ({ session }: any) => {


	return (
		<NextUINavbar  maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="hidden lg:flex gap-4 font-bold text-inherit">ALL THAT ARSENAL</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
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
				{session ? <NavbarItem className="hidden md:flex">
					<Avatars session={session} />
					<LogOutBtn />
				</NavbarItem> : <NavbarItem className="hidden md:flex">
					<Button

						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100 mr-2"
						href={"/register"}
						variant="flat"
					>
						Sign Up
					</Button>
					<SignInBtn />
					{/* <SignInModal /> */}
				</NavbarItem>}
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">

				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>

				{session ? <Avatars session={session} /> : <Button

					as={Link}
					className="text-sm font-normal text-default-600 bg-default-100"
					href={"/register"}
					variant="flat"
				>
					Sign Up
				</Button>}
				{session ? null : <SignInModal />}

				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									"foreground"
								}
								href={item.href}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
				{session ? <LogOutBtn /> : null}
			</NavbarMenu>
		</NextUINavbar>
	);
};
