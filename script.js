
const forma = document.getElementById("studentForm");
const lista = document.getElementById("lista");

forma.addEventListener("submit", function(event) {
  event.preventDefault();

  const fusha = document.getElementById("emri");
  const emri = fusha.value.trim();

  if (!emri) return;

  const studenti = document.createElement("li");
  const emriStudentit = document.createElement("span");
  emriStudentit.textContent = emri + " ";

  const butoniFshi = document.createElement("button");
  butoniFshi.textContent = "Fshi";

  butoniFshi.addEventListener("click", function() {
    studenti.remove();
  });

  studenti.appendChild(emriStudentit);
  studenti.appendChild(butoniFshi);
  lista.appendChild(studenti);

  forma.reset();
});
