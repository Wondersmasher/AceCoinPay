import React from "react";
import "../assets/css/atm.css";
import { Chip, Wifi } from "../assets/svg/Svg";
const ATM = () => {
  return (
    <div className="atm-container">
      <div className="card-atm-and-wifi">
        <Chip /> <Wifi />
      </div>
      <div className="atm-name-pin">
        <p className="atm-name">Jonathan Michael</p>
        <p className="atm-pin">**** 3456</p>
      </div>
      <div className="expiry-date-mastercard-container">
        <p>09/22</p>
        <div className="image">
          <img src="/mastercard.png" alt="mastercard" />
          <p>Mastercard</p>
        </div>
      </div>
    </div>
  );
};

export default ATM;
