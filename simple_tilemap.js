var SimpleTilemap = (function() {
  var _tilemap = {},
      _tileset = new Image(),
      _tileWidth,
      _tileHeight,
      _tilesPerRow,
      _map,
      _mapWidth,
      _mapHeight,
      _initialized = false,
	  _levelLimit = 63;
  
  /* Initializes the tilemap.
  
     Parameters:
       tilesetPath - a relative or absolute url to the tileset image fileCreatedDate
       tileWidth - the width of tiles, in pixels
       tileHeight - the height of tiles, in pixels
       mapWidth - the width of the map in tiles
       mapHeight - the height of the map in titles
       mapData - an array of tile indices
	   
	 Functions:
	   Initialize - 
	   Render
     Note: The tiles are assumed to start in the upper-left
       hand corner of the tileset image and run left-to-right
  */       
  _tilemap.initialize = function(tilesetPath, tileWidth, tileHeight, mapWidth, mapHeight, mapData) {
    var mapSize = mapWidth * mapHeight;
    
    // Set the tilemap as uninitialized until the image loads
    _initialized = false;
    _tileset.onload = function() {
      _tilesPerRow = Math.floor(_tileset.width / _tileWidth);
      _initialized = true;
    }
    
    // Set the private variables
    _tileset.src = tilesetPath;
    _tileWidth = tileWidth;
    _tileHeight = tileHeight;
    _mapWidth = mapWidth;
    _mapHeight = mapHeight;
    _map = new Uint8Array(mapSize);
    
    // Copy the tilemap indices from mapData
    for(var i = 0; i < mapSize; i++) {
      _map[i] = mapData[i];
    }
    
  }
  
  
  _tilemap.moverX = function(playerX, playerY, direction) {
	        
			_map[(playerX ) + (playerY*8)] = 9;
			_map[(playerX+direction ) + (playerY*8)] = 18;


  }
   _tilemap.moverY = function(playerX, playerY,direction) {
	        
			_map[(playerX ) + (playerY*8)] = 9;
			_map[(playerX) + ((playerY+direction)*8)] = 18;


  }
  _tilemap.loser = function(){
	  
	  _map[3] = 54;
	  _map[4] = 8;
	  _map[5] = 9;
	  _map[6] = 5;
	  _map[7] = 4;
  }
   _tilemap.treasurer = function(currentLevel){
	  _map[56] = currentLevel;
  }
  _tilemap.drawPlayer = function(playerPosition,playerSpriteNum)
  {
	  if(_map[playerPosition])
		  _map[playerPosition] = playerSpriteNum;
  }
  _tilemap.reset = function(exteriorSpriteNum,interiorSpriteNum)
  {
			  _map[0] = exteriorSpriteNum;
			  _map[1] = exteriorSpriteNum;
			  _map[2] = exteriorSpriteNum;
			  _map[3] = exteriorSpriteNum;
			  _map[4] = exteriorSpriteNum;
			  _map[5] = exteriorSpriteNum;
			  _map[6] = exteriorSpriteNum;
			  _map[7] = exteriorSpriteNum;
			  _map[8] = exteriorSpriteNum;
			  _map[9] = interiorSpriteNum;
			  _map[10] = interiorSpriteNum;
			  _map[11] = interiorSpriteNum;
			  _map[12] = interiorSpriteNum;
			  _map[13] = interiorSpriteNum;
			  _map[14] = interiorSpriteNum;
			  _map[15] = exteriorSpriteNum;
			  _map[16] = exteriorSpriteNum;
			  _map[17] = interiorSpriteNum;
			  _map[18] = interiorSpriteNum;
			  _map[19] = interiorSpriteNum;
			  _map[20] = interiorSpriteNum;
			  _map[21] = interiorSpriteNum;
			  _map[22] = interiorSpriteNum;
			  _map[23] = exteriorSpriteNum;
			  _map[24] = exteriorSpriteNum;
			  _map[25] = interiorSpriteNum;
			  _map[26] = interiorSpriteNum;
			  _map[27] = interiorSpriteNum;
			  _map[28] = interiorSpriteNum;
			  _map[29] = interiorSpriteNum;
			  _map[30] = interiorSpriteNum;
			  _map[31] = exteriorSpriteNum;
			  _map[32] = exteriorSpriteNum;
			  _map[33] = interiorSpriteNum;
			  _map[34] = interiorSpriteNum;
			  _map[35] = interiorSpriteNum;
			  _map[36] = interiorSpriteNum;
			  _map[37] = interiorSpriteNum;
			  _map[38] = interiorSpriteNum;
			  _map[39] = exteriorSpriteNum;
			  _map[40] = exteriorSpriteNum;
			  _map[41] = interiorSpriteNum;
			  _map[42] = interiorSpriteNum;
			  _map[43] = interiorSpriteNum;
			  _map[44] = interiorSpriteNum;
			  _map[45] = interiorSpriteNum;
			  _map[46] = interiorSpriteNum;
			  _map[47] = exteriorSpriteNum;
			  _map[48] = exteriorSpriteNum;
			  _map[49] = interiorSpriteNum;
			  _map[50] = interiorSpriteNum;
			  _map[51] = interiorSpriteNum;
			  _map[52] = interiorSpriteNum;
			  _map[53] = interiorSpriteNum;
			  _map[54] = interiorSpriteNum;
			  _map[55] = exteriorSpriteNum;
			  _map[56] = exteriorSpriteNum;
			  _map[57] = exteriorSpriteNum;
			  _map[58] = exteriorSpriteNum;
			  _map[59] = exteriorSpriteNum;
			  _map[60] = exteriorSpriteNum;
			  _map[62] = exteriorSpriteNum;
			  _map[62] = exteriorSpriteNum;
			  _map[63] = exteriorSpriteNum;
	  
  }
  _tilemap.winner = function(levelWon, exteriorSpriteNum,interiorSpriteNum){
	  if (levelWon <= _levelLimit)
	  {
		  	  _map[0] = levelWon;
			  if(levelWon>= 1)
				  _map[1] = levelWon-1;
			  else
				  _map[1] = exteriorSpriteNum;		  
			  if(levelWon>= 2)
				  _map[2] = levelWon-2;
			  else
				  _map[2] = exteriorSpriteNum;
			  if(levelWon>= 3)
				  _map[3] = levelWon-3;
			  else
				  _map[3] = exteriorSpriteNum;
			  if(levelWon>= 4)
				  _map[4] = levelWon-4;
			  else
				  _map[4] = exteriorSpriteNum;
			  if(levelWon>= 5)
				  _map[5] = levelWon-5;
			  else
				  _map[5] = exteriorSpriteNum;
			  if(levelWon>= 6)
				  _map[6] = levelWon-6;
			  else
				  _map[6] = exteriorSpriteNum;
			  if(levelWon>= 7)
				  _map[7] = levelWon-7;
			  else
				  _map[7] = exteriorSpriteNum;
			  _map[8] = exteriorSpriteNum;
			  _map[9] = interiorSpriteNum;
			  _map[10] = interiorSpriteNum;
			  _map[11] = interiorSpriteNum;
			  _map[12] = interiorSpriteNum;
			  _map[13] = interiorSpriteNum;
			  _map[14] = interiorSpriteNum;
			  _map[15] = exteriorSpriteNum;
			  _map[16] = exteriorSpriteNum;
			  _map[17] = interiorSpriteNum;
			  _map[18] = interiorSpriteNum;
			  _map[19] = interiorSpriteNum;
			  _map[20] = interiorSpriteNum;
			  _map[21] = interiorSpriteNum;
			  _map[22] = interiorSpriteNum;
			  _map[23] = exteriorSpriteNum;
			  _map[24] = exteriorSpriteNum;
			  _map[25] = interiorSpriteNum;
			  _map[26] = interiorSpriteNum;
			  _map[27] = interiorSpriteNum;
			  _map[28] = interiorSpriteNum;
			  _map[29] = interiorSpriteNum;
			  _map[30] = interiorSpriteNum;
			  _map[31] = exteriorSpriteNum;
			  _map[32] = exteriorSpriteNum;
			  _map[33] = interiorSpriteNum;
			  _map[34] = interiorSpriteNum;
			  _map[35] = interiorSpriteNum;
			  _map[36] = interiorSpriteNum;
			  _map[37] = interiorSpriteNum;
			  _map[38] = interiorSpriteNum;
			  _map[39] = exteriorSpriteNum;
			  _map[40] = exteriorSpriteNum;
			  _map[41] = interiorSpriteNum;
			  _map[42] = interiorSpriteNum;
			  _map[43] = interiorSpriteNum;
			  _map[44] = interiorSpriteNum;
			  _map[45] = interiorSpriteNum;
			  _map[46] = interiorSpriteNum;
			  _map[47] = exteriorSpriteNum;
			  _map[48] = exteriorSpriteNum;
			  _map[49] = interiorSpriteNum;
			  _map[50] = interiorSpriteNum;
			  _map[51] = interiorSpriteNum;
			  _map[52] = interiorSpriteNum;
			  _map[53] = interiorSpriteNum;
			  _map[54] = interiorSpriteNum;
			  _map[55] = exteriorSpriteNum;
			  _map[56] = exteriorSpriteNum;
			  _map[57] = exteriorSpriteNum;
			  _map[58] = exteriorSpriteNum;
			  _map[59] = exteriorSpriteNum;
			  _map[60] = exteriorSpriteNum;
			  _map[62] = exteriorSpriteNum;
			  _map[62] = exteriorSpriteNum;
			  _map[63] = exteriorSpriteNum;
	  }
	  
  }
  
  
  
  /* Draws the tilemap using the provided context
     Parameters:
       context - the canvas context to draw the tilemap into
  */
  _tilemap.render = function(context) {
    if(_initialized) {
      context.save();
      for(var y = 0; y < _mapHeight; y++) {
        for(var x = 0; x < _mapWidth; x++) {
          // Render tile at (x,y)
          var index = _map[y * _mapWidth + x],
              sx = Math.floor(index / _tilesPerRow),
              sy = index % _tilesPerRow;
          context.drawImage(
            _tileset,
            _tileWidth * sx,
            _tileHeight * sy,
            _tileWidth,
            _tileHeight,
            x * _tileWidth,
            y * _tileHeight,
            _tileWidth,
            _tileHeight
          );
        }
      }
      context.restore();
    }
  };
  
  return _tilemap;
  
}());
  