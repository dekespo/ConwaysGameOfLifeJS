function buttonRun()
{
	ACTIVATED = true;
	animate();
}

function buttonStop()
{
	ACTIVATED = false;
}

function buttonClear()
{
	GRID_POSITIONS = {};
	redraw();
}

function getSizeInput()
{
	buttonClear();
	setMINIMUM_SIZE = parseInt(document.getElementById("sizeInput").value);
	if(!isNaN(setMINIMUM_SIZE) && setMINIMUM_SIZE > 0)
	{
		initialize();
		alert("new board");
	}
	else
	{
		document.getElementById("sizeInput").value = MINIMUM_SIZE;
	}
}

function gridCheckBox()
{
	var checked = document.getElementById("gridCheck").checked;
	SHOW_GRID = !SHOW_GRID;
	redraw();
}

function getSpeedInput()
{
	ACTIVATED = false;
	var setSpeed = parseInt(document.getElementById("speedInput").value);
	if(!isNaN(setSpeed) && setSpeed > 0)
	{
		ANIMATION_SPEED = setSpeed;
		ACTIVATED = true;
		animate();
	}
	else
	{
		document.getElementById("speedInput").value = MINIMUM_SIZE;
	}
}
