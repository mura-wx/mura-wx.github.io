// var input = document.querySelector(".input");

var email = document.querySelector("#email").value;
var phone = document.querySelector("#phone").value;
var name = document.querySelector("#name").value;
var address = document.querySelector("#address").value;
var city = document.querySelector("#city").value;
var postal = document.querySelector("#postal").value;
var select = document.querySelector("#select").value;
function updateEmail(ish) {
  email = ish;
}
function updatePhone(ish) {
  phone = ish;
}
function updateName(ish) {
  name = ish;
}
function updateAddress(ish) {
  address = ish;
}
function updateCity(ish) {
  city = ish;
}
function updatePostal(ish) {
  postal = ish;
}

function selectChange(ish) {
  select = ish;
}

function onContinue() {
  console.log("strUsr :", select);
  if (
    email === "" ||
    phone === "" ||
    name === "" ||
    address === "" ||
    city === "" ||
    postal === "" ||
    select === "salah"
  ) {
    Swal.fire({
      icon: "info",
      text: "Please complete your data",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Checkout complete",
      text: "please check your transaction",
    });
  }
}
