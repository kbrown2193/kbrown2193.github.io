/*
 * ==============
 * Script ID Data
 * ==============
 * File Name: artgallery_V001.js
 * Version Date:  ad-2016-01-16 19:01:00
 * Contributors: Kyle Brown
 *
 * Documentation Language: English  (en){lkb-000-001}
 *
 * ===========
 * Description
 * ===========
 * This script implements an art gallery in JavaScript and HTML5.  
 * 
 *
 * ========
 * Controls
 * ========
 * D increases the image count
 * A decreases the image count
 * W toggles the overlay
 *
 * ==========
 * How to Use
 * ==========
 * In the HTML document that contains the reference to this script,
 * add the necessary HTML5 code in the html file.
 *
 *
 * ==========
 * HTML5 Code
 * ==========
 * For accessing the script:
 *		<script src="src/artgallery_v001.js"></script>
 *	
 * For the canvas reference:
 *		<canvas id = "picCanvas" width="1024" height="1024"></canvas>
 *
 *
 * ===============
 * Version History
 * ===============
 * Version Date				Version Number kb-4RGB-pixels   	Comment
 * ------------				--------------------------------	-------
 * ad-2016-01-13 23:50:00	(0,0,1)(0,7,232)(1,1,9)(23,50,0)	Initial working version
 * 00-00-01 | 00-07-E8 | 01-01-09 | 17-32-00 
 *
 * ad-2016-01-16 19:01:00	(0,0,1)(0,7,232)(1,1,16)(19,1,0)	Commenting & Clean-up
 * 00-00-01 | 00-07-E8 | 01-01-10 | 13-01-00 
 *
 *
 * =================
 * File Dependencies !@#!@#
 * =================
 * For displaying the images, it requires the following Portable Network Graphics (PNG) files in img/pngs/ folder:
 * File Name					Description
 * ---------					-----------
 * AE-NS-0-nfr-0x00.png			Image0: A 64x64px PNG image
 * AENumber_Strokes_01.png		Image1: A 64x64px PNG image
 * AENumber_Strokes_02.png		Image2: A 64x64px PNG image
 * Infocard_1024_Comp-OS_03.png		Image3: A 1024x1024px PNG image
 * holdoff001v035.png			Image4: A 1920x1080px PNG image
 * galaxy001v001chrv015.png		Image5: A 4000x2250px PNG image
 * radial001v042.png			Image6: A 1920x1080px PNG image
 * triangle001v012.png			Image7: A 1920x1080px PNG image
 * tiles001v008v017.png			Image8: A 1920x1080px PNG image
 * shield006nov20spherev018v01.png	Image9: A 1442x806px PNG image
 *
 *
 * For displaying the images, it requires the following JPEG files in img/jpegs/ folder:
 * File Name					Description
 * ---------					-----------
 * 1178j_bwDot.jpg				Image10: A 1139x1063px JPEG image
 * 1183j_BwJewels.jpg			Image11: A 1139x1063px JPEG image
 * 1170j_Desgn3x3Multi.jpg		Image12: A 1139x1063px JPEG image
 * 1099j_CirclesWall.jpg		Image13: A 1063x1139px JPEG image
 * 1107j_GreenCells.jpg			Image14: A 1139x1063px JPEG image
 * 1092j_WaterBallRings.jpg		Image15: A 1063x1139px JPEG image
 * DowntownView_2BlueSkies.jpg	Image16: A 5312x2988px JPEG image
 * 20141029_121800_Scenic.jpg	Image17: A 5312x2988px JPEG image
 * 20151113_135401_TreesLighting.jpg	Image18: A 3000x1688px JPEG image
 * 2015-07-30_PeaceOnEarth.jpg	Image19: A 1836x3264px JPEG image
 *
 *
 *
 * ==================================
 * Double Slash Commenting Convention
 * ==================================
 * LEGEND
 * COMMENT                  MEANING
 * -------                  -------
 * Normal Xxx Convention    This Convention Means a Name or Title of Some Xxx Functionality or Related Section of Code
 * lower case convention    this convention means a side comment describing  some section of code
 * camelCaseConvention      thisIsTheConventionForNamingVariables andFunctionsInJavascript 
 * 
 * 
 * =========
 * Functions
 * =========
 * artgallery_V001 Functions
 * -------------------------
 * Function Name            Description
 * -------------            -----------
 * initialize				Initializes the scene
 *
 * decreaseCount			Decreases the count
 * increaseCount			Increases the count
 * 
 * drawBackground			Draws the background
 * drawGeneral				Calls drawJPEG or drawPNG based on image type
 * drawJPEG					Draws a JPEG image
 * drawOverlay				Draws the overlay
 * drawPNG					Draws a PNG image
 * drawPictureText			Draws the picture information text
 *
 * keyDownHandler			Handles the key-down events
 * keyUpHandler				Handles the key-up events
 *
 * 
 * =========
 * Variables
 * =========
 *
 * width			// integer of the width of the canvas in pixels
 * height			// integer of the height of the canvas in pixels
 *
 * displayImage 	// the image being displayed
 *
 * canvas			// the canvas 
 * ctx;				// the context 
 *
 * debug			// boolean for printing debug statements
 *
 * prefix			// string of the prefix to the image path
 * postfix			// string of the postfix to the image path
 * currentPath		// string of the image path
 * prefixPNG		// string of the PNG prefix
 * postfixPNG		// string of the PNG postfix
 * prefixJPG		// string of the JPEG prefix
 * postfixJPG		// string of the JPEG postfix
 *
 * count			// inter of the count
 * COUNT_MAX		// integer of the maximum the count should be
 *
 * _isDrawingOverlay	// boolean for drawing the overlay
 *
 * imageNames		// strings of the names of images
 * imageTypes		// integers describing the image types (0 = PNG, 1 = JPEG)
 * startingPositionsX // integers of the  X position of the images in pixels
 * startingPositionsY // integers of the  Y position of the images in pixels
 *
 *
 *
 *
 */
 
 // Height and width of the canvas/drawing area
