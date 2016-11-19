// Functions on Drawing Management
function redraw() 
{
    CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
	if(SHOW_GRID)
		drawGrid();
	drawFilledSquares();
}

function drawGrid()
{
	var p = 0;
	CONTEXT.beginPath();
	CONTEXT.globalAlpha = 0.5;
	for(var x = 0; x <= FINAL_SIZES.width; x += MINIMUM_SIZE)
	{
		CONTEXT.moveTo(x + p, p);
		CONTEXT.lineTo(x + p, FINAL_SIZES.height + p);
	}

	for (var y = 0; y <= FINAL_SIZES.height; y += MINIMUM_SIZE) 
	{
		CONTEXT.moveTo(p, y + p);
		CONTEXT.lineTo(FINAL_SIZES.width + p, y + p);
	}

	CONTEXT.strokeStyle = "black";
	CONTEXT.stroke();
	CONTEXT.closePath();
}

function drawFilledSquares()
{
	for (var key in GRID_POSITIONS)
	{
		if (GRID_POSITIONS.hasOwnProperty(key)) 
		{
			fillSquare(GRID_POSITIONS[key], 1);
		}
	}
}

function fillSquare(pos, alpha)
{
	CONTEXT.beginPath();
	CONTEXT.rect(pos.x, pos.y, MINIMUM_SIZE, MINIMUM_SIZE);
	CONTEXT.globalAlpha = alpha;
	CONTEXT.fillStyle = "blue";
	CONTEXT.fill();
	CONTEXT.closePath();
}
