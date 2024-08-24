import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./confirmpassword.css";

const ConfirmPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    console.log("Password changed:", formData.newPassword);
    setShowPopup(true);

    setTimeout(() => {
      navigate("/signin");
    }, 2000);
  };

  return (
    <div className="password-container">
      <div className="password-form">
        <header className="password-header">
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1721168513/surebanker_logo_aoy8rn.svg"
            alt="SureBanker Logo"
            className="password-logo"
          />
          <span>SureBanker</span>
          <h2>Change Password</h2>
          <p>Please enter your new password.</p>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="password-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              placeholder="Enter new password"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="password-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="password-btn">
            Change Password
          </button>
        </form>
      </div>
      <div className="signin-image">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {showPopup && (
        <div className="password-popup">
          <div className="popup-content">
            <h3>Password Changed Successfully!</h3>
            <p>You will be redirected to the sign-in page shortly.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmPassword;
