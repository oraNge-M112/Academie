// construim o noua aplicatie Vue
var app = new Vue({
  el: "#app",
  data: {
    password: '',
    score: 0,
    message: "very weak",
    messages: ["very weak", "very weak", "weak", "normal", "strong", "very strong"]
  },
  computed: {
    score() {
      score = [
      newScore += this.hasSmallLetter(),
      newScore += this.hasUpperLetter(),
      newScore += this.hasDigit(),
      newScore += this.hasSpecialChar(),
      newScore += this.isLongEnough(),
      ].reduce((score, func) => score + func(), 0);
    }
  },
  methods: {
    evaluateScore: function() {
      // inlocuim noul score
      this.score = newScore;
      // inlocuim mesajul cu noul mesaj
      this.message = this.messages[newScore];
    },
    hasSmallLetter: function() {
      return /[a-z]/.test(this.password);
    },
    hasUpperLetter: function() {
      return /[A-Z]/.test(this.password);
    },
    hasDigit: function() {
      return /[0-9]/.test(this.password);
    },
    hasSpecialChar: function() {
      return /[^a-zA-Z0-9]/.test(this.password);
    },
    isLongEnough: function() {
      return this.password.length >= 8;
    }
  },
  
});
