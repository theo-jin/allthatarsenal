"use client";

import { Player } from "@/app/_types";
import React from "react";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const App = ({ player }: { player: Player }) => {
	const data = [
		{
			subject: "PACE",
			A: player.pace,
			fullMark: 99,
		},
		{
			subject: "DRIBBLE",
			A: player.dribble,
			fullMark: 99,
		},
		{
			subject: "SHOT",
			A: player.shot,
			fullMark: 99,
		},
		{
			subject: "PASS",
			A: player.pass,
			fullMark: 99,
		},
		{
			subject: "PHYSICAL",
			A: player.physical,
			fullMark: 99,
		},
		{
			subject: "DEFENCE",
			A: player.defence,
			fullMark: 99,
		},
	];

	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
				<PolarGrid />
				<PolarAngleAxis dataKey="subject" />
				<PolarRadiusAxis angle={30} />
				<Radar dataKey="A" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} />

				<Tooltip />
			</RadarChart>
		</ResponsiveContainer>
	);
};

export default App;
