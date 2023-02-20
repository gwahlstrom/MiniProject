const menu_open = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu-slideout_hidden");
const menu_close = document.querySelector(".menu-slideout_hidden");

menu_open.addEventListener("click", function () {
    menu.classList.add("menu-slideout_visible");

})

menu_close.addEventListener("click", function () {
    menu.classList.remove("menu-slideout_visible");

})