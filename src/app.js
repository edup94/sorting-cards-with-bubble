/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".container").addEventListener("click", () => {
    document.querySelector("#newCard").innerHTML = generateCard();
  });
};

let generateCard = () => {
  let figure = ["♥", "♦", "♣", "♠"];
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

  let figureIndex = Math.floor(Math.random() * figure.length);
  let characterIndex = Math.floor(Math.random() * character.length);
  let data = document.querySelectorAll(".figura1");
  let data1 = document.querySelectorAll(".numero");
  let data2 = document.querySelectorAll(".figura2");

  for (let i = 0; i < data.length; i++) {
    data[i].innerHTML = `
            ${figure[figureIndex]}`;
    data1[i].innerHTML = `
            ${character[characterIndex]}`;
    data2[i].innerHTML = `
            ${figure[figureIndex]}`;
  }
  if (figure[figureIndex] == "♦" || figure[figureIndex] == "♥") {
    document.querySelector(".figura1").style.color = "red";
    document.querySelector(".figura2").style.color = "red";
  }
};
