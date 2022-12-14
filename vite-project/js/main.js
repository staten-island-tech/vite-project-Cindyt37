import "../styles/style.css";
import "./dom";
import { menu } from "./menu";

document.getElementById("theme").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

document.getElementById("fullMenu").addEventListener("click", function () {
  fullMenu();
});

document.getElementById("pringles").addEventListener("click", function () {
  pringles();
});
