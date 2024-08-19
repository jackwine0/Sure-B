import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../css/TotalBalanceBox.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalBalanceBox = ({ totalBanks = 2, totalCurrentBalance = 2698.12 }) => {
  const [animatedBalance, setAnimatedBalance] = useState(0);

  useEffect(() => {
    if (totalCurrentBalance == null) return;

    let start = 0;
    const end = totalCurrentBalance;
    const duration = 2000;
    const stepTime = 10;
    const steps = Math.ceil(duration / stepTime);
    const stepValue = end / steps;

    const animate = () => {
      if (start < end) {
        start += stepValue;
        setAnimatedBalance(Math.round(start * 100) / 100); // Round to 2 decimal places
        setTimeout(animate, stepTime);
      } else {
        setAnimatedBalance(end);
      }
    };

    animate();
  }, [totalCurrentBalance]);

  const data = {
    labels: ['Bank A', 'Bank B'],
    datasets: [{
      data: [60, 40], // Replace with actual bank balances
      backgroundColor: ['#006d32', '#00c853', '#a5d6a7'],
      borderColor: '#ffffff',
      borderWidth: 2,
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || 0;
            return `${label}: $${value}`;
          }
        }
      },
    },
    cutout: '75%' // This makes the pie chart into a ring
  };

  return (
    <div className="total-balance-box">
      <div className="chart-container">
        <Pie data={data} options={options} />
      </div>
      <div className="balance-details">
        <h3>{totalBanks} Bank Accounts</h3>
        <p>Total Current Balance</p>
        <h2>${animatedBalance.toLocaleString()}</h2>
        <a href="#" className="add-bank-link">+ Add bank</a>
      </div>
    </div>
  );
};

export default TotalBalanceBox;
