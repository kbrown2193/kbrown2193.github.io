window.onload = function() {
  /*
	Script name:	Kilobeats_HTW.js
	By:				Kyle Brown
	Date:			2015/09/15
	
	Description
	-----------
	A Hunt the wompus spin off.  Player moves in an 7x7 grid (world is 8x8, but edge is walls).  
	Player must find glyph and make it to exit to win.
	There is a wompus and two pitfalls placed in the map and if the player
	moves to these tiles the player loses.
	There are also two bats which move each turn & will teleport the player random on the map
	and reset the tiles visited.
 
	How to play
	-----------
	Player presses W to move forward, A to move left, S to move down, and D to move right.
	Player presses R to reset game.
	
	Game Files Details
	------------
	Used in conjunction with Kilobeats_HTW.html for the browser.
	Uses simple_tilemap.js to store map data and render it.
*/
  var canvas = document.createElement("canvas"),
      context,
	  _moveRight = false,
	  _moveLeft = false,
	  _moveUp = false,
	  _moveDown = false,
	  _resetPressed = true,
	  _playerX =1,
	  _playerY= 1,
	  _level = 0,
	  _wX = 2,			// initial womp position
	  _wY = 1,
	  _eX = 6,			// initial exit position
	  _eY = 6,
	  _tX = 1,			// initial treasure position
	  _tY = 6,
	  _p1X = 2,			// initial pitfall positions
	  _p1Y = 6,
	  _p2X = 3,
	  _p2Y = 6,
	  _b1X = 4,			// initial bat positions
	  _b1Y = 6,
	  _b2X = 5,
	  _b2Y = 6,
	  _treasurePickedUp = false;
	  _gameOver = false,
	  _exteriorSpriteNum = 32;
	  _interiorSpriteNum = 34;
	  

  canvas.width = 640;
  canvas.height = 640;
  document.body.appendChild(canvas);
  context = canvas.getContext("2d");
  
  // Key handling section
  // Detects if W,A,S,D or R is pressed
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 65) {
        _moveLeft = true;
    }
    else if(e.keyCode == 87) {
        _moveUp = true;
    } 
	else if(e.keyCode == 68) {
		_moveRight = true;
	}
	else if(e.keyCode == 83) {
		_moveDown = true;
	}
	else if(e.keyCode == 82) {
		_resetPressed = true;
	}
}
function keyUpHandler(e) {
    if(e.keyCode == 37) {
        _moveLeft = false;
    }
    else if(e.keyCode == 38) {
        _moveUp = false;
    }
	else if(e.keyCode == 39) {
		_moveRight = false;
	}
	else if(e.keyCode == 40) {
		_moveDown = false;
	}
	else if(e.keyCode == 82) {
		_resetPressed = false;
	}
}

