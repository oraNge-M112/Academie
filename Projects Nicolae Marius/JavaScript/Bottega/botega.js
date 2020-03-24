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

let spans = textToSpan();
spans.sort(function() {
  return 0.5 - Math.random();
});
let spanToAnimate = spans.slice(0, 5);
spanToAnimate.forEach(span => span.classList.add("bounce"));
