const menu_open = document.querySelector("#open-menu");
const menu = document.querySelector(".menu-slideout_hidden");
const menu_close = document.getElementById("close-menu");

menu_open.addEventListener("click", function () {
  menu.classList.add("menu-slideout_visible");
});

menu_close.addEventListener("click", function () {
  menu.classList.remove("menu-slideout_visible");
});

const logoLink = document.querySelector(".logotype");
logoLink.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5501/Landing%20page/landing.html";
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
