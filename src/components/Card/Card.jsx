import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  width: 100%;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: white;

  @media (max-width: 768px) {
    margin: 5px auto;
  }
`;

const CardTitle = styled.h2`
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CardImage = styled.img`
  width: 90%;
  height: auto;
`;

const CardText = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: gray;
  padding-left: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const getOnlyNumber = (str) => {
  const result = str.match(/\d+/);
  return result ? parseInt(result[0], 10) : NaN;
};

const Card = (props) => {
  const navigate = useNavigate();

  const goArticle = () => {
    const articleId = getOnlyNumber(props.id);
    navigate(`/article/${articleId}`);
  };

  return (
    <CardContainer onClick={goArticle}>
      <CardImage src={props.image} alt={props.title} />
      <CardTitle>{props.title}</CardTitle>
      <CardText>{props.contents}</CardText>
    </CardContainer>
  );
};

export default Card;
