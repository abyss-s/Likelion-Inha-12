import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goMain = () => {
    navigate("/main");
  };

  return (
    <>
      <div>
        <button onClick={goBack}>뒤로 가기</button>{" "}
        <button onClick={goMain}>메인으로 가기</button>
      </div>
    </>
  );
};

export default Header;
