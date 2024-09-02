"use client";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { title } from "@/app/_components/primitives";

import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Legend,
} from "recharts";
import { PlayerCard } from "@/app/_components/Player/PlayerCard";

import { Tooltip } from "@nextui-org/react";

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

interface Props {
	playerList: Player[];
}

export default function App({ playerList }: any) {
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

	const data = [
		{
			subject: "PACE",
			A: playerA.pace,
			B: playerB.pace,
			fullMark: 99,
		},
		{
			subject: "DRIBBLE",
			A: playerA.dribble,
			B: playerB.dribble,
			fullMark: 99,
		},
		{
			subject: "SHOT",
			A: playerA.shot,
			B: playerB.shot,
			fullMark: 99,
		},
		{
			subject: "PASS",
			A: playerA.pass,
			B: playerB.pass,
			fullMark: 99,
		},
		{
			subject: "PHYSICAL",
			A: playerA.physical,
			B: playerB.physical,
			fullMark: 99,
		},
		{
			subject: "DEFENCE",
			A: playerA.defence,
			B: playerB.defence,
			fullMark: 99,
		},
	];

	return (
		<>
			<section className="flex flex-col justify-items-center gap-4 py-8 md:py-10">
				<h1 className={title()}>Player vs Player</h1>
			</section>
			<div className="grid grid-cols-2 gap-4 justify-items-center">
				<div className="col-span-1 justify-items-center">
					<Dropdown>
						<DropdownTrigger>
							<Button className="font-semibold" variant="bordered" size="lg">
								Player A
							</Button>
						</DropdownTrigger>
						<DropdownMenu aria-label="Static Actions">
							{playerList.map(function (a: any, i: any) {
								return (
									<DropdownItem
										key={i}
										onPress={() => {
											setPlayerA(playerList[i]);
										}}
									>
										#{playerList[i].number} {playerList[i].name}
									</DropdownItem>
								);
							})}
						</DropdownMenu>
					</Dropdown>
				</div>
				<div className="col-span-1 justify-items-center">
					<Dropdown>
						<DropdownTrigger>
							<Button className="font-semibold" variant="bordered" size="lg">
								Player B
							</Button>
						</DropdownTrigger>

						<DropdownMenu aria-label="Static Actions">
							{playerList.map(function (a: any, i: any) {
								return (
									<DropdownItem
										key={i}
										onPress={() => {
											setPlayerB(playerList[i]);
										}}
									>
										#{playerList[i].number} {playerList[i].name}
									</DropdownItem>
								);
							})}
						</DropdownMenu>
					</Dropdown>
				</div>
				<div className="col-span-1 justify-items-center w-full	h-[340px] ">
					<PlayerCard player={playerA} />
				</div>
				<div className="col-span-1 justify-items-center w-full h-[340px]">
					<PlayerCard player={playerB} />
				</div>
				<div className="col-span-2 justify-items-center">
					<RadarChart
						cx={200}
						cy={150}
						outerRadius={100}
						width={400}
						height={300}
						data={data}
					>
						<PolarGrid />
						<PolarAngleAxis dataKey="subject" />
						<PolarRadiusAxis />
						<Radar
							name={playerA.name}
							dataKey="A"
							stroke="#8884d8"
							fill="#8884d8"
							fillOpacity={0.6}
						/>

						<Radar
							name={playerB.name}
							dataKey="B"
							stroke="#82ca9d"
							fill="#82ca9d"
							fillOpacity={0.6}
						/>

						<Tooltip />
						<Legend />
					</RadarChart>
				</div>
			</div>
		</>
	);
}
