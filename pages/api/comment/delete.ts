import { connectDB } from "../../../utils/database";
import { ObjectId } from "mongodb";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { IncomingMessage } from "http";
import { redirect } from "next/dist/server/api-utils";

export default async function handler(
	req:
		| any
		| NextApiRequest
		| (IncomingMessage & { cookies: Partial<{ [key: string]: string }> }),
	res: NextApiResponse,
) {
	if (req.method == "DELETE") {
		let session: Session | null = await getServerSession(req, res, authOptions);
		if (!session || !session.user) {
			return res.status(401).json({ message: "로그인이 필요합니다." });
		}

		const db = (await connectDB).db("arsenal");
		let pp: any = await db
			.collection("comment")
			.findOne({ _id: new ObjectId(req.body) });
		if (pp.author == session.user.name || session.user.role === "admin") {
			let result = await db
				.collection("comment")
				.deleteOne({ _id: new ObjectId(req.body) });
			res.status(200).json("성공");
		} else {
			res.status(500).json("작성자와 맞지 않았습니다.");
		}
	}
}
