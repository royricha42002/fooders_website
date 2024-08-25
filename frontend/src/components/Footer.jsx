
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">FOODERS</div>
          <div className="right">
            <p style={{ color: '#9d2d3e'}}>ABC Road, Near XYZ Society, Dehradun, 248003</p>
            <p style={{ color: '#9d2d3e'}}>Open: 08:00 AM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p style={{ color: '#9d2d3e'}}>Developed By Richa Roy</p>
          </div>
          <div className="right">
            <p style={{ color: '#9d2d3e'}}>All Rights Reserved By Richa Roy.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
