var max = 0;
var i = 0;
var pos;
var scores = [10, 40, 22, 177, 55, 36, 87, 23, 73, 102, 84, 99, 125, 153];
var fruits = ["portocale", "mandarine", "mere", "nuci", "kiwi"];

for (i = 0; i < scores.length; i++) {
  if (scores[i] > max) {
    max = scores[i];
    pos = i;
  }
}

document.writeln("Numarul maxim este: " + max + "<br />");
document.writeln("Acest element se afla pe pozitia " + pos + "<br />");

max = fruits[0];
for (i = 0; i < fruits.length; i++) {
  if (fruits[i] > max) {
    max = fruits[i];
    pos = i;
  }
}

document.writeln("Cele mai mari fructe sunt " + max);
