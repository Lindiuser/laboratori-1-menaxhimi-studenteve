
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

    const ikona = document.createElement("span");
    ikona.className = "student-icon";
    ikona.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg"
       width="21" height="21"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       stroke-width="1.8"
       stroke-linecap="round"
       stroke-linejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M5 21v-2a7 7 0 0 1 14 0v2"/>
  </svg>
`;
    
    studenti.appendChild(ikona);
    
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
