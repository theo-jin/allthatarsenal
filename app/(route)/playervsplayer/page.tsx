import { Metadata } from "next";
import Versus from "../../_components/Charts/Versus";
import getPlayerList from "@/pages/api/player/getPlayerList";
export const metadata: Metadata = {
	//Metadata는 모든 페이지의 head태그와 같은 역할을 한다고 생각하자.
	title: "선수 비교",
	description: "선수 비교",
};
export default async function Page() {
	const playerList = await getPlayerList();
	return (
		<div>
			<Versus playerList={playerList} />
		</div>
	);
}
