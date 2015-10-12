$(document).ready(function()
	{
		var inputName;
		var inputTel;
		var inputQue;
		
		$("#contact_name").on("input", function()
		{
			inputName = $(this);
			var nameForm=inputName.val(); 
			console.log(nameForm);
			if(nameForm){inputName.removeClass("invalid").addClass("valid");}
			else{inputName.removeClass("valid").addClass("invalid");}
		});
		$("#contact_tel").on("input", function()
		{
			inputTel=$(this);
			var telForm=inputTel.val();
			console.log(telForm);
			if(telForm){inputTel.removeClass("invalid").addClass("valid");}
			else{inputTel.removeClass("valid").addClass("invalid");}
		});
		$("#contact_email").on("input", function()
		{
			var inputEmail=$(this);
			var emailForm=inputEmail.val();
			console.log(emailForm);
			if(emailForm){inputEmail.removeClass("invalid").addClass("valid");}
			else{inputEmail.removeClass("valid").addClass("invalid");}
		});
		$("#contact_que").on("input",function()
		{
			inputQue=$(this);
			var queForm=inputQue.val();
			console.log(queForm);
			if(queForm){inputQue.addClass("valid").removeClass("invalid");}
			else{inputQue.addClass("invalid").removeClass("valid");}
		});
		$("form").submit(function(event)
		{
			if(inputName.hasClass("invalid") || inputTel.hasClass("invalid") || inputQue.hasClass("invalid"))
			{
				event.preventDefault();
				console.log("hejsan");
			}
			else
			{
				console.log("Vi kontaktar dig inom 3 arbetsdagar.");
			}
			
		});
			
	});	

