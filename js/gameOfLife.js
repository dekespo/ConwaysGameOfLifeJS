var isInsideTheBoard = function(pos)
{
	if(pos.x > -1 && pos.x < FINAL_SIZES.width && pos.y > -1 && pos.y < FINAL_SIZES.height)
		return true;
	return false;
};

var getNeighbours = function(pos)
{
	var candis = [
		{"x": pos.x + 1, "y": pos.y},
		{"x": pos.x + 1, "y": pos.y - 1},
		{"x": pos.x + 1, "y": pos.y + 1},
		{"x": pos.x - 1, "y": pos.y},
		{"x": pos.x - 1, "y": pos.y - 1},
		{"x": pos.x - 1, "y": pos.y + 1},
		{"x": pos.x, "y": pos.y - 1},
		{"x": pos.x, "y": pos.y + 1}
	];
	
	for(var i = candis.length - 1; i > -1; i--)
	{
		if(!isInsideTheBoard(candis[i]))
		{
			candis.splice(i, 1);
		}
	}
	return candis;
};

var generateAllCandidates = function()
{
	ALL_CANDIDATES = {};
	for (var lifePos in GRID_POSITIONS)
	{
		if (GRID_POSITIONS.hasOwnProperty(lifePos)) 
		{
			ALL_CANDIDATES[lifePos] = 0;
		}
	}

	for (var key in GRID_POSITIONS)
	{
		if (GRID_POSITIONS.hasOwnProperty(key)) 
		{
			var posIdx = convertStrToNum(key);
			var candis = getNeighbours(posIdx);
			for(var i = 0; i < candis.length; i++)
			{
				var strPodIdx = convertPosToStr(candis[i]);
				if(typeof ALL_CANDIDATES[strPodIdx] === "undefined")
				{
					ALL_CANDIDATES[strPodIdx] = 1;
				}
				else
				{
					ALL_CANDIDATES[strPodIdx] += 1;
				}
			}
		}
	}
};

var convertStrToNum = function(strPos)
{
	var coor = strPos.split(" ");
	return {
		"x": parseInt(coor[0]),
		"y": parseInt(coor[1])
	};
};

var killOrRaise = function()
{
	for (var key in ALL_CANDIDATES)
	{
		if (ALL_CANDIDATES.hasOwnProperty(key)) 
		{
			var alive = (typeof GRID_POSITIONS[key] !== "undefined");
			var numOfNeighs = ALL_CANDIDATES[key];
			if(alive)
			{
				if(numOfNeighs < 2 || numOfNeighs > 3)
				{
					delete GRID_POSITIONS[key];
				}
			}
			else
			{
				if(numOfNeighs === 3)
				{
					var pos = convertStrToNum(key);
					GRID_POSITIONS[key] = {
						"x": pos.x * MINIMUM_SIZE,
						"y": pos.y * MINIMUM_SIZE
					};
				}
			}
		}
	}
};

function ConwaysGameOfLife()
{
	generateAllCandidates();
	killOrRaise();
	redraw();
}
