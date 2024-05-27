const loadPostsButton = document.getElementById("loadPostsBtn");

loadPostsButton.addEventListener("click", async function () {
  try {
    const postsContainer = document.getElementById("postContainer");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const posts = await response.json();

    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.setAttribute("id", `post-${post.id}`);
      postDiv.innerHTML = `<h3 >${post.title}</h3>
        <p>${post.body}</p>`;
      postsContainer.appendChild(postDiv);
    });
  } catch (error) {
    const postsContainer = document.getElementById("postContainer");
    const errorDiv = document.createElement("div");
    errorDiv.innerHTML = `<h3 >Opps something wrong happened plaese try again later</h3>`;
    postsContainer.appendChild(errorDiv);
  } finally {
    console.log("FINALLY BLOCK HERE MAN");
  }
});
// loadPostsButton.addEventListener("click", function () {
//   fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
//     .then((response) => {
//       return response.json();
//     })
//     .then((posts) => {
//       const postsContainer = document.getElementById("postContainer");
//       console.log(posts);
//       // for each post I want to create a div
//       for (let i = 0; i < posts.length; i++) {
//         const postDiv = document.createElement("div");
//         postDiv.setAttribute("id", `post-${posts[i].id}`);
//         postDiv.innerHTML = `<h3 >${posts[i].title}</h3>
//         <p>${posts[i].body}</p>`;
//         postsContainer.appendChild(postDiv);
//       }
//       // I want to show the post's title and body
//       // Then I want to 'append' the div to the posts div i have in my html
//     })
//     .catch((error) => {
//       console.error("Error Fetching the data", error);
//     });
// });
