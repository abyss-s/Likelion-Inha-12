import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button/Button";
import lion from "../assets/lion.png";

const NotFoundContainer = styled.div`
  align-content: center;
  max-width: 1080px;
  margin: 0 200px;
  padding: 50px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const NotFoundLionImg = styled.img`
  width: 500px;
  height: 500px;
  margin: 30px 0;
`;

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <>
      <NotFoundContainer>
        <h3>멋쟁이 사자가 당신을 기다리고 있습니다</h3>
        <NotFoundLionImg src={lion} />
        <p>어흥...</p>
        <Button btnText="뒤돌아서 도망가기" onClick={handleClick}></Button>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
