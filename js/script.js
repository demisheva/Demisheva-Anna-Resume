const menuBtn = document.querySelector(".menu-btn");
const btnBurger = document.querySelector(".menu-btn-burger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const navMenuLink = document.querySelectorAll(".nav-menu li");

menuBtn.addEventListener("click", toggleMunu);
navMenuLink.forEach((element) => {
  element.addEventListener("click", toggleMunu);
});

function toggleMunu() {
  btnBurger.classList.toggle("open");

  if (btnBurger.classList.contains("open")) {
    nav.classList.add("open");
    navMenu.classList.add("open");
  } else {
    nav.classList.remove("open");
    navMenu.classList.remove("open");
  }
}

const navLinks = document.querySelectorAll('.nav-menu a')

navLinks.forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
