function agregarPendiente() {
  var input = document.getElementById('texto').value;
  document.getElementById("lista").innerHTML = input;
  input.setAttribute("lista");
   document.body.appendChild(input);

   var elemento1 = document.createElement("li");
   var tex = document.createTextNode("input");
   elemento1.appendChild(tex);
   document.getElementById('lista').appendChild(elemento1);
}
