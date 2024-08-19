// src/components/BankCardsCarousel.jsx
import React, { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css'; // Import Flickity CSS
import BankCard from './BankCard';
import '../css/BankCardsCarousel.css';

const BankCardsCarousel = ({ banks = [] }) => {
  const flickityRef = useRef(null);

  useEffect(() => {
    if (flickityRef.current) {
      new Flickity(flickityRef.current, {
        wrapAround: true,      // Allows for continuous scrolling
        autoPlay: true,        // Automatically move to the next card
        cellAlign: 'center',   // Align the card in the center of the viewport
        contain: true,         // Ensure the carousel is contained within its parent
        pageDots: false,       // Hide page dots
        prevNextButtons: false // Hide previous/next buttons
      });
    }
  }, [banks]);

  return (
    <div className="gallery js-flickity" ref={flickityRef}>
      {banks.map((bank, index) => (
        <div className="gallery-cell" key={index}>
          <BankCard
            cardNumber={bank.cardNumber}
            name={bank.name}
            expiryDate={bank.expiryDate}
            bankName={bank.bankName}
          />
        </div>
      ))}
    </div>
  );
};

export default BankCardsCarousel;
