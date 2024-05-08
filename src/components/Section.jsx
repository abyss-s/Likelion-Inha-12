import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  width: 0 auto;
  text-align: center;
  margin: 100px 200px;
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
  align-content: center;
`;

// 버튼 컨테이너
const ButtonContainer = styled.div`
  margin-left: 10px;
`;

// 버튼 컴포넌트: buttonColor, buttonText
const Button = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.buttonColor || lightgrey,
        border: "none",
        borderRadius: "7px",
        fontSize: "14px",
        paddingLeft: "10px",
        paddingRight: "10px",
        color: "white",
        marginRight: "10px",
      }}
    >
      <p>{props.buttonText}</p>
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
        <ButtonContainer>
          <Button
            buttonText="Main call to action"
            buttonColor="#007bff"
          ></Button>
          <Button buttonText="Secondary action" buttonColor="#6c757d"></Button>
        </ButtonContainer>
      </SectionContainer>
    </div>
  );
};

export default Section;
