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
film.addEventListener("click", function (event) {
  console.log("Hai cliccato su film");
});

let serieTv = document.getElementById("serie_tv");
serieTv.addEventListener("click", function (event) {
  console.log("Hai cliccato Serie Tv");
});

let contatti = document.getElementById("contatti");
contatti.addEventListener("click", function (event) {
  console.log("Hai cliccato Contatti");
});

// Seleziona il primo elemento con la classe "lente"
let lenteIngrandimento = document.getElementsByClassName("lente")[0];

// Aggiungi un event listener al primo elemento della collezione
lenteIngrandimento.addEventListener("click", function (event) {
  console.log("Hai cliccato sulla lente");
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

// Seleziona l'elemento del menu relativo ai film
let linkFilm = document.getElementById("film");

// Aggiungi un event listener per il click
linkFilm.addEventListener("click", function (event) {
  // Impedisci il comportamento predefinito del link (che è quello di reindirizzare alla pagina specificata nell'attributo href)
  event.preventDefault();

  // Reindirizza l'utente alla pagina dei film
  window.location.href = "film.html";
});
