const menu_open = document.querySelector("#open-menu");
const menu = document.querySelector(".menu-slideout_hidden");
const menu_close = document.getElementById("close-menu");
const image = document.getElementById("img-container");
const age = document.getElementById("age");
const background = document.getElementById("background");
const animal = document.getElementById("spirit-animal");
const gif = document.getElementById("favorite-gif");
const namePerson = document.getElementById("name");

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

const currentName = window.location.search.split("=")[1];

fetch(`./${currentName}.json`).then((res) => {
  res.json().then((data) => {
    image.src = data.images[0];
    namePerson.innerHTML = data.name;
    age.innerHTML = data.age;
    background.innerHTML = data.background;
    animal.innerHTML = data.spirit_animal;
    gif.src = data.favorite_gif;
  });
});
