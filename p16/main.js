$(document).ready(function () {
  console.log("ready!");
  $("#toggle1").on("click", function () {
    $("#texto1").toggleClass("highlight");
  });
});

function changeColor() {
  text = document.getElementById("texto2");
  text.classList.toggle("highlightBlue");
}
