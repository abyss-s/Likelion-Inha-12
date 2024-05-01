import Button from "../components/Button/Button";
import React, { useState } from "react";

const SelectButtons = () => {
  const [clicked, setClick] = useState("");
  const handleClick = (btnText) => {
    setClick(btnText);
  };

  return (
    <div className="selectBtns">
      <Button
        btnText="Primary"
        handleClick={() => handleClick("Primary")}
        className={clicked === "Primary" ? "clicked" : ""}
      />
      <Button
        btnText="Secondary"
        handleClick={() => handleClick("Secondary")}
        className={clicked === "Secondary" ? "clicked" : ""}
      />
      <Button
        btnText="Default"
        handleClick={() => handleClick("Default")}
        className={clicked === "Default" ? "clicked" : ""}
      />
    </div>
  );
};

export default SelectButtons;
