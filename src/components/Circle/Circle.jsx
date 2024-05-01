//import React from "react";

const Circle = (props) => {
  return (
    <div
      style={{
        width: "80px",
        height: "80px",
        padding: "0",
        margin: "5px",
        borderRadius: "50%",
        display: "inline-block",
        backgroundColor: props.circleColor,
      }}
    >
      <p></p>
    </div>
  );
};

export default Circle;
