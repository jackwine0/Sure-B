// src/components/DoughnutChart.jsx
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }) => {
  // Extract account names and balances
  const accountNames = accounts.map((a) => a.name);
  const balances = accounts.map((a) => a.currentBalance);

  // Define chart data
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: balances,
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'] 
      }
    ],
    labels: accountNames
  };

  // Define chart options
  const options = {
    cutout: '60%',
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <Doughnut 
      data={data} 
      options={options}
    />
  );
};

export default DoughnutChart;
