function getLineFromInput() {
  var input = document.querySelector("#sentence-input");

  return input.value;
}

function addLine(line) {
  var lines = document.querySelector("#lines");
  var lineEl = document.createElement('li')
  lineEl.innerText = line

  lines.appendChild(lineEl)
}

function onClick() {
  addLine(getLineFromInput());
}

window.onload = () => {
  var button = document.querySelector("#submit-button");
  button.onclick = onClick;
}
