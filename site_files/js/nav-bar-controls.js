const navButton = document.querySelector(".nav-button");
const navMenu = document.querySelector("#nav-menu");

navButton.addEventListener("click", () => {
  const isOpen = navButton.getAttribute("aria-expanded") === "true";
  const newState = !isOpen;

  navButton.setAttribute("aria-expanded", String(newState));
  navButton.classList.toggle("is-open", newState);
  navMenu.classList.toggle("is-open", newState);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 991) {
    navButton.setAttribute("aria-expanded", "false");
    navButton.classList.remove("is-open");
    navMenu.classList.remove("is-open");
  }
});

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navButton.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("is-open");
    });
});