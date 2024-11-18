/** @type {import('next').NextConfig} */
const nextConfig = {
	//   logging: {
	//     fetches: { fullUrl: true },
	//   }, // 이 옵션 사용하면 넥스트에서 발생하는 모든 데이터 패칭이 로그로써 자동으로 출력된다.
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
			{
				protocol: "https",
				hostname: "crests.football-data.org",
				pathname: "**",
			},
		],
	},
};

export default nextConfig;
