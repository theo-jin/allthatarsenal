import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
	const session = await getServerSession(authOptions);
	if (!session || !session.user) {
		return NextResponse.json(
			{ message: "로그인이 필요합니다." },
			{ status: 401 },
		);
	}
	const body = await req.json();
	if (!body.comment || !body._id) {
		return NextResponse.json(
			{ message: "필수 값이 누락되었습니다." },
			{ status: 400 },
		);
	}
	const save = {
		comment: body.comment,
		parent: new ObjectId(body._id),
		author: session.user.name,
	};
	const db = (await connectDB).db("arsenal");
	await db.collection("comment").insertOne(save);
	return NextResponse.json("성공");
}
