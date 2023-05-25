import React from "react";
import "../assets/css/card-number.css";
import { Bag, Pen, Verified } from "../assets/svg/Svg";
const CardNumber = ({ handleCardNumberChange , CardNumber}) => {
  return (
    <div className="card-number">
      <div className="card-number-title-icon-container">
        <div className="card-number-title">
          <p>Card Number</p>
          <span>Enter the 16-digit card number on the card</span>
        </div>
        <div className="card-number-icon">
          <Pen />
          <p>Edit</p>
        </div>
      </div>
      <div className="card-input-container">
        <img
          src="/mastercard.png"
          alt="mastercard"
          className="mastercard-img"
        />
        <input type="text" value={CardNumber} onChange={handleCardNumberChange} id="card-number" name="card-number"/>
        <Verified />
      </div>
    </div>
  );
};

export default CardNumber;
