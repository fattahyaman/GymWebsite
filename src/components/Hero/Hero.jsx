import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>The Best Fitness Club in the city</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              in here we will help you to Shape and build your idela body and
              live up your life and enjoy
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>member joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness program</span>
          </div>
        </div>
        <div className="left-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">right side</div>
    </div>
  );
};

export default Hero;
