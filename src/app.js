/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector(".card").innerHTML = generateCard();
    // document.querySelector(".card").classList.add(generateSymbol());
    // document.querySelector(".btn").innerHTML = generateCard();
  });
};

let generateCard = () => {
  let character = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let characterIndex = Math.floor(Math.random() * character.length);
  return character[characterIndex];
};

let generateSymbol = () => {
  let figure = ["hearts", "diams", "clubs", "spades"];
  let figureIndex = Math.floor(Math.random() * figure.length);
  return figure[figureIndex];
};
