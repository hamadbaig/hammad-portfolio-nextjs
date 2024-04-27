"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Main = () => {
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
    <section className="home-main">
      <div className="navbaar">
        <a href="#" className="">
          <FaFacebook className="home-icon" />
        </a>
        <a href="#" className="">
          <FaInstagram className="home-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/hammad-ahmed-340aa3218/"
          className=""
        >
          <FaLinkedin className="home-icon" />
        </a>
        <div className="" onClick={handleToggle}>
          {isContentVisible ? (
            <FaTimes className="home-icon" />
          ) : (
            <FaBars className="home-icon" />
          )}
        </div>
      </div>
      {isContentVisible && (
        <div className="content-div">
          <div className=" options ">
            <a href="/">HOME</a>
          </div>
          <div className=" options  ">
            <a href="/Aboutus">ABOUT</a>
          </div>
          <div className=" options ">
            <a href="/Work">WORK</a>
          </div>
          <div className=" options ">
            <a href="/Contact">CONTACT</a>
          </div>
        </div>
      )}

      <div className="intro-div">
        <motion.div
          initial="hidden"
          ref={ref}
          animate={controls}
          transition={{ type: "spring", duration: 1, delay: 0.3 }}
          variants={{
            hidden: { y: 100, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className="white"
        >
          Hello
        </motion.div>
        <motion.div
          initial="hidden"
          ref={ref}
          animate={controls}
          transition={{ type: "spring", duration: 1, delay: 0.6 }}
          variants={{
            hidden: { y: 100, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className=""
        >
          I am
        </motion.div>
        <motion.div
          initial="hidden"
          ref={ref}
          animate={controls}
          transition={{ type: "spring", duration: 1, delay: 0.9 }}
          variants={{
            hidden: { y: 100, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className="white"
        >
          Hammad{" "}
        </motion.div>
        <motion.div
          initial="hidden"
          ref={ref}
          animate={controls}
          transition={{ type: "spring", duration: 1, delay: 1.2 }}
          variants={{
            hidden: { y: 100, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className="top-border"
        >
          Mern Stack Developer
        </motion.div>
        <motion.div
          initial="hidden"
          ref={ref}
          animate={controls}
          transition={{ type: "spring", duration: 1, delay: 1.5 }}
          variants={{
            hidden: { y: 100, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className=" border"
        >
          Work
        </motion.div>
      </div>
    </section>
  );
};
export default Main;
