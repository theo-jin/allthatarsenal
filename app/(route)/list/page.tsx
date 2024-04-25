import PlayerCard from "./listItem";
import getPlayerList from "@/pages/api/player/getPlayerList";

export default async function list() {
	const playerList = await getPlayerList();

	return (
		<div>
			<PlayerCard playerList={playerList} />
		</div>
	);
}
