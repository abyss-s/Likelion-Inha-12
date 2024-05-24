import "./Button.css";
import React from "react";

const Button = ({ btnText, className, onClick, backgroundColor, color }) => {
  const buttonStyle = {
    backgroundColor,
    color,
  };

  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      style={buttonStyle}
    >
      <p>{btnText}</p>
    </button>
  );
};

export default Button;
