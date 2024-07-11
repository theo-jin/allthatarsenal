/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "firebasestorage.googleapis.com",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "i.pinimg.com",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "flagsapi.com",
				pathname: "**",
			},
		],
	},
};

export default nextConfig;
