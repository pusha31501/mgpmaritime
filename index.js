const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("menu-navBar");

hamburger.addEventListener("click", function () {
  navbar.classList.toggle("menubar");
});
