import React from "react";
import styled from "styled-components";

// 카드 하나의 정보를 담을 컨테이너
const CardContainer = styled.div`
  width: 340px;
  margin: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

// CardInfo에서 버튼과 시간 정보만 배치하는 컨테이너(텍스트 뻬고 flex 처리)
const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

// 카드 이미지
const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

// 카드 정보 박스
const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; // 세로 중앙 정렬
  padding: 15px;
`;

// 카드 텍스트
const CardText = styled.p`
  color: #333;
  margin-bottom: 10px;
  align-items: center;
  text-align: center;
`;

// 시간 정보
const TimeInfo = styled.span`
  color: #555555;
  font-size: 12px;
`;

// 버튼 컨테이너
const ButtonContainer = styled.div`
  button {
    background-color: #ffffff;
    padding: 7px 10px;
    border: none;
    border-radius: 3px;
    border: 1px solid #7d7d7d;
    cursor: pointer;
    align-items: center;
    color: #7d7d7d;
  }
  button:first-of-type {
    margin-left: 5px;
    margin-bottom: 5px;
  }
`;

// 시간 정보 컨테이너
const TimeInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

// 뷰 버튼 + 에딧 버튼
const CardButton = () => {
  return (
    <ButtonContainer>
      <button>View</button>
      <button>Edit</button>
    </ButtonContainer>
  );
};

const Card = ({ imgSrc, text, timeInfo }) => (
  <CardContainer>
    <CardImage src={imgSrc} />
    <CardText>{text}</CardText>
    <CardActions>
      <CardButton />
      <TimeInfoContainer>
        <TimeInfo>{timeInfo}</TimeInfo>
      </TimeInfoContainer>
    </CardActions>
  </CardContainer>
);

export default Card;
