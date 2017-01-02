function buttonRun()
{
	ACTIVATED = true;
	animate();
}

function buttonStop()
{
	ACTIVATED = false;
	animate();
}

function buttonClear()
{
	GRID_POSITIONS = {};
	ACTIVATED = false;
	redraw();
	animate();
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
	setMINIMUM_ANIMATION_SPEED = parseInt(document.getElementById("speedInput").value);
	if(!isNaN(setMINIMUM_ANIMATION_SPEED) && setMINIMUM_ANIMATION_SPEED > 0)
	{
		ANIMATION_SPEED = setMINIMUM_ANIMATION_SPEED;
		ACTIVATED = true;
		animate();
	}
	else
	{
		document.getElementById("speedInput").value = ANIMATION_SPEED;
	}
}
