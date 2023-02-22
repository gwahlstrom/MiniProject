const menu_open = document.querySelector("#open-menu");
const menu = document.querySelector(".menu-slideout_hidden");
const menu_close = document.getElementById("close-menu");
const menuDani = document.getElementById("menu-dani");
const menuGustav = document.getElementById("menu-gustav");
const menuAgata = document.getElementById("menu-agata");
const menuDemo = document.getElementById("menu-demo");
const menuOurTeam = document.getElementById("our-team");

menu_open.addEventListener("click", function () {
  menu.classList.add("menu-slideout_visible");
});

menu_close.addEventListener("click", function () {
  menu.classList.remove("menu-slideout_visible");
});

const logoLink = document.querySelector(".logotype");
logoLink.addEventListener("click", function () {
  window.location.href = "/Landing%20page/landing.html";
});

const joke = document.querySelector(".joke");
const button = document.querySelector("button");

function getjoke() {
  joke.textContent = "new joke comming soon";
  fetch("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } })
    .then((res) => res.json())
    .then((data) => {
      joke.textContent = data.joke;
    });
}
button.onclick = function () {
  getjoke();
};

menuGustav.addEventListener("click", function () {
  window.location.href = "/pp/pp.html?name=gustav";
});

menuDani.addEventListener("click", function () {
  window.location.href = "/pp/pp.html?name=dani";
});

menuAgata.addEventListener("click", function () {
  window.location.href = "/pp/pp.html?name=agata";
});
menuDemo.addEventListener("click", function () {
  window.location.href = "/demo/demo.html";
});
