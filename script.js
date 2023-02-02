window.onload = openNav;

function toggleNav() {
  var sidenav = document.getElementById("mySidenav"),
    main = document.getElementById("main");
  sidenav.style.width = sidenav.style.width == "250px" ? "0" : "250px";
  main.style.marginLeft = main.style.marginLeft === "250px" ? "0" : "250px";
}

function myFunction(x) {
  x.classList.toggle("change");
}
