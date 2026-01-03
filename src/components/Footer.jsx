// src/components/Footer.jsx
import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Column 1: Logo + Description */}
          <div className="footer-col">
            <div className="footer-logo">
              <span className="logo-icon">🌿</span>
              <h2>TerrariumCraft</h2>
            </div>
            <p className="footer-desc">
              Handcrafted wooden terrariums, tissue culture displays, and aquatic ecosystems that bring nature indoors.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">i</a>
              <a href="#" aria-label="Pinterest">p</a>
              <a href="#" aria-label="YouTube">y</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>📍 123 Nature Lane, Wayanad, India</li>
              <li>✉️ hello@terrariumcraft.com</li>
              <li>📞 +91 98765 43210</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col">
            <h3>Newsletter</h3>
            <p>Subscribe for updates & exclusive offers</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Your Email"
                required
              />
              <button type="submit">→</button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} TerrariumCraft. All rights reserved.</p>
          <p>Designed with ❤️ for nature lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;