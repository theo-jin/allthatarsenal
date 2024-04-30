import Info from "./Info";
import Comment from "./Comment";
import Chart from "./Chart";
import Description from "../../../_components/Description";
import getPlayer from "@/pages/api/player/getPlayer";
export default async function App(props: any) {
	const player = await getPlayer(props);

	return (
		<>
			<Info player={player} />
			<Chart player={player} />
			<Description player={player} />
			<Comment player={player} />
		</>
	);
}
