
const forma = document.getElementById("studentForm");
const lista = document.getElementById("lista");

forma.addEventListener("submit", function(event) {
  event.preventDefault();

  const fusha = document.getElementById("emri");
  const emri = fusha.value.trim();

  if (!emri) return;

  const studenti = document.createElement("li");
  studenti.textContent = emri;

  lista.appendChild(studenti);

  forma.reset();
});