// Random interval function
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
// Places the game elements randomly on map by setting posisitions to 0,0 
// then randomly selecting an X and Y in the gamespace, provided it does not confilct
// with another element
function placeElementsRandomly(){
	_tX = 0;
	_tY = 0;
	_wX = 0;
	_wY = 0;
	_cX = 0;
	_cY = 0;
	_b1X = 0;
	_b1Y = 0;
	_b2X = 0;
	_b2Y = 0;
	_p1X = 0;
	_p1Y = 0;
	_p2X = 0;
	_p2Y = 0;
	_eX = 0;
	_eY = 0;
	
	_eX = randomIntFromInterval(1,6);
	_eY = randomIntFromInterval(1,6);
	drawExit();
	
	var isGoodWPlacement = false;
	while(!isGoodWPlacement)
	{
		_wX = randomIntFromInterval(1,6);
		_wY = randomIntFromInterval(1,6);
		if(_wX == _eX && _wY == _eY)
		{
			// not good placement
		} else{
			isGoodWPlacement = true;
		}
	}
	var isGoodTPlacement = false;
	while(!isGoodTPlacement)
	{
		_tX = randomIntFromInterval(1,6);
		_tY = randomIntFromInterval(1,6);
		if(_tX == _eX && _tY == _eY || _tX == _wX && _tY == _wY)
		{
			// not good placement
		} else{
			isGoodTPlacement = true;
		}
	}
	var isGoodP1Placement = false;
	while(!isGoodP1Placement)
	{
		_p1X = randomIntFromInterval(1,6);
		_p1Y = randomIntFromInterval(1,6);
		if(_p1X == _eX && _p1Y == _eY || _p1X == _wX && _p1Y == _wY || _p1X == _tX && _p1Y == _tY)
		{
			// not good placement
		} else{
			isGoodP1Placement = true;
		}
	}
	var isGoodP2Placement = false;
	while(!isGoodP2Placement)
	{
		_p2X = randomIntFromInterval(1,6);
		_p2Y = randomIntFromInterval(1,6);
		if(_p2X == _eX && _p2Y == _eY || _p2X == _wX && _p2Y == _wY || _p2X == _tX && _p2Y == _tY || _p2X == _p1X && _p2Y == _p1Y)
		{
			// not good placement
		} else{
			isGoodP2Placement = true;
		}
	}
	_b1X = randomIntFromInterval(1,6);
	_b1Y = randomIntFromInterval(1,6);
	_b2X = randomIntFromInterval(1,6);
	_b2Y = randomIntFromInterval(1,6);
	
	
	

}
function drawExit(){
	var exitPos = (_eX ) + (_eY*8);
	SimpleTilemap.drawPlayer(exitPos,39)
}
function placePlayerRandomly(){
	var isGoodPlacement = false;
	while(!isGoodPlacement)
	{
		_playerX = randomIntFromInterval(1,6);
		_playerY = randomIntFromInterval(1,6);
		if(_playerX == _wX && _playerY == _wY || _playerX == _p1X && _playerY == _p1Y || _playerX == _p2X && _playerY == _p2Y || _playerX == _eX && _playerY == _eY)
		{
			// not good placement
		}
		else
		{
			// good placement
			isGoodPlacement = true;
		}
		
	}

	
	var playerPos = (_playerX ) + (_playerY*8);
	SimpleTilemap.drawPlayer(playerPos,9);
	SimpleTilemap.drawExit
}

