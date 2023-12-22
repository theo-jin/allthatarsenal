import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Legend
} from "recharts";

export const Chart = (a, b) => {


    <RadarChart cx={200} cy={150} outerRadius={100} width={400} height={300} data={data}>

        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
            name={a}
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
        />
        <Radar
            name={b}
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
        />
        <Legend />
    </RadarChart>
}