import { withAuth } from "next-auth/middleware";

// 인증이 필요한 페이지들을 정의
export default withAuth(
	function middleware(req) {

	},
	{
		callbacks: {
			authorized: ({ token }) => {
				// token이 존재하면 인증된 사용자
				return !!token;
			},
		},
		// 로그인하지 않은 사용자가 보호된 페이지에 접근하면 리다이렉트할 페이지
		pages: {
			signIn: "/signin",
		},
	},
);

// 미들웨어가 적용될 경로들을 정의
export const config = {
	matcher: [
		// 마이페이지
		"/mypage",
		// 등록 완료 페이지 (필요시)
		"/registdone",
		// 기타 보호가 필요한 페이지들을 여기에 추가
	],
};
