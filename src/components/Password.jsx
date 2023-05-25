import React from "react";
import "../assets/css/password.css";
import { DialPad } from "../assets/svg/Svg";
const Password = ({ password, handlePasswordChange }) => {
  return (
    <div className="password-container">
      <div className="password-title">
        <p>Password</p>
        <span>Enter your Dynamic password</span>
      </div>
      <div className="password-input-container">
        <input
          onChange={handlePasswordChange}
          value={password}
          name="password"
          id="password"
          required
          type="password"
        />
        <DialPad />
      </div>
    </div>
  );
};

export default Password;
