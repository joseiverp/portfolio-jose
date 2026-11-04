const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-link");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");

    links.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

