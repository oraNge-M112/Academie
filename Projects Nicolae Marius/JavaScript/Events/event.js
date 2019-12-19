var button = document.querySelector("input[type=button]");
var element = document.getElementById("time");

var showTime = function() {
  document.getElementById("time").innerText = Date();
};

function changeStyle() {
  element.className = "newStyle";
}

// button.onclick = showTime;
// button.onclick = changeStyle;

// button.onclick = function() {
//   showTime();
//   changeStyle();
// };

button.addEventListener("click", showTime);
button.addEventListener("click", changeStyle);

// button.removeEventListener("click", changeStyle);
