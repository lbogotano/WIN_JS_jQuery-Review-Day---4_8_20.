

	$('input').keyup(function(){

		var userInput = $('input').val();
		alert(userInput);
		$('div').append(userInput);
	})
    $('body').css({
        "background-color": "black",
        "color": "white"
    })  