"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Navbar from "../Components/Section/Navbar/Navbar";
const About = () => {
  const Image = "/aboutimage.jpeg";

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className=" bg-[#202020] relative">
      <Navbar />
      <div className="about-main">
        <motion.div
          className=" about-pic"
          initial="hidden"
          ref={ref}
          animate={controls}
          transition={{ type: "spring", duration: 3 }}
          variants={{
            hidden: { x: 500, opacity: 0 },

            visible: { x: 0, opacity: 1 },
          }}
        >
          <img className="pic" src={Image} alt="" />
        </motion.div>
        <div className="about-content  ">
          <div className="mx-auto text-left ">
            <div className="about-border ">
              <h2 className="heading">Hammad ahmed</h2>
              <p className="about-para">
                I am Hammad Ahmed, from Pakistan living in Islamabad, where I
                work as a Frontend developer. When I am not working I love to
                Playing Cricket, Traveling, Reading, watching seasons, Movies
                and spending time with family and friends.
              </p>
            </div>
            <div>
              <div className="about-border">
                <h2 className="heading">Mern Stack Developer</h2>
                <p className="about-para">
                  Welcome to my portfolio! I am a passionate MERN Stack
                  developer with a drive for crafting engaging and dynamic web
                  applications. With a foundation in MongoDB, Express.js,
                  React.js, and Node.js, I specialize in building robust,
                  scalable, and efficient full-stack solutions.
                </p>
              </div>
            </div>
            <div>
              <div className="about-border">
                <h2 className="heading">Experience</h2>
                <p className="about-para">
                  I have 2 years of experience. In the past years I have worked
                  for <strong className="red">Telenor</strong>,{" "}
                  <strong className="red">Jedah Soft</strong>, and{" "}
                  <strong className="red">Elysium Sols</strong>,.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
