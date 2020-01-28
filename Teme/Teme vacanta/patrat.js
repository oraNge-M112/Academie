var w = 10;
var h = 20;

var margine = "#";
var continut = "0";

for (var i = 1; i < w; i++) {
  for (var j = 1; j < h; j++) {
    if (i == 1 || i == 10) {
      document.write(margine);
    }
    if (j > 1 && j < 20) {
    }
  }
  document.writeln("<br>");
}
