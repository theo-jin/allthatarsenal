'use client'

import { Dropdown, Button, Grid, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { title } from "@/components/primitives";

import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Legend
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
}

interface Props {
    result: Player[];
}

export default function App({ result }: Props) {
    let [playerA, setPlayerA] = useState<Player>({ name: '', number: 0, pace: 0, dribble: 0, shot: 0, pass: 0, physical: 0, defence: 0 });
    let [playerB, setPlayerB] = useState<Player>({ name: '', number: 0, pace: 0, dribble: 0, shot: 0, pass: 0, physical: 0, defence: 0 });
    let dispatch = useDispatch();
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
        <Grid.Container gap={1} justify="center">

            <Grid xs={6} justify="flex-end">
                <Dropdown>
                    <Dropdown.Button light>Player A</Dropdown.Button>
                    <Dropdown.Menu aria-label="Static Actions">
                        {result.map(function (a, i) {
                            return (<Dropdown.Item ><Button light auto onPress={() => { setPlayerA(result[i]) }}>
                                #{result[i].number}    {result[i].name}
                            </Button>
                            </Dropdown.Item>)
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </Grid>


            <Grid xs={6} justify="flex-start">
                <Dropdown>
                    <Dropdown.Button light>Player B</Dropdown.Button>
                    <Dropdown.Menu aria-label="Static Actions">
                        {result.map(function (a, i) {
                            return (<Dropdown.Item ><Button light auto onPress={() => { setPlayerB(result[i]) }}>
                                #{result[i].number}    {result[i].name}
                            </Button>
                            </Dropdown.Item>)
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </Grid>
            <Grid>
                <h1 className={title()}>Player Stat</h1>
                <RadarChart cx={250} cy={180} outerRadius={150} width={500} height={400} data={data}>

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

            </Grid></Grid.Container>
    );
}