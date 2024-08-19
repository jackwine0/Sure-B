import React from 'react'

const Advice = ({ title, subtitle }) => {
  return (
    <div className="home-content">
      <div className="welcome">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Advice