import NextAuth from "next-auth";
import { ObjectId } from "mongodb";
declare module "next-auth" {
	interface Session {
		user: {
			_id: ObjectId;
			name: string;
			email: string;
			password: string;
			role: string;
			favorites: Object;
		};
	}
}
