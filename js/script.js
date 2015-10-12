$(document).ready(function() {
	var inputName;
	var inputTel;
	var inputQue;
	var inputEmail;

	$("#contact_name").on("input", function() {
		inputName = $(this);
		var nameForm = inputName.val();
		validate(inputName, nameForm);
	});
	$("#contact_tel").on("input", function() {
		inputTel = $(this);
		var telForm = inputTel.val();
		validate(inputTel, telForm);
	});
	$("#contact_email").on("input", function() {
		inputEmail = $(this);
		var inputText = inputEmail.val();
		validate(inputEmail, inputText);
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
			console.log("hejsan");
		}
		else {
			console.log("Vi kontaktar dig inom 3 arbetsdagar.");
		}

	});

	function validate(input, text) {
		if (text) { //------------------------- if the user typed anything
			input.removeClass("invalid").addClass("valid");

		}
		else {
			input.removeClass("valid").addClass("invalid");

		}
	}
		$("#resetform").click(function() {
			$("input, textarea").removeClass()
			
	});


});
