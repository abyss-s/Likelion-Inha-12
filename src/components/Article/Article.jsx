import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleList } from "../../apis/gallery";
import styled from "styled-components";
import Comment from "../Comment/Comment";

// articleId 숫자 분리용 함수 (id = image + articleId)
const getOnlyNumber = (str) => {
  const result = str.match(/\d+/);
  return result ? parseInt(result[0], 10) : NaN;
};

// 아티클 컨테이너: 모든 요소 묶기
const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 10px auto;
  padding: 20px;

  h1,
  p {
    text-align: left;
    margin: 10px 0;
  }

  img {
    width: 100%;
    height: auto;
    padding: 10px;
  }
`;

const Article = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const goArticle = async () => {
      try {
        console.log("Fetching articles...");
        const res = await ArticleList();
        const articleIdNum = getOnlyNumber(articleId);
        const articleIdStr = `image${articleIdNum}`;
        const articleData = res.data.find(
          (article) => article.id === articleIdStr
        );
        if (articleData) {
          setArticle(articleData);
        }
      } catch (err) {
        console.error(err);
      }
    };
    goArticle();
  }, [articleId]);

  return (
    <ArticleContainer>
      {article ? (
        <>
          <h1>{article.imageName}</h1>
          <p>{article.imageText}</p>
          <img src={article.imageURL} alt={article.imageName} />
          {/* 댓글창 구현 필요 */}
          <Comment/>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </ArticleContainer>
  );
};

export default Article;
