const seasonalButton = document.getElementById("seasonal");
const card = document.querySelector(".card")
const title = document.querySelector("#title")

seasonalButton.addEventListener("click", function (){
    document.body.classList.toggle("seasonal-theme")
});
