import React, { useEffect, useState } from "react";
import { ArticleList } from "../../apis/gallery";
import Card from "../Card/Card";
import styled from "styled-components";

const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0 10px;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 0;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }
`;

const CardList = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    ArticleList()
      .then((res) => {
        setArticleList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <CardListContainer>
      {articleList.map((article) => (
        <Card
          key={article.id}
          id={article.id}
          title={article.imageName}
          contents={article.imageText}
          image={article.imageURL}
        />
      ))}
    </CardListContainer>
  );
};

export default CardList;
