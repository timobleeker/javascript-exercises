function getRandomInt(min, max) {
  return Math.floor(Math.random() * max + min);
}

var sentences = [
  "Today is going to be the day!",
  "Maybe try next time.",
  "It's better to try and fail, than not to try",
  "JavaScript can do anything!"
]

function getRandomSentence() {
  var randomInt = getRandomInt(0, sentences.length - 1);
  return sentences[randomInt];
}

function setAnswer(sentence) {
  answer.textContent = sentence
}


window.onload = () => {
  var answer = document.querySelector("#answer");
  var button = document.querySelector("#ask-button");
  button.onclick = () => setAnswer(getRandomSentence());
}
