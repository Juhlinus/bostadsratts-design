$(document).ready(function() {
	var inputName;
	var inputTel;
	var inputQue;
	var inputEmail;

	$("#contact_name").on("input", function() { //------------------------- User type in name
		inputName = $(this);
		var nameForm = inputName.val();
		validate(inputName, nameForm);
	});
	$("#contact_tel").on("input", function() {
		inputTel = $(this);
		var regX = /^\+?[0-9- ]+$/;
		regxit(regX, inputTel);
		
	});
	$("#contact_email").on("input", function() {
		inputEmail = $(this);
		var regX = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		regxit(regX,inputEmail);
	});
	$("#contact_que").on("input", function() {
		inputQue = $(this);
		var queForm = inputQue.val();
		console.log(queForm);
		validate(inputQue, queForm);
	});
	$("form").submit(function(event) { //------------------------- Submit button


		if (inputName === undefined) //------------------------- If the inputName is undefined 
			inputName = $("#contact_name"); //------------------------- Assign inputName the object
		if (inputTel === undefined)
			inputTel = $("#contact_tel");
		if (inputEmail === undefined)
			inputEmail = $("#contact_email");
		if (inputQue === undefined)
			inputQue = $("#contact_que");

		validate(inputTel, inputTel.val()); //------------------------- Validate inputTel, line 51
		validate(inputName, inputName.val());
		validate(inputEmail, inputEmail.val());
		validate(inputQue, inputQue.val());
		if (inputName.hasClass("invalid") || inputTel.hasClass("invalid") || inputQue.hasClass("invalid") || inputEmail.hasClass("invalid")) {
			event.preventDefault();
			console.log("Not valid");
		}
		else {
			alert("Vi kontaktar dig inom 3 arbetsdagar.");
		}
	});
	function validate(input, text) {
		if (text) { 								//------------------------- if the user typed anything
			input.removeClass("invalid").addClass("valid");
		}
		else {
			input.removeClass("valid").addClass("invalid");
		}
	}
	$("#resetform").click(function() {
		$("input, textarea").removeClass()
	});
	
	function regxit (regxresult, input) //------------------------ regxresult is replaced by regX ex on line 21
	{
		var gris = input.val().match(regxresult);

		if (gris === null) {
			input.removeClass("valid").addClass("invalid");
		}
		else {
			var inputText = input.val();
			validate(input, inputText);
		}
	}


});
