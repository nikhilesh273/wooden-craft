// src/components/QuoteSection.jsx
import React from 'react';
import './css/QuoteSection.css';

const QuoteSection = () => {
  return (
    <section className="quote-section">
      <div className="quote-container">
        <blockquote>
          “Nature doesn’t hurry, yet everything is accomplished.” 
          <cite>— Lao Tzu</cite>
        </blockquote>
        <p className="quote-subtext">
          Bring the calm of forests, oceans, and gardens into your space — one terrarium at a time.
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;