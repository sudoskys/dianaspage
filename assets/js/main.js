$(document).ready(function () {
  reset(1);
});
function reset(init) {
  
  if (init === 1) {
    $("#app-result-card").hide();
  } else {
    $("#app-result-card").fadeOut();
  }
}
$("#reset").click(function () {
  reset(0);
  window.open("https://space.bilibili.com/672328094")
  console.log("reset");
  return false;
});
$("#generate-form").submit(function () {
  d = $(this).serializeArray();
  var data = new Array();
  $.each(d, function (i, field) {
    data[field.name] = field.value;
  });
  var text =
    '<p>不关注然然的人有难了[番茄炒蛋拳]</p>';
  var result = juicer(text, data);
  // console.log(result);
  $("#app-result").html(result);
  $("#app-result-card").fadeIn();

  return false;
});