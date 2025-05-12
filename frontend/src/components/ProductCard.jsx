// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ 
  name = "Aceite la avorita", 
  category = "Categoría", 
  price = 1900, 
  regularPrice = 3000, 
  imageUrl = "/public/aceite.jpg" 
}) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageUrl} alt={name} />
        <span className="discount-badge"></span> {/* aqui va el decuento pero esta feo*/}
      </div>
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-category">{category}</p>
        <div className="product-prices">
          <span className="current-price">${price.toLocaleString()}</span>
          {regularPrice && (
            <span className="regular-price">${regularPrice.toLocaleString()}</span>
          )}
        </div>
        <button className="add-to-cart-btn">🛒 Añadir al carrito</button>
      </div>
    </div>
  );
};

export default ProductCard;
