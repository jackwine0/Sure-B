import React, { useState } from 'react';
import './otp.css'; // Import the CSS file for styling

const Otp = ({ onVerify }) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.match(/^[0-9]{0,1}$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field
      if (value && index < otp.length - 1) {
        e.target.nextSibling.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Join OTP and verify
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 6) {
      // Mock verification success
      onVerify();
    } else {
      alert('Please enter a 6-digit OTP.');
    }
  };

  return (
    <div className="otp__container">
      <div className="otp__col1">
        <div className='otp__header'>
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1721168513/surebanker_logo_aoy8rn.svg"
            alt="SureBanker Logo"
            className="otp__logo"
          />
          <span className="otp__company-name">SureBanker</span>
          <h2 className="otp__title">Enter OTP</h2>
          <p className="otp__description">Please enter the 6-digit code sent to your email.</p>
        </div>
        <form className="otp__form" onSubmit={handleSubmit}>
          <div className="otp__input-row">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                value={value}
                onChange={(e) => handleChange(e, index)}
                className="otp__input"
                maxLength="1"
              />
            ))}
          </div>
          <button type="submit" className="otp__button">Verify OTP</button>
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
    </div>
  );
};

export default Otp;
