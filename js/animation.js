// Functions on Animation Management
function animate()
{
	ConwaysGameOfLife();
	if(ACTIVATED && Object.keys(GRID_POSITIONS).length !== 0)
	{
		redraw();
		requestAnimFrame(function() { animate(); });
	}
}
