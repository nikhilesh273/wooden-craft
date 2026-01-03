// src/context/CartContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // NEW: Generate WhatsApp order link
  const createOrder = (name, email, phone) => {
    let message = `*New Order from TerrariumCraft!*\n\n`;
    message += `*Customer:* ${name}\n`;
    message += `*Email:* ${email}\n`;
    message += `*Phone:* ${phone}\n\n`;
    message += `*Items:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ₹${item.price.toFixed(2)} x ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}\n`;
    });

    message += `\n*Total:* ₹${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}`;

    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    // Replace with your WhatsApp number (include country code, no +, no spaces)
    const whatsappNumber = '919876543210'; // 👈 UPDATE THIS!

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    // Clear cart after order
    clearCart();
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      createOrder,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);