import { connectDB } from "../../../util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	let session = await getServerSession(req, res, authOptions);
	console.log(req.body);

	req.body = JSON.parse(req.body);
	req.body.birth = new Date(req.body.birth);
	if (session) {
		if (req.method == "POST") {
			const db = (await connectDB).db("arsenal");
			let result = await db.collection("PlayerList").insertOne(req.body);

			return res.status(200).redirect("/list");
		}
	} else {
		res.status(500).json("로그인해주세요");
	}
}
