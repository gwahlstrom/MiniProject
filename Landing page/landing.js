const menu_open = document.querySelector("#open-menu");
const menu = document.querySelector(".menu-slideout_hidden");
const menu_close = document.getElementById("close-menu");
const gustavButton = document.getElementById("btn-gustav");
const daniButton = document.getElementById("btn-dani");
const agataButton = document.getElementById("btn-agata");
const toJoke = document.getElementById("btn-to-joke");
const menuDani = document.getElementById("menu-dani");
const menuGustav = document.getElementById("menu-gustav");
const menuAgata = document.getElementById("menu-agata");
const menuDemo = document.getElementById("menu-demo");
const menuContact = document.getElementById("menu-contact");
const menuOurTeam = document.getElementById("our-team");

menu_open.addEventListener("click", function () {
  menu.classList.add("menu-slideout_visible");
});

menu_close.addEventListener("click", function () {
  menu.classList.remove("menu-slideout_visible");
});

gustavButton.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5501/pp/pp.html?name=gustav";
});

daniButton.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5501/pp/pp.html?name=dani";
});

agataButton.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5501/pp/pp.html?name=agata";
});

toJoke.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5501/demo/demo.html";
});

menuContact.addEventListener("click", function () {
  menu.classList.remove("menu-slideout_visible");
});

// window.confirm("Do you want a cookie?");
if (!document.cookie) {
  if (confirm("Hey, we need to ask for cookies. Do you want a cookie? We'll save it for you.")) {
    document.cookie = true;
  }
}
