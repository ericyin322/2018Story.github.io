$(document).ready(function() {

	$(".story").on("click", function(){
		$("#msg-box").html($(this).find(".story-more").html())
		
		$("#popup-box").fadeIn(300,function(){
			$("#msg-box").scrollTop(0);
		});
		$("body").addClass("body-fix");
	});
	
	$("#popup-box").on("click", function(){
		$("#popup-box").fadeOut(300, function(){
			$("body").removeClass("body-fix");
			$("#msg-box").html("")
		});

	});


})