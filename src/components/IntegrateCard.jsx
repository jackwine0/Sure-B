// IntegrateCard.jsx This component provides a form to input card details, validate them, and determine the card type.
import React, { useState } from 'react';

const IntegrateCard = ({ onAddCard }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [holderName, setHolderName] = useState('');
  const [type, setType] = useState('Debit');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkLuhn(cardNumber)) {
      const cardType = detectCard(cardNumber);
      if (cardType !== 'unknown') {
        onAddCard({ type, holderName, cardNumber });
        clearForm();
      } else {
        setError('Invalid card type.');
      }
    } else {
      setError('Invalid card number.');
    }
  };

  // Clear form fields
  const clearForm = () => {
    setCardNumber('');
    setHolderName('');
    setType('Debit');
    setError('');
  };

  // Luhn's Algorithm for credit card validation
  function checkLuhn(input) {
    let sum = 0;
    const numdigits = input.length;
    const parity = numdigits % 2;
    for (let i = 0; i < numdigits; i++) {
      let digit = parseInt(input.charAt(i), 10);
      if (i % 2 === parity) digit *= 2;
      if (digit > 9) digit -= 9;
      sum += digit;
    }
    return sum % 10 === 0;
  }

  // Detect card type based on the number
  function detectCard(input) {
    if (/^4/.test(input)) {
      return 'visa';
    } else if (/^5[1-5]/.test(input)) {
      return 'mastercard';
    }
    return 'unknown';
  }

  return (
    <form onSubmit={handleSubmit} className="integrate-card-form">
      <h2>Add New Card</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label>Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Card Holder Name</label>
        <input
          type="text"
          value={holderName}
          onChange={(e) => setHolderName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Card Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Debit">Debit</option>
          <option value="Credit">Credit</option>
        </select>
      </div>
      <button type="submit">Add Card</button>
    </form>
  );
};

export default IntegrateCard;
