$(document).ready(function() {
	console.log($("#ct").html());

	$(".btn1").click(function(event) {
		if($("#ct").html() == "內容"){
			$("#ct").html("Hello jQuery");
		}else if($("#ct").html() == "Hello jQuery"){
			$("#ct").html("內容");
		}		
	});
	$(".btn2").click(function(event) {
		if($("#myImage").attr('src') == 'https://www.w3schools.com/js/pic_bulboff.gif'){
			$("#myImage").attr('src', 'https://www.w3schools.com/js/pic_bulbon.gif');
		}else if($("#myImage").attr('src') == 'https://www.w3schools.com/js/pic_bulbon.gif'){
			$("#myImage").attr('src', 'https://www.w3schools.com/js/pic_bulboff.gif');
		}
		
	});
	$(".btn4").click(function(event) {
		if($("#ct2").css('font-size') == '16px'){
			$("#ct2").css('font-size','32px')
		}else if($("#ct2").css('font-size') == '32px'){
			$("#ct2").css('font-size','16px')
		}
		
	});
	$(".btn6").click(function(event) {
		$("#ct3").toggle()
	});
});