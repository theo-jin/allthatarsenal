import Test from "./Test";
import { connectDB } from "../../util/database";
export default async function App() {
	const client = await connectDB;
	const db = client.db("arsenal");
	let result: any = await db.collection("PlayerList").find().toArray();

	return (
		<div>
			<Test result={result} />
		</div>
	);
}
