import { connectDB } from "../../../utils/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method == "POST") {
		let session: Session | null = await getServerSession(req, res, authOptions);
		if (!session || !session.user) {
			return res.status(401).json({ message: "로그인이 필요합니다." });
		}
		const db = (await connectDB).db("arsenal");

		let pp: any = await db
			.collection("comment")
			.findOne({ _id: new ObjectId(req.body._id) });
		if (pp.author == session.user.name) {
			let result = await db
				.collection("comment")
				.updateOne(
					{ _id: new ObjectId(req.body._id) },
					{ $set: { comment: req.body.comment } },
				);
			res.status(200).json("성공");
		} else {
			res.status(500).json("작성자와 맞지 않았습니다.");
		}
	} else {
		res.status(500).json("작성자와 맞지 않았습니다.");
	}
}
