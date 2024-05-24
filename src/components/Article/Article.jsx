import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArticleList } from "../../apis/gallery";
import styled from "styled-components";
import CommentList from "../CommentList/CommentList";

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

// 아티클 헤더: 제목(imageName) + 댓글 수(CommentCount) 합치는 컨테이너
const ArticleHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
  }

  span {
    margin-left: 10px;
    font-size: 16px;
    color: #666;
  }
`;

const Article = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [commentCount, setCommentCount] = useState(0);
  const navigate = useNavigate(); // 잘못된 articleId 접근 예외 처리 

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
        } else {
          navigate("../pages/NotFound.jsx");
        }
      } catch (err) {
        console.error(err);
        navigate("../pages/NotFound.jsx");
      }
    };
    goArticle();
  }, [articleId, navigate]);

  return (
    <ArticleContainer>
      {article ? (
        <>
          <ArticleHeader>
            <h2>{article.imageName}</h2>
            <span>{`댓글 ${commentCount}개`}</span>
          </ArticleHeader>
          <p>{article.imageText}</p>
          <img src={article.imageURL} alt={article.imageName} />
          <CommentList id={articleId} onCommentCount={setCommentCount} />
        </>
      ) : (
        <>{""}</>
      )}
    </ArticleContainer>
  );
};

export default Article;
