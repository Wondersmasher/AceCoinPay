import React from "react";
import "../assets/css/card-details.css";
import {  BookMark } from "../assets/svg/Svg";
const CardDetails = () => {
  return (
    <div className="card-details-container">
      <div className="card-detail-item">
        <p className="card-title">Company</p>
        <div className="item-with-icon">
          <BookMark />
          <p className="card-title-content">Apple</p>
        </div>
      </div>
      <div className="card-detail-item">
        <p className="card-title">Order Number</p>
        <p className="card-title-content">1266201</p>
      </div>
      <div className="card-detail-item">
        <p className="card-title">Product</p>
        <p className="card-title-content">MacBook Air</p>
      </div>
      <div className="card-detail-item">
        <p className="card-title">VAT (20%)</p>
        <p className="card-title-content">$100.00</p>
      </div>
    </div>
  );
};

export default CardDetails;
