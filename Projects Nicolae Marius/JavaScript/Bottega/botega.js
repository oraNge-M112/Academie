function textToSpan() {
  let title = document.querySelector(".title");
  let text = title.innerHTML.trim();
  let letters = text.split("");
  let spans = letters.map(function(letter) {
    let element = document.createElement("span");
    element.innerText = letter;
    return element;
  });
  title.innerHTML = "";
  spans.forEach(span => title.appendChild(span));
  return spans;
}

function suffle(array) {
  array.sort(() => 0.5 - Math.random());
}

let originalSpans = textTospan();
let oddOrEven = Math.round(Math.random());
let spans = originalSpans.filter((value, index) => index % 2 == oddOrEven);
suffle(spans);
let spanToAnimate = spans.slice(0, 5);
spanToAnimate.forEach(span => span.classList.add("bounce"));

function slideOut() {
  document.querySelector(".enter").classList.add("slide-out")
  document.querySelector(".enter").classList.remove("slide-in");
}

document.querySelector(".enter").addEventListener("click", slideOut);
document.querySelector(".back").addEventListener("click", slideIn);
