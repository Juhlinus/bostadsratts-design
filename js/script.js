$(document).ready(function()
	{
		$("#contact_name").on("input", function()
		{
			var input=$(this);
			var nameForm=input.val(); //input value
			console.log(nameForm);
			if(nameForm){input.removeClass("invalid").addClass("valid");}
			else{input.removeClass("valid").addClass("invalid");}
		});
		$("#contact_tel").on("input", function()
		{
			var input=$(this);
			var telForm=input.val();
			console.log(telForm);
			//if(telForm){input.removeClass("invalid").addClass("valid");}
		//	else{input.removeClass("valid").addClass("invalid");}
		
		});
});

	