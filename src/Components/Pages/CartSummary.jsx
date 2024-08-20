// src/components/CartSummary.js

import React from 'react';

const CartSummary = ({ total }) => {
  const shipping = total > 1000 ? 0 : 10; 
  const tax = total * 0.1; 
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart-summary">
      <h3>Cart Summary</h3>
      <p>Subtotal: {total.toFixed(2)}</p>
      <p>Shipping: {shipping.toFixed(2)}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h4>Total: {grandTotal.toFixed(2)}</h4>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default CartSummary;
