"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Radar,
	ResponsiveContainer,
	Legend,
} from "recharts";
import { PlayerCard } from "../Card/playerGeneralCard";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Player {
	_id: string;
	name: string;
	number: number;
	pace: number;
	dribble: number;
	shot: number;
	pass: number;
	physical: number;
	defence: number;
	role: string;
	pic: string;
	nation: string;
}

export default function PlayerComparisonPage({
	playerList,
}: {
	playerList: any;
}) {
	let [playerA, setPlayerA] = useState<Player>({
		_id: "",
		name: "",
		number: 0,
		pace: 0,
		dribble: 0,
		shot: 0,
		pass: 0,
		physical: 0,
		defence: 0,
		role: "",
		pic: "https://i.pinimg.com/originals/21/5b/24/215b24eee713a7a2796467ff2adae1a5.png",
		nation: "KR",
	});
	let [playerB, setPlayerB] = useState<Player>({
		_id: "",
		name: "",
		number: 0,
		pace: 0,
		dribble: 0,
		shot: 0,
		pass: 0,
		physical: 0,
		defence: 0,
		role: "",
		pic: "https://i.pinimg.com/originals/21/5b/24/215b24eee713a7a2796467ff2adae1a5.png",
		nation: "KR",
	});

	const handlePlayerChange = (
		playerId: string,
		setPlayer: (player: Player) => void,
	) => {
		const selectedPlayer = playerList.find(
			(p: { _id: string }) => p._id === playerId,
		);
		if (selectedPlayer) {
			setPlayer(selectedPlayer);
		}
	};

	const comparisonData = [
		{
			stat: "Pace",
			[playerA.name]: playerA.pace,
			[playerB.name]: playerB.pace,
		},
		{
			stat: "Dribble",
			[playerA.name]: playerA.dribble,
			[playerB.name]: playerB.dribble,
		},
		{
			stat: "Shot",
			[playerA.name]: playerA.shot,
			[playerB.name]: playerB.shot,
		},
		{
			stat: "Pass",
			[playerA.name]: playerA.pass,
			[playerB.name]: playerB.pass,
		},
		{
			stat: "Physical",
			[playerA.name]: playerA.physical,
			[playerB.name]: playerB.physical,
		},
		{
			stat: "Defence",
			[playerA.name]: playerA.defence,
			[playerB.name]: playerB.defence,
		},
	];

	return (
		<div className="container mx-auto px-4 py-8">
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl font-bold">
						Player Comparison
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col md:flex-row justify-between mb-6">
						<div className="mb-4 md:mb-0">
							<label className="block text-xl font-medium  mb-1">
								Player A
							</label>
							<Select
								onValueChange={(value) => handlePlayerChange(value, setPlayerA)}
								defaultValue={playerA._id}
							>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Select player A" />
								</SelectTrigger>
								<SelectContent className="bg-white max-h-[300px]">
									<ScrollArea className="h-[300px]">
										{playerList.map((player: any) => (
											<SelectItem key={player._id} value={player._id}>
												{player.name}
											</SelectItem>
										))}
									</ScrollArea>
								</SelectContent>
							</Select>
						</div>
						<div>
							<label className="block text-xl font-medium  mb-1">
								Player B
							</label>
							<Select
								onValueChange={(value) => handlePlayerChange(value, setPlayerB)}
								defaultValue={playerB._id}
							>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Select player B" />
								</SelectTrigger>
								<SelectContent className="bg-white max-h-[300px]">
									<ScrollArea className="h-[300px]">
										{playerList.map((player: any) => (
											<SelectItem key={player._id} value={player._id}>
												{player.name}
											</SelectItem>
										))}
									</ScrollArea>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-around mb-6 gap-2">
						<PlayerCard player={playerA} />
						<PlayerCard player={playerB} />
					</div>
					<div className="h-[400px] w-full">
						<ResponsiveContainer width="100%" height="100%">
							<RadarChart
								cx="50%"
								cy="50%"
								outerRadius="80%"
								data={comparisonData}
							>
								<PolarGrid />
								<PolarAngleAxis dataKey="stat" />
								<PolarRadiusAxis angle={30} domain={[0, 100]} />
								<Radar
									name={playerA.name}
									dataKey={playerA.name}
									stroke="#8884d8"
									fill="#8884d8"
									fillOpacity={0.6}
								/>
								<Radar
									name={playerB.name}
									dataKey={playerB.name}
									stroke="#82ca9d"
									fill="#82ca9d"
									fillOpacity={0.6}
								/>
								<Legend />
							</RadarChart>
						</ResponsiveContainer>
					</div>
					<div className="mt-6 grid grid-cols-2 gap-4">
						{comparisonData.map((item) => (
							<div key={item.stat} className="flex justify-between">
								<span className="font-medium">{item.stat}</span>
								<span className="text-blue-600">{item[playerA.name]}</span>
								<span className="text-green-600">{item[playerB.name]}</span>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
