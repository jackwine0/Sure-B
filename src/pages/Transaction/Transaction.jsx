import React, { useState } from 'react';
import './Transaction.css';

const accountData = {
  "Chase Bank": {
    bank: "Chase Bank",
    balance: "$10,000.00",
    transactions: [
      { transaction: "Spotify", amount: "-$15.00", status: "Processing", date: "Wed 1:00pm", category: "Subscriptions" },
      { transaction: "JSM Pro", amount: "-$18.99", status: "Processing", date: "Mon 1:10pm", category: "Subscriptions" },
      { transaction: "Fresh F&V", amount: "-$88.00", status: "Success", date: "Tue 12:15pm", category: "Groceries" },
      { transaction: "Netflix", amount: "-$12.99", status: "Success", date: "Thu 10:30am", category: "Entertainment" },
      { transaction: "Walmart", amount: "-$120.00", status: "Processing", date: "Fri 11:15am", category: "Groceries" },
      { transaction: "PayPal", amount: "+$200.00", status: "Success", date: "Sat 3:45pm", category: "Deposit" },
      { transaction: "Netflix", amount: "-$12.99", status: "Success", date: "Thu 10:30am", category: "Entertainment" },
      { transaction: "Walmart", amount: "-$120.00", status: "Processing", date: "Fri 11:15am", category: "Groceries" },
      { transaction: "PayPal", amount: "+$200.00", status: "Success", date: "Sat 3:45pm", category: "Deposit" },
    ],
  },
  "Bank of America": {
    bank: "Bank of America",
    balance: "$5,500.00",
    transactions: [
      { transaction: "Netflix", amount: "-$12.99", status: "Success", date: "Thu 10:30am", category: "Entertainment" },
      { transaction: "Walmart", amount: "-$120.00", status: "Processing", date: "Fri 11:15am", category: "Groceries" },
      { transaction: "PayPal", amount: "+$200.00", status: "Success", date: "Sat 3:45pm", category: "Deposit" },
    ],
  },
  "Wells Fargo": {
    bank: "Wells Fargo",
    balance: "$7,200.00",
    transactions: [
      { transaction: "Amazon", amount: "-$80.00", status: "Success", date: "Sun 9:00am", category: "Shopping" },
      { transaction: "Apple", amount: "-$999.00", status: "Declined", date: "Mon 2:00pm", category: "Electronics" },
      { transaction: "Uber", amount: "-$20.00", status: "Success", date: "Tue 4:30pm", category: "Transportation" },
    ],
  },
};

const Transaction = ({ title, subtitle }) => {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [accountDetails, setAccountDetails] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  const handleAccountChange = (e) => {
    const account = e.target.value;
    setSelectedAccount(account);
    setAccountDetails(accountData[account]);
    setCurrentPage(1); // Reset to first page when account changes
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(accountDetails.transactions.length / transactionsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPaginatedTransactions = () => {
    const startIndex = (currentPage - 1) * transactionsPerPage;
    const endIndex = startIndex + transactionsPerPage;
    return accountDetails.transactions.slice(startIndex, endIndex);
  };

  return (
    <div className="transaction-container">
      <div className="transaction-header">
        <div className="welcome">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <select
          className="account-select"
          value={selectedAccount}
          onChange={handleAccountChange}
        >
          <option value="" disabled>
            Select account
          </option>
          {Object.keys(accountData).map((account) => (
            <option key={account} value={account}>
              {account}
            </option>
          ))}
        </select>
      </div>

      {accountDetails && (
        <>
          <section className="account-section">
            <div className="account-details">
              <h2>{accountDetails.bank}</h2>
              <p>{selectedAccount}</p>
            </div>
            <div className="balance-box">
              <p>Current Balance</p>
              <h3>{accountDetails.balance}</h3>
            </div>
          </section>

          <div className="transaction-body">
            <div className="transaction-controls">
              <h3>Transaction History</h3>
              <div className="filter-box">
              <button className="Filter-button">≡ Filter</button>
              </div>
            </div>

            <table className="transaction-table">
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
                {getPaginatedTransactions().map((transaction, index) => (
                  <tr key={index}>
                    <td>
                      <div className="transaction-name">
                        <div className="avatar">
                          {transaction.transaction.charAt(0)}
                        </div>
                        <span>{transaction.transaction}</span>
                      </div>
                    </td>
                    <td
                      className={`amount ${
                        parseFloat(transaction.amount) < 0 ? "negative" : "positive"
                      }`}
                    >
                      {transaction.amount}
                    </td>
                    <td className="status">
                      <span
                        className={`status-dot ${transaction.status.toLowerCase()}`}
                      ></span>
                      {transaction.status}
                    </td>
                    <td>{transaction.date}</td>
                    <td className="category">{transaction.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <button
                className="prev-button"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <div className="page-numbers">
                <span className="page-number">{currentPage}</span>
              </div>
              <button
                className="next-button"
                onClick={handleNextPage}
                disabled={currentPage === Math.ceil(accountDetails.transactions.length / transactionsPerPage)}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Transaction;
