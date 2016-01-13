var width = 1024;
var height = 1024;
var X_OFFSET_px = 64;
var Y_OFFSET_px = 64;

var prefixPNG = "img/pngs/";
var postfixPNG =".png";

var prefixGIF = "img/gifs/";
var postfixGIF =".gif";

var prefixJPG = "img/jpegs/";
var postfixJPG =".jpg";

var prefix = "img/pngs/";
var postfix = ".png";
var currentPath;

var count = 0;
var COUNT_MAX = 20;

var _isDrawingOverlay = true;

var imageNames = {
	0:  "AE-NS-0-nfr-0x00",
	1:  "AENumber_Strokes_01",
	2:  "AENumber_Strokes_02",
	3:	"Infocard_1024_Comp-OS_01_01",
	4: "holdoff001v035",
	5: "galaxy001v001chrv015",
	6: "radial001v042",
	7: "triangle001v012",
	8: "tiles001v008v017",
	9: "myshield006fromnov20spherev018v01",
	10: "1178j_bwDot",
	11: "1183j_BwJewels",
	12: "1170j_Desgn3x3Multi",
	13: "1099j_CirclesWall",
	14: "1107j_GreenCells",
	15: "1092j_WaterBallRings",
	16: "DowntownView_2BlueSkies",
	17: "20141029_121800_Scenic",
	18: "20151113_135401-EFFECTS_TreesLLighting",
	19: "2015-07-30_PeaceOnEarth"
	}

	// 0 for png, 1 for jpg, 2 for ???
var imageTypes = {
	0: 0,
	1: 0,
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0,
	7: 0,
	8: 0,
	9: 0,
	10: 1,
	11: 1,
	12: 1,
	13: 1,
	14: 1,
	15: 1,
	16: 1,
	17: 1,
	18: 1,
	19: 1
}


var startingPositionsX = {
	0:  480,
	1:  480,
	2:  480,
	3:	0,
	4:	-448,
	5:	-1500,
	6:	-136,
	7:	-436,
	8:  -460,
	9:  -204,
	10: -57,
	11: -57,
	12: -57,
	13: 0,
	14: -44,
	15: -19,
	16: -1800,
	17: -2048,
	18: -512,
	19: -512
}	
var startingPositionsY = {
	0:  480,
	1:  480,
	2:  480,
	3:	-512,
	4:	0,
	5:	-750,
	6:	0,
	7:	0,
	8:  0,
	9:  112,
	10: 0,
	11: 0,
	12: -16,
	13: 0,
	14: 0,
	15: 0,
	16: -1600,
	17: 0,
	18: -256,
	19: -282
}	



var	displayImage = new Image();
var	displayImage2 = new Image();

var ctx;
var canvas;
var debug = true;

// Key Handling

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if(e.keyCode == 68) {			// d Increase Count
		increaseCount();
    }
    else if(e.keyCode == 65) {		// a Decrease count
		decreaseCount();
    } 
	 else if(e.keyCode == 87) {		// w Toggle overlay
	    _isDrawingOverlay = !_isDrawingOverlay;  
		drawGeneral();
    } 
	else if(e.keyCode == 38) {  // arrow up
	}
	else if(e.keyCode == 40) { // arrow down
	}
}
function keyUpHandler(e) {
    if(e.keyCode == 87) {
    }
    else if(e.keyCode == 83) {
    }
	else if(e.keyCode == 38) {
	}
	else if(e.keyCode == 40) {
	}
}


// Handling count functions
function increaseCount()
{
	if (count < COUNT_MAX)
	{
		count ++;
	}
	else
	{
		count = 0;
	}
	drawGeneral();
	
}
function decreaseCount()
{
	if (count > 0)
	{
		count--;
	}
	else
	{
		count = COUNT_MAX;
	}
	drawGeneral();
}





// Drawing functions
// Calls draw function based on image type
function drawGeneral()
{
	if(imageTypes[count] == 0)
	{
		drawPNG();
	}
	else if (imageTypes[count] == 1)
	{
		drawJPEG();
	}
	else
	{
		// should not enter
	}
}

