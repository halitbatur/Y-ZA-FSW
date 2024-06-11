import { createContext, useState } from "react";

const CommentsContext = createContext();

const CommentsProvider = (props) => {
  const [comments, setComments] = useState([]);

  return (
    <CommentsContext.Provider value={{ comments, setComments }}>
      {props.children}
    </CommentsContext.Provider>
  );
};

export { CommentsContext, CommentsProvider };
