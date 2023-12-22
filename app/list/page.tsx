import { connectDB } from "../../util/database";
import PlayerCard from "./listItem"

export default async function list() {
	const client = await connectDB;
	const db = client.db('arsenal');
	let playerList = await db.collection('PlayerList').find().toArray();

	return (
		<div>
			<PlayerCard playerList={playerList} />
		</div>

	);
}