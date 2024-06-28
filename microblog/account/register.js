"use strict";

const fullName = document.querySelector("#fullName");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const signupButton = document.querySelector("#signupButton");


function createNewUser() {
  let user = {
    fullName: fullName.value,
    username: username.value,
    password: password.value,
  };
  
  let requestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  fetch(
    "http://microbloglite.us-east-2.elasticbeanstalk.com/api/users",
    requestInit
  )
    .then((response) => response.json())
    .then((user) => {
      window.location.href = `../account/login.html`;
      showMessage("Successfully added");
    });
}

// signupButton.onclick = createNewUser;
signupButton.addEventListener("click", createNewUser);
