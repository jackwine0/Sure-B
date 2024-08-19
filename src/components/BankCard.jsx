// src/components/BankCard.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import "../css/bankcard.css";

const detectCard = (input) => {
  if (/^4/.test(input)) {
    return "visa";
  } else if (/^5[1-5]/.test(input)) {
    return "mastercard";
  }
  return "unknown";
};

const BankCard = ({ cardNumber, name, expiryDate, bankName }) => {
  const cardType = detectCard(cardNumber);

  return (
    <div className="bank-card">
      <div className="card-header">
        <FontAwesomeIcon icon={faCopy} className="copy-icon" />
        <span className="bank-name">{bankName}</span>
      </div>
      <div className="card-body">
        <div className="card-details">
          <span className="card-holder-name">{name}</span>
          <span className="expiry-date">{expiryDate}</span>
        </div>
        <div className="card-number">{cardNumber}</div>
      </div>
      <div className="card-footer">
        <div className="circuit">
          {cardType === "visa" && (
            <img
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722498097/Visa_Logo_PNG_cevjqq.jpg"
              alt="Visa Logo"
              className="logo"
            />
          )}
          {cardType === "mastercard" && (
            <img
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722498097/Mastercard_PNG_ivda1e.jpg"
              alt="Mastercard Logo"
              className="logo"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BankCard;
