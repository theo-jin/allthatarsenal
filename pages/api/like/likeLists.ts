import { connectDB } from "@/utils/database";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";

export default async function likeList(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const client = await connectDB;
	const db = client.db("arsenal");

	let session: any = await getServerSession(req, res, authOptions);
	if (session) {
		let like = await db
			.collection("userCred")
			.findOne({ email: session.user.email });
		let favoritesList = like?.favorites;
		res.status(200).json(favoritesList);
	} else {
		res.status(500).json("실패");
	}
}
