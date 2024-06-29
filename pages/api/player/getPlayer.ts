import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function getPlayer(props: any) {
	const client = await connectDB;
	const db = client.db("arsenal");
	let player = await db
		.collection("PlayerList")
		.findOne({ _id: new ObjectId(props.params.id) });
	player?._id.toString();
	return player;
}
