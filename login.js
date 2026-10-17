const correctUsername = "c";
const correctPassword = "project";

const loginform = document.querySelector(".class");

loginform.addEventListener("submit", function(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(
        username === correctUsername && password === correctPassword
    ){
        window.location.href = "savedProjects.html"
    } else{
        document.getElementById("error").textContent = "invalid username or password";

    }});
