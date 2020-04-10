class ReversibleString extends String {
  reverse() {
    return this.split("").reverse().join("");
  }
}

var myString = new ReversibleString("my pen is blue");
console.log(myString.reverse());
