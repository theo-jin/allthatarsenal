import PlayerInfo from "../../../_components/Player/PlayerInfo";
import Comment from "../../../_components/Comment/Comment";
import Chart from "../../../_components/Charts/Chart";
import Description from "../../../_components/Player/Description";
import getPlayer from "@/pages/api/player/getPlayer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function App(props: any) {
	const player = await getPlayer(props);
	let session: any = await getServerSession(authOptions);
	let SessionValue = session ? true : null;
	const data={player,SessionValue}
	return (
		<>
			<PlayerInfo data={data} />
			<Chart player={player} />
			<Description player={player} />
			<Comment player={player} />
		</>
	);
}
