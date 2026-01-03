// src/components/Navbar.jsx
import { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import OrderModal from "./OrderModal";
import "./css/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const { cart, totalItems } = useCart();

  return (
    <header className="navbar-container">
      {/* Top Info Bar */}
      <div className="topbar">
        <div className="topbar-left">
          <span>📍 123 Sample Ave, FL, USA 2345</span>
          <span>✉️ info@aquafy.com</span>
          <span>📞 (800) 123-6789</span>
        </div>
        <div className="topbar-right">
          <FaUser /> <span>My Account</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <span className="logo-icon">🐠</span>
          <h2>AQUAFY</h2>
        </div>

        {/* Desktop Menu */}
        <ul className="menu desktop-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        {/* Icons */}
        <div className="icons desktop-icons">
          <FaSearch className="icon" />
          <div className="icon-badge">
            <FaHeart className="icon" />
            <span>3</span>
          </div>
          <div className="icon-badge" onClick={() => setShowOrderModal(true)}>
            <FaShoppingCart className="icon" />
            {totalItems > 0 && <span>{totalItems}</span>}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-toggle" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="menu mobile-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#contact">Contact Us</a></li>
          {totalItems > 0 && (
            <li>
              <button
                className="mobile-order-btn"
                onClick={() => {
                  setShowOrderModal(true);
                  setOpen(false);
                }}
              >
                🛒 Order Now ({totalItems})
              </button>
            </li>
          )}
        </ul>
      )}

      {/* Order Modal */}
      <OrderModal
        isOpen={showOrderModal}
        onClose={() => setShowOrderModal(false)}
        cartItems={cart}
      />
    </header>
  );
};

export default Navbar;