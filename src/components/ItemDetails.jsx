import React from "react";
import CardDetails from "./CardDetails";
import YouHaveToPay from "./YouHaveToPay";
import ATM from "./ATM";

const ItemDetails = () => {
  return (
    <div className="item-details-container">
      <ATM />
      <CardDetails />
      <hr />
      <YouHaveToPay />
    </div>
  );
};

export default ItemDetails;
