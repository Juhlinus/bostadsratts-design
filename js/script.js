$(document).ready(function() {
	$('#contact_name').on('input', function() {
		var input=$(this);
		var nameForm=input.val();
		console.log(nameForm);
		if(nameForm){input.removeClass("invalid").addClass("valid");}
		else{input.removeClass("valid").addClass("invalid");}
	});
});