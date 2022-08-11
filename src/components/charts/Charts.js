import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "01 Apr",
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "02 Apr",
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "03 Apr",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "04 Apr",
    uv: 1500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "05 Apr",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "07 Apr",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export default function Charts() {
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={3} >
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line
          type="monotone"
          dataKey="uv"
          stroke="#0E9F6E"
          strokeWidth={4}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
