import { connectDB } from "../../../utils/database";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === "POST") {
		try {
			// 비밀번호 hash 처리
			const hash = await bcrypt.hash(req.body.password, 10);
			req.body.password = hash;

			const db = (await connectDB).db("arsenal");
			let user = await db
				.collection("userCred")
				.findOne({ email: req.body.email });
			if (!user) {
				await db.collection("userCred").insertOne(req.body);
				res.status(200).json({ message: "User created successfully" });
			} else {
				res.status(500).json({ error: "해당 이메일 존재합니다." });
			}
		} catch (error) {
			res.status(500).json({ error: "Internal Server Error" });
		}
	} else {
		res.status(405).json({ error: "Method Not Allowed" });
	}
}
