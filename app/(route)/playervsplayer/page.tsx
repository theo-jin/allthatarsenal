import Versus from "./Versus";
import getPlayerList from "@/pages/api/player/getPlayerList";
export default async function App() {
	const playerList = await getPlayerList();
	return (
		<div>
			<Versus playerList={playerList} />
		</div>
	);
}
