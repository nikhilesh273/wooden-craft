// src/components/CartModal.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-[#1e1e1e] p-6 rounded-lg w-full max-w-md max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Cart ({cart.length} items)</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">&times;</button>
        </div>

        {cart.length === 0 ? (
          <p className="text-center py-8 text-gray-400">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4 mb-4">
              {cart.map(item => (
                <div key={item.id} className="flex items-center gap-4 p-3 bg-[#121212] rounded">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded" />
                  <div className="flex-1">
                    <h3 className="text-sm">{item.name}</h3>
                    <p className="text-[#64ffda]">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-sm px-2 py-1 bg-[#121212] rounded"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-sm px-2 py-1 bg-[#121212] rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 ml-2"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-4">
                <span>Total:</span>
                <span className="text-[#64ffda] font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={clearCart}
                  className="btn btn-outline flex-1"
                >
                  Clear Cart
                </button>
                <button className="btn btn-primary flex-1">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;