var isset = false;

var doNavbarSlide = function() {
	$("nav").toggleClass("nav-on nav-off");
	
	if (isset) {
	
		$("#overlay").addClass("overlay-on");
		$("#overlay").removeClass("overlay-off");

		setTimeout(function() {
			$("#overlay").addClass("display-off");
			$("#overlay").removeClass("display-on");
		}, 1000);
		
		isset = false;
	
	} else {
	
		$("#overlay").addClass("display-on");
		$("#overlay").removeClass("display-off");
		
		$("#overlay").addClass("overlay-off");
		$("#overlay").removeClass("overlay-on");
		
		isset = true;
	}
};

$(function() {
	$(".bars, .cross, #overlay").click(function() {
		doNavbarSlide();
	});
});