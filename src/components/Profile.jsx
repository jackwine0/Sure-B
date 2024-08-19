// src/components/Profile.jsx
import React from 'react';
import BankCardsCarousel from '../components/BankCardsCarousel';
import BudgetSection from '../components/BudgetSection';
import '../css/Profile.css';

const mockBanks = [
  {
    cardNumber: "4111111111111111", // Visa card
    name: "Adrian Hajdin",
    expiryDate: "06/24",
    bankName: "JS Mastery Pro.",
  },
  {
    cardNumber: "5500000000000004", // MasterCard
    name: "Adrian Hajdin",
    expiryDate: "08/25",
    bankName: "React Bank",
  },
  {
    cardNumber: "4111222233334444", // Visa card
    name: "Adrian Hajdin",
    expiryDate: "09/23",
    bankName: "Frontend Masters",
  },
];

const Profile = ({ user = {}, banks = mockBanks }) => {
  const { name, email, avatar } = user;

  return (
    <div className="profile">
      <div className="header-image">
        <img 
          src={avatar || 'https://res.cloudinary.com/duicyr28v/image/upload/v1722881594/Minimalist_Avatar_-_Illustration_wjv4wp.jpg'} 
          alt="Avatar" 
          className="profile-avatar" 
        />
      </div>
      <div className="profile-info">
        <h2>{name || 'Guest User'}</h2>
        <p>{email || 'user@example.com'}</p>
      </div>
      <div className="profile-section">
        <h3>My Banks</h3>
        <div className="bank-cards">
          <BankCardsCarousel banks={banks} />
        </div>
      </div>
      <div className="profile-section">
        <h3>My Budgets</h3>
        <BudgetSection />
      </div>
    </div>
  );
};

export default Profile;
