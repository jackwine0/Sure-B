import React from "react";
import "../css/TransactionTable.css";

const TransactionTable = ({ transactions }) => {
  return (
    <div className="transaction-table">
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
          {transactions.length > 0 ? (
            transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.status}</td>
                <td>{transaction.date}</td>
                <td>{transaction.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No transactions available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
