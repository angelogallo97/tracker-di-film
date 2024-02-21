"use strict";

let home = document.getElementById("home");
home.addEventListener("click", function (event) {
  console.log("Hai cliccato home");
});

let chiSiamo = document.getElementById("chi_siamo");
chiSiamo.addEventListener("click", function (event) {
  console.log("Hai cliccato Chi siamo");
});

let film = document.getElementById("film");
film.addEventListener("clcik", function (event) {
  console.log("Hai cliccato Film");
});

let serieTv = document.getElementById("serie_tv");
serieTv.addEventListener("click", function (event) {
  console.log("Hai cliccato Serie Tv");
});

let contatti = document.getElementById("contatti");
contatti.addEventListener("click", function (event) {
  console.log("Hai cliccato Contatti");
});

let cerca = document.getElementById("search_input");
cerca.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key == "Enter") {
    console.log("eccomi");
  }
});

// Seleziona l'elemento del pulsante
let myButton = document.getElementById("myButton");
// Aggiungi un listener per l'evento "click" all'elemento del pulsante
myButton.addEventListener("click", function (event) {
  // Esegui il tuo codice qui quando il pulsante viene cliccato
  console.log("Il pulsante è stato cliccato!");
});
