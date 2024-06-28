/* Posts Page JavaScript */

"use strict";
// Define the URL and the authorization token
const postCards = document.querySelector("#postCards");
const url = "http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJvc2hhbiIsImlhdCI6MTcxOTU3OTk0MCwiZXhwIjoxNzE5NjY2MzQwfQ.v1iyzNFeVGgsZHW7dbI3IhH8u_zJlu6Mq34JAAQ-g3s";
// Logout
logoutButton.addEventListener("click", () => {
  localStorage.removeItem("login-data");
  window.location.replace("../index.html");
});

// Fetch posts
// fetch('http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts/', {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJvc2hhbiIsImlhdCI6MTcxOTQwOTM2MiwiZXhwIjoxNzE5NDk1NzYyfQ.fS_m6e_5r1x2B7yeGhxbR2WBsLWeUdjvYGCkRyzhlI4`,
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data); // Handle the data from the response
//     // You can now use the data to display posts on your post page
//   })
//   .catch((error) => {
//     console.error("Error fetching posts:", error);
//   });

// const newPost = document.querySelector("#newPost");
// fetch('http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts/', {
//   method: "GET",
//   headers: {
//     Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJvc2hhbiIsImlhdCI6MTcxOTQwOTM2MiwiZXhwIjoxNzE5NDk1NzYyfQ.fS_m6e_5r1x2B7yeGhxbR2WBsLWeUdjvYGCkRyzhlI4",
//   },
// })
// .then((response) => response.json())
// .then(data => {
//   data.forEach(post => {
//     const postHTML = `
//     ${post.username}
//     ${post.likes}
//     ${post.createdAd}`
//   });
// })
function displayPosts() {
  fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts/", {
    method: "GET",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJvc2hhbiIsImlhdCI6MTcxOTU3OTk0MCwiZXhwIjoxNzE5NjY2MzQwfQ.v1iyzNFeVGgsZHW7dbI3IhH8u_zJlu6Mq34JAAQ-g3s`,
    },
  })
    .then((response) => response.json())
    .then((posts) => {
      for (const post of posts) {
        console.log(post);
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "mt-5", "card-block");
        postCards.appendChild(cardDiv);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardDiv.appendChild(cardBody);

        let usernameH5 = document.createElement("h5");
        usernameH5.innerText= post.username
        cardBody.appendChild(usernameH5);

        
        let textP = document.createElement("p");
        textP.innerText= post.text
        cardBody.appendChild(textP);
      }
    });
}
displayPosts();
