import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At Fooders, we're passionate about creating unforgettable culinary experiences that bring people together. Established in 2020, our journey began with a simple idea: to craft exceptional dishes using the freshest, highest-quality ingredients. Today, we blend traditional flavors with innovative techniques to deliver a menu that's both diverse and delightful. Our commitment to sustainability and community involvement reflects our belief that great food should be enjoyed responsibly. Join us and discover why we're the go-to destination for food lovers in Dehradun.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" style={{ width: "100%", maxWidth: "600px", height: "auto" }}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
