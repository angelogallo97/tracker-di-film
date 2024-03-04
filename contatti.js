//Collegamento alla pagina "Home"
let linkHome = document.getElementById("home");
linkHome.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "cinebook.html";
});

document.addEventListener("DOMContentLoaded", function () {
  // Seleziona il modulo di candidatura
  let moduloCandidatura = document.getElementById("modulo-candidatura");
  // Aggiungi un gestore evento per il submit del modulo
  moduloCandidatura.addEventListener("submit", function (event) {
    // Impedisci il comportamento predefinito del modulo
    event.preventDefault();
    // Visualizza un messaggio simile a un alert
    alert("Candidatura inviata correttamente");
    console.log("Hai inviato la candidatura");
  });
});
