import React from 'react';
import './styles/Cart.css';
import { useCart } from '../contexts/CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  const handleQuantityChange = (productId, event) => {
    updateQuantity(productId, parseInt(event.target.value));
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="cart-item-details">
              <h2>{item.title}</h2>
              <p>${item.price}</p>
              <input 
                type="number" 
                min="1" 
                value={item.quantity} 
                onChange={(event) => handleQuantityChange(item.id, event)} 
              />
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total Items: {totalItems}</h2>
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default Cart;
