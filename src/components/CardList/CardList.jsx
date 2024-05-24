import React, { useEffect, useState } from "react";
import { ArticleList } from "../../apis/gallery";
import Card from "../Card/Card";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 120px;
  justify-content: center;
  margin: 0 auto;
`;
const Grid = () => {
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
    <>
      <GridContainer>
        {articleList.map((article) => (
          <Card
            key={article.id}
            id={article.id}
            title={article.imageName}
            contents={article.imageText}
            image={article.imageURL}
          />
        ))}
      </GridContainer>
    </>
  );
};

export default Grid;
