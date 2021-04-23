/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let palos = ["♦", "♥", "♠", "♣"];
let sig = ["1", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
let arrCards = [];

//funcion de dibujar cartas
document.querySelector("#aceptar").addEventListener("click", function() {
  //input de los numeros de cartas que se quiere dibujar
  let cardNumber = document.querySelector("#card-number").value;
  let maso;

  //validamos que el dato no sea vacio ni cero
  if (cardNumber === "" || cardNumber === "0") {
    alert("No haz ingresado un numero de tarjetas a dibujar valido");
  } else {
    document.querySelector("#card-number").value = "";
    //bloqueo el boton aceptar para que no siga dibujando cartas hasta que se sorteen
    document.querySelector("#aceptar").setAttribute("disabled", "");
  }

  //dibujamos tantas cartas nos haya indicado el usuario
  for (let i = 0; i < cardNumber; i++) {
    maso = ramdomCard();
    maso[0] === "";
    document.querySelector(
      "#container-card-draw"
    ).innerHTML += `<div class="card bg-light mx-1 random-cards" style="width: 180px;  height: 250px;">
            <div class="pinta text-left">${maso[0]}</div>
            <div class="numero text-center">${maso[1]}</div>
            <div class="pinta text-right">${maso[0]}</div>
          </div>`;
  }

  //obtener el array de las cartas random
  let cartas = document.querySelectorAll(".random-cards");
  //   arrCards = [...cartas];
  let aux;
  for (let i = 0; i < cartas.length; i++) {
    aux = cartas[i].textContent
      .replace(/\s+/g, " ")
      .trim()
      .split(" ");
    arrCards.push(aux);
  }
  //   console.log(arrCards);

  //   console.log(
  //     cartas[0].textContent
  //       .replace(/\s+/g, " ")
  //       .trim()
  //       .split(" ")
  //   );
  //   console.log(arrCards[1].textContent.replace(/\s+/g, " "));
});

//funcionan generadora de cartas random

function ramdomCard() {
  let paloRandom = palos[Math.floor(Math.random() * palos.length)];
  let sigRandom = sig[Math.floor(Math.random() * palos.length)];
  let dataRandom = [paloRandom, sigRandom];
  return dataRandom;
}

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
  let arr = bubbleSort(arrCards);
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    document.querySelector(
      "#container-card-sort"
    ).innerHTML += `<div class="card bg-light mx-1" style="width: 180px; height: 250px;">
                            <div class="pinta text-left">${arr[i][0]}</div>
                            <div class="numero text-center">${arr[i][1]}</div>
                            <div class="pinta text-right">${arr[i][2]}</div>
                          </div>`;
  }
});