var width = 1024;
var height = 1024;

var	displayImage = new Image();  // the image being displayed

var canvas;		// the canvas 
var ctx;		// the context 

var debug = false; // boolean for printing debug statements

// Image prefixes and postfixes
// The current prefix, postfix, and path variables
var prefix = "img/pngs/";
var postfix = ".png";
var currentPath;
// PNG prefix & postfix
var prefixPNG = "img/pngs/";
var postfixPNG =".png";
// JPEG prefix & postfix
var prefixJPG = "img/jpegs/";
var postfixJPG =".jpg";



// Count variables
var count = 0;
var COUNT_MAX = 19;  // the maximum the count should be

var _isDrawingOverlay = true; // boolean for drawing overlay

// The names of the images stored as a string
var imageNames = {
	0: "AE-NS-0-nfr-0x00",
	1: "AENumber_Strokes_01,"
	2: "AENumber_Strokes_02",
	3: "Infocard_1024_Comp-OS_01_01",
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

// The image types stored as a number
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

// The starting X positions for the images
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
// The starting Y positions for the images
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




// Key Handling
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
// Handles key down events
function keyDownHandler(e) {
	if(debug){console.log("dbg:keyDownHandler Entered")};
    if(e.keyCode == 68) {			// d increase count
		if(debug){console.log("dbg:keyDownHandler:D Entered")};
		increaseCount();
	    if(debug){console.log("dbg:keyDownHandler:D Ended")};
    }
    else if(e.keyCode == 65) {		// a decrease count
		if(debug){console.log("dbg:keyDownHandler:A Entered")};
		decreaseCount();
		if(debug){console.log("dbg:keyDownHandler:A Ended")};

    } 
	 else if(e.keyCode == 87) {		// w Ttggle overlay
	 	if(debug){console.log("dbg:keyDownHandler:W Entered")};
	    _isDrawingOverlay = !_isDrawingOverlay;  
		drawGeneral();
		if(debug){console.log("dbg:keyDownHandler:W Ended")};
    } 
	else if(e.keyCode == 38) {  // arrow up
	}
	else if(e.keyCode == 40) { // arrow down
	}
}
// Handles key-up events 
function keyUpHandler(e) {
    if(e.keyCode == 68) { // d-keyup
    }
    else if(e.keyCode == 65) { // a-keyup
    }
}


// Count Functions
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





// Drawing Functions
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

// Draws a Portable Network Graphics (PNG) image
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

// Draws a JPEG image
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

// Draws the background
function drawBackground()
{
	// Background color - Screen width
	//ctx.beginPath();
	//ctx.rect(0,0,width,height);
	//ctx.fillStyle = "#777777";
    //ctx.fill();
    //ctx.closePath()
}

// Draws the overlay 
function drawOverlay()
{	
	// Overlay - Bars
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
	
	
	// Overlay - Center Lines
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
	// Text Styling
    ctx.font = "14px Arial";
    ctx.fillStyle = "#000000";
	
	// Top Text - Number and Name
    ctx.fillText("Image number: "+count, 32, 12);
	ctx.fillText("Image name:   "+ imageNames[count], 32,28);
	
	// Bottom Text
	ctx.fillText("Image Prefix:   " + prefix, 32, height-20);
	ctx.fillText("Image Postfix: " + postfix, 32, height -4 );
}

// The function to initialize the scene.
function initialize() {
	if(debug){console.log("dbg:initialize entered")};
	
	// Set up the Canvas
	canvas = document.getElementById("picCanvas");
	ctx = canvas.getContext("2d");
	ctx.width = width;
	ctx.height = height;


   // Display initial image
   drawGeneral();
   
   if(debug){console.log("dbg:initialize ended")};
}

// Once the window of the browser loads, execute this function
window.onload = function() {
	if(debug){console.log("dbg:window.onload entered")};

	initialize();
	
	if(debug){console.log("dbg:window.onload ended")};
}