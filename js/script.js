$(document).ready(function() {
	$('#contact_name').on('input', function() {
		var input=$(this);
		var is_name=input.val();
		console.log(is_name);
		if(is_name){input.removeClass("invalid").addClass("valid");}
		else{input.removeClass("valid").addClass("invalid");}
	});
});