class roDate extends Date {
  sayInRomanian() {
    let lunile = [
      "Ianuarie",
      "Februarie",
      "Martie",
      "Aprilie",
      "Mai",
      "Iunie",
      "Iulie",
      "August",
      "Septembrie",
      "Octombrie",
      "Noiembrie",
      "Decembrie",
    ];
    return `${this.getDay()} ${lunile[this.getMonth()]} ${this.getFullYear()}`;
  }
}

var date = new roDate();
console.log(date.sayInRomanian);
