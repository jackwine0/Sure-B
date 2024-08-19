// src/pages/MyBanks.jsx

import React, { useState } from "react";
import BankCard from "../../components/BankCard";
import "./MyBanks.css";

const MyBanks = ({ title, subtitle }) => {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    name: "",
    expiryDate: "",
    bankName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleAddCard = () => {
    setCards([...cards, cardDetails]);
    setCardDetails({ cardNumber: "", name: "", expiryDate: "", bankName: "" });
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="my-bank-accounts">
      <div>
        <div className="welcome">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={index}>
            <BankCard {...card} />
            <div className="spending-info">
              <span className="spending-text">Spending this month:</span>
              <span className="amount-spent">$200</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
          </div>
        ))}
        <div className="add-card">
          <div className="add-card-box" onClick={toggleModal}>
            <span className="add-icon">+</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add New Card</h3>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Cardholder Name"
              value={cardDetails.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date"
              value={cardDetails.expiryDate}
              onChange={handleChange}
            />
            <input
              type="text"
              name="bankName"
              placeholder="Bank Name"
              value={cardDetails.bankName}
              onChange={handleChange}
            />
            <div className="modal-buttons">
              <button onClick={handleAddCard}>Add Card</button>
              <button onClick={toggleModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBanks;
