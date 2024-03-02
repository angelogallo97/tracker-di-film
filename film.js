//TRAILER FILM

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

//Collegamento alla pagina "Contatti"
let linkContatti = document.getElementById("contatti");
linkContatti.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "contatti.html";
});
