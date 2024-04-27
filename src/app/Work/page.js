"use client";

import React from "react";

import Navbar from "../Components/Section/Navbar/Navbar";
import Worksection from "../Components/Section/Worksection/Worksection";

const Work = () => {
  return (
    <>
      <Navbar />
      <Worksection
        title=" 2MGAB | Master Barber"
        description="A barber website built using JavaScript, HTML, and CSS showcases a sleek and responsive design featuring services, pricing, booking functionality, and a gallery of styles. JavaScript enhances interactivity with dynamic content such as booking forms and image sliders. "
        web="https://2mgab.com/"
        img="/barberweb.png"
      />
      <Worksection
        title="Elysium Sols"
        description="A dynamic business website, crafted with JavaScript, Next.js, and Tailwind CSS, showcases an engaging design with smooth animations. Featuring a comprehensive portfolio, a dedicated team section, and client testimonials, it highlights the company's expertise and credibility."
        web="https://2mgab.com/"
        img="/elysium.png"
        workclass="work-main2"
      />
      <Worksection
        title="Nick Roffies"
        description="Project Statement: Nick Roffeis is from Austria and advertising design student in Berlin.Overview: This website is developed with HTML5, CSS3 and for animations I have used JQuery."
        web="https://sleepy-curie-1851c9.netlify.app/"
        img="/NickRoffies.png"
      />
      <Worksection
        title="Bodega"
        description="A barber website built using JavaScript, HTML, and CSS showcases a sleek and responsive design featuring services, pricing, booking functionality, and a gallery of styles. JavaScript enhances interactivity with dynamic content such as booking forms and image sliders. "
        web="https://2mgab.com/"
        img="/bodega.png"
        workclass="work-main2"
      />
      <Worksection
        title=" 127 Sports Intensity"
        description="A barber website built using JavaScript, HTML, and CSS showcases a sleek and responsive design featuring services, pricing, booking functionality, and a gallery of styles. JavaScript enhances interactivity with dynamic content such as booking forms and image sliders. "
        web="https://2mgab.com/"
        img="/127sportsintensity.png"
      />
    </>
  );
};
export default Work;
