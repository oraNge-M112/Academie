const animals = [
  "turtle",
  "snail",
  "corgi",
  "parrot",
  "rabbit",
  "bear",
  "panda",
  "fish",
  "shark",
  "pig",
  "crab",
  "rhinoceros"
];

const url = "https://png.icons8.com/100/000000/color/";

var images = animals.map(x => url + x + ".png");

// images = images.concat(images);

function suffle(array) {
  let i = 0;
  for (i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * array.length);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

suffle(images);
console.log(images);

let i;
let content = "";
for (i = 0; i < images.length; i++) {
  let html = `<li><img src="${images[i]}"><li>`;
  content += html;
}

document.querySelector("ul").innerHTML = content;

document
  .querySelectorAll("li")
  .forEach(x => x.addEventListener("click", onClick));

function onClick(event) {}
