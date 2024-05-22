import React from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { articleId } = useParams();

  return (
    <div>
      <h1>Article Test</h1>
      <p>Article ID: {articleId}</p>
    </div>
  );
};

export default Article;
