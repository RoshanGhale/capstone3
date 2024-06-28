"use strict";
const profileCard = document.querySelector("#profileCard");
const loginData = getLoginData();
const url =
  "http://microbloglite.us-east-2.elasticbeanstalk.com/api/users/";
const token =
  " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJvc2hhbiIsImlhdCI6MTcxOTUyMTE0NCwiZXhwIjoxNzE5NjA3NTQ0fQ.oFPI2zFo2cUEXLEgsKdh-KvtznR7IkruIz2-9oDay14";

// Logout
logoutButton.addEventListener("click", () => {
  logout()
});


function newProfile() {
  fetch(
    "http://microbloglite.us-east-2.elasticbeanstalk.com/api/users/" + loginData.username ,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJvc2hhbiIsImlhdCI6MTcxOTUyNTU4OCwiZXhwIjoxNzE5NjExOTg4fQ.Ys3RCDdjT40YlOojqfbgv7eLmzVBTTI6k9KXyFbZ0hE`,
      },
    }
  )
    .then((response) => response.json())
    .then((user) => {
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "mt-5", "card-block");
        profileCard.appendChild(cardDiv);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardDiv.appendChild(cardBody);

        let username = document.createElement("h5");
        username.innerText= user.username
        cardBody.appendChild(username);

        let fullName = document.createElement("h5");
        fullName.innerText= user.fullName
        cardBody.appendChild(fullName);

        
        let bio = document.createElement("p");
        bio.innerText= user.bio
        cardBody.appendChild(bio);
    });

}
function displayPosts() {
    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${loginData.token}`,
      },
    })
      .then((response) => response.json())
      .then((posts) => {
        const userPosts = posts.filter(post => post.username == loginData.username)
        
        for (const post of userPosts) {
          
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
newProfile();




