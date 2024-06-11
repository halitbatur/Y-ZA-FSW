import React, { useContext, useState } from "react";
import { CommentsContext } from "../../store/context";

// New comments form
const NewComments = () => {
  const { comments, setComments } = useContext(CommentsContext);

  const [input, setInput] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, input]);
    setInput("");
  };

  return (
    <div>
      <h2>New Comments</h2>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewComments;
