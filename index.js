let navbar = document.getElementById("navbar");
let menu = document.getElementById("menu");
let navLinks = document.getElementsByClassName("nav-link");
console.log(navLinks);

menu.addEventListener("click", () => {
  console.log("Clciked");
  navbar.classList.toggle("show-nav");
});

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    // Your event handler code here
    navbar.classList.remove("show-nav");
  });
}
