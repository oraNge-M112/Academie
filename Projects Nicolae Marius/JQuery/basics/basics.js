function changeButton() {
  let newElem = $("<span> Hello </span>");
  $("div")
    .slideToggle()
    .html(newElem);
}

$("input.first").click(changeButton);
$("input.second").click(styleButton);

function styleButton() {
  $("div").css({
    "background-color": "lightblue",
    top: "30vh"
  });
}
