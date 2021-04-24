/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

//declaration of variables and arrays
let palos = ["♦", "♥", "♠", "♣"];
let sig = ["1", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
let arrCards = [];
//declaration of elements
let container_card_draw = document.querySelector("#container-card-draw");

class Card {
  constructor(symbol, number) {
    (this.symbol = symbol), (this.number = number);
  }

  drawInitialCards(numberOfCards, element) {
    for (let i = 0; i < numberOfCards; i++) {
      const [sym, num] = this.ramdomCard();
      sym === "♦" || sym === "♥"
        ? (element.innerHTML += `<div class="card bg-light mx-1 text-danger random-cards" style="width: 180px;  height: 250px;">
            <div class="pinta text-left">${sym}</div>
            <div class="numero text-center">${num}</div>
            <div class="pinta text-right">${sym}</div>
          </div>`)
        : (element.innerHTML += `<div class="card bg-light mx-1 random-cards" style="width: 180px;  height: 250px;">
            <div class="pinta text-left">${sym}</div>
            <div class="numero text-center">${num}</div>
            <div class="pinta text-right">${sym}</div>
          </div>`);
    }
  }

  setCardForSort(elements) {
    let aux;
    let arrAux;
    elements.forEach(item => {
      aux = item.textContent
        .replace(/\s+/g, " ")
        .trim()
        .substring(0, 3)
        .split(" ");
      arrCards.push(aux);
    });
  }

  drawCardsSort(list, element) {
    list.forEach(item => {
      console.log(item);

      item[0] === "♦" || item[0] === "♥"
        ? (element.innerHTML += `<div class="card bg-light mx-1 text-danger" style="width: 180px; height: 250px;">
                            <div class="pinta text-left">${item[0]}</div>
                            <div class="numero text-center">${item[1]}</div>
                            <div class="pinta text-right">${item[0]}</div>
                          </div>`)
        : (element.innerHTML += `<div class="card bg-light mx-1 text-danger" style="width: 180px; height: 250px;">
                            <div class="pinta text-left">${item[0]}</div>
                            <div class="numero text-center">${item[1]}</div>
                            <div class="pinta text-right">${item[0]}</div>
                          </div>`);
    });
  }

  ramdomCard() {
    let ramdomSymbol = this.symbol[
        Math.floor(Math.random() * this.symbol.length)
      ],
      ramdomNumber = this.number[
        Math.floor(Math.random() * this.number.length)
      ],
      ramdomData = [ramdomSymbol, ramdomNumber];

    return ramdomData;
  }
}

const card = new Card(palos, sig);
//funcion de dibujar cartas
document.querySelector("#aceptar").addEventListener("click", function() {
  //input de los numeros de cartas que se quiere dibujar
  let cardNumber = document.querySelector("#card-number").value;
  let container_card_draw = document.querySelector("#container-card-draw");

  //validamos que el dato no sea vacio ni cero
  if (cardNumber === "" || cardNumber === "0") {
    alert("No haz ingresado un numero de tarjetas a dibujar valido");
  } else {
    document.querySelector("#card-number").value = "";
    //bloqueo el boton aceptar para que no siga dibujando cartas hasta que se sorteen
    document.querySelector("#aceptar").setAttribute("disabled", "");
  }

  //dibujamos tantas cartas nos haya indicado el usuario
  card.drawInitialCards(cardNumber, container_card_draw);

  //obtener el array de las cartas random
  let cartas = document.querySelectorAll(".random-cards");
  card.setCardForSort(cartas);
});

//arr = [["♠", "A", "♠"],["♦", "J", "♦"]]
//arr[0][1]
//funcion que ordena
const bubbleSort = arr => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index][1] > arr[index + 1][1]) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //decrease the wall for optimization
  }
  return arr;
};

//evento boton ordenar
document.querySelector("#ordenar").addEventListener("click", function() {
  let container_card_sort = document.querySelector("#container-card-sort");
  let arr = bubbleSort(arrCards);

  card.drawCardsSort(arr, container_card_sort);
});
