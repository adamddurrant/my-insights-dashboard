//Event listeners
document.getElementById("toggle").addEventListener("click", toggleNav);
document.getElementById("burger-box").addEventListener("click", function () {
  squashBurger(this);
});

//Variables
var sidenav = document.getElementById("mySidenav"),
  main = document.getElementById("main");
var burgerBox = document.getElementById("burger-box");

// Check if device is mobile
const isMobile = window.matchMedia(
  "only screen and (max-width: 600px)"
).matches;

// Set initial styles
if (isMobile) {
  sidenav.style.width = "0px";
  main.style.marginLeft = "0px";
  squashBurger(burgerBox);
} else {
  sidenav.style.width = "250px";
  main.style.marginLeft = "250px";
}

//Navigation toggle open/close
function toggleNav() {
  sidenav.style.width = sidenav.style.width == "250px" ? "0" : "250px";
  main.style.marginLeft = main.style.marginLeft == "250px" ? "0" : "250px";
}

//Burger menu collapse
function squashBurger(elem) {
  elem.classList.toggle("change");
}