/*function agregarPendiente() {
  var inputText = document.getElementById('texto').value;
  document.getElementById("lista").innerHTML = inputText;
  inputText.setAttribute("lista");
   document.body.appendChild(inputText);

   var elemento1 = document.createElement("li");
   var tex = document.createTextNode("inputText");
   elemento1.appendChild(tex);
   document.getElementById('lista').appendChild(elemento1);

}
*/

function agregarLista(){
 var crearLista = document.getElementById('crearLista').value
 console.log(crearLista);
 var ul = document.getElementById("ul");
 var li = document.createElement("li");
 li.appendChild(document.createTextNode("crearLista"));
  ul.appendChild(li);

}
function agregarPendiente() {
  var inputText = document.getElementById('texto').value;
  document.getElementById('tituloLista').innerHTML = inputText;
}
