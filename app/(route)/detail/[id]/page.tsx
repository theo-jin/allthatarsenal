import PlayerInfo from "../../../_components/Player/PlayerInfo";
import Comment from "../../../_components/Comment/Comment";
import Chart from "../../../_components/Charts/Chart";
import Description from "../../../_components/Player/Description";
import getPlayer from "@/pages/api/player/getPlayer";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Player } from "@/app/_types";

export default async function Page({ params }: { params: { id: string } }) {
  // getPlayer로 받은 데이터를 Player 타입으로 매핑
  const playerData = await getPlayer(params);

  // playerData가 존재하지 않으면 null로 처리
  if (!playerData) {
    return <div>Player not found</div>;
  }

  // WithId<Document>에서 Player 타입으로 매핑
  const player: Player = {
    name: playerData.name || "Unknown",
    number: playerData.number || 0,
    pace: playerData.pace || 0,
    dribble: playerData.dribble || 0,
    shot: playerData.shot || 0,
    pass: playerData.pass || 0,
    physical: playerData.physical || 0,
    defence: playerData.defence || 0,
    role: playerData.role || "Unknown",
    pic: playerData.pic || "",
    pic2: playerData.pic2 || "",
    nation: playerData.nation || "Unknown",
    describe: playerData.describe || "",
	birth: playerData.birth ? new Date(playerData.birth) : new Date(),
    height: playerData.height || 0,
    _id: playerData._id.toString(), 
  };

  // 세션 처리
  let session: Session | null = await getServerSession(authOptions);
  let SessionValue: boolean = session ? true : false;

  return (
    <>
      <PlayerInfo player={player} SessionValue={SessionValue} />
      <Chart player={player} />
      <Description player={player} />
      <Comment player={player} />
    </>
  );
}
