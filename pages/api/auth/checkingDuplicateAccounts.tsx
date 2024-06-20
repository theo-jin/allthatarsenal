import { connectDB } from "../../../utils/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === "POST") {
		try {
			const db = (await connectDB).db("arsenal");
			const user = await db
				.collection("user_cred")
				.findOne({ email: req.body.email });

			if (!user) {
				res.status(200).json({ message: "사용하실 수 있는 이메일입니다." });
			} else {
				res.status(200).json({ message: "해당 이메일 존재합니다." });
			}
		} catch (error) {
			console.error("Database query error:", error);
			res
				.status(500)
				.json({ error: "서버 오류입니다. 잠시 후 다시 시도해주세요." });
		}
	} else {
		res.status(405).json({ error: "허용되지 않은 요청입니다." });
	}
}
