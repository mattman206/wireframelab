var down = document.getElementById("GFG_DOWN");
var br = document.createElement("br");
function GFG_Fun() {
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "submit.php");
  var FN = document.createElement("input");
  FN.setAttribute("type", "text");
  FN.setAttribute("name", "FullName");
  FN.setAttribute("placeholder", "Full Name");
  var EID = document.createElement("input");
  EID.setAttribute("type", "text");
  EID.setAttribute("name", "emailID");
  EID.setAttribute("placeholder", "E-Mail ID");
  var s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
  form.appendChild(FN);
  form.appendChild(br.cloneNode());
  form.appendChild(EID);
  form.appendChild(br.cloneNode());
  form.appendChild(s);
  document.getElementsByTagName("body")[0]
    .appendChild(form);
}