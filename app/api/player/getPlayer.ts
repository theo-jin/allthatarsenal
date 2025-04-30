import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { id } = await req.json();

		if (!id) {
			return NextResponse.json(
				{ error: "ID가 제공되지 않았습니다." },
				{ status: 400 },
			);
		}

		const client = await connectDB;
		const db = client.db("arsenal");

		const player = await db
			.collection("playerList")
			.findOne({ _id: new ObjectId(id) });

		if (!player) {
			return NextResponse.json(
				{ error: "플레이어를 찾을 수 없습니다." },
				{ status: 404 },
			);
		}

		return NextResponse.json(player, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "서버 오류가 발생했습니다." },
			{ status: 500 },
		);
	}
}
