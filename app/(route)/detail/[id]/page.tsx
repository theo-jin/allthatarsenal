import PlayerInfo from "../../../_components/Player/PlayerInfo";
import Comment from "../../../_components/Comment/Comment";
import Chart from "./Chart";
import Description from "../../../_components/Player/Description";
import getPlayer from "@/pages/api/player/getPlayer";
import likeList from "@/pages/api/like/likeList";

export default async function App(props: any) {
	const player = await getPlayer(props);
	const favorites = await likeList();
	let data = { player, favorites };
	return (
		<>
			<PlayerInfo data={data} />
			<Chart player={player} />
			<Description player={player} />
			<Comment player={player} />
		</>
	);
}
