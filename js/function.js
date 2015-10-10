var doNavbarSlide = function() {
	$("nav").toggleClass("nav-on nav-off");
	$("#overlay").toggleClass("overlay-on overlay-off").promise().done(function() {
		$("#overlay").toggleClass("display-on display-off");
	});
};

$(function() {
	$(".bars, .cross, #overlay").click(function() {
		doNavbarSlide();
	});
});