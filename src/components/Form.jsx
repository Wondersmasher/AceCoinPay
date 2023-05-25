import React from "react";
import Icons from "./Icons";
import CardNumber from "./CardNumber";
import Cvv from "./Cvv";
import ExpiryDate from "./ExpiryDate";
import Password from "./Password";

const Form = ({
  handleCardNumberChange,
  handleCvvChange,
  handleExpiryDateChange,
  handlePasswordChange,
  cardNumber,
  cvv,
  expiryDate,
  password,
  handleExpiryDateChange2,
  expiryDate2,
}) => {
  return (
    <div className="form">
      <Icons />
      <CardNumber
        handleCardNumberChange={handleCardNumberChange}
        cardNumber={cardNumber}
      />
      <Cvv handleCvvChange={handleCvvChange} cvv={cvv} />
      <ExpiryDate
        handleExpiryDateChange={handleExpiryDateChange}
        expiryDate={expiryDate}
        handleExpiryDateChange2={handleExpiryDateChange2}
        expiryDate2={expiryDate2}
      />
      <Password
        handlePasswordChange={handlePasswordChange}
        password={password}
      />
      <button>Pay Now</button>
    </div>
  );
};

export default Form;
