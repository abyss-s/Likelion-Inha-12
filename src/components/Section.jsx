import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  font-family: "Segoe UI", Arial, "Noto Sans";
  width: 100%;
  text-align: center;
  margin: 150px auto;
`;

// 섹션 큰 글자
const SectionTitle = styled.h1`
  text-align: center;
  color: #2a2a2a;
  font-size: 40px;
  font-weight: lighter;
`;

// 섹션 작은 글자
const SectionText = styled.h3`
  color: #7a7a7a;
  font-weight: lighter;
  font-size: 20px;
  padding: 5px;
  padding-bottom: 35px;
  align-content: center;
  margin: 0px 200px;
`;

// 버튼 컴포넌트: buttonColor, buttonText
const Button = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.buttonColor || "lightgrey",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        padding: "10px 10px",
        color: "white",
        marginRight: "10px",
        fontWeight: "lighter",
      }}
    >
      {props.buttonText}
    </button>
  );
};

const Section = () => {
  return (
    <div>
      <SectionContainer>
        <SectionTitle>Album example</SectionTitle>

        <SectionText>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </SectionText>

        <Button buttonText="Main call to action" buttonColor="#007bff"></Button>
        <Button buttonText="Secondary action" buttonColor="#6c757d"></Button>
      </SectionContainer>
    </div>
  );
};

export default Section;
