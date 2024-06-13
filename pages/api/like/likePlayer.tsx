import { connectDB } from "../../../utils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	let session: any = await getServerSession(req, res, authOptions);
	req.body = JSON.parse(req.body);

	if (session) {
		if (req.method == "POST") {
			const db = (await connectDB).db("arsenal");

			res.status(200).json("성공");
		}
	} else {
		res.status(500).json("로그인해주세요");
	}
}
