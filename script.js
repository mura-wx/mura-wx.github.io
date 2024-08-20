/** @format */

const submit = document.getElementById("button");
const result = document.getElementById("result");
const kodcontent = document.getElementById("kod");
let name;
const min = 1;
const max = 60;
let random;

const khodamList = [
  "Ular Naga",
  "Buaya Putih",
  "Bhatara Karang",
  "Harimau Putih",
  "Sulaiman",
  "Semar",
  "Nyi Roro Kidul",
  "Banaspati",
  "Jin Ifrit",
  "Siluman Ular",
  "acan Kumbang",
  "Garuda",
  "Kuda Sembrani",
  "Ratu Pantai Selatan",
  "Dewi Sri",
  "Hanoman",
  "Barong",
  "Buto Ijo",
  "Kera Sakti",
  "Dewi Lanjar",
  "Prabu Siliwangi",
  "ewi Kwan Im",
  "Raja Jin",
  "Dewi Durga",
  "Naga Geni",
  "Ratu Kidul",
  "Dewi Tara",
  "Raja Brawijaya",
  "Dewi Ratih",
  "Si Buta dari Gua Hantu",
  "Pocong Ngantuk",
  "Genderuwo Nyanyi Dangdut",
  "Kuntilanak Penakut",
  "Wewe Gombel Penjual Cilok",
  "Jin Cilik Pencinta Upin Ipin",
  "Tuyul Malas Bekerja",
  "Pocong Fashionista",
  "Genderuwo Penari Jaipong",
  "Kuntilanak Penggemar K-Pop",
  "Wewe Gombel Penjual Gorengan",
  "Pocong Siluman",
  "Tuyul Pencinta Es Krim",
  "Pocong Youtuber",
  "Genderuwo Stand Up Comedian",
  "Kuntilanak TikTokers",
  "Wewe Gombel Influencer",
  "Jin Cilik Hacker",
  "Tuyul Trader Saham",
  "Pocong Vlogger",
  "Genderuwo Content Creator",
  "Kuntilanak Ngantuk",
  "Wewe Gombel Beauty Vlogger",
  "Jin Cilik Youtuber Gaming",
  "Tuyul Investor Bitcoin",
  "Pocong Nyanyi Dangdut",
  "Genderuwo Penari Tiktok",
  "Kuntilanak Gamers",
  "Jin Lampu Aladin Versi Cimahi",
  "Banaspati Penjaga Warteg",
  "Siluman Ular Penjual Cilok",
];

submit.onclick = function () {
  name = document.getElementById("input").value;
  random = Math.floor(Math.random() * max) + min;
  result.textContent = `${name} kodam kamu adalah:`;
  kodcontent.textContent = khodamList[random];
};
