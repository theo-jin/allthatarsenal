'use client'

import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,

} from "recharts";

interface Player {
    pace: number;
    dribble: number;
    shot: number;
    pass: number;
    physical: number;
    defence: number;
}

interface AppProps {
    player: Player;
}

const App: React.FC<AppProps> = ({ player }) => {

    const data = [
        {
            subject: "PACE",
            A: player.pace,
            fullMark: 99
        },
        {
            subject: "DRIBBLE",
            A: player.dribble,
            fullMark: 99
        },
        {
            subject: "SHOT",
            A: player.shot,
            fullMark: 99
        },
        {
            subject: "PASS",
            A: player.pass,
            fullMark: 99
        },
        {
            subject: "PHYSICAL",
            A: player.physical,
            fullMark: 99
        },
        {
            subject: "DEFENCE",
            A: player.defence,
            fullMark: 99
        },
    ];

    return (
        <div className="flex justify-center">

            <RadarChart cx={200} cy={150} outerRadius={100} width={400} height={300} data={data}>

                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />

                <PolarRadiusAxis />

                <Radar

                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                />

            </RadarChart>
        </div>
    );
};

export default App;