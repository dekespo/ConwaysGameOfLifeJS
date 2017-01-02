function loadGlobalVariables()
{
	CANVAS = document.getElementById('canvas');
	CONTEXT = CANVAS.getContext('2d');
	MINIMUM_SIZE = setMINIMUM_SIZE || 25; // px both in width and height
	WINDOW_RATIO = 1.5; // width (3) : height (2)
	WIDTH_MAX = 1000;
	HEIGHT_MAX = WIDTH_MAX / WINDOW_RATIO; 
	FINAL_SIZES = {
		"width" : Math.min(CANVAS.width, WIDTH_MAX),
		"height": Math.min(CANVAS.height, HEIGHT_MAX)
	};
	FINAL_SIZES = localComplyThePositionsToMinimumSize(FINAL_SIZES);
	ACTIVATED = false;
	ANIMATION_SPEED = setMINIMUM_ANIMATION_SPEED || 500;
	SHOW_GRID = true;
	GRID_POSITIONS = {};
}

function initialize() 
{
	loadGlobalVariables();
	resizeWindow();
	redraw();
}

var localComplyThePositionsToMinimumSize = function(pos)
{
	pos.width = Math.floor(pos.width / MINIMUM_SIZE) * MINIMUM_SIZE;
	pos.height = Math.floor(pos.height / MINIMUM_SIZE) * MINIMUM_SIZE;
	return pos;
};
