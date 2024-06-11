import React, { useContext } from "react";
import { CommentsContext } from "../../store/context";

const CommentsCounter = () => {
  const { comments } = useContext(CommentsContext);
  return <p>Current comments count is {comments.length}</p>;
};

export default CommentsCounter;
