change = function() {
  var planet = document.getElementById("redplanet");
  planet.innerHTML = "The planet is beautiful!";
  planet.style.backgroundColor = "orange";
  planet.style.color = "white";
};

document.getElementById("redplanet").onmouseover = change;
