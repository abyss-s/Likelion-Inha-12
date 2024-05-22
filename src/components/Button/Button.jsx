import "./Button.css";
import React from "react";

const Button = ({ btnText, className, onClick }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      <p>{btnText}</p>
    </button>
  );
};

export default Button;
