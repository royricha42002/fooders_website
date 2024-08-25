import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css'; // Import the CSS file for styling

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const updateQuantity = (index, quantity) => {
    const updatedCart = [...cart];
    if (quantity > 0) {
      updatedCart[index].quantity = quantity;
    } else {
      updatedCart.splice(index, 1); // Remove item if quantity is 0
    }
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    localStorage.setItem('customerDetails', JSON.stringify(customerDetails));
    navigate('/checkout');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h2 className="cart-item-name">{item.name}</h2>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(index, parseInt(e.target.value, 10) || 0)}
                    min="0"
                  />
                  <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h2>Total: ${getTotalPrice()}</h2>
            <div className="customer-details">
              <h3>Customer Details</h3>
              <input
                type="text"
                name="name"
                value={customerDetails.name}
                onChange={handleChange}
                placeholder="Name"
                className="customer-input"
              />
              <input
                type="tel"
                name="phone"
                value={customerDetails.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="customer-input"
              />
              <input
                type="text"
                name="address"
                value={customerDetails.address}
                onChange={handleChange}
                placeholder="Address"
                className="customer-input"
              />
            </div>
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
