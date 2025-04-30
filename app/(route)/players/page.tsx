import { Metadata } from "next";

import { GET } from "@/app/api/player/getPlayerList";
import { PlayerCard } from "@/app/_components/Card/playerGeneralCard";

export const metadata: Metadata = {
	//Metadata는 모든 페이지의 head태그와 같은 역할을 한다고 생각하자.
	title: "Player List",
	description: "Player List",
};

export default async function Page() {
	const playerList = await GET();
	console.log(playerList);
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">Arsenal Players</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
				{Array.isArray(playerList) &&
					playerList.map((player: any) => (
						<PlayerCard key={player.name} player={player} />
					))}
			</div>
		</div>
	);
}
