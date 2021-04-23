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
let sig = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

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
    ).innerHTML += `<div class="card bg-light mx-1" style="width: 180px;  height: 250px;">
            <div class="pinta text-left">${maso[0]}</div>
            <div class="numero text-center">${maso[1]}</div>
            <div class="pinta text-right">${maso[0]}</div>
          </div>`;
  }
});

//funcionan generadora de cartas random

function ramdomCard() {
  let paloRandom = palos[Math.floor(Math.random() * palos.length)];
  let sigRandom = sig[Math.floor(Math.random() * palos.length)];
  let dataRandom = [paloRandom, sigRandom];
  return dataRandom;
}