function drawPNG()
{
	if(debug){console.log("dbg:drawPNG: Entered")};
	prefix = prefixPNG;
	postfix = postfixPNG;
	currentPath = prefix + imageNames[count] + postfix;
	displayImage.src = currentPath;
	displayImage.onload  = function()
	{
		    ctx.clearRect(0, 0, width, height);	// Clears the canvas
		    ctx.drawImage(displayImage, startingPositionsX[count], startingPositionsY[count] );
			if(_isDrawingOverlay)
			{
				drawOverlay();
				drawPictureText();
			}
	}
    if(debug){console.log("dbg:drawPNG: Image " + currentPath + " drawn")};
	if(debug){console.log("dbg:drawPNG: Ended")};
}
function drawGIF()
{
	if(debug){console.log("dbg:drawGIF: Entered")};
	prefix = prefixGIF;
	postfix = postfixGIF;
	currentPath = prefix + imageNames[count] + postfix;
	displayImage.src = currentPath;
	displayImage.onload  = function()
	{
		    ctx.clearRect(0, 0, width, height);	// Clears the canvas
		    ctx.drawImage(displayImage, startingPositionsX[count], startingPositionsY[count] );
			if(_isDrawingOverlay)
			{
				drawOverlay();
				drawPictureText();
			}
	}
    if(debug){console.log("dbg:drawGIF: Image " + currentPath + " drawn")};
	if(debug){console.log("dbg:drawGIF: Ended")};
}
function drawJPEG()
{
	if(debug){console.log("dbg:drawJPEG: Entered")};
	prefix = prefixJPG;
	postfix = postfixJPG;
	currentPath = prefix + imageNames[count] + postfix;
	displayImage.src = currentPath;
	displayImage.onload  = function()
	{
		    ctx.clearRect(0, 0, width, height);	// Clears the canvas
		    ctx.drawImage(displayImage, startingPositionsX[count], startingPositionsY[count] );
			if(_isDrawingOverlay)
			{
				drawOverlay();
				drawPictureText();
			}
	}
    if(debug){console.log("dbg:drawJPEG: Image " + currentPath + " drawn")};
	if(debug){console.log("dbg:drawJPEG: Ended")};
}

function drawOverlay()
{
	
	// Background color - Screen width
	//ctx.beginPath();
	//ctx.rect(0,0,width,height);
	//ctx.fillStyle = "#777777";
    //ctx.fill();
    //ctx.closePath()
	
	// Left Bar
	ctx.beginPath();
    ctx.rect(0, 0, 32, canvas.height);
	ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.fill();
    ctx.closePath();
	// Right Bar
	ctx.beginPath();
    ctx.rect(canvas.width-32, 0, 32, canvas.height);
	ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.fill();
    ctx.closePath();
	// Top Bar
	ctx.beginPath();
    ctx.rect(0, 0, width, 32);
	ctx.fillStyle = "rgba(200,200,200,1.0)";
    ctx.fill();
    ctx.closePath();
	// Bottom Bar
	ctx.beginPath();
    ctx.rect(0, height-32, width, 32);
	ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fill();
    ctx.closePath();
	
	
	// Center Vertical Line
	ctx.beginPath();
    ctx.rect(width/2, 0, 4, height);
	ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.fill();
    ctx.closePath();
	// Center Horizontal Line
	ctx.beginPath();
    ctx.rect(0, height/2, width, 4);
	ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.fill();
    ctx.closePath();
	
}

function drawPictureText() {
    ctx.font = "14px Arial";
    ctx.fillStyle = "#000000";
	// Top Text - Number and Name
    ctx.fillText("Image number: "+count, 32, 12);
	ctx.fillText("Image name:   "+ imageNames[count], 32,28);
	
	// Bottom Text
	ctx.fillText("Image Prefix:   " + prefix, 32, height-20);
	ctx.fillText("Image Postfix: " + postfix, 32, height -4 );

}

function initialize() {
	if(debug){console.log("dbg:initialize entered")};
	
	// Set up the Canvas
	canvas = document.getElementById("picCanvas");
	ctx = canvas.getContext("2d");

	ctx.width = width;
	ctx.height = height;


   // Display initial image
   //drawBackground();
   drawPNG();
   
   if(debug){console.log("dbg:initialize ended")};

}

window.onload = function() {
	if(debug){console.log("dbg:window.onload entered")};


	initialize();
	
	if(debug){console.log("dbg:window.onload ended")};
}