// src/components/AnimatedCounter.jsx
import React from 'react';
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }) => {
  return (
    <div className="w-full">
      <CountUp 
        decimals={2}
        decimal=","
        prefix="$"
        end={amount} 
      />
    </div>
  );
};

export default AnimatedCounter;
