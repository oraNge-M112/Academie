var money = 1;
var chocoPrice = 2;
var chocolates = 0;

do {
  if (money < chocoPrice) {
    break;
  }
  money -= chocoPrice;
  chocolates++;
} while (money >= chocoPrice);

document.write("Am " + chocolates + " ciocolate!");
document.write("<br />");
document.write("Mai am " + money + " lei!");
