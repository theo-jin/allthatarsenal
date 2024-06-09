import { connectDB } from "../../../utils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { IncomingMessage } from "http";
import { redirect } from "next/dist/server/api-utils";

export default async function deleteHandler(
	req:
		| any
		| NextApiRequest
		| (IncomingMessage & { cookies: Partial<{ [key: string]: string }> }),
	res: NextApiResponse,
) {
	if (req.method == "DELETE") {
		let session: any = await getServerSession(req, res, authOptions);

		const db = (await connectDB).db("arsenal");
		let pp: any = await db
			.collection("comment")
			.findOne({ _id: new ObjectId(req.body) });

		if (pp.author == session.user.name) {
			let result = await db
				.collection("comment")
				.deleteOne({ _id: new ObjectId(req.body) });
			res.status(200).json("성공");
		} else {
			res.status(500).json("작성자와 맞지 않았습니다.");
		}
	}
}
