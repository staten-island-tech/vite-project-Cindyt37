import "../styles/style.css";
import { menu } from "./menu";

const DomSelectors = {
  output: document.getElementById("output"),
  theme: document.getElementById("theme"),
  fullmenu: document.getElementById("fullMenu"),
  pringles: document.getElementById("pringles"),
  cheetos: document.getElementById("cheetos"),
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

function cheetos() {
  menu
    .filter((cheetos) => cheetos.brand.includes("Pringles"))
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

initial();

document.getElementById("fullMenu").addEventListener("click", function () {
  initial();
});

document.getElementById("pringles").addEventListener("click", function () {
  pringles();
});
