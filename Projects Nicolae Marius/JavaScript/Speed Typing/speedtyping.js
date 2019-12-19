var startBtn = document.querySelector("input");
var speed = 500;

function start() {
  startBtn.style.display = "none";
  newLetter();
}

function randomLetter() {
  let letters = "abcdefghijklmnopqrstvwxyz";
  let pos = randomNumber(letters.length - 1);
  return letters.charAt(pos);
}

function randomNumber(max) {
  return Math.round(Math.random() * max);
}

function randomPosition() {
  return randomNumber(95) + "%";
}

function newLetter() {
  let letter = randomLetter();
  let x = randomPosition();
  let y = randomPosition();
  let div = document.createElement("div");
  div.innerText = letter;
  div.style.top = y;
  div.style.left = x;
  div.className = "boxLetter " + letter;
  document.querySelector("body").appendChild(div); // primeste copilul ce trebuie legat de body.
  setTimeout(newLetter, speed);
}

function keyPressed(event) {
  let letter = event.key; // litera apasata
  div = document.querySelector("." + letter);
  document.querySelector("body").removeChild(div);
}

startBtn.addEventListener("click", start);
window.addEventListener("keypress", keyPressed);
