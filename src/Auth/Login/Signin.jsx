import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    navigate("/home");
  };

  const handleSignupNavigation = () => {
    navigate("/signup");
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <div>
          <header className="signin-header">
            <img
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1721168513/surebanker_logo_aoy8rn.svg"
              alt="SureBanker Logo"
              className="signin-logo"
            />
            <span>SureBanker</span>
            <h2>Sign in</h2>
            <p>Welcome back! Please enter your details.</p>
          </header>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="x">
              Sign in
            </button>
          </form>
          <div className="xx">
            <div className="signup-prompt">
              Don't have an account?{" "}
              <span onClick={handleSignupNavigation}>
                <strong>Sign up</strong>
              </span>
            </div>
            <a href="/forgot-password" className="forgot-link">
              <strong>Forgot your password?</strong>
            </a>
          </div>
        </div>
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

export default Signin;
