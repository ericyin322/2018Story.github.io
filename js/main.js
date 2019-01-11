$(document).ready(function() {
	console.log($("#ct"));

	$(".btn1").click(function(event) {
		$("#ct").html("Hello jQuery")
	});
	$(".btn2").click(function(event) {
		$("#myImage").attr('src', 'https://www.w3schools.com/js/pic_bulbon.gif');
	});
	$(".btn3").click(function(event) {
		$("#myImage").attr('src', 'https://www.w3schools.com/js/pic_bulboff.gif');
	});
	$(".btn4").click(function(event) {
		$("#ct2").css('font-size','32px')
	});
	$(".btn5").click(function(event) {
		$("#ct2").css('font-size','16px')
	});
	$(".btn6").click(function(event) {
		$("#ct3").hide()
	});
	$(".btn7").click(function(event) {
		$("#ct3").show()
	});

	$("body").on("click", "#ohh", function (event) {
		console.log("!!")
	});
	$("<button id='ohh'>New Node</button>").appendTo("body")
});