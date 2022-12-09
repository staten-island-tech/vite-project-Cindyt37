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

function fullMenu() {
  menu.forEach((food) => {
    DomSelectors.output.insertAdjacentHTML(
      "afterbegin",
      `<div class="menu-card">
            <h2 class="menu-item">${food.name}</h2>
            <img class="img" src=${food.image} alt="" class="menu-img">
            <h3 class="item-price">${food.price}</h3>
            <button class="btn">Add To Cart</button>
        </div>`
    );
  });
}
fullMenu();
