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

// Seleziona il pulsante "Visualizza trailer"
let trailerRocky = document.querySelector(".trailer-button");
// Aggiungi un event listener per l'evento di click sul pulsante
trailerRocky.addEventListener("click", function () {
  // Apri il link del trailer di Rocky su YouTube
  window.open("https://www.youtube.com/watch?v=0AE6TnTQkvU", "_blank");
});

let trailerTopGun = document.querySelector(".trailer-button2");
trailerTopGun.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=PqvPtrw3KEQ", "_blank");
});

let trailerJurassikPark = document.querySelector(".trailer-button3");
trailerJurassikPark.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=FNEWFBpo2ww", "_blank");
});

let trailerGhostbusters = document.querySelector(".trailer-button4");
trailerGhostbusters.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=9S0XfbxsfgU", "_blank");
});

let trailerBeverly = document.querySelector(".trailer-button5");
trailerBeverly.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=GJi7NXZu8oo", "_blank");
});

let trailerIlPadrino = document.querySelector(".trailer-button6");
trailerIlPadrino.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=6NMi370dZMY", "_blank");
});

let trailerRambo = document.querySelector(".trailer-button7");
trailerRambo.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=lMJ6Go3u2sE", "_blank");
});

let trailerScarface = document.querySelector(".trailer-button8");
trailerScarface.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=57kRgZK-iAU", "_blank");
});

let trailerBraveHeart = document.querySelector(".trailer-button9");
trailerBraveHeart.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=MA4vrdOpeEU", "_blank");
});

let trailerTrinità = document.querySelector(".trailer-button10");
trailerTrinità.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=oaRbMz5lJOE", "_blank");
});

let trailerPulpFiction = document.querySelector(".trailer-button11");
trailerPulpFiction.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=mg0GqZmoM9M", "_blank");
});

let trailerScream = document.querySelector(".trailer-button12");
trailerScream.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=1Eaik31q1jg", "_blank");
});

let trailerArmaLetale = document.querySelector(".trailer-button13");
trailerArmaLetale.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=F61f6BkuXF8", "_blank");
});

let trailerBadBoys = document.querySelector(".trailer-button14");
trailerBadBoys.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=lYWvEACZ89g", "_blank");
});

let trailerHarry = document.querySelector(".trailer-button15");
trailerHarry.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=6iWegeSeLh4", "_blank");
});

let trailerUnaPoltrona = document.querySelector(".trailer-button16");
trailerUnaPoltrona.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=mwcXXpfo6rk", "_blank");
});
