import { connectDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	const client = await connectDB;
	const db = client.db("arsenal");
	let playerList = await db.collection("playerList").find().toArray();
	playerList = playerList.map((player: any) => {
		player._id = player._id.toString();
		return player;
	});
	return NextResponse.json(playerList);
}
