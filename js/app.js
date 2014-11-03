$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	}).mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	}).mousedown(function(){
		playHadouken();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throw').show();
    	$('.hadouken').finish().show()
    	.animate(
    		{'left': '900px'},
    		500, function(){
    			$(this).hide();
    			$(this).css('left', '-212px');
    		}
    	);
	}).mouseup(function(){
		$('.ryu-throw').hide();
		$('.ryu-ready').show();
	});
	$(document).keydown(function(){
		if(event.keyCode == 88){
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-poses').show();
			console.log('working');
		}
	});
	$(document).keyup(function(){
		if(event.keyCode == 88){
			$('.ryu-poses').hide();
			$('.ryu-still').show();
			console.log('working');
		}
	});
});

function playHadouken(){
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}