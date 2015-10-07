var doNavbarSlide = function() {
	$('nav').toggleClass('toggle-nav');
	$('#overlay').toggleClass('toggle-overlay');
};

$(function() {
	$('.bars, .cross, #overlay').click(function() {
		doNavbarSlide();
	});
});