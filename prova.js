/* 
  creare una funzione che quando premi il bottone stampi il testo nella ul */

/* 1 dichiarare una costante che richiami il form col documentgetid */
/* 2 dare una funzione a questo form */
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const testo = document.getElementById("testo");
  /* 3 dichiarare una costante con il testo dell input */
  const innerTesto = testo.value;
  /* 3 la funzione deve prendere il testo dell input col value */
  const lista = document.getElementById("ol");
  const elementiLista = document.createElement("li");
  elementiLista.textContent = innerTesto;
  lista.appendChild(elementiLista);

  elementiLista.addEventListener("click", function (event) {
    elementiLista.style.textDecoration = "line-through";
  });
  const bottone = document.createElement("button");
  bottone.textContent = "rimuovi";
  /* const formLista = document.createElement("form")  */
  elementiLista.appendChild(bottone);
  bottone.addEventListener("click", function (event) {
    elementiLista.remove();
  });
  testo.value = "";
});

/* 4 creare una lista */
/* 6 creare elementi della lista con al loro interno innerTesto  */

/* PARTE 2 */
/* creare una funzione che quando clicco sugli ol me li sbarri */
/* 1 creare una costante che aggiunga un bottone con create element */
/* 2  dare una classe agli li?*/
/* 3 appendere il bottone agli li con appendchild */
/* 4 dare al bottone una funzione che rimuova gli elementi della lista se submittato */