// Checks the player status after moving a tile
function checkPlayerStatus(){
	// YOU GET EATEN BY WOMPUS: Logic for when player enters tile with wompus
	if ( _playerX == _wX && _playerY == _wY)
	{
		// you lose
		SimpleTilemap.reset(_exteriorSpriteNum,_interiorSpriteNum);
		SimpleTilemap.loser();
		placePlayerRandomly();
		drawExit();
		_level = 0;
	}
	
	// YOU PICK UP TREASURE: Logic for when player picks up treasure
	if ( _playerX == _tX && _playerY == _tY && !_treasurePickedUp)
	{
		SimpleTilemap.treasurer(_level);
		_treasurePickedUp = true;
	}
	
	// YOU GET TELEPORTED BY BAT: Logic for when player enters tile with bat
	if ( _playerX == _b1X && _playerY == _b1Y || _playerX == _b2X && _playerY == _b2Y)
	{
		SimpleTilemap.reset(_exteriorSpriteNum,_interiorSpriteNum);
		placePlayerRandomly();
		drawExit();
	}
	
	// YOU FALL TO YOUR DEATH:  Logic for when player enters tile with pitfall
	if ( _playerX == _p1X && _playerY == _p1Y || _playerX == _p2X && _playerY == _p2Y )
	{
		SimpleTilemap.reset(_exteriorSpriteNum,_interiorSpriteNum);
		SimpleTilemap.loser();
		placePlayerRandomly();
		drawExit();

		_level = 0;
		
	}
	// YOU WIN: Win logic if play enters exit tile with treasure
	if ( _playerX == _eX && _playerY == _eY && _treasurePickedUp)
	{
		SimpleTilemap.winner(_level,_exteriorSpriteNum, _interiorSpriteNum);
		placeElementsRandomly();
		placePlayerRandomly();
		drawExit();
		_level ++;
		_treasurePickedUp = false;
		if (_interiorSpriteNum == 63)
		{
			_interiorSpriteNum = 34;
		}
		else 
		{
			_interiorSpriteNum ++;
		}
	}
}
  // Initialize the starting map
  SimpleTilemap.initialize(
    "512_Tiling_v02.png", 
    64, 
    64,
    8,
    8,
    [
      _exteriorSpriteNum,_exteriorSpriteNum,_exteriorSpriteNum,_exteriorSpriteNum,_exteriorSpriteNum,_exteriorSpriteNum,_exteriorSpriteNum,_exteriorSpriteNum,
	  _exteriorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_exteriorSpriteNum,
	  _exteriorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_exteriorSpriteNum,
	  _exteriorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_exteriorSpriteNum,
	  _exteriorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_exteriorSpriteNum,
	  _exteriorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_exteriorSpriteNum,
	  _exteriorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,_interiorSpriteNum,39,_exteriorSpriteNum,
	  _exteriorSpriteNum,_exteriorSpriteNum,_exteriorSpriteNum,_exteriorSpriteNum,_exteriorSpriteNum,_exteriorSpriteNum,_exteriorSpriteNum,_exteriorSpriteNum
    ]
  );
  
  
  // Draws the description on how to play at the bottom of the screen
 function drawDescription() {
	context.font = "16px Arial";
    context.fillStyle = "#555500";
    context.fillText("Move with W,A,S,D", 16,528);
	context.fillText("Reset with R", 16,546)
	context.fillText("Find the glpyh and make it the exit to further your adventure!", 16,562)
	context.fillText("Avoid the wompus and pitfalls!", 16,578)


} 
// Moves the bats
function moveBats(batDirection)
{
	if (_b1X == 1 &&  batDirection == -1 || _b1X == 6 && batDirection == 1 || _b1X == _eX && _b1Y == _eY)
	{
			// bat at edge, don't move
	} else{
				_b1X += batDirection;
	}
	if (_b2Y == 1 && batDirection == -1 || _b2Y == 6 && batDirection == 1 || _b2X == _eX && _b2Y == _eY)
	{
			// bat at edge, don't move
	} else{
				_b2Y += batDirection;
	}
}
  function gameLoop() {
    SimpleTilemap.render(context);
	drawDescription();
	
	// If Movement pressed
	// if Moving right, make sure in bounds of game, then move and check if landed on something
	if (_moveRight)
	{
		if (_playerX <6)
		{
			_playerX += 1;
			SimpleTilemap.moverX(_playerX,_playerY,-1);
			checkPlayerStatus();
			moveBats(-1);
		}
		_moveRight = false;
	}
	if (_moveLeft)
	{
		if (_playerX >1)
		{
			_playerX -= 1;
			SimpleTilemap.moverX(_playerX,_playerY,1);	
			checkPlayerStatus();
			moveBats(1);
		}
		_moveLeft = false;		
	}
	if (_moveUp)
	{
		if ( _playerY >1)
		{
			_playerY -= 1;
			SimpleTilemap.moverY(_playerX,_playerY,1);	
			checkPlayerStatus();
			moveBats(-1);
		}
		_moveUp = false	;
	}
	if (_moveDown)
	{
		if ( _playerY < 6)
		{
			_playerY += 1;
			SimpleTilemap.moverY(_playerX,_playerY,-1);	
			checkPlayerStatus();
			moveBats(1);
		}
		_moveDown = false;
	}

	
	
	if (_gameOver)
	{
		// Game Over
	}
	if (_resetPressed)
	{
		_level = 0
		SimpleTilemap.reset(_exteriorSpriteNum,_interiorSpriteNum);
		placeElementsRandomly();
		placePlayerRandomly();
		drawExit();
	
		_resetPressed = false;
		
	
	}
    window.requestAnimationFrame(gameLoop);
  }
  
  window.requestAnimationFrame(gameLoop); 
}