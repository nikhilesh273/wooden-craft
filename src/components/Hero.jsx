import React from "react";
import "./css/Hero.css";
const Hero = () => {
  return (
    <section className="hero">
      {/* Background Image */}
      <img src="/hero-2.jpg" alt="Fish Banner" className="hero-bg" />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>Amazing Aquarium Collection</h1>
        <p>
          Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>

        <button className="hero-btn">Shop Now →</button>

        {/* Slider dots */}
        <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
