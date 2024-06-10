import { Metadata } from "next";
import PlayerCard from "./listItem";
import getPlayerList from "@/pages/api/player/getPlayerList";

export const metadata: Metadata = {
	//Metadata는 모든 페이지의 head태그와 같은 역할을 한다고 생각하자.
	title: "Player List",
	description: "Player List",
};

export default async function list() {
	const playerList = await getPlayerList();

	return (
		<div>
			<PlayerCard playerList={playerList} />
		</div>
	);
}
