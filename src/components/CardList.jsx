import React from "react";
import styled from "styled-components";
import Card from "./Card";
import galaxyImg from "../assets/galaxy.jpg";

// 카드리스트 컨테이너
const CardListContainer = styled.div`
  font-family: "Segoe UI", Arial, "Noto Sans";
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #f1f1f18a;
`;

const CardList = () => {
  // 카드 데이터 배열
  const cardData = [
    {
      imgSrc: galaxyImg,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      timeInfo: "9 mins",
    },
    {
      imgSrc: galaxyImg,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      timeInfo: "9 mins",
    },
    {
      imgSrc: galaxyImg,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      timeInfo: "9 mins",
    },
    {
      imgSrc: galaxyImg,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      timeInfo: "9 mins",
    },
    {
      imgSrc: galaxyImg,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      timeInfo: "9 mins",
    },
    {
      imgSrc: galaxyImg,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      timeInfo: "9 mins",
    },
    {
      imgSrc: galaxyImg,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      timeInfo: "9 mins",
    },
    {
      imgSrc: galaxyImg,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      timeInfo: "9 mins",
    },
    {
      imgSrc: galaxyImg,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      timeInfo: "9 mins",
    },
  ];

  // map을 이용해 cards 컨테이너에 담고 리스트로 내보내기
  const cards = cardData.map((card, index) => (
    <Card
      key={index}
      imgSrc={card.imgSrc}
      text={card.text}
      timeInfo={card.timeInfo}
    />
  ));

  return <CardListContainer>{cards}</CardListContainer>;
};

export default CardList;
