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
      "afterbegin",
      `<div class="menu-card" id="${item.name}">
            <h2 class="menu-item">${item.name}</h2>
            <img class="img" src=${item.image} alt="" class="menu-img">
            <h3 class="item-price">${item.price}</h3>
            <button class="btn">Add To Cart</button>
        </div>`
    );
  });
}
initial();
