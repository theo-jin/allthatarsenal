import { connectDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { email } = await req.json();

		if (!email) {
			return NextResponse.json(
				{ error: "이메일을 입력해주세요." },
				{ status: 400 },
			);
		}

		const db = (await connectDB).db("arsenal");
		const user = await db.collection("userCred").findOne({ email });

		if (!user) {
			return NextResponse.json(
				{ message: "사용하실 수 있는 이메일입니다." },
				{ status: 200 },
			);
		}

		return NextResponse.json(
			{ message: "해당 이메일이 이미 존재합니다." },
			{ status: 200 },
		);
	} catch (error) {
		console.error("Database query error:", error);
		return NextResponse.json(
			{ error: "서버 오류입니다. 잠시 후 다시 시도해주세요." },
			{ status: 500 },
		);
	}
}

// GET 요청 처리
export async function GET() {
	return NextResponse.json(
		{ error: "허용되지 않은 요청입니다." },
		{ status: 405 },
	);
}
