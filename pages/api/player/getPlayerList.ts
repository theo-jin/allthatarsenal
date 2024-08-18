import { connectDB } from "@/utils/database";

export default async function getPlayerList() {
	const client = await connectDB;
	const db = client.db("arsenal");
	let playerList = await db.collection("playerList").find().toArray();
	playerList = playerList.map((player: any) => {
		player._id = player._id.toString();
		return player;
	});
	return playerList;
}
