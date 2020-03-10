const containter = document.querySelector(".containter");
const gear = document.querySelector(".gear");
document.querySelector(".container").addEventListener("scroll", rotate);

function rotate() {
  let dist = document.querySelector(".containter").scrollTop;
  document.querySelector(".gear").style.transform = `rotate(${dist}deg)`;
}
