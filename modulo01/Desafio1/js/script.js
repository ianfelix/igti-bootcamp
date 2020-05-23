window.addEventListener("load", start)

function start() {
}


function addText(event) {
  event.preventDefault();

  var inputText = document.querySelector("input[type=text]").value;
  var p = document.createElement("p");
  document.body.appendChild(p).innerHTML = inputText;
}

function keyEnter() {
  if (key == 13) {
    document.querySelector("input[type=text]").value = "";
  }
}

document.querySelector("form").addEventListener("submit", addText);
document.querySelector("form").addEventListener("keyup", keyEnter);
