/* ==========================
* You don't need to change this function.
* It will return a random value, for example:
* getRandomInt(0, 3) can return 0, 1, 2 or 3.
========================== */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * max + min);
}

// You can add more sentences if you want!
var sentences = [
  "Today is going to be the day!",
  "Maybe try next time.",
  "It's better to try and fail, than not to try",
  "JavaScript can do anything!",
  "Ask again",
  "No it won't happen.",
  "I love the idea!"
]

function getRandomSentence() {
  // Use the getRandomInt function here to get a number between 0 and the length - 1 of the `sentences` array.
  // var index =

  // Then use the number to pick a sentence from the `sentences` array.
  // var sentence =

  // Don't forget to return the resulting sentence!
}

function setAnswer(sentence) {
  // pass the sentence you found in here, and set the content of the `answer` html element.
  // Have a look at https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
}

function handleClick() {
  // You need to call some of the other functions here.
}

window.onload = () => {
  // Uncomment below line, and find & assign the answer element somehow!
  // Have a look at https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
  // var answer = ...;

  // Uncomment below line, and find & assign the button element somehow!
  // var button = ???

  // Then assign the right function to the button onclick event!
}
