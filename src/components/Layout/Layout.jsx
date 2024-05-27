import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const BackGround = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 5px; 
  }
`;

const Layout = () => {
  return (
    <BackGround>
      <Outlet />
    </BackGround>
  );
};

export default Layout;
