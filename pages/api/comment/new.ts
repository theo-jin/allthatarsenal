import { connectDB } from "../../../utils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	let session: Session | null = await getServerSession(req, res, authOptions);
	if (!session || !session.user) {
		return res.status(401).json({ message: "로그인이 필요합니다." });
	}
	req.body = JSON.parse(req.body);

	let save = {
		comment: req.body.comment,
		parent: new ObjectId(req.body._id),
		author: session.user.name,
	};

	if (session) {
		if (req.method == "POST") {
			const db = (await connectDB).db("arsenal");
			let result = await db.collection("comment").insertOne(save);

			res.status(200).json("성공");
		}
	} else {
		res.status(500).json("로그인해주세요");
	}
}
