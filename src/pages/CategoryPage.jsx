// src/pages/CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import '../components/css/CategoryPage.css';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName);

  // Filter products
  const filteredProducts = products.filter(
    p => p.category === decodedCategory
  );

  return (
    <div className="category-page">
      <div className="container">
        <h1 className="category-title">{decodedCategory}</h1>
        {filteredProducts.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;