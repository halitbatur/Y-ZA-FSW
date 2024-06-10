import { useState } from "react";
import Paragraph from "./Component/Paragraph/Paragraph";

export default function App() {
  // Add a state to toggle the visibility of the Paragraph component
  const [showParagraph, setshowParagraph] = useState(false);


  return (
    <div>
      {/* // Render the Paragraph component conditionally based on the showParagraph state */}
      {showParagraph && <Paragraph />}

      {/* // Add a button to toggle the visibility of the Paragraph component */}
      <button onClick={() => setshowParagraph(!showParagraph)}>
        Toggle Paragraph
      </button>
    </div>
  );
}
