import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function getPlayer(params: { id: string  }) {
	console.log(params.id);
	let id = params.id;
	const client = await connectDB;
	const db = client.db("arsenal");
	let player = await db
		.collection("playerList")
		.findOne({ _id: new ObjectId(id) });
	player?._id.toString();
	return player;
}
