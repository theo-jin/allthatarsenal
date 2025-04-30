import { connectDB } from "@/utils/database";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const session = await getServerSession(authOptions);
	if (!session || !session.user) {
		return NextResponse.json(
			{ message: "로그인이 필요합니다." },
			{ status: 401 },
		);
	}
	const body = await req.json();
	const db = (await connectDB).db("arsenal");
	await db
		.collection("userCred")
		.updateOne(
			{ email: session.user.email },
			{ $set: { favorites: body.favorites } },
		);
	return NextResponse.json("성공");
}
