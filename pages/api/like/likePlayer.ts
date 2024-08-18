import { connectDB } from "../../../utils/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";

export default async function likePlayer(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	req.body = JSON.parse(req.body);
	if (req.method == "POST") {
		let session: Session | null = await getServerSession(req, res, authOptions);
		if (!session || !session.user) {
			return res.status(401).json({ message: "로그인이 필요합니다." });
		}
		const db = (await connectDB).db("arsenal");
		let result = await db
			.collection("userCred")
			.updateOne(
				{ email: session.user.email },
				{ $set: { favorites: req.body.favorites } },
			);
		res.status(200).json("성공");
	} else {
		res.status(500).json("작성자와 맞지 않았습니다.");
	}
}
