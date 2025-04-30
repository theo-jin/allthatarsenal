import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const id = req.nextUrl.searchParams.get("id");
	if (!id) {
		return NextResponse.json({ error: "id가 필요합니다." }, { status: 400 });
	}
	const db = (await connectDB).db("arsenal");
	const result = await db
		.collection("comment")
		.find({ parent: new ObjectId(id) })
		.toArray();
	return NextResponse.json(result);
}
