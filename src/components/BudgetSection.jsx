// src/components/BudgetSection.jsx
import React from 'react';
import BudgetCard from './BudgetCard';
import '../css/BudgetSection.css';

const budgets = [
  { emoji: '💳', title: 'Subscriptions', amount: 50, total: 100 },
  { emoji: '🍕', title: 'Food & Booze', amount: 200, total: 300 },
  { emoji: '💰', title: 'Savings', amount: 400, total: 500 },
];

const BudgetSection = () => {
  return (
    <div className="budget-section">
      {budgets.map((budget, index) => (
        <BudgetCard
          key={index}
          emoji={budget.emoji}
          title={budget.title}
          amount={budget.amount}
          total={budget.total}
          onClick={() => console.log(`${budget.title} clicked!`)}
        />
      ))}
    </div>
  );
};

export default BudgetSection;
