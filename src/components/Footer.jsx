import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Segoe UI", Arial, "Noto Sans";
  width: 100%;
  margin: 50px 50px;
`;

const FooterLeftConainter = styled.div`
  float: left;
  margin-left: 50px;
`;

const FooterRightConainter = styled.div`
  float: right;
  margin-right: 170px;
`;

const FooterLeft = () => {
  return (
    <div>
      Album example is © Bootstrap, but please download and customize it for
      yourself! <br />
      New to Bootstrap?&nbsp;
      <a
        href="#"
        style={{
          color: "#007bff",
          textDecoration: "none",
        }}
      >
        Visit the homepage
      </a>
      &nbsp;or read our&nbsp;
      <a
        href="#"
        style={{
          color: "#007bff",
          textDecoration: "none",
        }}
      >
        getting started guide
      </a>
      .
    </div>
  );
};
const FooterRight = () => {
  return (
    <div>
      <a
        href="#"
        style={{
          color: "#007bff",
          textDecoration: "none",
        }}
      >
        Back to top
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLeftConainter>
          <FooterLeft />
        </FooterLeftConainter>
        <FooterRightConainter>
          <FooterRight />
        </FooterRightConainter>
      </FooterContainer>
    </>
  );
};

export default Footer;
