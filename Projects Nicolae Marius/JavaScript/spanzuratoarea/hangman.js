var game = {
  words: ["apple", "orange", "banana"],
  word: undefined,
  triedLetters: [],
  triesLeft: 6,
  start: function() {
    this.word = this.randomWord();
  },
  randomWord: function() {
    let index = Math.floor(Math.random() * this.words.length);
    return this.words[index];
  },
  tryLetter: function(letter) {
    this.triedLetters.push(letter);
    if (!this.word.split("").includes(letter)) {
      this.triesLeft--;
    }
  },
  isDead: function() {
    return this.triesLeft == 0;
  },
  isWinner: function() {
    return this.word
      .split("")
      .every(letter => this.triedLetters.includes(letter));
  }
};

function renderLetters() {
  document.getElementById("letters").innerText = game.triedLetters.join(" ");
}

function renderWord() {
  var text = game.word
    .split("")
    .map(letter => (game.triedLetters.includes(letter) ? letter : "_"))
    .join(" ");
  document.getElementById("word").innerText = text;
}

function renderDrawing() {
  let parts = ["head", "body", "leftArm", "rightArm", "leftLeg", "rightLeg"];
  let visible = parts.slice(0, 6 - game.triesLeft);
  let invisible = parts.slice(6 - game.triesLeft);
  visible.forEach(
    name => (document.getElementById(name).style.visibility = "visible")
  );
}

function renderView() {
  renderLetters();
  renderWord();
  renderDrawing();
}

window.addEventListener("keydown", function(event) {
  if (game.isDead() || game.isWinner()) return;
  game.tryLetter(event.key);
  renderView();
});

game.start();
renderView();
