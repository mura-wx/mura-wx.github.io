export function onClick() {
  var x = document.getElementById("menu-button");
  var m = document.getElementById("navigasi");
  if (x.className === "menubutton") {
    x.className += "click2";
    if (m.className === "navigasi") {
      m.className += "click";
    }
  } else {
    x.className = "menubtton";
    m.className = "navigasi";
  }
}
