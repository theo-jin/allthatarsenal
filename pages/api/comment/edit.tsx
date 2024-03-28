import { connectDB } from "../../../utils/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	req.body = JSON.parse(req.body);

	if (req.method == "POST") {
		let session: any = await getServerSession(req, res, authOptions);
		const db = (await connectDB).db("arsenal");

		let pp: any = await db
			.collection("comment")
			.findOne({ _id: new ObjectId(req.body) });

		if (pp.author == session.user.email) {
			let result = await db
				.collection("comment")
				.updateOne(
					{ _id: new ObjectId(req.body._id) },
					{ $set: { comment: req.body.comment } },
				);
			res.redirect(302, "/list");
		}
	} else {
		return res.status(500).json("작성자와 맞지 않았습니다.");
	}
}
