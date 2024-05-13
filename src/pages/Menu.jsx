import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <h1>Menu Page</h1>
      <input type="text" value={input} onChange={handleChange} />
      <Link to={`/product/${input}`}>
        <button onClick={handleChange}>브랜드 페이지로 이동</button>
      </Link>
    </>
  );
};

export default Menu;
