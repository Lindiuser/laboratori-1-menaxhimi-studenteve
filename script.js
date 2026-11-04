
const forma = document.getElementById("studentForm");
const lista = document.getElementById("lista");
const fusha = document.getElementById("emri");

// Lexojmë studentët e ruajtur
let studentet = JSON.parse(
  localStorage.getItem("studentet") || "[]"
);

// Ruajtja në localStorage
function ruajStudentet() {
  localStorage.setItem(
    "studentet",
    JSON.stringify(studentet)
  );
}

// Shfaqja e listës së studentëve
function shfaqStudentet() {
  lista.innerHTML = "";

  studentet.forEach(function(emri, index) {
    const studenti = document.createElement("li");

    const emriStudentit = document.createElement("span");
    emriStudentit.textContent = emri + " ";

    // Modifikimi
    const butoniModifiko = document.createElement("button");
    butoniModifiko.textContent = "Modifiko";

    butoniModifiko.addEventListener("click", function() {
      const emriRi = prompt("Emri i ri:", emri);

      if (emriRi !== null && emriRi.trim() !== "") {
        studentet[index] = emriRi.trim();
        ruajStudentet();
        shfaqStudentet();
      }
    });

    // Fshirja
    const butoniFshi = document.createElement("button");
    butoniFshi.textContent = "Fshi";

    butoniFshi.addEventListener("click", function() {
      studentet.splice(index, 1);
      ruajStudentet();
      shfaqStudentet();
    });

    studenti.appendChild(emriStudentit);
    studenti.appendChild(butoniModifiko);
    studenti.appendChild(document.createTextNode(" "));
    studenti.appendChild(butoniFshi);

    lista.appendChild(studenti);
  });
}

// Regjistrimi i studentit
forma.addEventListener("submit", function(event) {
  event.preventDefault();

  const emri = fusha.value.trim();

  if (!emri) return;

  studentet.push(emri);

  ruajStudentet();
  shfaqStudentet();

  forma.reset();
});

// Shfaqim studentët kur hapet faqja
shfaqStudentet();
