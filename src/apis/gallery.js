import axios from "axios";

export const ArticleList = async () => {
  return await axios.get(`http://3.36.127.43:8080/imageAll`);
};

export const AllImageCount = async () => {
  return await axios.get(`http://3.36.127.43:8080/imageSize`);
};