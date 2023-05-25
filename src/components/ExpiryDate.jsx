import React from "react";
import "../assets/css/expiry-date.css";
const ExpiryDate = ({handleExpiryDateChange, handleExpiryDateChange2, expiryDate, expiryDate2}) => {
  return (
    <div className="expiry-date-container">
      <div className="expiry-date-title">
        <p>Expiry Date</p>
        <span>Enter the expiration date of the card</span>
      </div>
      <div className="expiry-date-input-container">
        <input type="text"  onChange={handleExpiryDateChange} value={expiryDate} name="expiry-date" id="expiry-date"/>
        /
        <input type="text" onChange={handleExpiryDateChange2} value={expiryDate2} name="expiry-date-2" id="expiry-date-2" />
      </div>
    </div>
  );
};

export default ExpiryDate;
