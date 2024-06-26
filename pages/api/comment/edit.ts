import { connectDB } from "../../../utils/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function editHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method == "POST") {
		let session: any = await getServerSession(req, res, authOptions);
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
		}
	} else {
		res.status(500).json("작성자와 맞지 않았습니다.");
	}
}
