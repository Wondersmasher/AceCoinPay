import React from "react";
import "../assets/css/you-have-to-pay.css";
import { BookMark } from "../assets/svg/Svg";
const YouHaveToPay = () => {
  return (
    <div className="you-have-to-pay-container">
      <div className="pay">
        <p>You have to Pay</p>
        <p className="price">
          549<span className="span-1">.99</span>{" "}
          <span className="span-2">USD</span>
        </p>
      </div>
      <BookMark />
    </div>
  );
};

export default YouHaveToPay;
