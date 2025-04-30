import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function DELETE(req: NextRequest) {
	const session = await getServerSession(authOptions);
	if (!session || !session.user) {
		return NextResponse.json(
			{ message: "로그인이 필요합니다." },
			{ status: 401 },
		);
	}
	const body = await req.json();
	if (!body._id) {
		return NextResponse.json(
			{ message: "필수 값이 누락되었습니다." },
			{ status: 400 },
		);
	}
	const db = (await connectDB).db("arsenal");
	const comment = await db
		.collection("comment")
		.findOne({ _id: new ObjectId(body._id) });
	if (comment?.author === session.user.name || session.user.role === "admin") {
		await db.collection("comment").deleteOne({ _id: new ObjectId(body._id) });
		return NextResponse.json("성공");
	} else {
		return NextResponse.json(
			{ message: "작성자와 맞지 않았습니다." },
			{ status: 403 },
		);
	}
}
