import { connectDB } from "@/utils/database";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function likeList() {
	const client = await connectDB;
	const db = client.db("arsenal");

	let session: any = await getServerSession(authOptions);
	if (session) {
		let like = await db
			.collection("user_cred")
			.findOne({ email: session.user.email });
		let favoritesList = like?.favorites;
		return favoritesList;
	} else {
		return;
	}
}
