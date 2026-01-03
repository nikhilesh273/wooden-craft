// src/components/AboutSection.jsx
import React from 'react';
import './css/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="/about-terarium.jpg"
            alt="Handcrafted Terrarium Workshop"
          />
        </div>
        <div className="about-content">
          <h2 className="about-title">About Our Terrarium World</h2>
          <p className="about-text">
            We are passionate creators crafting unique wooden terrariums, tissue culture displays, and aquatic ecosystems. 
            Every piece is hand-assembled with sustainably sourced materials and a deep love for nature.
          </p>
          <p className="about-text">
            Founded in 2023, our mission is to bring the calm and beauty of miniature natural worlds into homes, offices, 
            and urban spaces — helping you reconnect with nature, even in the busiest environments.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">🌿</span>
              <div>
                <h3>Eco-Friendly Materials</h3>
                <p>Reclaimed wood, recyclable glass, and non-toxic sealants</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">💧</span>
              <div>
                <h3>Self-Sustaining</h3>
                <p>Low-maintenance ecosystems that thrive for months</p>
              </div>
            </div>
          </div>
          <button className="about-btn">Read Our Story →</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;