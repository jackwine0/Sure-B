import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingpage.css"; // Import your CSS file
import IncomeExpenseChart from "../../components/IncomeExpenseChart";

const Landingpage = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleSigninClick = () => {
    navigate("/signin");
  };

  return (
    <div className="landingpage">
      <div className="navhero">
        <div className="navintro">
          <div className="navbar">
            <nav>
              <div className="left">
                <img
                  className="landlogo"
                  src="https://res.cloudinary.com/duicyr28v/image/upload/v1721168513/surebanker_logo_aoy8rn.svg"
                  alt="SureBanker Logo"
                />
                <span className="logo-text">SureBanker</span>
              </div>
              <div className="right">
                <button className="login-button" onClick={handleSigninClick}>
                  Login
                </button>
                <button className="signup-button" onClick={handleSignupClick}>
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        </div>

        <div className="landing-content">
          <div className="landcol1">
            <div className="landcol1-content">
              <div className="trust-text">
                <span role="img" aria-label="fire">
                  🔥
                </span>{" "}
                100% TRUSTED PLATFORM
              </div>
              <h1 className="highlighted-text">
                MANAGE YOUR <br />
                FINANCES <br />
                WITH <span className="highlight-surebanker">SUREBANKER</span>
              </h1>
              <p>
                Track your expenses, create budgets, set financial goals, and
                receive personalized financial advice.
              </p>
              <button className="landsignin-button" onClick={handleSignupClick}>
                GET STARTED <span className="arrow">→</span>
              </button>
            </div>
          </div>
          <div className="landcol2">
            <div className="eclipse"></div>
            <img
              className="col2-image"
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722845603/SB_img1_o9wb91.svg"
              alt="Description"
            />
          </div>
        </div>
      </div>
      <div className="features-header">
        <h2>Track your Expenses and Create a Budget</h2>
        <h1>
          Choose Better with <br />
          <span className="highlight-surebanker">SUREBANKER</span>
        </h1>
      </div>
      <div className="features">
        <div className="features-col1">
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1722865839/SB_img2_dylgrz.svg"
            alt=""
          />
          <p>Forge your financial future. We will hammer out the details.</p>
        </div>
        <div className="features-col2">
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1722865839/SB_img2_dylgrz.svg"
            alt=""
          />
          <p>Financial Management made Simple</p>
        </div>
        <div className="features-col3">
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1722865839/SB_img2_dylgrz.svg"
            alt=""
          />
          <p>
            Maximize Savings and foster Long <br />
            Wealth
          </p>
        </div>
      </div>
      <div className="how-to">
        <h1>
          How to get your
          <br />
          Finances into Shape?
        </h1>
        <div className="steps">
          <div className="step-col">
            <h2>Step 1</h2>
            <h1>Track your cash flow</h1>
            <p>
              Connect your bank accounts and all your transactions will get
              automatically imported to SureBanker.
            </p>
            <p>Add your cash expenses manually.</p>
          </div>
          <div className="step-col">
            <h2>Step 2</h2>
            <h1>Understand Your Financial Habits</h1>
            <p>Analyze your spending patterns and budget accordingly.</p>
            <p>Gain insights to improve your financial habits.</p>
          </div>
          <div className="step-col">
            <h2>Step 3</h2>
            <h1>Make Your Spending Stress-Free</h1>
            <p>Set and track budgets to manage your expenses easily.</p>
            <p>Receive personalized tips to enhance your financial health.</p>
          </div>
        </div>
      </div>
      <div className="about-chart">
        <div className="AC1">
          <IncomeExpenseChart />
        </div>

        <div className="services">
          <div className="about-us">
            <span role="img" aria-label="fire">
              🔥
            </span>{" "}
            ABOUT US
          </div>
          <div className="service-card expenses">
            <h2>Expenses Tracker</h2>
            <p>
              Our comprehensive selection of medications, supplements, and
              healthcare products.
            </p>
          </div>
          <div className="service-card savings">
            <h2>Savings Tracker</h2>
            <p>
              Using advanced technology to track your savings to help you
              achieve your goals.
            </p>
          </div>
          <div className="service-card advice">
            <h2>Personal Financial Advice</h2>
            <p>
              We're committed to leveraging the latest innovations, financial
              reports, and analysis to offer advice that will help you achieve
              financial freedom.
            </p>
          </div>
        </div>
      </div>
      <div className="featured">
        <div className="featured-col1">
          <div className="feature-text">
            <span role="img" aria-label="fire">
              🔥
            </span>{" "}
            FEATURED
          </div>
          <div>
            <h1>All the features in one app</h1>
            <ul>
              <li>Track and manage all your finances with one app.</li>
              <li>
                Create personal budgets to suit your spending and saving goals.
              </li>
            </ul>
          </div>
        </div>
        <div className="featured-col2">
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1722878629/SB_img5_hydksi.svg"
            alt="Featured"
          />
        </div>
      </div>
      <div className="why">
        <div className="why-text">
          <h2>Take Control of Your FINANCES</h2>
          <p>
            Manage your finances effectively through proper expenses and
            investment tracking, budgeting, and receiving personalized financial
            advice.
          </p>
          <div className="benefits-container">
            <div className="benefits-list">
              <h2>With SureBanker you can:</h2>
              <ul>
                <li>Track your Expenses</li>
                <li>Create your Budget</li>
                <li>Set Financial Goals</li>

                <li>Investment Tracking</li>
                <li>Personalized Financial Advice</li>
                <li>Holistic Financial View and lots more</li>
              </ul>
            </div>
          </div>

          <button className="landsignin-button" onClick={handleSignupClick}>
            Sign In <span className="arrow">→</span>
          </button>
        </div>
        <div className="why-img">
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1722976116/SB_img7_g8rw9w.svg"
            alt="why-img"
          />
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonial-header">
          <div className="testimonial-text">
            <span role="img" aria-label="fire">
              🔥
            </span>{" "}
            TESTIMONIAL
          </div>
          <h2>Get to Know Our Clients</h2>
          <div className="testimonial">
            <div className="test-col1">
              <img
                src="https://res.cloudinary.com/duicyr28v/image/upload/v1723206835/SB_img8_ilpry3.svg"
                alt="test-icon"
              />

              <p>
                I like getting the personalized financial advice. I often refer
                to it, “hope you get a ping today!” because my product
              </p>
              <div className="profile-card">
                <img
                  src="https://res.cloudinary.com/duicyr28v/image/upload/v1723206835/SB_img11_xqb43r.png"
                  alt="profile"
                  className="profile-image"
                />
                <div className="profile-info">
                  <span className="profile-name">Mike Torello</span>
                  <span className="company-namex">CEO of Initech</span>
                </div>
              </div>
            </div>
            <div className="test-col2">
              <img
                src="https://res.cloudinary.com/duicyr28v/image/upload/v1723206835/SB_img8_ilpry3.svg"
                alt="test-icon"
              />
              <p>
                I like getting the personalized financial advice. I often refer
                to it, “hope you get a ping today!” because my product
              </p>
              <div className="profile-card">
                <img
                  src="https://res.cloudinary.com/duicyr28v/image/upload/v1723206835/SB_img10_zsfcdn.png"
                  alt="profile"
                  className="profile-image"
                />
                <div className="profile-info">
                  <span className="profile-name">Richards Hawkins</span>
                  <span className="company-namex">
                    Marketing Manager of Upnow
                  </span>
                </div>
              </div>
            </div>
            <div className="test-col3">
              <img
                src="https://res.cloudinary.com/duicyr28v/image/upload/v1723206835/SB_img8_ilpry3.svg"
                alt="test-icon"
              />
              <p>
                I like getting the personalized financial advice. I often refer
                to it, “hope you get a ping today!” because my product
              </p>
              <div className="profile-card">
                <img
                  src="https://res.cloudinary.com/duicyr28v/image/upload/v1723206839/SB_img9_ihl24t.svg"
                  alt="profile"
                  className="profile-image"
                />
                <div className="profile-info">
                  <span className="profile-name">Akande Samuel</span>
                  <span className="company-namex">CEO of SleekTV</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="close">
        <h2>Are you ready to start?</h2>
        <p>
          Personalize your settings, follow your progress, archive your
          <br /> highlights and notes automatically Glose is the ultimate
          reading
        </p>
        <button onClick={handleSignupClick}>
          Sign Up <span className="arrow">→</span>
        </button>
      </div>
      <footer class="footer">
        <div class="social-links">
          <a href="#" target="_blank">
            <i class="twitter">
              <img
                src="https://res.cloudinary.com/duicyr28v/image/upload/v1723216712/Footer_Icons_jn1l3g.svg"
                alt="Twitter"
              />
            </i>
          </a>
          <a href="#" target="_blank">
            <i class="facebook">
              <img
                src="https://res.cloudinary.com/duicyr28v/image/upload/v1723219025/Footer_b_ttlmik.svg"
                alt="Facebook"
              />
            </i>
          </a>
          <a href="#" target="_blank">
            <i class="instagram">
              <img
                src="https://res.cloudinary.com/duicyr28v/image/upload/v1723216711/fi_1077042_fdrwyy.svg"
                alt="Instagram"
              />
            </i>
          </a>
          <a href="#" target="_blank">
            <i class="linkedin">
              <img
                src="https://res.cloudinary.com/duicyr28v/image/upload/v1723216711/Footer_Icons4_whps3c.svg"
                alt="LinkedIn"
              />
            </i>
          </a>
        </div>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Cookie Notice</a>
          <a href="#">Copyright Policy</a>
          <a href="#">Data Policy</a>
        </div>
        <div class="copyright">
          &copy; 2024 SureBanker. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;
