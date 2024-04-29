import React from "react";
import { motion, useAnimation } from "framer-motion";

const Worksection = ({ img, title, description, web, workclass }) => {
  const controls = useAnimation();
  const ref = React.useRef();
  return (
    <div className={`work-main ${workclass}`}>
      <div className="work-img-div">
        <img src={img} alt="Sliding Image" className="sliding-image" />
        <div className="hover">Hover me</div>
      </div>
      <div className="desc-project">
        <h2 className="text-4xl font-bold text-left">{title}</h2>
        <p className="text-2xl text-left">{description}</p>
        <a href={web}>
          <button className="border">Visit Website</button>
        </a>
      </div>
    </div>
  );
};

export default Worksection;
