import "./Button.css";
import React from "react";

const Button = ({ btnText, handleClick, className }) => {
  return (
    <button className={`btn ${className}`} 
      onClick={handleClick}>
      <p>{btnText}</p>
    </button>
  );
};

export default Button;
