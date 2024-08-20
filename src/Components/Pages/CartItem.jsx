// src/components/CartItem.js

import React from 'react';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  console.log(item);
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.productname} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.productname}</h4>
        <p>Price: {item.price}</p>
        <div className="cart-item-quantity">
          <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
          <input 
            type="number" 
            id={`quantity-${item.id}`} 
           
            onChange={(e) => onQuantityChange(item.id, e.target.value)} 
          />
        </div>
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
