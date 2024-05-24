import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CommentList as fetchCommentList } from "../../apis/gallery";
import Comment from "../Comment/Comment";

// 댓글 리스트를 감싸는 컨테이너 스타일링
const CommentListWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
`;

// 댓글 리스트 컨테이너 컴포넌트 스타일링
const CommentListContainer = styled.div`
  list-style: none;
  padding: 0;
`;

// articleId 숫자 분리용 함수
const getOnlyNumber = (str) => {
  const result = str.match(/\d+/);
  return result ? parseInt(result[0], 10) : NaN;
};

// 댓글 리스트 컴포넌트 구현
const CommentList = ({ id, onCommentCount }) => {
  const [comments, setComments] = useState([]);
  const articleId = getOnlyNumber(id); // 문자열 id에서 숫자만 추출

  // 댓글 리스트 불러오기
  const handleComment = async () => {
    const res = await fetchCommentList(articleId);
    setComments(res.data);
    onCommentCount(res.data.length);
  };

  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetchCommentList(articleId);
      setComments(res.data);
      onCommentCount(res.data.length); // 댓글 수 업데이트
    };
    fetchComments();
  }, [articleId, onCommentCount]); // useEffect 의존성 배열 문제 해결

  return (
    <CommentListWrapper>
      <CommentListContainer>
        <Comment
          articleId={articleId}
          comments={comments}
          fetchComments={handleComment}
        />
      </CommentListContainer>
    </CommentListWrapper>
  );
};

export default CommentList;
