
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

  // Butoni Modifiko
  const butoniModifiko = document.createElement("button");
  butoniModifiko.textContent = "Modifiko";

  butoniModifiko.addEventListener("click", function() {
    const emriRi = prompt(
      "Vendos emrin e ri të studentit:",
      emriStudentit.textContent.trim()
    );

    if (emriRi !== null && emriRi.trim() !== "") {
      emriStudentit.textContent = emriRi.trim() + " ";
    }
  });

  // Butoni Fshi
  const butoniFshi = document.createElement("button");
  butoniFshi.textContent = "Fshi";

  butoniFshi.addEventListener("click", function() {
    studenti.remove();
  });

  studenti.appendChild(emriStudentit);
  studenti.appendChild(butoniModifiko);
  studenti.appendChild(document.createTextNode(" "));
  studenti.appendChild(butoniFshi);

  lista.appendChild(studenti);

  forma.reset();
});
