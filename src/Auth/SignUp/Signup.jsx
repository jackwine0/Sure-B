import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './signup.css'; // Import the CSS file for styling

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    dob: '',
    email: '',
    password: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // Simulate successful signup and redirect to OTP page
    navigate('/otp');
  };

  const [showPassword, setShowPassword] = useState(false);

 

  return (
    <div className="signup__container">
      <div className="signup__col1">
        <div className='signup__header'>
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1721168513/surebanker_logo_aoy8rn.svg"
            alt="SureBanker Logo"
            className="signup__logo"
          />
          <span className="signup__company-name">SureBanker</span>
          <h2 className="signup__title">Sign Up</h2>
          <p className="signup__description">Please enter your details.</p>
        </div>
        <form className="signup__form" onSubmit={handleSubmit}>
          <div className="signup__input-row">
            <div className="signup__input-container">
              <label htmlFor="firstName" className="signup__label">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="signup__input"
              />
            </div>
            <div className="signup__input-container">
              <label htmlFor="lastName" className="signup__label">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="signup__input"
              />
            </div>
          </div>
          <div className="signup__input-row">
            <div className="signup__input-container">
              <label htmlFor="address" className="signup__label">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="signup__input"
              />
            </div>
          </div>
          <div className="signup__input-row">
            <div className="signup__input-container">
              <label htmlFor="dob" className="signup__label">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                placeholder="Date of Birth"
                value={formData.dob}
                onChange={handleChange}
                className="signup__input"
              />
            </div>
            <div className="signup__input-container">
              <label htmlFor="country" className="signup__label">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="signup__select"
              >
                <option value="">Select Country</option>
                <option value="us">Nigeria</option>
                <option value="ca">Ghana</option>
                {/* Add more countries as needed */}
              </select>
            </div>
          </div>
          <div className="signup__input-row">
            <div className="signup__input-container">
              <label htmlFor="email" className="signup__label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="signup__input"
              />
            </div>
          </div>
          <div className="signup__input-row">
            <div className="signup__input-container">
              <label htmlFor="password" className="signup__label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="signup__input"
              />
             
            </div>
          </div>
          <button type="submit" className="signup__button">Sign Up</button>
        </form>
        <p className="signup__link-text">Already have an account? <a href="/signin" className="signup__link">Login</a></p>
      </div>
      <div className="signup__col2">
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

export default Signup;
