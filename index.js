const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const testo = document.getElementById("text");
  const textInput = testo.value;
  /*creare una costante che crei un li */

  const elementoLista = document.createElement("li");
  /* mettere in questa costante il testo */
  elementoLista.innerText = textInput;
  /* creare una costante di ri */
  const ol = document.getElementById("lista");
  ol.appendChild(elementoLista);
  /* svuotare la barra del nome */
  testo.value = "";
});
/* const inputText = testo.value;
console.log(inputText); */
elementoLista.addEventListener("click", function(){

})