// We use this as a replacement 
// for toggleClass since we only 
// want to use the timeout 
// function on specific occations
var isset = false;

// Lambda function assigned to a 
// variable
var doNavbarSlide = function() {
	// Toggle the navbar
	$("nav").toggleClass("nav-on nav-off");
	
	if (isset) {
		
		// Remove overlay 
		$("#overlay").addClass("overlay-on");
		$("#overlay").removeClass("overlay-off");

		// Make sure that you can click stuff again
		setTimeout(function() {
			$("#overlay").addClass("display-off");
			$("#overlay").removeClass("display-on");
		}, 1000);
		
		// Isset is no longer true
		isset = false;
	
	} else {
		
		// Do the opposite of the above
		$("#overlay").addClass("display-on");
		$("#overlay").removeClass("display-off");
		
		$("#overlay").addClass("overlay-off");
		$("#overlay").removeClass("overlay-on");
		
		// Isset is now true
		isset = true;
	}
};

$(function() {
	$(".bars, .cross, #overlay").click(function() {
		// Whether .bars, .cross or #overlay is clicked
		// then call the function
		doNavbarSlide();
	});
});