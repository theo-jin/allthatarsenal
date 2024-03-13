'use client'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { title } from "@/app/_components/primitives";
import { Image } from "@nextui-org/image";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Legend
} from "recharts";
import { player1 } from "@/redux/slices/playerSlice";
import { player2 } from "@/redux/slices/playerSlice2";

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

interface Props {
	result: Player[];
}

export default function App({ result }: Props) {
	let playerA = useAppSelector((state) => state.playerA)
	let playerB = useAppSelector((state) => state.playerB)
	let dispatch = useAppDispatch()
	const data = [
		{
			subject: "PACE",
			A: playerA.pace,
			B: playerB.pace,
			fullMark: 99
		},
		{
			subject: "DRIBBLE",
			A: playerA.dribble,
			B: playerB.dribble,
			fullMark: 99
		},
		{
			subject: "SHOT",
			A: playerA.shot,
			B: playerB.shot,
			fullMark: 99
		},
		{
			subject: "PASS",
			A: playerA.pass,
			B: playerB.pass,
			fullMark: 99
		},
		{
			subject: "PHYSICAL",
			A: playerA.physical,
			B: playerB.physical,
			fullMark: 99
		},
		{
			subject: "DEFENCE",
			A: playerA.defence,
			B: playerB.defence,
			fullMark: 99
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
							{result.map(function (a, i) {
								return (
									<DropdownItem onPress={() => {
										dispatch(player1(result[i]));

									}}>
										#{result[i].number}    {result[i].name}
									</DropdownItem>)
							})}
						</DropdownMenu>
					</Dropdown>
				</div>
				<div className="col-span-1 justify-items-center">
					<Dropdown>
						<DropdownTrigger>
							<Button variant="light" size="lg" >
								Player B
							</Button>
						</DropdownTrigger>

						<DropdownMenu aria-label="Static Actions">
							{result.map(function (a, i) {
								return (
									<DropdownItem onPress={() => { dispatch(player2(result[i])); }}>
										#{result[i].number}  {result[i].name}
									</DropdownItem>)
							})}
						</DropdownMenu>
					</Dropdown>
				</div>
				<div className="col-span-1 justify-items-center">
					<Card isFooterBlurred className="w-full h-[280px]">
						<CardHeader className="absolute z-10 top-1 flex-col items-start">
							<h4 className="text-white font-bold text-xl">#{playerA.number}&nbsp;{playerA.name}</h4>
						</CardHeader>
						<Image
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
							<b className="text-default-500">{playerA.name}</b>
							<p className="text-default-500">{playerA.role.toUpperCase()}</p>
						</CardFooter>
					</Card>
				</div>
				<div className="col-span-1 justify-items-center">
					<Card className="w-full h-[280px] ">
						<CardHeader className="absolute z-10 top-1 flex-col items-start">
							<h4 className="text-black font-bold text-xl">#{playerB.number}&nbsp;{playerB.name}</h4>
						</CardHeader>
						<Image
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

							<p className="text-default-500">{playerB.role.toUpperCase()}</p>
						</CardFooter>
					</Card>
				</div>
				<div className="col-span-2 justify-items-center">

					<RadarChart cx={200} cy={150} outerRadius={100} width={400} height={300} data={data}>

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