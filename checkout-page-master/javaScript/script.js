// import Swal from "sweetalert2/dist/sweetalert2.js";
// import "sweetalert2/src/sweetalert2.scss";

var val1 = document.querySelector("#val1").value;
var value1 = parseInt(val1);
var val2 = document.querySelector("#val2").value;

var value2 = parseInt(val2);

var price1 = 54;
var r_price1 = 124;
var price2 = 74;
var r_price2 = 124;

var vp1 = price1 * value1;
var vrp1 = r_price1 * value1;
var vp2 = price2 * value1;
var vrp2 = r_price1 * value1;

document.querySelector("#price_v").innerHTML = `$${price1}.00`;
document.querySelector("#r_price_v").innerHTML = `$${r_price1}.00`;
document.querySelector("#price_l").innerHTML = `$${price2}.00`;
document.querySelector("#r_price_l").innerHTML = `$${r_price2}.00`;
document.querySelector("#total").innerHTML = `$${vp1 + vp2 + 19}.00`;
function plusClick1() {
  value1 += 1;
  vp1 = price1 * value1;
  vrp1 = r_price1 * value1;
  document.querySelector("#price_v").innerHTML = `$${vp1}.00`;
  document.querySelector("#r_price_v").innerHTML = `$${vrp1}.00`;
  document.querySelector("#total").innerHTML = `$${vp1 + vp2 + 19}.00`;
  document.querySelector("#val1").value = value1;
}
document.querySelector("#price_v").value;
function minClick1() {
  if (value1 > 1) {
    value1 -= 1;
    vp1 -= price1;
    vrp1 -= r_price1;
    document.querySelector("#price_v").innerHTML = `$${vp1}.00`;
    document.querySelector("#r_price_v").innerHTML = `$${vrp1}.00`;
    document.querySelector("#total").innerHTML = `$${vp1 + vp2 + 19}.00`;
    document.querySelector("#val1").value = value1;
  }
}
function plusClick2() {
  value2 += 1;
  vp2 = price2 * value2;
  vrp2 = r_price2 * value2;
  document.querySelector("#price_l").innerHTML = `$${vp2}.00`;
  document.querySelector("#r_price_l").innerHTML = `$${vrp2}.00`;
  document.querySelector("#total").innerHTML = `$${vp1 + vp2 + 19}.00`;
  document.querySelector("#val2").value = value2;
}
function minClick2() {
  if (value2 > 1) {
    vp2 -= price2;
    vrp2 -= r_price2;
    value2 -= 1;
    document.querySelector("#price_l").innerHTML = `$${vp2}.00`;
    document.querySelector("#r_price_l").innerHTML = `$${vrp2}.00`;
    document.querySelector("#total").innerHTML = `$${vp1 + vp2 + 19}.00`;
    document.querySelector("#val2").value = value2;
  }
}
