import React, { useState } from 'react';
import BudgetCard from '../../components/BudgetCard';
import './Budget.css';

const emojis = ['💻', '🍔', '💰', '📚', '🏋️‍♂️', '🎮', '🏠', '🚗', '✈️'];

const Budget = ({ title, subtitle }) => {
  const [budgets, setBudgets] = useState([]);
  const [newBudget, setNewBudget] = useState({
    emoji: emojis[0],
    title: '',
    total: 0,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedBudgetIndex, setSelectedBudgetIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBudget({ ...newBudget, [name]: value });
  };

  const addOrUpdateBudget = () => {
    if (newBudget.title && newBudget.total > 0) {
      if (editMode) {
        const updatedBudgets = budgets.map((budget, i) =>
          i === selectedBudgetIndex
            ? { ...budget, ...newBudget, total: parseInt(newBudget.total) }
            : budget
        );
        setBudgets(updatedBudgets);
        setEditMode(false);
      } else {
        setBudgets([...budgets, { ...newBudget, total: parseInt(newBudget.total), amount: 0 }]);
      }
      setNewBudget({ emoji: emojis[0], title: '', total: 0 });
      setShowPopup(false);
    }
  };

  const handleAmountSpent = (index) => {
    const amountSpent = prompt('Enter amount spent:', 0);
    if (amountSpent !== null) {
      const updatedBudgets = budgets.map((budget, i) =>
        i === index ? { ...budget, amount: budget.amount + parseInt(amountSpent) } : budget
      );
      setBudgets(updatedBudgets);
    }
  };

  return (
    <div className="budget-container">
      <header className="budget-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className="add-budget-button" onClick={() => { setShowPopup(true); setEditMode(false); }}>Add Budget</button>
      </header>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>{editMode ? 'Edit Budget' : 'Add Budget'}</h2>
            <select
              name="emoji"
              value={newBudget.emoji}
              onChange={handleInputChange}
            >
              {emojis.map((emoji, index) => (
                <option key={index} value={emoji}>
                  {emoji}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="title"
              placeholder="Budget Title"
              value={newBudget.title}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="total"
              placeholder="Total Budget"
              value={newBudget.total}
              onChange={handleInputChange}
            />
            <button onClick={addOrUpdateBudget}>
              {editMode ? 'Update Budget' : 'Add Budget'}
            </button>
            <button className="close-popup" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
      <div className="budgets-grid">
        {budgets.map((budget, index) => (
          <BudgetCard
            key={index}
            emoji={budget.emoji}
            title={budget.title}
            total={budget.total}
            amount={budget.amount}
            onClick={() => handleAmountSpent(index)}
            onEdit={() => { 
              setNewBudget(budget); 
              setSelectedBudgetIndex(index); 
              setShowPopup(true); 
              setEditMode(true); 
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Budget;