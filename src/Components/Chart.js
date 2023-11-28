
import React, { useCallback, useState } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,

    ResponsiveContainer
} from "recharts";
import { PieChart,} from "recharts";
import { Pie } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);







export default function Chart() {
    // const data = [
    //     { name: "Group A", value: 400 },
    //     { name: "Group B", value: 300 },
    //     { name: "Group C", value: 300 }

    // ];
    const data=
    {
        labels:['one','two','three'],
        datasets:[
            {
                data:[3,6,9],
                backgroundColor:['#88219E','rgba(126, 85, 135, 0.20)','#3F0065']
            }
        ]
       
    };
    const options= {

    }
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    const data1 = [
        {
            name: "Jan",
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Feb",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "March",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "May",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "June",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "july",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "August",
            uv: 3490,
            pv: 4300,
            amt: 2100
        },
        {
            name: "Sep",
            uv: 3490,
            pv: 4300,
            amt: 5100
        }, {
            name: "Oct",
            uv: 390,
            pv: 4300,
            amt: 1000
        }, {
            name: "Nov",
            uv: 3090,
            pv: 400,
            amt: 200
        }
    ]


    return (
        <div className="main-graph">


                {/* <PieChart width={500} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#88219E"
                        label
                    />

                    <Tooltip />
                </PieChart>

                */}
                <div 
                 className="chart1"> <Pie
                data={data}
                options={options}></Pie>

                </div>
               

          
            <br />
            <div style={{ width: "550px", height: 300 }} className="chart2">
                <ResponsiveContainer>
                    <AreaChart
                        data={data1}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#3F0065;" fill="#3F0065" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
}
