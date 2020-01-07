const words = [
  "Andrei",
  "Marius",
  "cana",
  "apa",
  "Sulf",
  "tar",
  "Bar",
  "Java Script",
  "123",
  "poate Merge"
];

var text = words
  .sort()
  .filter(word => word.charAt(0) >= "A" && word.charAt(0) <= "Z")
  .join("<br>");

document.getElementById("words").innerHTML = text;
