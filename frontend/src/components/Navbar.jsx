import React, { useState, useEffect } from "react";
import { data } from "../restApi.json";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated (e.g., by checking if a token is stored)
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleOrderOnlineClick = () => {
    if (!isAuthenticated) {
      navigate('/signup');
    } else {
      navigate('/orderonline');
    }
  };

  return (
    <nav>
      <div className="logo">FOODERS</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => (
            <ScrollLink
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              key={element.id}
            >
              {element.title}
            </ScrollLink>
          ))}
        </div>
        <div>
          <button className="menuBtn" onClick={handleOrderOnlineClick}>
            ORDER ONLINE
          </button>
          <RouteLink to="/menu">
            <button className="menuBtn">
              OUR MENU
            </button>
          </RouteLink>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
