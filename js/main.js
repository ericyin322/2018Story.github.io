$(document).ready(function() {

	$(".story").on("click", function(){
		$("#msg-box").text($(this).find(".story-more").text())
		$("#popup-box").fadeIn(300);
		$("body").addClass("body-fix");
	});
	$("#popup-box").on("click", function(){
		$("#popup-box").fadeOut(300, function(){
			$("body").removeClass("body-fix");
			$("#msg-box").text("")
		});

	})
})