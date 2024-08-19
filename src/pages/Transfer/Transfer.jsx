import React from 'react';
import './transfer.css'


const Transfer = () => {
  return (
    <div className="payment-transfer">
      <h2 className="payment-transfer__title">Payment Transfer</h2>
      <p className="payment-transfer__subtitle">
        Please provide any specific details or notes related to the payment transfer
      </p>

      <div className="payment-transfer__section">
        <h3 className="payment-transfer__section-title">Transfer details</h3>
        <p className="payment-transfer__section-subtitle">Enter the details of the recipient</p>

        <div className="payment-transfer__field">
          <label className="payment-transfer__label">Select Source Bank</label>
          <select className="payment-transfer__select">
            <option>Select Account</option>
          </select>
        </div>

        <div className="payment-transfer__field">
          <label className="payment-transfer__label">Transfer Note (Optional)</label>
          <textarea
            className="payment-transfer__textarea"
            placeholder="Please provide any additional information or instructions related to the transfer"
          >
Dear John, I hope this message finds you well. I am transferring $100 to your account for fun. Please confirm once you receive it.
          </textarea>
        </div>
      </div>

      <div className="payment-transfer__section">
        <h3 className="payment-transfer__section-title">Bank account details</h3>
        <p className="payment-transfer__section-subtitle">Enter the bank account details of the recipient</p>

        <div className="payment-transfer__field">
          <label className="payment-transfer__label">Recipient's Email Address</label>
          <input
            type="email"
            className="payment-transfer__input"
            placeholder="john@gmail.com"
          />
        </div>

        <div className="payment-transfer__field">
          <label className="payment-transfer__label">Recipient's Bank Account Number</label>
          <input
            type="text"
            className="payment-transfer__input"
            placeholder="Enter the account number"
          />
        </div>

        <div className="payment-transfer__field">
          <label className="payment-transfer__label">Amount</label>
          <input
            type="number"
            className="payment-transfer__input"
            placeholder="40000"
          />
        </div>
      </div>

      <button className="payment-transfer__button">Transfer Funds</button>
    </div>
  );
};

export default Transfer;
