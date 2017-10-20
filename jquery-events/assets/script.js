$(document).ready(function(){
	
	var scrollPos;
	var xPos;
	var yPos;
	var winWidth;
	var winHeight;

	// check when the user scrolls
	$(window).scroll(function(){ 
		
		// update the scroll position variable
		scrollPos = $('body').scrollTop();
		
		// update the web page with the variables value
		$('#scroll-pos').html("scroll: " + scrollPos);
	});


	// check when the mouse moves
	$(document).mousemove(function(e){
		
		// update mouse x and y position
		xPos = e.pageX;
		yPos = e.pageY;
		$('#mouse-pos').html('x-pos: ' + xPos + '<br />y-pos: ' + yPos);

		// change div with the id "element"s CSS when you move your mouse 
		$('#element').css({
			'transform' : 'rotate(' + xPos + 'deg) scale(' + xPos/100 + ')',
			'background-color' : 'rgb('+ yPos/5 + ', ' + xPos/3 + ', ' + (xPos*yPos)	/10 + ')',
		});
	});


	// check when the user clicks
	$(document).click(function(e){
		
		// store the click position
		xPos = e.pageX;
		yPos = e.pageY;

		// add text to the page where the user clicks
		$('.container').append('<div style="top: ' + yPos +'px; left:' + xPos + 'px; position: absolute">' + xPos + ', ' + yPos + '</div>')

	});	

	// check when the window is resized
	$(window).resize(function() {

		// update the webpage with the window dimensions
		winWidth = $(window).width();	
		winHeight = $(window).height();
		$('#window-size').html('window width: ' + winWidth + '<br />window height: ' + winHeight);
	});


});