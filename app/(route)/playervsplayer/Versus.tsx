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
import { Image } from "@nextui-org/image";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Legend,
} from "recharts";

interface Player {
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

// interface Props {
// 	playerList: Player[];
// }

export default function App({ playerList }: any) {
	let [playerA, setPlayerA] = useState<Player>({
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
							<Button variant="light" size="lg">
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
							<Button variant="light" size="lg">
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
				<div className="col-span-1 justify-items-center">
					<Card isFooterBlurred className="w-full h-[280px] ">
						<CardHeader className="absolute z-10 top-1 flex-col items-start">
							<h4 className="text-black font-bold text-2xl">
								#{playerA.number}
							</h4>
						</CardHeader>
						<Image
							loading="lazy"
							removeWrapper
							alt="Player Pic"
							className="z-0 w-full object-cover h-[200px]"
							src={playerA.pic}
						/>
						<CardFooter className="text-small justify-between">
							<Image
								src={`https://flagsapi.com/${playerA.nation}/flat/32.png`}
								alt="flag"
							/>
							<b>{playerA.name}</b>
							<p className="text-default-500">{playerA.role.toUpperCase()}</p>
						</CardFooter>
					</Card>
				</div>
				<div className="col-span-1 justify-items-center">
					<Card className="w-full h-[280px] ">
						<CardHeader className="absolute z-10 top-1 flex-col items-start">
							<h4 className="text-black font-bold text-2xl">
								#{playerB.number}
							</h4>
						</CardHeader>
						<Image
							loading="lazy"
							removeWrapper
							alt="Player Pic"
							className="z-0  w-full object-cover h-[200px]"
							src={playerB.pic}
						/>
						<CardFooter className="text-small justify-between">
							<Image
								src={`https://flagsapi.com/${playerB.nation}/flat/32.png`}
								alt="flag"
							/>
							<b> {playerB.name}</b>
							<p className="text-default-500">{playerB.role.toUpperCase()}</p>
						</CardFooter>
					</Card>
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
						<Legend />
					</RadarChart>
				</div>
			</div>
		</>
	);
}
