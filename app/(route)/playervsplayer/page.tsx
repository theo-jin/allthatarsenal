import Versus from "./Versus";
import { connectDB } from "../../../utils/database";
export default async function App() {
	const client = await connectDB;
	const db = client.db("arsenal");
	let playerList: any = await db.collection("PlayerList").find().toArray();
	playerList = playerList.map((a: any) => {
		a._id = a._id.toString();
		return a;
	});

	return (
		<div>
			<Versus playerList={playerList} />
		</div>
	);
}
