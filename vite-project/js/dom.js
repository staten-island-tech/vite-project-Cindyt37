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
initial();
