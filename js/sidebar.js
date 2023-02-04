//Event listeners
document.getElementById("toggle").addEventListener("click", toggleNav);
document.getElementById("burger-box").addEventListener("click", function () {
  squashBurger(this);
});
window.addEventListener("resize", function () {
  //this prevents burger showing closed on resize - important for mobile landscape
  if (window.innerWidth > 500 && burgerBox.classList.contains("change")) {
    openSidebar();
    squashBurger(burgerBox);
  } else if (window.innerWidth > 500) {
    openSidebar();
  } else {
    closeSidebar();
  }
});

//Variables
const sidenav = document.getElementById("mySidenav");
const main = document.getElementById("main");
const burgerBox = document.getElementById("burger-box");

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
  squashBurger(burgerBox);
}

//Sidebar toggle open/close
function toggleNav() {
  sidenav.style.width = sidenav.style.width == "250px" ? "0" : "250px";
  main.style.marginLeft = main.style.marginLeft == "250px" ? "0" : "250px";
}

//Open sidebar
function openSidebar() {
  sidenav.style.width = "250px";
  main.style.marginLeft = "250px";
}

//Close sidebar
function closeSidebar() {
  sidenav.style.width = "0px";
  main.style.marginLeft = "0px";
}

//Burger menu collapse
function squashBurger(elem) {
  const attribute = elem.getAttribute("aria-expanded");
  if (attribute === "true") {
    elem.setAttribute("aria-expanded", "false");
    elem.classList.toggle("change");
  } else {
    elem.setAttribute("aria-expanded", "true");
    elem.classList.toggle("change");
  }
}
