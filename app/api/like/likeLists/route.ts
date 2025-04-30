import { connectDB } from "@/utils/database";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	const session = await getServerSession(authOptions);
	if (!session || !session.user) {
		return NextResponse.json(
			{ message: "로그인이 필요합니다." },
			{ status: 401 },
		);
	}
	const client = await connectDB;
	const db = client.db("arsenal");
	let like = await db
		.collection("userCred")
		.findOne({ email: session.user.email });
	let favoritesList = like?.favorites || [];
	return NextResponse.json(favoritesList);
}
