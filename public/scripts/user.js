
import { fetchData, setCurrentUser } from "./main.js";

let registrationForm = document.getElementById("registrationForm");
if (registrationForm) registrationForm.addEventListener('submit', register);

let loginForm = document.getElementById("loginForm");
if (loginForm) loginForm.addEventListener('submit', login);

function register(e) {
  e.preventDefault();

  let user = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
  };

  fetchData("/users/register", user, "POST")
    .then(data => {
      if (!data.message) {
        // localStorage.setItem('user',  JSON.stringify(user))
        setCurrentUser(data);
        window.location.href = "Note.html";
      }
    })
    .catch(err => {
      console.log(err);
      let errorSection = document.querySelector("#registrationForm .error");
      errorSection.innerText = err.message;
      document.getElementById("firstname").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    });
}

function login(e) {
  e.preventDefault();

  let user = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
  };

  fetchData("/users/login", user, "POST")
    .then(data => {
      if (!data.message) {
        // localStorage.setItem('user',  JSON.stringify(user))
        setCurrentUser(data);
        window.location.href = "Note.html";
      }
    })
    .catch(err => {
      let errorSection = document.querySelector("#loginForm .error");
      errorSection.innerText = err.message;
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    });
}