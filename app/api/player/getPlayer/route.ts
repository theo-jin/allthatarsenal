import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const id = req.nextUrl.searchParams.get("id");
	if (!id) {
		return NextResponse.json({ error: "id가 필요합니다." }, { status: 400 });
	}
	const client = await connectDB;
	const db = client.db("arsenal");
	let player = await db
		.collection("playerList")
		.findOne({ _id: new ObjectId(id) });
	if (player) player._id = player._id.toString();
	return NextResponse.json(player);
}
