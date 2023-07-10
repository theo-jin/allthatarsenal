'use client'

import "./styles.css";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
  {
    subject: "PACE",
    A: 99,
    B: 99,
    fullMark: 99
  },
  {
    subject: "DRIBBLE",
    A: 98,
    B:  99,
    fullMark:99
  },
  {
    subject: "SHOT",
    A: 86,
    B: 99,
    fullMark: 99
  },
  {
    subject: "PASS",
    A: 99,
    B: 99,
    fullMark: 99
  },
  {
    subject: "PHYSICAL",
    A: 85,
    B: 90,
    fullMark: 99
  },
  {
    subject: "DEFENCE",
    A: 65,
    B: 85,
    fullMark: 99
  }
];

export default function App() {
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
