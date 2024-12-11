import { Card, CardContent } from "@/components/ui/card";
import Chart from "../Charts/Chart";
import Image from "next/image";
import { LikeBtn } from "../Buttons/LikeBtn";
import { Player } from "@/app/_types";
import { Flag } from "@/components/ui/flag";
const App = ({
	player,
	SessionValue,
}: {
	player: Player;
	SessionValue: boolean;
}) => {
	return (
		<Card className="mb-8">
			<CardContent className="p-6">
				<div className="flex flex-col md:flex-row">
					<div className="md:w-1/3 mb-4 md:mb-0">
						<Image
							src={player.pic2}
							alt={player.name}
							width={300}
							height={400}
							className="rounded-lg"
						/>
					</div>
					<div className="md:w-2/3 md:pl-6">
						<h1 className="flex text-3xl font-bold mb-2 ">
							<span>{player.name}</span>
							<span>
								{SessionValue ?
									<LikeBtn player={player} />
								:	null}
							</span>
						</h1>
						<p className="text-2xl mb-4">
							{player.role.toUpperCase()} | #{player.number}
						</p>{" "}
						<div className="text-xl text-foreground/90">
							Birth: {player.birth.toDateString()}
						</div>
						<div className="text-xl text-foreground/90">
							Height: {player.height}cm
						</div>
						<div className="flex mb-4 ">
							<span className="text-xl mr-2">Nation:</span>
							<span>
								<Flag nation={player.nation} />
							</span>
						</div>
						<p className="mb-4">{player.describe}</p>
						<h2 className="text-2xl font-bold mb-4">Player Stats</h2>
						<div className="h-64 w-full">
							<Chart player={player} />
						</div>
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
							<div className="flex justify-between">
								<span className="capitalize">PACE:</span>
								<span className="font-bold">{player.pace}</span>
							</div>
							<div className="flex justify-between">
								<span className="capitalize">DRIBBLE:</span>
								<span className="font-bold">{player.dribble}</span>
							</div>
							<div className="flex justify-between">
								<span className="capitalize">SHOT:</span>
								<span className="font-bold">{player.shot}</span>
							</div>
							<div className="flex justify-between">
								<span className="capitalize">PASS:</span>
								<span className="font-bold">{player.pass}</span>
							</div>
							<div className="flex justify-between">
								<span className="capitalize">PHYSICAL:</span>
								<span className="font-bold">{player.physical}</span>
							</div>
							<div className="flex justify-between">
								<span className="capitalize">DEFENCE:</span>
								<span className="font-bold">{player.defence}</span>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
export default App;
