// src/components/ShopSection.jsx
import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products'; // fallback
import './css/ShopSection.css';

const ShopSection = ({ products: passedProducts = null }) => {
  const productsToShow = passedProducts || products;

  return (
    <section className="shop-section">
      <h2>Amazing Aquarium Collection</h2>
      <div className="product-grid">
        {productsToShow.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ShopSection;