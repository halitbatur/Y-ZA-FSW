import { useState } from "react";
import Comments from "./Components/Comments/Comments";
import NewComments from "./Components/NewComments/NewComments";
import CommentsCounter from "./Components/CommentsCounter/CommentsCounter";
import { CommentsProvider } from "./store/context";

function App() {
  return (
    <CommentsProvider>
      <div>
        <NewComments />
        <CommentsCounter />
        <Comments />
      </div>
    </CommentsProvider>
  );
}

export default App;
