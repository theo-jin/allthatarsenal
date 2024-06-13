import { connectDB } from "../../../utils/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";

export default async function editHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	req.body = JSON.parse(req.body);
	if (req.method == "POST") {
		let session: any = await getServerSession(req, res, authOptions);
		const db = (await connectDB).db("arsenal");
		let result = await db
			.collection("user_cred")
			.updateOne(
				{ email: session.user.email },
				{ $set: { favorites: req.body.favorites } },
			);
		res.status(200).json("성공");
	} else {
		res.status(500).json("작성자와 맞지 않았습니다.");
	}
}
