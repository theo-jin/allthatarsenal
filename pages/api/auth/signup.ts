import { connectDB } from "../../../utils/database";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const emailRegEx =
		/^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
	const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
	if (
		req.method === "POST" &&
		emailRegEx.test(req.body.email) &&
		passwordRegEx.test(req.body.password.length)
	) {
		try {
			// 비밀번호 hash 처리
			const hash = await bcrypt.hash(req.body.password, 10);
			req.body.password = hash;

			const db = (await connectDB).db("arsenal");
			let user = await db
				.collection("user_cred")
				.findOne({ email: req.body.email });
			if (!user) {
				await db.collection("user_cred").insertOne(req.body);
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
