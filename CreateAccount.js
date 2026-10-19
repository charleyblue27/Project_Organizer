const correctName = "Jack";
const correctUsername = "J";
const correctPassword = "dog";

const createAccount = document.querySelector(".class form");

createAccount.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(
        username === correctUsername && password === correctPassword && name === correctName
    ){
        window.location.href = "Login.html"
    } else{
        document.getElementById("error").textContent = "invalid username or password";
        
    }});
