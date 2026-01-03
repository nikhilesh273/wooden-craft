// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ShopSection from '../components/ShopSection';
import { categories } from '../data/products';
import '../components/css/Home.css';

const Home = () => {
  return (
    <div>
      {/* Category Bar */}
      <div className="category-bar">
        <div className="category-container">
          {categories.map(cat => (
            <Link
              key={cat}
              to={cat === "All" ? "/shop" : `/category/${cat}`}
              className="category-link"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Products */}
      <ShopSection products={null} /> {/* Will show all products */}
    </div>
  );
};

export default Home;