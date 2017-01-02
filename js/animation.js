// Functions on Animation Management
function animate()
{
	ConwaysGameOfLife();
	if(ACTIVATED && Object.keys(GRID_POSITIONS).length !== 0)
	{
		redraw();
		requestAnimFrame(function() { animate(); });
	}
	else
	{
		ACTIVATED = false;
	}
	runtimeCheck();
}

function runtimeCheck()
{
	console.log("runtimeCheck");
	console.log("ACTIVATED", ACTIVATED);
	console.log("GRID_POSITIONS", GRID_POSITIONS);
	if(ACTIVATED)
	{
		document.getElementById("startButton").disabled = true;
		document.getElementById("stopButton").disabled = false;
	}
	else
	{
		document.getElementById("startButton").disabled = false;
		document.getElementById("stopButton").disabled = true;
	}

	if(Object.keys(GRID_POSITIONS).length === 0)
	{
		document.getElementById("clearButton").disabled = true;
	}
	else
	{
		document.getElementById("clearButton").disabled = false;
	}
}
