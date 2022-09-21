const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-menu .nav-link");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.classList.remove("active");
}));