import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 300000
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 350000
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 400000
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 500000
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 600000
        }
    ];

    return (
        <div className='chart-container'>
            <div className='chart-1'>
                <h3>Monthly Sale</h3>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
                    <XAxis dataKey="month" />
                    <YAxis dataKey="sell" />
                    <Tooltip />
                </LineChart>
            </div>

            <div className='chart-1'>
                <h3>Investment</h3>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="revenue" />
                    <YAxis dataKey="investment" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>
            <div className='chart-1'>
                <h3>Investment</h3>
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <XAxis dataKey="revenue" />
                    <YAxis dataKey="investment" />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>

            <div className='chart-1'>
                <h3>Investment</h3>
                <PieChart width={730} height={250}>
                    <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;