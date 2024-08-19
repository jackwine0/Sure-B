// src/components/RecentTransactions.jsx
import React, { useState } from 'react';
import '../css/RecentTransactions.css';

const bankTabs = [
  { initials: "CB", name: "Chase Bank" },
  { initials: "WF", name: "Wells Fargo" },
  { initials: "BOA", name: "Bank of America" },
];

const bankInfo = {
  "Chase Bank": {
    amount: "$12,345.67",
    accountType: "Growth Savings",
    transactions: [
      { transaction: "Spotify", amount: "-$15.00", status: "Processing", date: "Wed 1:00pm", category: "Subscriptions" },
      { transaction: "James Aaron", amount: "+$88.00", status: "Declined", date: "Fri 2:45am", category: "Deposit" },
    ],
  },
  "Wells Fargo": {
    amount: "$9,876.54",
    accountType: "Business Account",
    transactions: [
      { transaction: "Netflix", amount: "-$12.99", status: "Success", date: "Tue 8:00am", category: "Subscriptions" },
      { transaction: "Amazon", amount: "+$50.00", status: "Success", date: "Mon 10:30am", category: "Refund" },
    ],
  },
  "Bank of America": {
    amount: "$5,432.10",
    accountType: "Premium Checking",
    transactions: [
      { transaction: "Grocery", amount: "-$120.00", status: "Success", date: "Mon 5:00pm", category: "Groceries" },
      { transaction: "Salary", amount: "+$2,000.00", status: "Success", date: "Fri 12:00pm", category: "Income" },
    ],
  },
};

const RecentTransactions = () => {
  const [activeTab, setActiveTab] = useState(bankTabs[0].name);

  const handleTabClick = (bankName) => {
    setActiveTab(bankName);
  };

  const { amount, accountType, transactions } = bankInfo[activeTab];

  return (
    <div className="recent-transactions">
      <div className="header">
        <h2>Recent Transactions</h2>
        <button className="view-all-button">View All</button>
      </div>
      <div className="bank-tabs">
        {bankTabs.map((bank) => (
          <div
            key={bank.name}
            className={`bank-tab ${activeTab === bank.name ? "active" : ""}`}
            onClick={() => handleTabClick(bank.name)}
          >
            {bank.name}
          </div>
        ))}
      </div>
      <div className="bank-info">
        <div className="bank-profile">
          <div className="bank-avatar">{bankTabs.find(tab => tab.name === activeTab).initials}</div>
          <div className="bank-details">
            <span className="bank-name">{activeTab}</span>
            <span className="bank-amount">{amount}</span>
          </div>
          <div className="account-type">{accountType}</div>
        </div>
        <div className="transactions-table">
          <table>
            <thead>
              <tr>
                <th>Transaction</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className={transaction.amount.startsWith("-") ? "debit" : "credit"}>
                  <td>
                    <div className="transaction-avatar">{transaction.transaction[0]}</div>
                    <span>{transaction.transaction}</span>
                  </td>
                  <td className={`amount ${transaction.amount.startsWith("-") ? "negative" : "positive"}`}>
                    {transaction.amount}
                  </td>
                  <td className="status">
                    <span className={`status-dot ${transaction.status.toLowerCase()}`}></span>
                    {transaction.status}
                  </td>
                  <td>{transaction.date}</td>
                  <td className="category">{transaction.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
