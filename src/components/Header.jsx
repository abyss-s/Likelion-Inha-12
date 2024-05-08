import React from "react";
import styled from "styled-components";
import { CameraIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";

//헤더 바 고정 필요

// 헤더 컨테이너: 왼쪽 바 + 오른쪽 바
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #343a40;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 999;
`;

// 헤더 왼쪽 바 (앨범)
const HeaderLeft = styled.h1`
  display: flex;
  align-items: center;
  font-size: 22px;
  color: white;
  padding-left: 50px;
  font-size: 20px;
  font-weight: bolder;
`;

// 헤더 오른쪽 바 (햄버거)
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding-right: 50px;
`;

const HamburgerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 35px;
  border: 1px solid #ffffff40;
  border-radius: 3px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <CameraIcon width={24} height={24} color="white" />
        &nbsp;Album
      </HeaderLeft>
      <HeaderRight>
        <HamburgerButton>
          <Bars3Icon width={30} height={30} color="#ffffff7d" />
        </HamburgerButton>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
