import React from "react";
import "./Reason.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
const Reason = () => {
  return (
    <div className="reasons">
      <div className="left-r">
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image3} />
      </div>
      <div className="right-r">
        <span>Some Resons</span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose us ?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>over 140 years </span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>train smater with us</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program </span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>work and trust us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
