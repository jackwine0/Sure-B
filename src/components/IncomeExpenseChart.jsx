// IncomeExpenseChart.jsx
"use client"

import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import "../css/incomeExpenseChart.css"; // Import the CSS file for styling

const chartData = [
  { month: "January", income: 1860, expense: 800 },
  { month: "February", income: 3050, expense: 2000 },
  { month: "March", income: 2370, expense: 1200 },
  { month: "April", income: 730, expense: 1900 },
  { month: "May", income: 2090, expense: 1300 },
  { month: "June", income: 2140, expense: 1400 },
];

export default function IncomeExpenseChart() {
  return (
    <div className="chart-containerx">
        <h3>Monitor income and expene's</h3>
      <BarChart width={500} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="income" fill="#006d32" radius={4} />
        <Bar dataKey="expense" fill="#00c853" radius={4} />
      </BarChart>
    </div>
  );
}
