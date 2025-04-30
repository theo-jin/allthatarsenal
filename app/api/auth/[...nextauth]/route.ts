import { connectDB } from "@/utils/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";

interface Credentials {
	email: string;
	password: string;
}

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "email", type: "text" },
				password: { label: "password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("이메일과 비밀번호를 입력해주세요");
				}

				const db = (await connectDB).db("arsenal");
				const user = await db
					.collection("userCred")
					.findOne({ email: credentials.email });

				if (!user) {
					throw new Error("이메일이 존재하지 않습니다");
				}

				const pwcheck = await bcrypt.compare(
					credentials.password,
					user.password,
				);

				if (!pwcheck) {
					throw new Error("비밀번호가 일치하지 않습니다");
				}

				return {
					id: user._id.toString(),
					name: user.name,
					email: user.email,
					role: user.role,
				};
			},
		}),
	],

	session: {
		strategy: "jwt",
		maxAge: 1 * 24 * 60 * 60, // 1일
	},

	callbacks: {
		jwt: async ({ token, user }) => {
			if (user) {
				token.user = {
					name: user.name,
					email: user.email,
				};
				token.role = user.role;
			}
			return token;
		},

		session: async ({ session, token }: any) => {
			if (token.user) {
				session.user = token.user;
				session.user.role = token.role;
			}
			return session;
		},
	},

	pages: {
		signIn: "/signin",
		error: "/signin?error=true",
	},

	secret: process.env.NEXTAUTH_SECRET,
	adapter: MongoDBAdapter(connectDB),
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
