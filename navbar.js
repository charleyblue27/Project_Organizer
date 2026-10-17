// create header tag
const pageHead = document.createElement("head");
pageHead.classList.add("card");

//create hero
const hero = document.createElement("div");
hero.classList.add("top-header");
hero.innerHTML = `<h1 class="mainTitle">Project Organizer</h1>`

// create the account button
const userInfo = document.createElement("div");
userInfo.classList.add("user-info");
// TODO: Add user checking and point to sign in page if null
let avatar = "C"
userInfo.innerHTML = `<a href="Login.html">${avatar}</a>`;
hero.appendChild(userInfo);

pageHead.appendChild(hero);

// create the nav tag
const navbar = document.createElement("nav");
navbar.classList.add("navbar");

// create the list
const navLinks = document.createElement("ul");
navLinks.classList.add("nav-links");
const links = [
  // { title: "Home", ref: "index" },
  { title: "Storyboard Projects", ref: "storyboard" },
  { title: "College Projects", ref: "CollegeProjects" },
  { title: "My Projects", ref: "savedProjects" }
]
links.forEach(({ title, ref }) => {
  const page = document.createElement("li");
  page.innerHTML = `<a href="${ref}.html">${title}</a>`;
  navLinks.appendChild(page);
});
navbar.appendChild(navLinks);

pageHead.appendChild(navbar)

document.body.appendChild(pageHead);

// // add the CSS
// const navCSS = document.createElement("link");
// navCSS.setAttribute("rel", "stylesheet");
// navCSS.setAttribute("href", "navbar.css");
// document.head.appendChild(navCSS);

// cleanup (remove this file)
// NOTE: Make sure this file has the navbar class when you add it to a page, otehrwise it won't remove it.
document.querySelector("script.navbar").remove();