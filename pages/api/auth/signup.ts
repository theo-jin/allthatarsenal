import { connectDB } from "../../../utils/database";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import { z, ZodError } from "zod";

const userSchema = z.object({
	name: z.string().min(1, { message: "이름을 입력해주세요." }),
	email: z.string().email({ message: "이메일은 @와.을 포함해야합니다." }),
	password: z
		.string()
		.min(8, { message: "비밀번호는 8자 이상이어야 합니다." })
		.max(20, { message: "비밀번호는 20자 이하여야 합니다." }),
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === "POST") {
		try {
			const validatedData = userSchema.parse(req.body);

			const hash = await bcrypt.hash(validatedData.password, 10);
			validatedData.password = hash;

			const db = (await connectDB).db("arsenal");
			let user = await db
				.collection("userCred")
				.findOne({ email: validatedData.email });

			if (!user) {
				await db.collection("userCred").insertOne(validatedData);
				res.status(200).json({ message: "User created successfully" });
			} else {
				res.status(409).json({ error: "해당 이메일 존재합니다." });
			}
		} catch (error) {
			if (error instanceof ZodError) {
				const errors = error.errors.map((err) => err.message).join(", ");
				res.status(400).json({ error: errors });
			} else {
				res.status(500).json({ error: "Internal Server Error" });
			}
		}
	} else {
		res.status(405).json({ error: "Method Not Allowed" });
	}
}
