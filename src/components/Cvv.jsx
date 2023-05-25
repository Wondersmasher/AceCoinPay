import React from "react";
import "../assets/css/cvv.css";
import { Bag, DialPad } from "../assets/svg/Svg";
const Cvv = ({ handleCvvChange, cvv }) => {
  return (
    <div className="cvv-container">
      <div className="cvv-title">
        <p>CVV Number</p>
        <span>Enter the 3 or 4 digit on the card</span>
      </div>
      <div className="cvv-input-container">
        <input
          type="text"
          value={cvv}
          onChange={handleCvvChange}
          id="cvv"
          name="cvv"
        />
        <DialPad />
      </div>
    </div>
  );
};

export default Cvv;
