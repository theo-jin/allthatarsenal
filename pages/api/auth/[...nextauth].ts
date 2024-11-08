import { connectDB } from "../../../utils/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

interface Credentials {
	email: string;
	password: string;
}
export const authOptions: any = {
	providers: [
		CredentialsProvider({
			//1. 로그인페이지
			name: "credentials",
			credentials: {
				email: { label: "email", type: "text" },
				password: { label: "password", type: "password" },
			},

			//2. 로그인요청시 실행되는코드
			//직접 DB에서 아이디,비번 비교하고
			//아이디,비번 맞으면 return 결과, 틀리면 return null
			async authorize(credentials: any): Promise<any> {
				let db = (await connectDB).db("arsenal");
				let user = await db
					.collection("userCred")
					.findOne({ email: credentials.email });
				if (!user) {
					console.log("해당 이메일은 없음");
					return null;
				}
				const pwcheck = await bcrypt.compare(
					credentials.password,
					user.password,
				);
				if (!pwcheck) {
					console.log("비번틀림");
					return null;
				}
				return user;
			},
		}),
	],

	//3. jwt 만료일설정
	session: {
		strategy: "jwt",
		maxAge: 1 * 24 * 60 * 60, //1일
	},

	callbacks: {
		//4. jwt 만들 때 실행되는 코드
		//user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어감.
		jwt: async ({ token, user }: any) => {
			if (user) {
				token.user = {};
				token.user.name = user.name;
				token.user.email = user.email;
				token.role = user.role;
			}
			return token;
		},

		//5. 유저 세션이 조회될 때 마다 실행되는 코드
		session: async ({ session, token }: any) => {
			session.user = token.user;
			session.user.role = token.role;
			return session;
		},
	},
	// 페이지
	pages: {
		signIn: "/signin",
		error: "/signin?error=true",
	},

	secret: process.env.NEXTAUTH_SECRET,
	adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
