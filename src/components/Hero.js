import React from "react";
import "../css/Hero.css";
import Image from "../assets/cropped image.jpg";

const Hero = () => {
  return (
    <div className="hero">
        <div className="content-img">
          <img className="into-img" src={Image} alt="img" />
        </div>
        {/* <div className="content">
          <h1>Hi</h1>
          <h1>I'm Uddeshya</h1>
        </div> */}
    </div>
  );
};

export default Hero;
