// src/components/Sidebar.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faWallet,
  faExchangeAlt,
  faArrowRight,
  faUniversity,
  faLightbulb,
  faSignOutAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../sidebar/sidebar.css"; // Ensure correct path to your CSS file

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img
          src="https://res.cloudinary.com/duicyr28v/image/upload/v1721168513/surebanker_logo_aoy8rn.svg"
          alt="Company Logo"
          className="company-logo"
        />
        <span className="company-name">SureBanker</span>
      </div>
      
      <div className="sidebar-content">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <nav className="nav-links">
          <Link to="/home" className="nav-item">
            <FontAwesomeIcon icon={faHome} />
            <span className="nav-text">Home</span>
          </Link>
          <Link to="/budget" className="nav-item">
            <FontAwesomeIcon icon={faWallet} />
            <span className="nav-text">Budget</span>
          </Link>
          <Link to="/transaction" className="nav-item">
            <FontAwesomeIcon icon={faExchangeAlt} />
            <span className="nav-text">Transaction</span>
          </Link>
          <Link to="/transfer" className="nav-item">
            <FontAwesomeIcon icon={faArrowRight} />
            <span className="nav-text">Transfer</span>
          </Link>
          <Link to="/mybanks" className="nav-item">
            <FontAwesomeIcon icon={faUniversity} />
            <span className="nav-text">My Banks</span>
          </Link>
          <Link to="/advice" className="nav-item">
            <FontAwesomeIcon icon={faLightbulb} />
            <span className="nav-text">Advice</span>
          </Link>
        </nav>
      </div>
      <div className="sidebar-footer">
        <div className="user-info">
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1722881594/Minimalist_Avatar_-_Illustration_wjv4wp.jpg"
            alt="User Avatar"
            className="avatar"
          />
          <div className="user-details">
            <span className="user-name">User Name</span>
            <span className="user-email">user@example.com</span>
          </div>
          <div className="logout">
          <Link to="/landingpage" className="nav-itemx">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="nav-text"></span>
          </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
