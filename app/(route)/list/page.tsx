import { connectDB } from "../../../utils/database";
import PlayerCard from "./listItem";

export default async function list() {
	const client = await connectDB;
	const db = client.db("arsenal");
	let playerList = await db.collection("PlayerList").find().toArray();
	playerList = playerList.map((a: any) => {
		a._id = a._id.toString();
		return a;
	});
	return (
		<div>
			<PlayerCard playerList={playerList} />
		</div>
	);
}
