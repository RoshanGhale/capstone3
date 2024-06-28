"use strict";
/*const createPostButton = document.querySelector("#createPostButton");
const postText = document.querySelector("#postText");

function createPost() {

    const loginData = getLoginData();
    let requestInit = {
     method: "POST",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${loginData.token}`,
       },
       body: JSON.stringify(post),
     };
     fetch(`${apiBaseURL}/api/posts`, requestInit)
      .then((response) => response.json())
       .then((post) => {
         window.location.replace("posts.html");
       });
}*/




// Authorization: `Bearer ${loginData.token}`,



document.addEventListener("DOMContentLoaded", function() {
  const postText = document.getElementById("postText");

  if (postText) {
    postText.addEventListener("submit", createPost);
  } else {
    console.error("Element with ID 'postText' not found.");
  }

  // Function to handle form submission
  function createPost(event) {
    event.preventDefault(); // Prevent default form submission

    // Example mock for loginData
    const loginData = { token: "mockedToken123" };

    // Prepare post data from form input
    const post = {
      text: document.getElementById("postText").value.trim()
    };

    // Prepare fetch request configuration
    let requestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginData.token}`
      },
      body: JSON.stringify(post)
    };

    // Replace with your actual API endpoint
    fetch("https://example.com/api/posts", requestInit)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(post => {
        console.log("Post created successfully:", post);
        window.location.replace("posts.html"); // Redirect to posts page after successful creation
      })
      .catch(error => {
        console.error("Error creating post:", error);
        // Handle errors, e.g., display an error message to the user
      });
  }
});
