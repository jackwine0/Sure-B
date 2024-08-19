import React from 'react';
import '../css/BudgetCard.css';

const BudgetCard = ({ emoji, title, amount, total, onClick }) => {
  const amountLeft = total - amount;

  return (
    <div className="budget-card" onClick={onClick}>
      <div className="budget-card-header">
        <span className="budget-emoji">{emoji}</span>
        <span className="budget-title">{title}</span>
        <span className="budget-amount">${amount}</span>
        <span className="amount-left">${amountLeft} left</span>
      </div>
      <div className="budget-progress-bar">
        <div
          className="budget-progress"
          style={{
            width: `${(amount / total) * 100}%`,
            background: 'linear-gradient(135deg, #006d32, #00c853)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default BudgetCard;
