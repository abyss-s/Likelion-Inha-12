import axios from "axios";

// 아티클 리스트 불러오기
export const ArticleList = async () => {
  return await axios.get(`http://3.36.127.43:8080/imageAll`);
};

// 아티클(이미지) 총 개수 불러오기
export const AllImageCount = async () => {
  return await axios.get(`http://3.36.127.43:8080/imageSize`);
};

// 댓글 리스트 불러오기
export const CommentList = async (commentId) => {
  return await axios.get(`http://3.36.127.43:8080/image${commentId}/comments`);
};

// 댓글 작성
export const PostComment = async (commentId, input) => {
  return await axios.post(
    `http://3.36.127.43:8080/image${commentId}/comments`,
    {
      commentBody: input,
    }
  );
};

// 댓글 삭제
export const DeleteComment = async (articleId, commentId) => {
  return await axios.delete(
    `http://3.36.127.43:8080/image${articleId}/comments/${commentId}`
  );
};
