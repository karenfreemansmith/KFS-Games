//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

$("button#start").click(function() {
  alert("game starts");
  $(".playing").toggle();
  $(".notplaying").toggle();
});
$("button#play").click(function() {
  alert("game continues");
});
$("button#stop").click(function() {
  alert("game ends");
  $(".playing").toggle();
  $(".notplaying").toggle();
});
