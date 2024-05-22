import "./Button.css";
import React from "react";

const Button = ({ btnText, className }) => {
  return (
    <button className={`btn ${className}`}>
      <p>{btnText}</p>
    </button>
  );
};

export default Button;
