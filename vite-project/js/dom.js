import "../styles/style.css";
import { menu } from "./menu";

const DomSelectors = {
  output: document.getElementById("output"),
  theme: document.getElementById("theme"),
  fullmenu: document.getElementById("fullMenu"),
  pringles: document.getElementById("pringles"),
  takis: document.getElementById("takis"),
  lays: document.getElementById("lays"),
  veg: document.getElementById("veg"),
  spicy: document.getElementById("spicy"),
  notspicy: document.getElementById("notSpicy"),
  gluten: document.getElementById("gluten"),
};

export { DomSelectors };

function initial() {
  menu.forEach((item) => {
    DomSelectors.output.insertAdjacentHTML(
      "beforeend",
      `<div class="menu-card" id="${item.name}">
            <h5 class="menu-item">${item.name}</h5>
            <img class="img" src=${item.image} alt="" class="menu-img">
            <h5 class="item-price">$${item.price}</h5>
            <button class="btn" id="addtocart">Add To Cart</button>
        </div>`
    );
  });
}

function pringles() {
  menu
    .filter((pringles) => pringles.brand.includes("Pringles"))
    .forEach((pringles) => {
      DomSelectors.output.insertAdjacentHTML(
        "beforeend",
        `<div class="menu-card" id="${pringles.name}">
        <h5 class="menu-item">${pringles.name}</h5>
        <img class="img" src=${pringles.image} alt="" class="menu-img">
        <h5 class="item-price">$${pringles.price}</h5>
        <button class="btn" id="addtocart">Add To Cart</button>
        </div>`
      );
    });
}

function takis() {
  menu
    .filter((takis) => takis.brand.includes("Takis"))
    .forEach((takis) => {
      DomSelectors.output.insertAdjacentHTML(
        "beforeend",
        `<div class="menu-card" id="${takis.name}">
        <h5 class="menu-item">${takis.name}</h5>
        <img class="img" src=${takis.image} alt="" class="menu-img">
        <h5 class="item-price">$${takis.price}</h5>
        <button class="btn" id="addtocart">Add To Cart</button>
        </div>`
      );
    });
}

function lays() {
  menu
    .filter((lays) => lays.brand.includes("Lay's"))
    .forEach((lays) => {
      DomSelectors.output.insertAdjacentHTML(
        "beforeend",
        `<div class="menu-card" id="${lays.name}">
        <h5 class="menu-item">${lays.name}</h5>
        <img class="img" src=${lays.image} alt="" class="menu-img">
        <h5 class="item-price">$${lays.price}</h5>
        <button class="btn" id="addtocart">Add To Cart</button>
        </div>`
      );
    });
}

function veg() {
  menu
    .filter((veg) => veg.brand.includes("Garden Veggie Straws"))
    .forEach((veg) => {
      DomSelectors.output.insertAdjacentHTML(
        "beforeend",
        `<div class="menu-card" id="${veg.name}">
        <h5 class="menu-item">${veg.name}</h5>
        <img class="img" src=${veg.image} alt="" class="menu-img">
        <h5 class="item-price">$${veg.price}</h5>
        <button class="btn" id="addtocart">Add To Cart</button>
        </div>`
      );
    });
}

function spicy() {
  menu
    .filter((spicy) => spicy.Spicy.includes("yes"))
    .forEach((spicy) => {
      DomSelectors.output.insertAdjacentHTML(
        "beforeend",
        `<div class="menu-card" id="${spicy.name}">
        <h5 class="menu-item">${spicy.name}</h5>
        <img class="img" src=${spicy.image} alt="" class="menu-img">
        <h5 class="item-price">$${spicy.price}</h5>
        <button class="btn" id="addtocart">Add To Cart</button>
        </div>`
      );
    });
}

function notSpicy() {
  menu
    .filter((notSpicy) => notSpicy.Spicy.includes("no"))
    .forEach((notSpicy) => {
      DomSelectors.output.insertAdjacentHTML(
        "beforeend",
        `<div class="menu-card" id="${notSpicy.name}">
        <h5 class="menu-item">${notSpicy.name}</h5>
        <img class="img" src=${notSpicy.image} alt="" class="menu-img">
        <h5 class="item-price">$${notSpicy.price}</h5>
        <button class="btn" id="addtocart">Add To Cart</button>
        </div>`
      );
    });
}

function gluten() {
  menu
    .filter((gluten) => gluten.glutenFree.includes("yes"))
    .forEach((gluten) => {
      DomSelectors.output.insertAdjacentHTML(
        "beforeend",
        `<div class="menu-card" id="${gluten.name}">
        <h5 class="menu-item">${gluten.name}</h5>
        <img class="img" src=${gluten.image} alt="" class="menu-img">
        <h5 class="item-price">$${gluten.price}</h5>
        <button class="btn" id="addtocart">Add To Cart</button>
        </div>`
      );
    });
}

function clear() {
  DomSelectors.output.childNodes.remove();
}

initial();

document.getElementById("fullMenu").addEventListener("click", function () {
  initial();
});

document.getElementById("pringles").addEventListener("click", function () {
  clear();
  pringles();
});

document.getElementById("takis").addEventListener("click", function () {
  takis();
});

document.getElementById("lays").addEventListener("click", function () {
  lays();
});

document.getElementById("veg").addEventListener("click", function () {
  veg();
});

document.getElementById("spicy").addEventListener("click", function () {
  spicy();
});

document.getElementById("notSpicy").addEventListener("click", function () {
  notSpicy();
});

document.getElementById("gluten").addEventListener("click", function () {
  gluten();
});
