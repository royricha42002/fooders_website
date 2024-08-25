// src/Pages/Menu.jsx
import React from 'react';
import { Link } from "react-router-dom";
const Menu = () => {
  const menuData = [
    {
      cuisine: "Indian",
      sections: [
        {
          name: "Starters",
          items: [
            { name: "Paneer Tikka", price: "10" },
            { name: "Samosa", price: "5" },
            { name: "Chole Bhature", price: "12" },
            { name: "Aloo Tikki", price: "7" },
            { name: "Veg Pakora", price: "6" },
          ],
        },
        {
          name: "Main Course",
          items: [
            { name: "Butter Chicken", price: "15" },
            { name: "Palak Paneer", price: "14" },
            { name: "Biryani", price: "13" },
            { name: "Dal Makhani", price: "10" },
            { name: "Rogan Josh", price: "16" },
          ],
        },
        {
          name: "Breads",
          items: [
            { name: "Naan", price: "3" },
            { name: "Roti", price: "2" },
            { name: "Paratha", price: "4" },
          ],
        },
      ],
    },
    {
      cuisine: "Chinese",
      sections: [
        {
          name: "Starters",
          items: [
            { name: "Spring Rolls", price: "8" },
            { name: "Manchow Soup", price: "7" },
            { name: "Veg Momos", price: "6" },
            { name: "Chilli Paneer", price: "9" },
            { name: "Honey Chilli Potato", price: "8" },
          ],
        },
        {
          name: "Main Course",
          items: [
            { name: "Fried Rice", price: "12" },
            { name: "Hakka Noodles", price: "10" },
            { name: "Schezwan Noodles", price: "11" },
            { name: "Kung Pao Tofu", price: "13" },
            { name: "Sweet and Sour Vegetables", price: "12" },
          ],
        },
      ],
    },
    {
      cuisine: "Italian",
      sections: [
        {
          name: "Starters",
          items: [
            { name: "Bruschetta", price: "7" },
            { name: "Garlic Bread", price: "6" },
          ],
        },
        {
          name: "Main Course",
          items: [
            { name: "Margherita Pizza", price: "14" },
            { name: "Pasta Alfredo", price: "13" },
            { name: "Lasagna", price: "15" },
            { name: "Risotto", price: "12" },
          ],
        },
      ],
    },
  ];

  const beverages = [
    { name: "Coke", price: "3" },
    { name: "Lemonade", price: "4" },
    { name: "Mango Lassi", price: "5" },
    { name: "Masala Chai", price: "2" },
    { name: "Iced Coffee", price: "4" },
  ];

  const desserts = [
    { name: "Gulab Jamun", price: "5" },
    { name: "Rasgulla", price: "5" },
    { name: "Tiramisu", price: "6" },
    { name: "Cheesecake", price: "7" },
    { name: "Brownie with Ice Cream", price: "8" },
  ];

  return (
    <div className="menu-page">
      {menuData.map((cuisine, index) => (
        <div className="cuisine-section" key={index}>
          <h2>{cuisine.cuisine}</h2>
          {cuisine.sections.map((section, idx) => (
            <div className="menu-section" key={idx}>
              <h3>{section.name}</h3>
              <div className="menu-items">
                {section.items.map((item, i) => (
                  <div className="menu-item" key={i}>
                    <span>{item.name}</span>
                    <span>Rs {item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
      <div className="beverages-section">
        <h2>Beverages</h2>
        <div className="menu-items">
          {beverages.map((item, i) => (
            <div className="menu-item" key={i}>
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="desserts-section">
        <h2>Desserts</h2>
        <div className="menu-items">
          {desserts.map((item, i) => (
            <div className="menu-item" key={i}>
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="back-home">
        <Link to={"/"}>
          <button className="back-home-button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
