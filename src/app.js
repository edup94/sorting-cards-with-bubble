/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let guardarArray = [];

let selector = document.getElementById("select");
selector.addEventListener("click", () => {
  document.querySelector(".selectsort").innerHTML = "";
  for (let i = 0; i < guardarArray.length; i++) {
    let f = guardarArray[i][0];
    if (
      guardarArray[i][0] === 1 ||
      guardarArray[i][0] === 11 ||
      guardarArray[i][0] === 12 ||
      guardarArray[i][0] === 13
    ) {
      let guardado = switchToString(guardarArray[i][0]);
      f = guardado;
    }
    let card3 = generateCard(guardarArray[i][1], f);
    document.querySelector(".selectsort").appendChild(card3);
  }
});

let bubble = document.getElementById("bubble");
bubble.addEventListener("click", () => {
  document.querySelector(".bubblesort").innerHTML = "";
  for (let i = 0; i < guardarArray.length; i++) {
    let f = guardarArray[i][0];
    if (
      guardarArray[i][0] === 1 ||
      guardarArray[i][0] === 11 ||
      guardarArray[i][0] === 12 ||
      guardarArray[i][0] === 13
    ) {
      let guardado = switchToString(guardarArray[i][0]);
      f = guardado;
    }
    let card2 = generateCard(guardarArray[i][1], f);
    document.querySelector(".bubblesort").appendChild(card2);
  }
});

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

    if (
      ramdomNumber === "A" ||
      ramdomNumber === "J" ||
      ramdomNumber === "Q" ||
      ramdomNumber === "K" ||
      ramdomNumber === "10"
    ) {
      let guardado = switchToInt(ramdomNumber);
      guardarArray[i] = [guardado, ramdomSymbol];
    } else {
      guardarArray[i] = [ramdomNumber, ramdomSymbol];
    }

    //genero un carta nueva en cada iteración
    let card = generateCard(ramdomSymbol, ramdomNumber);

    //inserto cada una de las nuevas cartas
    document.querySelector(".cardlist").appendChild(card);
  }
  bubbleSort(guardarArray);
  selectSort(guardarArray);

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

function switchToInt(cambiar) {
  switch (cambiar) {
    case "A":
      cambiar = 1;
      break;
    case "10":
      cambiar = 10;
      break;
    case "J":
      cambiar = 11;
      break;
    case "Q":
      cambiar = 12;
      break;
    case "K":
      cambiar = 13;
      break;
  }
  return cambiar;
}

function switchToString(cambiar) {
  switch (cambiar) {
    case 1:
      cambiar = "A";
      break;
    case 10:
      cambiar = "10";
      break;
    case 11:
      cambiar = "J";
      break;
    case 12:
      cambiar = "Q";
      break;
    case 13:
      cambiar = "K";
      break;
  }
  return cambiar;
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

  if (symbol == "♥" || symbol == "♦") {
    symbol1.style.color = "red";
    symbol2.style.color = "red";
  }
  //retorno la carta ya hecha completamente
  return cardclass;
}

function bubbleSort(arr) {
  let wall = arr.length - 1; //comenzamos el "muro" al final del array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //comparamos las posiciones adyacentes, si el de la derecha es más grande, debemos cambiarlo
      if (arr[index][0] > arr[index + 1][0]) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //achicar el muro para optimizar
  }
  return arr;
}

function selectSort(arr) {
  let min = 0;
  while (min < arr.length - 1) {
    for (let i = min + 1; i < arr.length - 1; i++) {
      if (arr[min] > arr[i]) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
      }
    }
    min++;
  }
  return arr;
}
