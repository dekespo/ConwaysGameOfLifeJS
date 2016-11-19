// Functions on Mouse Management
function getMousePos(event) 
{
	var rect = CANVAS.getBoundingClientRect();
	return {
		x: (event.clientX - rect.left) / (rect.right - rect.left) * CANVAS.width,
		y: (event.clientY - rect.top) / (rect.bottom - rect.top) * CANVAS.height
	};
}

function fillTheSquare(event)
{
	var mousePos = getMousePos(event);
	mousePosIdx = complyThePositionsToMinimumSize(mousePos);
	GRID_POSITIONS[convertPosToStr(mousePosIdx)] = mousePos;
}

function showTheSquare(event)
{
	redraw();
	var mousePos = getMousePos(event);
	complyThePositionsToMinimumSize(mousePos);
	fillSquare(mousePos, 0.5);
}

function clearTheSquare(event)
{
	var mousePos = getMousePos(event);
	mousePosIdx = complyThePositionsToMinimumSize(mousePos);
	delete GRID_POSITIONS[convertPosToStr(mousePosIdx)];
}

var complyThePositionsToMinimumSize = function(pos)
{
	var indexX = Math.floor(pos.x / MINIMUM_SIZE); 
	var indexY = Math.floor(pos.y / MINIMUM_SIZE); 
	pos.x = indexX * MINIMUM_SIZE;
	pos.y = indexY * MINIMUM_SIZE;
	return {
		"x": indexX,
		"y": indexY
	};
};

var convertPosToStr = function(pos)
{
	return pos.x.toString() + " " + pos.y.toString();
};
