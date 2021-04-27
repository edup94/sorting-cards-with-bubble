/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let dibujar = document.getElementById("draw");
dibujar.addEventListener("click", () => {
  //obtengo el numero que me indique el usuario
  let input = document.getElementById("input").value;
  //limpio el lugar donde van las cartas antes de dibujarlas
  document.querySelector(".cardlist").innerHTML = "";

  //dibujo el numero de cartas que me haya indicado el usuario en el input
  for (let i = 0; i < input; i++) {
    //obtengo los numeros y simbolos ramdom en cada iteración
    let ramdomNumber = generateNumber();
    let ramdomSymbol = generateSymbol();

    //genero un carta nueva en cada iteración
    let card = generateCard(ramdomSymbol, ramdomNumber);

    //inserto cada una de las nuevas cartas
    document.querySelector(".cardlist").appendChild(card);
  }

  //Una vez dibujada las cartas obtengo del DOM todos los contenedores de los simbolos de arriba y abajo.
  let symbolTop = document.querySelectorAll("div.symbol1");
  let symbolBottom = document.querySelectorAll("div.symbol2");

  //recorro los simbolos
  for (let i = 0; i < symbolTop.length; i++) {
    //compruebo si es corazon o diamante para darle color rojo
    if (symbolTop[i].textContent == "♥" || symbolTop[i].textContent == "♦") {
      symbolTop[i].style.color = "red";
      symbolBottom[i].style.color = "red";
    }
  }
});

function generateNumber() {
  let number = [
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
  let numberIndex = Math.floor(Math.random() * number.length);
  return number[numberIndex];
}

function generateSymbol() {
  let symbol = ["♥", "♦", "♣", "♠"];
  let symbolIndex = Math.floor(Math.random() * symbol.length);
  return symbol[symbolIndex];
}

function generateCard(symbol, number) {
  //creo la carta propiamente dicha y le doy un class
  let cardclass = document.createElement("div");
  cardclass.className = "card mx-1";

  //creo el div que contiene el simbolo1, le doy class, el simbolo y lo inserto en CARDCLASS
  let symbol1 = document.createElement("div");
  symbol1.className = "symbol1 d-flex justify-content-start mx-3";
  symbol1.innerHTML = `${symbol}`;
  cardclass.appendChild(symbol1);

  //creo el div que contiene el numero, le doy class, el numero y lo inserto en CARDCLASS
  let divNumber = document.createElement("div");
  divNumber.className = "number";
  divNumber.innerHTML = `${number}`;
  cardclass.appendChild(divNumber);

  //creo el div que contiene el simbolo2, le doy class, el simbolo y lo inserto en CARDCLASS
  let symbol2 = document.createElement("div");
  symbol2.className = "symbol2 d-flex justify-content-start mx-3";
  symbol2.innerHTML = `${symbol}`;
  cardclass.appendChild(symbol2);

  //retorno la carta ya hecha completamente
  return cardclass;
}
