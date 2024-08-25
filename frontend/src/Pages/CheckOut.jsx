import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'; // Make sure to style it according to your needs
import {loadStripe} from '@stripe/stripe-js';

const Checkout = () => {
  const navigate = useNavigate();
  
  

  const handleBackToOrderOnline = () => {
    navigate('/orderonline');
  };

  // Load cart and customer details from localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const customerDetails = JSON.parse(localStorage.getItem('customerDetails')) || {};

  const getTotalPrice = () => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toFixed(2);
  };

  const getGST = (amount) => {
    const gstRate = 0.18; // 18% GST
    return (amount * gstRate).toFixed(2);
  };

  const getFinalAmount = () => {
    const total = parseFloat(getTotalPrice());
    const gst = parseFloat(getGST(total));
    return (total + gst).toFixed(2);
  };

  const handleProceedToPayment = async() => {
    
    navigate('/successfullpayment');
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout-summary">
        <h2>Order Summary</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} x {item.quantity}: ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p>Subtotal: ${getTotalPrice()}</p>
        <p>GST (18%): ${getGST(getTotalPrice())}</p>
        <h2>Total Amount: ${getFinalAmount()}</h2>
        <div className="delivery-details">
          <h2>Delivery Address</h2>
          <p>Name: {customerDetails.name}</p>
          <p>Phone: {customerDetails.phone}</p>
          <p>Address: {customerDetails.address}</p>
        </div>
        <div className="checkout-buttons">
          <button className="back-to-order-button" onClick={handleBackToOrderOnline}>Make Changes</button>
          <button 
          className="proceed-button" onClick={handleProceedToPayment}
          >Proceed to Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
