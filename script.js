"use strict";

//Dropdown menu logic
const dropdownIcon = document.getElementsByClassName("Dropdown-Icon");
const dropdownList = document.getElementsByClassName("dropdown-list");
const menuItem = document.getElementsByClassName("menu-item");

menuItem[0].addEventListener("click", () => {
  dropdownIcon[0].classList.toggle("rotate");
  dropdownList[0].classList.toggle("show");
  // Can't have any other modal open
  dropdownIcon[1].classList.remove("rotate");
  dropdownList[1].classList.remove("show");
});
menuItem[1].addEventListener("click", () => {
  dropdownIcon[1].classList.toggle("rotate");
  dropdownList[1].classList.toggle("show");
  // Can't have any other modal open
  dropdownIcon[0].classList.remove("rotate");
  dropdownList[0].classList.remove("show");
});
window.onscroll = () => {
  dropdownIcon[0].classList.remove("rotate");
  dropdownList[0].classList.remove("show");
  dropdownIcon[1].classList.remove("rotate");
  dropdownList[1].classList.remove("show");
};

// Responsive menu logic
const menu = document.getElementsByClassName("nav")[0];
const ctaContainer = document.getElementsByClassName("CTA-container")[0];
const background = document.getElementsByClassName("background")[0];
const btnMenu = document.getElementsByClassName("menu-icon")[0];

btnMenu.addEventListener("click", () => {
  background.classList.toggle("active");
  menu.classList.toggle("active");
});
