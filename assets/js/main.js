$(document).ready(function() {

	reset(1);
	const ap = new APlayer({
		container: document.getElementById('aplayer'),
		fixed: true, //是否附着页面底部，否为false
		autoplay: false, //是否自动播放，否为false,移动端不能生效
		volume: 0.4, //初始音量（0~1）
		//lrcType: 3, //歌词模式（1、HTML模式 2、js模式 3、lrc文件模式）
		mutex: true, //互斥模式：阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
		order: 'list', //音频循环顺序（'list'：顺序, 'random'：随机）
		preload: 'none', //预加载（'none'：不预加载, 'metadata'：元数据, 'auto'：自动）
		listFolded: false, //列表默认折叠，开启为true
		theme: '#ee8fdf', //主题颜色
		audio: [
			{
				name: '汕头游魂',           //歌曲名称
				artist: '普信主义',       //歌曲作者
				url: 'https://music.163.com/song/media/outer/url?id=2055494653.mp3',         //歌曲源文件地址
				cover: 'https://p2.music.126.net/CQDbBjIudLltLpEKvEFFNQ==/109951168711797312.jpg?param=130y130',     //歌曲封面地址
				//lrc:  'lrc.lrc',        //歌曲的歌词文件
				theme: '#ffe4ff'        //主题颜色（优先）
		}, {
             name: '日冕',           //歌曲名称
             artist: '普信主义',       //歌曲作者
             url: 'https://music.163.com/song/media/outer/url?id=1979249379.mp3',         //歌曲源文件地址
             cover: 'https://p2.music.126.net/_-bselJyTtb8daHBedg7AA==/109951166130693310.jpg?param=130y130',     //歌曲封面地址
             //lrc:  'lrc.lrc',        //歌曲的歌词文件
             theme: '#ffe4ff'        //主题颜色（优先）
         }, {
             name: '扣下扳机',           //歌曲名称
             artist: '普信主义',       //歌曲作者
             url: 'https://music.163.com/song/media/outer/url?id=2063051182.mp3',         //歌曲源文件地址
             cover: 'https://p1.music.126.net/7n6OzULVtQSLZlAm4vg_2Q==/109951168619659849.jpg?param=130y130',     //歌曲封面地址
             //lrc:  'lrc.lrc',        //歌曲的歌词文件
             theme: '#ffe4ff'        //主题颜色（优先）
         },
		
		]
	});

});

function reset(init) {
	if (init === 1) {
		$("#app-result-card").hide();
	} else {
		$("#app-result-card").fadeOut();
	}
}

$("#blog_click").click(function() {
    reset(0);
	window.open("https://blog.dianas.cyou/")
	console.log("me");
	return false;
});
$("#github_click").click(function() {
	reset(0);
	window.open("https://github.com/sudoskys")
	console.log("reset");
	return false;
});

var lim = 0



$("#generate-form").submit(function() {
	lim += 1
	d = $(this).serializeArray();
	var data = new Array();
	$.each(d, function(i, field) {
		data[field.name] = field.value;
	});
	var page = Math.floor(Math.random() * 66)
	/* 这是AI 写的？？？我不记得我写过
	fetch('https://apis.dianas.cyou/api/dianaback.php?a=132')
		.then(data => {
			var text = data
			$("#instagram-section").css("background-image","url(text)");
		})
		.catch(console.error)
	*/
	fetch('https://asoulcnki.asia/v1/api/ranking/?pageSize=10&pageNum=' + page + '&timeRangeMode=0&sortMode=0')
		.then(response => response.json())
		.then(data => {
			// const contents = document.getElementById('data')
			// 不懂JS的人写JS有多难.PNG
			var n = Math.floor(Math.random() * 10)
			var text = data["data"]["replies"][n]["content"] + "\n  By - " + data["data"]["replies"][n][
				"m_name"
			]
			if (lim < 20) {
				var result = juicer(text, data);
				//console.log(result);
				$("#app-result").html(result);
				$("#app-result-card").fadeIn();
			} else {
				window.open("https://space.bilibili.com/280282")
			}

		})
		.catch(console.error)

	return false;
});
