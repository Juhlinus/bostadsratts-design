var doNavbarSlide = function() {
	$('nav').toggleClass('toggle-nav');
	$('#overlay').toggleClass('toggle-overlay');
};

$(function() {
	$('.bars').click(function() {
		doNavbarSlide();
	});

	$('.cross').click(function() {
		doNavbarSlide();
	});
});