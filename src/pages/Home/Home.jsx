// src/pages/Home.jsx
import React from 'react';
import Profile from '../../components/Profile';
import TotalBalanceBox from '../../components/TotalBalanceBox';
import RecentTransactions from '../../components/RecentTransactions';
import './Home.css'; // Assuming you create a CSS file for specific styling

const Home = ({ title, subtitle, accountNumber, accountsData, user, banks }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="welcome">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="balance-section">
          <TotalBalanceBox 
            totalBanks={accountsData?.totalBanks}
            totalCurrentBalance={accountsData?.totalCurrentBalance}
          />
        </div>
        <div className="transactions-section">
          <RecentTransactions 
            accountNumber={accountNumber} // Pass account number or other required identifiers
          />
        </div>
      </div>
      <aside className="profile-sidebar">
        {/* Pass user and banks props to Profile component */}
        <Profile user={user} banks={banks} />
      </aside>
    </div>
  );
};

export default Home;
