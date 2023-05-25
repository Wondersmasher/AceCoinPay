import React from "react";
import "../assets/css/titleIcon.css";
import { Bag } from "../assets/svg/Svg";
const Icons = () => {
  return (
    <div className="title-icon">
      <div className="container">
        <div className="avatar"><Bag/></div>
        <p>
          AceCoin<span>Pay</span>
        </p>
      </div>
      <div className="timer">
        <p>0</p>
        <p>1</p>
        <div>:</div>
        <p>1</p>
        <p>9</p>
      </div>
    </div>
  );
};

export default Icons;
