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

// Seleziona la lente
let lente = document.querySelector(".lente");
// Seleziona l'input di ricerca
let inputRicerca = document.getElementById("search_input");
// Aggiungi un event listener per il clic sulla lente
lente.addEventListener("click", function () {
  // Fai focus sull'input di ricerca
  inputRicerca.focus();
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

let linkSerieTv = document.getElementById("serie_tv");
linkSerieTv.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "serieTv.html";
});

let linkContatti = document.getElementById("contatti");
linkContatti.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "contatti.html";
});

let linkAnime = document.getElementById("anime");
linkAnime.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "anime.html";
});

//Collegamento alla pagina "Chi siamo"
let linkChisiamo = document.getElementById("chi_siamo");
linkChisiamo.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "chisiamo.html";
});

//QUIZ HOME
function risposta(selectedOption) {
  // Ottieni il testo della risposta selezionata
  let selectedAnswer = selectedOption.textContent.trim();

  // Valuta se la risposta selezionata è corretta
  if (selectedAnswer === "Marlon Brando") {
    // Se è corretta, stampa un messaggio di successo
    alert(
      "✅Risposta corretta! Marlon Brando è l'attore protagonista nel film Il Padrino."
    );
  } else {
    // Altrimenti, stampa un messaggio di errore
    alert(
      "❌Risposta sbagliata! L'attore protagonista nel film Il Padrino è Marlon Brando."
    );
  }
}

function risposta2(selectedOption) {
  let selectedAnswer = selectedOption.textContent.trim();
  if (selectedAnswer === "Titanic") {
    alert("✅Risposta corretta! Titanic vinse il premio oscar nel 1998.");
  } else {
    alert(
      "❌Risposta sbagliata! Nel 1998 a vincere il premio Oscar fu il film Titanic'."
    );
  }
}

function risposta3(selectedOption) {
  let selectedAnswer = selectedOption.textContent.trim();
  if (selectedAnswer === "La maledizione di Frankenstein") {
    alert(
      "✅Risposta corretta! La maledizione di Frankenstein è stato il primo film horro a calori."
    );
  } else {
    alert(
      "❌Risposta sbagliata! Il primo film horror a colori fu 'La maledizione di Frankestein'."
    );
  }
}

function risposta4(selectedOption) {
  let selectedAnswer = selectedOption.textContent.trim();
  if (selectedAnswer === "2015") {
    alert(
      "✅Risposta corretta! 2015 è l'anno in cui Marty e Doc viaggiano in 'Ritorno al Futuro, parte II'."
    );
  } else {
    alert(
      "❌Risposta sbagliata! Marty e Doc nel film 'Ritorno al Futuro, parte II' viaggiarono nell'anno 2015."
    );
  }
}

function risposta5(selectedOption) {
  let selectedAnswer = selectedOption.textContent.trim();
  if (selectedAnswer === "Micheal Jordan") {
    alert(
      "✅Risposta corretta! Micheal Jordan è il giocatore di basket protagonista nel film 'Space Jam'."
    );
  } else {
    alert(
      "❌Risposta sbagliata! Nel film 'Space Jam' il giocatore di basket protagonista fu Micheal Jordan."
    );
  }
}

function risposta6(selectedOption) {
  let selectedAnswer = selectedOption.textContent.trim();
  if (selectedAnswer === "Carlo Pedersoli e Mario Girotti") {
    alert(
      "✅Risposta corretta! Carlo Pedersoli e Mario Girotti sono i veri nomi di Bud Spencer e Terence Hill."
    );
  } else {
    alert(
      "❌Risposta sbagliata! Carlo Pedersoli e Mario Girotti sono i veri nomi di Bud Spencer e Terence Hill."
    );
  }
}

function risposta7(selectedOption) {
  let selectedAnswer = selectedOption.textContent.trim();
  if (selectedAnswer === "New York") {
    alert(
      "✅Risposta corretta! New York è la città invasa dai fantasmi nel film 'Ghostbusters'."
    );
  } else {
    alert(
      "❌Risposta sbagliata! New York è la città invasa dai fantasmi nel film 'Ghostbusters'."
    );
  }
}

function risposta8(selectedOption) {
  let selectedAnswer = selectedOption.textContent.trim();
  if (selectedAnswer === "Steve Carell") {
    alert(
      "✅Risposta corretta! Steve Carell è il personaggio che ha interpretato il film '40 anni vergine'."
    );
  } else {
    alert(
      "❌Risposta sbagliata! Steve Carell è il personaggio che ha interpretato il film '40 anni vergine'."
    );
  }
}

function risposta9(selectedOption) {
  let selectedAnswer = selectedOption.textContent.trim();
  if (selectedAnswer === "Iron man") {
    alert(
      "✅Risposta corretta! Iron man è il super eroe che muore nel film 'Avengers: Endgame'."
    );
  } else {
    alert(
      "❌Risposta sbagliata! Iron man è il super eroe che muore nel film 'Avengers: Endgame'."
    );
  }
}

function risposta10(selectedOption) {
  let selectedAnswer = selectedOption.textContent.trim();
  if (selectedAnswer === "Bellaaaaaaa") {
    alert(
      "✅Risposta corretta! Bellaaaaaaa è la scena che rese celebre il film 'Scary movie'."
    );
  } else {
    alert(
      "❌Risposta sbagliata! Bellaaaaaaa è la scena che rese celebre il film 'Scary movie'."
    );
  }
}

// Informazioni su di noi
let Informazioni = document.getElementById("informazioni");
Informazioni.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "chisiamo.html";
});
