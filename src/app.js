/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.querySelector(".btn").addEventListener("click", () => {
  generateCard();
});
// let generateNumber = () => {
let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let numberIndex = Math.floor(Math.random() * number.length);
// };

// let generateSymbol = () => {
let symbol = ["hearts", "diams", "clubs", "spades"];
let symbolIndex = Math.floor(Math.random() * symbol.length);
//   return figure[figureIndex];
// };

let data = document.querySelectorAll(".symbol1");
let data2 = document.querySelectorAll(".number");
let data3 = document.querySelectorAll(".symbol2");

for (let i = 0; i < data.length; i++) {
  data[i].innerHTML = `${symbol[symbolIndex]}`;
}

function generateCard() {
  // creo divs card dentro del div cardlist
  let cardlist = document.querySelector(".cardlist");
  let card = document.createElement("div");
  let cardclass = document.createElement("div");
  cardclass.className = "card mx-1";
  card.appendChild(cardclass);
  cardlist.appendChild(card);
  //   creo div symbol1
  let symbol1 = document.createElement("div");
  symbol1.className = "symbol1";
  cardclass.appendChild(symbol1);
  // creo div numero
  let number = document.createElement("div");
  number.className = "number";
  cardclass.appendChild(number);
  //   creo div symbol2
  let symbol2 = document.createElement("div");
  symbol2.className = "symbol2";
  cardclass.appendChild(symbol2);
}
