// create the nav tag
const navbar = document.createElement("nav");
navbar.classList.add("navbar");

// create the list
const navLinks = document.createElement("ul");
navLinks.classList.add("nav-links");
const links = [
    { title: "Home", ref: "index" },
    { title: "College Projects", ref: "CollegeProjects" },
    { title: "Storyboard Projects", ref: "storyboard" }
]
links.forEach(({ title, ref }) => {
    const page = document.createElement("li");
    page.innerHTML = `<a href="${ref}.html">${title}</a>`;
    navLinks.appendChild(page);
});
navbar.appendChild(navLinks);

// create the account button
const account = document.createElement("div");
account.classList.add("account");
// TODO: Add user checking and point to sign in page if null
let user = "Charley";
account.innerHTML = `<a href="CreateAccount.html">${user}</a>`;
navbar.appendChild(account);

document.body.appendChild(navbar);

// add the CSS
const navCSS = document.createElement("link");
navCSS.setAttribute("rel", "stylesheet");
navCSS.setAttribute("href", "navbar.css");
document.head.appendChild(navCSS);

// cleanup (remove this file)
// NOTE: Make sure this file has the navbar class when you add it to a page, otehrwise it won't remove it.
document.querySelector("script.navbar").remove();