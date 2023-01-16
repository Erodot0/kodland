const openMenu = document.querySelector(".nav__menu--openmenu");
const closeMenu = document.querySelector(".mobilemenu__close");
const menu = document.querySelector(".mobilemenu")


// open the menu
openMenu.addEventListener("click", () => {
    menu.style.transform = "translateX(0%)";
    openMenu.style.display = "none";
});

//close the menu
menu.addEventListener("click", () => {
    menu.style.transform = "translateX(100%)";
    openMenu.style.display = "block";
});