// src/components/OrderModal.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FaWhatsapp } from 'react-icons/fa';
import './css/OrderModal.css';

const OrderModal = ({ isOpen, onClose, cartItems }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { createOrder } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      createOrder(name, email, phone);
      onClose();
    }
  };

  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>🛒 Review Your Order</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* Cart Preview */}
        <div className="cart-preview">
          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <span>{item.name}</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)} ({item.quantity})</span>
                </div>
              ))}
              <div className="cart-total">
                <strong>Total: ₹{total.toFixed(2)}</strong>
              </div>
            </>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone (for WhatsApp)</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 9876543210"
              required
            />
          </div>

          <button type="submit" className="confirm-btn">
            <FaWhatsapp /> Confirm Order on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;