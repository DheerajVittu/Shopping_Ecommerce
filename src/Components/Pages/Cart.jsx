import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import Navbar from '../Navbar/Navbar';
import './Cart.css';
import Footer from '../Footer/fotter';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    function getItems() {
      const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
      storedCartItems.forEach(item => item.quantity = 1); 
      setCartItems(storedCartItems);
    }
    getItems();
  }, []);

  const handleRemove = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: Number(quantity) } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="cart-page">
        <h2>Your Cart</h2>
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                onRemove={handleRemove} 
                onQuantityChange={handleQuantityChange} 
              />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <CartSummary total={total} />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Cart;
