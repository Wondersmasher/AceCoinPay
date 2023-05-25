import { useState } from "react";
import "./assets/css/app.css";
import Form from "./components/Form";
import ItemDetails from "./components/ItemDetails";
function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [password, setPassword] = useState("");
  const [expiryDate2, setExpiryDate2] = useState("");
  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };
  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };
  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };
  const handleExpiryDateChange2 = (e) => {
    setExpiryDate2(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      cardNumber &&
      cvv.length > 3 &&
      expiryDate.length === 2 &&
      expiryDate2.length === 2 &&
      password >= 8
    ) {
      alert(
        `Your details are listed below \n Card Number: ${cardNumber} \n CVV: ${cvv} \n Expiry Date: ${expiryDate} / ${expiryDate2} \n Password: ${password}`
      );
    } else {
      alert("You need to input all the fields correctly");
    }
  };
  return (
    <div className="app">
      <Form
        handleCardNumberChange={handleCardNumberChange}
        handleCvvChange={handleCvvChange}
        handleExpiryDateChange={handleExpiryDateChange}
        handleExpiryDateChange2={handleExpiryDateChange2}
        handlePasswordChange={handlePasswordChange}
        cardNumber={cardNumber}
        cvv={cvv}
        expiryDate={expiryDate}
        expiryDate2={expiryDate2}
        password={password}
      />
      <ItemDetails />
      <button type="submit" className="small-screen-button" onClick={onSubmit}>
        Pay
      </button>
    </div>
  );
}

export default App;
