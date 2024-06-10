import React, { useEffect, useState } from "react";

const Paragraph = () => {
  // These three states are used to store the post ID, post information, and loading status
  const [postId, setPostId] = useState(1);
  const [postInformation, setPostInformation] = useState({});
  const [loading, setLoading] = useState(false);

  // Add a fetchPost function that fetches the post with the given postId
  const fetchPost = async () => {
    // Set loading to true before making the request to indicate that the request is in progress
    setLoading(true);
    // Fetch the post with the given postId
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    // Parse the response data by calling response.json()
    const data = await response.json();

    // If the response status is 404, set the post information to indicate that the post was not found
    if (response.status === 404) {
      setPostInformation({ title: "Post not found", body: "Post not found" });
    } else {
      // Otherwise, set the post information to the data received from the response
      setPostInformation(data);
    }
    // Set loading to false after the request is completed to indicate that the request is finished
    setLoading(false);
  };

  // Use the useEffect hook to fetch the post when the component mounts or when the postId changes
  useEffect(() => {
    fetchPost();
  }, [postId]);

  // Display a loading message while the request is in progress
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <br />

      <h2>{postInformation.title}</h2>
      <p>{postInformation.body}</p>
    </div>
  );
};

export default Paragraph;
