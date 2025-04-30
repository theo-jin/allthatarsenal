import { connectDB } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const client = await connectDB;
		const db = client.db("arsenal");

		let playerList = await db.collection("playerList").find().toArray();
		playerList = playerList.map((player: any) => {
			player._id = player._id.toString();
			return player;
		});

		return NextResponse.json(playerList, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "서버 오류가 발생했습니다." },
			{ status: 500 },
		);
	}
}
