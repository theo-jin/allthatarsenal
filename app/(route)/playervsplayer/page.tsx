import { Metadata } from "next";
import getPlayerList from "@/pages/api/player/getPlayerList";
import PlayerComparisonPage from "@/app/_components/Charts/Compare";
export const metadata: Metadata = {
	//Metadata는 모든 페이지의 head태그와 같은 역할을 한다고 생각하자.
	title: "선수 비교",
	description: "선수 비교",
};
export default async function Page() {
	const playerList = await getPlayerList();
	return (
		<div>
			<PlayerComparisonPage playerList={playerList} />
		</div>
	);
}
