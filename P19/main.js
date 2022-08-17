$(document).ready(function () {
  $(".button").click(function () {
    if ($(this).attr("src") === "img/bon.jpg") {
      $(this).attr("src", "img/boff.jpg");
      $("#bombilla").attr("src", "img/off.jpg");
    } else {
      $(this).attr("src", "img/bon.jpg");
      $("#bombilla").attr("src", "img/on.jpg");
    }
  });

  $(".fx-slider").change(function () {
    var br = document.getElementById("br");
    var zoom = document.getElementById("zoom");

    $("#bombilla").attr("width", zoom.value / 3.3 + "%");

    $("#bombilla").css({
      "opacity": br.value/100
  });
  });
});
