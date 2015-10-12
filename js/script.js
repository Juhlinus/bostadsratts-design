$(document).ready(function()
	{
		$("#contact_name").on("input", function()
		{
			var input=$(this);
			var nameForm=input.val(); 
			console.log(nameForm);
			if(nameForm){input.removeClass("invalid").addClass("valid");}
			else{input.removeClass("valid").addClass("invalid");}
		});
		$("#contact_tel").on("input", function()
		{
			var input=$(this);
			var telForm=input.val();
			console.log(telForm);
			if(telForm){input.removeClass("invalid").addClass("valid");}
			else{input.removeClass("valid").addClass("invalid");}
		});
		$("#contact_email").on("input", function()
		{
			var input=$(this);
			var emailForm=input.val();
			console.log(emailForm);
			if(emailForm){input.removeClass("invalid").addClass("valid");}
			else{input.removeClass("valid").addClass("invalid");}
		});
		$("#contact_que").on("input",function()
		{
			var input=$(this);
			var queForm=input.val();
			console.log(queForm);
			if(queForm){input.addClass("valid").removeClass("invalid");}
			else{input.addClass("invalid").removeClass("valid");}
		});

});
