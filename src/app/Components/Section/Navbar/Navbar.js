import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleToggle = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="navbaar">
      <a href="#" className="social-icon">
        <FaFacebook className="home-icon" />
      </a>
      <a href="#" className="social-icon">
        <FaInstagram className="home-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/hammad-ahmed-340aa3218/"
        className="social-icon"
      >
        <FaLinkedin className="home-icon" />
      </a>
      <div className="toggle-icon" onClick={handleToggle}>
        {isContentVisible ? (
          <FaTimes className="home-icon" />
        ) : (
          <FaBars className="home-icon" />
        )}
      </div>

      {isContentVisible && (
        <div className="content-div1">
          <div className="options">
            <a href="/">HOME</a>
          </div>
          <div className="options">
            <a href="/Aboutus">ABOUT</a>
          </div>
          <div className="options">
            <a href="/Work">WORK</a>
          </div>
          <div className="options">
            <a href="/Contact">CONTACT</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
