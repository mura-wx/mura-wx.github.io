const nav = document.querySelector(".nav");
const bar = document.querySelector(".bar-button");
function Clicked() {
  if (nav.className === "nav" && bar.className === "bar-button") {
    nav.className += " muncul";
    bar.className += " click";
  } else {
    nav.className = "nav";
    bar.className = "bar-button";
  }
}
