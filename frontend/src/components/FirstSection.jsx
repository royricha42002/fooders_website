import React from "react";
import Navbar from "./Navbar.jsx";

const FirstSection = () => {
  return (
    <section className="firstSection" id="firstSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="imageBox">
            <img src="./main.png" alt="Delicious dishes" />
          </div>
          <div className="textBox">
            <h1 className="title">WELCOME FOODIES!!!</h1>
            <p className="description">
              Discover delicious dishes and a warm atmosphere at our restaurant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
