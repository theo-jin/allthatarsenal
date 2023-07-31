'use client'

import { Grid ,Text} from "@nextui-org/react";
import "./styles.css";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,

} from "recharts";

interface Result {
    pace: number;
    dribble: number;
    shot: number;
    pass: number;
    physical: number;
    defence: number;
  }
  
  interface AppProps {
    result: Result;
  }
  
  const App: React.FC<AppProps> = ({ result }) => {
  
    const data = [
      {
        subject: "PACE",
        A: result.pace,
        fullMark: 99
      },
      {
        subject: "DRIBBLE",
        A: result.dribble,
        fullMark: 99
      },
      {
        subject: "SHOT",
        A: result.shot,
        fullMark: 99
      },
      {
        subject: "PASS",
        A: result.pass,
        fullMark: 99
      },
      {
        subject: "PHYSICAL",
        A: result.physical,
        fullMark: 99
      },
      {
        subject: "DEFENCE",
        A: result.defence,
        fullMark: 99
      },  
    ];
  console.log("ee")
    return (
        <Grid.Container justify="center">
        
            <Grid>
            <Text h3 >Player Stat</Text>
      <RadarChart cx={250} cy={180} outerRadius={150} width={500} height={350} data={data}>
 
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
       
        <PolarRadiusAxis />
       
        <Radar
          name={result.name}
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
   
      </RadarChart>
      </Grid>
      </Grid.Container>
    );
  };
  
  export default App;