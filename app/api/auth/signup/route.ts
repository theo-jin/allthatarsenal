import { connectDB } from "@/utils/database";
import bcrypt from "bcrypt";
import { z, ZodError } from "zod";
import { NextResponse } from "next/server";

const userSchema = z.object({
	name: z.string().min(1, { message: "이름을 입력해주세요." }),
	email: z.string().email({ message: "이메일은 @와 .을 포함해야합니다." }),
	password: z
		.string()
		.min(8, { message: "비밀번호는 8자 이상이어야 합니다." })
		.max(20, { message: "비밀번호는 20자 이하여야 합니다." }),
});

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const validatedData = userSchema.parse(body);

		const hash = await bcrypt.hash(validatedData.password, 10);
		validatedData.password = hash;

		const db = (await connectDB).db("arsenal");
		const user = await db
			.collection("userCred")
			.findOne({ email: validatedData.email });

		if (!user) {
			await db.collection("userCred").insertOne(validatedData);
			return NextResponse.json(
				{ message: "User created successfully" },
				{ status: 200 },
			);
		} else {
			return NextResponse.json(
				{ error: "해당 이메일 존재합니다." },
				{ status: 409 },
			);
		}
	} catch (error) {
		if (error instanceof ZodError) {
			const errors = error.errors.map((err) => err.message).join(", ");
			return NextResponse.json({ error: errors }, { status: 400 });
		} else {
			return NextResponse.json(
				{ error: "Internal Server Error" },
				{ status: 500 },
			);
		}
	}
}
