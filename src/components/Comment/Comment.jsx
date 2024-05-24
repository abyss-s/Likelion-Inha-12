import React, { useState } from "react";
import styled from "styled-components";
import { PostComment, DeleteComment } from "../../apis/gallery";
import Button from "../Button/Button";

// 댓글창 컨테이너
const CommentContainer = styled.div`
  width: 100%;
  margin-left: 10px;
`;

// 댓글 작성 입력창 컨테이너
const CommentInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

// 댓글 작성 입력창 컴포넌트
const CommentInput = styled.input`
  flex: 1;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 20px;
`;

// 댓글 리스트 컴포넌트(ordered list)
const CommentListContainer = styled.ul`
  list-style: none;
  margin-top: 20px;
`;

// 댓글 리스트 요소 li
const CommentListMember = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 0;
  
`;

// 댓글 
const CommentText = styled.span`
  flex: 1;
  margin-right: 10px;
  span {
    padding-left: 20px;
  }
`;

const Comment = ({ articleId, comments, handleComments }) => {
  const [comment, setComment] = useState("");

  // 댓글 작성
  const handleCommentInput = async () => {
    try {
      // 예외처리: 공백 댓글 입력 불가 
      if (comment.trim() === "") {
        alert("내용이 없는 댓글입니다.");
        return;
      }
      await PostComment(articleId, comment);
      setComment("");
      handleComments();
    } catch (err) {
      console.error(err);
    }
  };

  // 댓글 삭제
  const handleCommentDelete = async (commentId) => {
    try {
      await DeleteComment(articleId, commentId);
      handleComments();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CommentContainer>
      <CommentInputContainer>
        <CommentInput
          type="text"
          id="comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글 작성..."
        />
        <Button btnText="게시" onClick={handleCommentInput} />
      </CommentInputContainer>
      <CommentListContainer>
        {comments.map((comment) => (
          <CommentListMember key={comment.id}>
            <CommentText>
              {" "}
              <strong>익명</strong>
              <span>{comment.commentBody}</span>
            </CommentText>
            <Button
              btnText="삭제"
              onClick={() => handleCommentDelete(comment.id)}
            />
          </CommentListMember>
        ))}
      </CommentListContainer>
    </CommentContainer>
  );
};

export default Comment;
