$(document).ready(function() {

	$(".story").on("click", function(){
		$("#msg-box").html($(this).find(".story-more").html())
		$("#popup-box").fadeIn(300);
		$("body").addClass("body-fix");
	});
	
	$("#popup-box").on("click", function(){
		$("#popup-box").fadeOut(300, function(){
			$("body").removeClass("body-fix");
			$("#msg-box").html("")
		});

	});

	$(document).on("scroll", function(){
		let maskHeight = $("#content").offset().top-$(window).scrollTop();
		let cssStr = `polygon(0% ${maskHeight}px, 0% 100%,100% 100%,100% ${maskHeight}px)`
		$("#content-bg").css('clip-path',cssStr)

	})
})