/** @format */

const submit = document.getElementById("button");
const result = document.getElementById("result");
const kodcontent = document.getElementById("kod");
let name;
const min = 1;
const max = 27;
let random;
let kodam;

submit.onclick = function () {
  name = document.getElementById("input").value;
  random = Math.floor(Math.random() * max) + min;
  if(name.value=='rafli'){
    kodam='Raja Iblis LUCIFER";
        result.textContent = `Hai ${name} kodam mu adalah:`;
  kodcontent.textContent = kodam;
  }else{
  switch (random) {
    case 1:
      kodam = "Kunti ijo";
      break;
    case 2:
      kodam = "Gunduruwo emas";
      break;
    case 3:
      kodam = "Harimau jawa";
      break;
    case 4:
      kodam = "Macan tutul";
      break;
    case 5:
      kodam = "Tuyul kembar";
      break;
    case 6:
      kodam = "kosong";
      break;
    case 7:
      kodam = "Badak betawi";
      break;
    case 8:
      kodam = "Kucing Oren";
      break;
    case 9:
      kodam = "Burung Hantu";
      break;
    case 10:
      kodam = "Cumi-Cumi";
      break;
    case 11:
      kodam = "Kuda Nil";
      break;
    case 12:
      kodam = "kupu-Kupu";
      break;
    case 13:
      kodam = "Nasi Goreng";
      break;
    case 14:
      kodam = "Bakso Aci";
      break;
    case 15:
      kodam = "Mie ayamm";
      break;
    case 16:
      kodam = "Es Krim";
      break;
    case 17:
      kodam = "Kopi Susu";
      break;
    case 18:
      kodam = "Jam Dinding";
      break;
    case 19:
      kodam = "Bantal Guling";
      break;
    case 20:
      kodam = "Payung Hujan";
      break;
    case 21:
      kodam = "Kacamata hitam";
      break;
    case 22:
      kodam = "Kaos Kaki";
      break;
    case 23:
      kodam = "Bintang kejora";
      break;
    case 24:
      kodam = "Awan Putih";
      break;
    case 25:
      kodam = "Ombak laut";
      break;
    case 26:
      kodam = "Hujan Rintik";
      break;
    case 27:
      kodam = "Pelangi";
      break;
  }
  
  result.textContent = `Hai ${name} kodam mu adalah:`;
  kodcontent.textContent = kodam;
  }
};
