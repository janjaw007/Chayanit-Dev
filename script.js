const navLists = document.querySelector(".nav-lists");
const closedButton = document.querySelector(".closed-button");
const hamburgerButton = document.querySelector(".hamburger-button");
const footerYear = document.getElementById("footer-year");

const date = new Date();
const year = date.getFullYear();

footerYear.textContent = year;

hamburgerButton.addEventListener("click", function (e) {
  hamburgerButton.classList.add("hamburger-hide");
  navLists.classList.add("nav-lists-show");
});

closedButton.addEventListener("click", function (e) {
  // console.log("click closed button");
  hamburgerButton.classList.remove("hamburger-hide");
  navLists.classList.remove("nav-lists-show");
});
