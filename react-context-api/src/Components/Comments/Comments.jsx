import React, { useContext } from "react";
import { CommentsContext } from "../../store/context";

const Comments = () => {
  const { comments } = useContext(CommentsContext);
  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
