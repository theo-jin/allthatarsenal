import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function handler(params: { id: string  }) {

	let id = params.id;
	const client = await connectDB;
	const db = client.db("arsenal");
	let player = await db
		.collection("playerList")
		.findOne({ _id: new ObjectId(id) });
	player?._id.toString();
	return player;
}
