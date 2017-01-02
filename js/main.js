// Main function
function main()
{
	// Start
	setMINIMUM_SIZE = null;
	setMINIMUM_ANIMATION_SPEED = null;
	initialize();

	// Mouse event
	CANVAS.addEventListener("mousemove", 
			function(event)
			{
				showTheSquare(event);
			}, false);

	CANVAS.addEventListener("mousedown", 
			function(event)
			{
				if(event.button === 0 ||event.button === 1)
					fillTheSquare(event);
				else if(event.button === 2)
					clearTheSquare(event);

			}, false);

	// Animation
	window.requestAnimFrame = (function(callback){
		return function(callback) {
		  window.setTimeout(callback, ANIMATION_SPEED);
		};
	  })();
}

