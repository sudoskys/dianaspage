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
var lim = 0

$("#generate-form").submit(function () {
  lim +=1
  d = $(this).serializeArray();
  var data = new Array();
  $.each(d, function (i, field) {
    data[field.name] = field.value;
  });
  var page = Math.floor(Math.random() * 66)
  fetch('https://asoulcnki.asia/v1/api/ranking/?pageSize=10&pageNum='+page+'&timeRangeMode=0&sortMode=0')
  	.then(response => response.json())
  	.then(data => { 
  		// const contents = document.getElementById('data')
  		// 不懂JS的人写JS有多难.PNG
  		var n = Math.floor(Math.random() * 10)
  	    var text = data["data"]["replies"][n]["content"]+"\n  By - "+data["data"]["replies"][n]["m_name"]
		if(lim<20) {
		var result = juicer(text, data);
		//console.log(result);
		$("#app-result").html(result);
		$("#app-result-card").fadeIn();
			}else{
		window.open("https://space.bilibili.com/672328094")
		}
		
		})
  	.catch(console.error) 
 
  return false;
});
