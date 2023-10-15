export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "List",
			href: "/list",
		},
		{
			label: "Create Player",
			href: "/createplayer",
		},

		{
			label: "About",
			href: "/about",
		}
	],
	navMenuItems: [
	
			{
				label: "Home",
				href: "/",
			},
			{
				label: "List",
				href: "/list",
			},
			{
				label: "Create Player",
				href: "/createplayer",
			},
	
			{
				label: "About",
				href: "/about",
			}
	],
	links: {
		officialpage: "https://www.arsenal.com/",
		kakao: "https://open.kakao.com/o/gNdkRIcb"
	},
};
