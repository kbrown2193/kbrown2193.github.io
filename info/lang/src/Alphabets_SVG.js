/*
 * ==============
 * Script ID Data
 * ==============
 * File Name: Alphabets_SVG.js
 * Version Date:  ad-2016-03-07 14:50:00
 * Contributors: Kyle Brown
 *
 * Documentation Language: English  (en){lkb-000-001}
 *
 * ===========
 * Description
 * ===========
 * This script Draws alphabets from svg's (Scalable Vector Graphics)
 * 
 *
 * ========
 * Controls
 * ========
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
 *		<script src="src/Alphabets_SVG.js"></script>
 *	
 * For the canvas reference:
 *		<canvas id = "alphaCanvas" width="1024" height="1024"></canvas>
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
var width = 512;
var height = 512;

var	displayImage = new Image();  // the image being displayed

var canvas;		// the canvas 
var ctx;		// the context 

var debug = true; // boolean for printing debug statements

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

var prefixPA = "img/svg/PA_00/PA_00_";
var postfixSVG = ".svg";
var prefixGA ="img/svg/GA_00/GA_64_00_";





var symbolX = {
	0: 0,
	1: 64,
	2: 128,
	3: 192,
	4: 256,
	5: 320,
	6: 384,
	7: 448,
	8: 0,
	9: 64,
	10: 128,
	11: 192,
	12: 256,
	13: 320,
	14: 384,
	15: 448,
	16: 0,
	17: 64,
	18: 128,
	19: 192,
	20: 256,
	21: 320,
	22: 384,
	23: 448,
	24: 0,
	25: 64,
	26: 128,
	27: 192,
	28: 256,
	29: 320,
	30: 384,
	31: 448,
	32: 0,
	33: 64,
	34: 128,
	35: 192,
	36: 256,
	37: 320,
	38: 384,
	39: 448,
	40: 0,
	41: 64,
	42: 128,
	43: 192,
	44: 256,
	45: 320,
	46: 384,
	47: 448,
	48: 0,
	49: 64,
	50: 128,
	51: 192,
	52: 256,
	53: 320,
	54: 384,
	55: 448,
	56: 0,
	57: 64,
	58: 128,
	59: 192,
	60: 256,
	61: 320,
	62: 384,
	63: 448
}


var symbolY = {
	0: 0,
	1: 0,
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0,
	7: 0,
	8: 64,
	9: 64,
	10: 64,
	11: 64,
	12: 64,
	13: 64,
	14: 64,
	15: 64,
	16: 128,
	17: 128,
	18: 128,
	19: 128,
	20: 128,
	21: 128,
	22: 128,
	23: 128,
	24: 192,
	25: 192,
	26: 192,
	27: 192,
	28: 192,
	29: 192,
	30: 192,
	31: 192,
	32: 256,
	33: 256,
	34: 256,
	35: 256,
	36: 256,
	37: 256,
	38: 256,
	39: 256,
	40: 320,
	41: 320,
	42: 320,
	43: 320,
	44: 320,
	45: 320,
	46: 320,
	47: 320,
	48: 384,
	49: 384,
	50: 384,
	51: 384,
	52: 384,
	53: 384,
	54: 384,
	55: 384,
	56: 448,
	57: 448,
	58: 448,
	59: 448,
	60: 448,
	61: 448,
	72: 448,
	73: 448,
	
}



var symbolPaths = {
	0: "00",
	1: "01",
	2: "02",
	3: "03",
	4: "04",
	5: "05",
	6: "06",
	7: "07",
	8: "08",
	9: "09",
	10: "10",
	11: "11",
	12: "12",
	13: "13",
	14: "14",
	15: "15",
	16: "16",
	17: "17",
	18: "18",
	19: "19",
	20: "20",
	21: "21",
	22: "22",
	23: "23",
	24: "24",
	25: "25",
	26: "26",
	27: "27",
	28: "28",
	29: "29",
	30: "30",
	31: "31",
	32: "32",
	33: "33",
	34: "34",
	35: "35",
	36: "36",
	37: "37",
	38: "38",
	39: "39",
	40: "40",
	41: "41",
	42: "42",
	43: "43",
	44: "44",
	45: "45",
	46: "46",
	47: "47",
	48: "48",
	49: "49",
	50: "50",
	51: "51",
	52: "52",
	53: "53",
	54: "54",
	55: "55",
	56: "56",
	57: "57",
	58: "58",
	59: "59",
	60: "60",
	61: "61",
	62: "62",
	63: "63"
}




var phonecianX = {
	0: 0,
	1: 64,
	2: 128,
	3: 192,
	4: 256,
	5: 320,
	6: 384,
	7: 448,
	8: 0,
	9: 64,
	10: 128,
	11: 192,
	12: 256,
	13: 320,
	14: 384,
	15: 448,
	16: 0,
	17: 64,
	18: 128,
	19: 192,
	20: 256,
	21: 320
}
var phonecianY = {
	0: 0,
	1: 0,
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0,
	7: 0,
	8: 64,
	9: 64,
	10: 64,
	11: 64,
	12: 64,
	13: 64,
	14: 64,
	15: 64,
	16: 128,
	17: 128,
	18: 128,
	19: 128,
	20: 128,
	21: 128
}
var phonecianPaths = {
	0: "00",
	1: "01",
	2: "02",
	3: "03",
	4: "04",
	5: "05",
	6: "06",
	7: "07",
	8: "08",
	9: "09",
	10: "10",
	11: "11",
	12: "12",
	13: "13",
	14: "14",
	15: "15",
	16: "16",
	17: "17",
	18: "18",
	19: "19",
	20: "20",
	21: "21"
}
var phonecianIconNames = {
	0: "alepIcon",
	1: "betIcon",
	2: "gimlIcon",
	3: "daletIcon",
	4: "heIcon",
	5: "wawIcon",
	6: "zayinIcon",
	7: "hetIcon",
	8: "tetIcon",
	9: "yodIcon",
	10: "kapIcon",
	11: "lamedIcon",
	12: "memIcon",
	13: "nunIcon",
	14: "samekIcon",
	15: "ayinIcon",
	16: "peIcon",
	17: "cadeIcon",
	18: "qopIcon",
	19: "resIcon",
	20: "sinIcon",
	21: "tawIcon"
}

// Count variables
var count = 0;
var COUNT_MAX = 19;  // the maximum the count should be

var _isDrawingOverlay = true; // boolean for drawing overlay












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



function drawPhonecianAlphabet()
{
	if(debug){console.log("dbg:drawPhonecianAlphabet Begun")};
	
	// Get Alphabet DOM Elements
	var alepIcon = document.getElementById("alep_icon");
	var betIcon = document.getElementById("bet_icon");
	var gimlIcon = document.getElementById("giml_icon");
	var daletIcon = document.getElementById("dalet_icon");
	var heIcon = document.getElementById("he_icon");
	var wawIcon = document.getElementById("waw_icon");
	var zayinIcon = document.getElementById("zayin_icon");
	var hetIcon = document.getElementById("het_icon");
	var tetIcon = document.getElementById("tet_icon");
	var yodIcon = document.getElementById("yod_icon");
	var kapIcon = document.getElementById("kap_icon");
	var lamedIcon = document.getElementById("lamed_icon");
	var memIcon = document.getElementById("mem_icon");
	var nunIcon = document.getElementById("nun_icon");
	var samekIcon = document.getElementById("samek_icon");
	var ayinIcon = document.getElementById("ayin_icon");
	var peIcon = document.getElementById("pe_icon");
	var cadeIcon = document.getElementById("cade_icon");
	var qopIcon = document.getElementById("qop_icon");
	var resIcon = document.getElementById("res_icon");
	var sinIcon = document.getElementById("sin_icon");
	var tawIcon = document.getElementById("taw_icon");
	
	
	/*
	// for method draw
	for (var i = 0; i < 21; i ++)
	{
		var tempName = phonecianIconNames[i];
		if (debug){console.log("dbg:dPA IconName = "+tempName)};
		tempName.onload = function() {
			ctx.drawImage(tempName,phonecianX[i], phonecianY[i]);
		}
		tempName.src =  prefixPA + phonecianPaths[i] + postfixPA;
			if(debug){console.log("dbg:dPA.src = "+prefixPA + phonecianPaths[i] + postfixPA)};
	}
	*/
	
	// Individual name draw method
    // Icon 0 : alep
    alepIcon.onload = function () {
	ctx.drawImage(alepIcon, phonecianX[0], phonecianY[0]);  }
	alepIcon.src = prefixPA + phonecianPaths[0] + postfixSVG;
	// Icon 1 : bet
	betIcon.onload = function () {
	ctx.drawImage(betIcon, phonecianX[1], phonecianY[1]); }
	betIcon.src = prefixPA + phonecianPaths[1] + postfixSVG;
	// Icon 2 : giml
	gimlIcon.onload = function () {
	ctx.drawImage(gimlIcon, phonecianX[2], phonecianY[2]); }
	gimlIcon.src = prefixPA + phonecianPaths[2] + postfixSVG;
	// Icon 3 : dalet
	daletIcon.onload = function () {
	ctx.drawImage(daletIcon, phonecianX[3], phonecianY[3]);	}
	daletIcon.src = prefixPA + phonecianPaths[3] + postfixSVG;
	// Icon 4 : he
	heIcon.onload = function () {
	ctx.drawImage(heIcon, phonecianX[4], phonecianY[4]); }
	heIcon.src = prefixPA + phonecianPaths[4] + postfixSVG;
	// Icon 5 : waw
	wawIcon.onload = function () {
	ctx.drawImage(wawIcon, phonecianX[5], phonecianY[5]); }
	wawIcon.src = prefixPA + phonecianPaths[5] + postfixSVG;
	// Icon 6 : zayin
	zayinIcon.onload = function () {
	ctx.drawImage(zayinIcon, phonecianX[6], phonecianY[6]); }
	zayinIcon.src = prefixPA + phonecianPaths[6] + postfixSVG;
	// Icon 7 : het
	hetIcon.onload = function () {
	ctx.drawImage(hetIcon, phonecianX[7], phonecianY[7]); }
	hetIcon.src = prefixPA + phonecianPaths[7] + postfixSVG;
	// Icon 8 : tet
	tetIcon.onload = function () {
	ctx.drawImage(tetIcon, phonecianX[8], phonecianY[8]); }
	tetIcon.src = prefixPA + phonecianPaths[8] + postfixSVG;
	// Icon 9 : yod
	yodIcon.onload = function () {
	ctx.drawImage(yodIcon, phonecianX[9], phonecianY[9]); }
	yodIcon.src = prefixPA + phonecianPaths[9] + postfixSVG;
	// Icon 10 : kap
	kapIcon.onload = function () {
	ctx.drawImage(kapIcon, phonecianX[10], phonecianY[10]); }
	kapIcon.src = prefixPA + phonecianPaths[10] + postfixSVG;
	// Icon 11 : lamed
	lamedIcon.onload = function () {
	ctx.drawImage(lamedIcon, phonecianX[11], phonecianY[11]); }
	lamedIcon.src = prefixPA + phonecianPaths[11] + postfixSVG;
	// Icon 12 : mem
	memIcon.onload = function () {
	ctx.drawImage(memIcon, phonecianX[12], phonecianY[12]); }
	memIcon.src = prefixPA + phonecianPaths[12] + postfixSVG;
	// Icon 13 : nun
	nunIcon.onload = function () {
	ctx.drawImage(nunIcon, phonecianX[13], phonecianY[13]); }
	nunIcon.src = prefixPA + phonecianPaths[13] + postfixSVG;
	// Icon 14 : samek
	samekIcon.onload = function () {
	ctx.drawImage(samekIcon, phonecianX[14], phonecianY[14]); }
	samekIcon.src = prefixPA + phonecianPaths[14] + postfixSVG;
	// Icon 15 : ayin
	ayinIcon.onload = function () {
	ctx.drawImage(ayinIcon, phonecianX[15], phonecianY[15]); }
	ayinIcon.src = prefixPA + phonecianPaths[15] + postfixSVG;
	// Icon 16 : pe
	peIcon.onload = function () {
	ctx.drawImage(peIcon, phonecianX[16], phonecianY[16]); }
	peIcon.src = prefixPA + phonecianPaths[16] + postfixSVG;
	// Icon 17 : cade
	cadeIcon.onload = function () {
	ctx.drawImage(cadeIcon, phonecianX[17], phonecianY[17]); }
	cadeIcon.src = prefixPA + phonecianPaths[17] + postfixSVG;
	// Icon 18 : qop
	qopIcon.onload = function () {
	ctx.drawImage(qopIcon, phonecianX[18], phonecianY[18]); }
	qopIcon.src = prefixPA + phonecianPaths[18] + postfixSVG;
	// Icon 19 : res
	resIcon.onload = function () {
	ctx.drawImage(resIcon, phonecianX[19], phonecianY[19]); }
	resIcon.src = prefixPA + phonecianPaths[19] + postfixSVG;
	// Icon 20 : sin
	sinIcon.onload = function () {
	ctx.drawImage(sinIcon, phonecianX[20], phonecianY[20]); }
	sinIcon.src = prefixPA + phonecianPaths[20] + postfixSVG;
	// Icon 21 : taw
	tawIcon.onload = function () {
	ctx.drawImage(tawIcon, phonecianX[21], phonecianY[21]); }
	tawIcon.src = prefixPA + phonecianPaths[21] + postfixSVG;
	
	
	if(debug){console.log("dbg:drawPhonecianAlphabet End")};

}



function drawGreekAlphabet()
{
	if(debug){console.log("dbg:drawGreekAlphabet Begun")};
	
	// Get Alphabet DOM Elements
	var alpha_lower_icon = document.getElementById("alpha-lower_icon");
	var beta_lower_icon = document.getElementById("beta-lower_icon");
	var gamma_lower_icon = document.getElementById("gamma-lower_icon");
	var delta_lower_icon = document.getElementById("delta-lower_icon");
	var epsilon_lower_icon = document.getElementById("epsilon-lower_icon");
	var zeta_lower_icon = document.getElementById("zeta-lower_icon");
	var eta_lower_icon = document.getElementById("eta-lower_icon");
	var theta_lower_icon = document.getElementById("theta-lower_icon");
	var iota_lower_icon = document.getElementById("iota-lower_icon");
	var kappa_lower_icon = document.getElementById("kappa-lower_icon");
	var lamda_lower_icon = document.getElementById("lamda-lower_icon");
	var mu_lower_icon = document.getElementById("mu-lower_icon");
	var nu_lower_icon = document.getElementById("nu-lower_icon");
	var xi_lower_icon = document.getElementById("xi-lower_icon");
	var omicron_lower_icon = document.getElementById("omicron-lower_icon");
	var pi_lower_icon = document.getElementById("pi-lower_icon");
	var rho_lower_icon = document.getElementById("rho-lower_icon");
	var sigma_lower_icon = document.getElementById("sigma-lower_icon");
	var tau_lower_icon = document.getElementById("tau-lower_icon");
	var upsilon_lower_icon = document.getElementById("upsilon-lower_icon");
	var phi_lower_icon = document.getElementById("phi-lower_icon");
	var chi_lower_icon = document.getElementById("chi-lower_icon");
	var psi_lower_icon = document.getElementById("psi-lower_icon");
	var omega_lower_icon = document.getElementById("omega-lower_icon");
	var sigma_alt_lower_icon = document.getElementById("sigma-alt-lower_icon");
	
	
	/*
	// for method draw
	for (var i = 0; i < 21; i ++)
	{
		var tempName = phonecianIconNames[i];
		if (debug){console.log("dbg:dPA IconName = "+tempName)};
		tempName.onload = function() {
			ctx.drawImage(tempName,phonecianX[i], phonecianY[i]);
		}
		tempName.src =  prefixPA + phonecianPaths[i] + postfixPA;
			if(debug){console.log("dbg:dPA.src = "+prefixPA + phonecianPaths[i] + postfixPA)};
	}
	*/
	
	// Individual name draw method
    // Icon 0 : alpha
    alpha_lower_icon.onload = function () {
	ctxG.drawImage(alpha_lower_icon, symbolX[0], symbolY[0]);  }
	alpha_lower_icon.src = prefixGA + phonecianPaths[0] + postfixSVG;
	// Icon 1 : beta
	beta_lower_icon.onload = function () {
	ctxG.drawImage(beta_lower_icon, symbolX[1], symbolY[1]); }
	beta_lower_icon.src = prefixGA + phonecianPaths[1] + postfixSVG;
	// Icon 2 : gamma
	gamma_lower_icon.onload = function () {
	ctxG.drawImage(gamma_lower_icon, symbolX[2], symbolY[2]); }
	gamma_lower_icon.src = prefixGA + phonecianPaths[2] + postfixSVG;
	// delta_lower_icon 3 : delta
	delta_lower_icon.onload = function () {
	ctxG.drawImage(delta_lower_icon, symbolX[3], symbolY[3]);	}
	delta_lower_icon.src = prefixGA + phonecianPaths[3] + postfixSVG;
	// Icon 4 : epsilon
	epsilon_lower_icon.onload = function () {
	ctxG.drawImage(epsilon_lower_icon, symbolX[4], symbolY[4]); }
	epsilon_lower_icon.src = prefixGA + phonecianPaths[4] + postfixSVG;
	// Icon 5 : zeta
	zeta_lower_icon.onload = function () {
	ctxG.drawImage(zeta_lower_icon, symbolX[5], symbolY[5]); }
	zeta_lower_icon.src = prefixGA + phonecianPaths[5] + postfixSVG;
	// Icon 6 : eta
	eta_lower_icon.onload = function () {
	ctxG.drawImage(eta_lower_icon, symbolX[6], symbolY[6]); }
	eta_lower_icon.src = prefixGA + phonecianPaths[6] + postfixSVG;
	// Icon 7 : theta
	theta_lower_icon.onload = function () {
	ctxG.drawImage(theta_lower_icon, symbolX[7], symbolY[7]); }
	theta_lower_icon.src = prefixGA + phonecianPaths[7] + postfixSVG;
	// Icon 8 : iota
	iota_lower_icon.onload = function () {
	ctxG.drawImage(iota_lower_icon, symbolX[8], symbolY[8]); }
	iota_lower_icon.src = prefixGA + phonecianPaths[8] + postfixSVG;
	// Icon 9 : kappa
	kappa_lower_icon.onload = function () {
	ctxG.drawImage(kappa_lower_icon, symbolX[9], symbolY[9]); }
	kappa_lower_icon.src = prefixGA + phonecianPaths[9] + postfixSVG;
	// Icon 10 : lamda
	lamda_lower_icon.onload = function () {
	ctxG.drawImage(lamda_lower_icon, symbolX[10], symbolY[10]); }
	lamda_lower_icon.src = prefixGA + phonecianPaths[10] + postfixSVG;
	// Icon 11 : mu
	mu_lower_icon.onload = function () {
	ctxG.drawImage(mu_lower_icon, symbolX[11], symbolY[11]); }
	mu_lower_icon.src = prefixGA + phonecianPaths[11] + postfixSVG;
	// Icon 12 : nu
	nu_lower_icon.onload = function () {
	ctxG.drawImage(nu_lower_icon, symbolX[12], symbolY[12]); }
	nu_lower_icon.src = prefixGA + phonecianPaths[12] + postfixSVG;
	// Icon 13 : xi
	xi_lower_icon.onload = function () {
	ctxG.drawImage(xi_lower_icon, symbolX[13], symbolY[13]); }
	xi_lower_icon.src = prefixGA + phonecianPaths[13] + postfixSVG;
	// Icon 14 : omicron
	omicron_lower_icon.onload = function () {
	ctxG.drawImage(omicron_lower_icon, symbolX[14], symbolY[14]); }
	omicron_lower_icon.src = prefixGA + phonecianPaths[14] + postfixSVG;
	// Icon 15 : pi
	pi_lower_icon.onload = function () {
	ctxG.drawImage(pi_lower_icon, symbolX[15], symbolY[15]); }
	pi_lower_icon.src = prefixGA + phonecianPaths[15] + postfixSVG;
	// Icon 16 : rho
	rho_lower_icon.onload = function () {
	ctxG.drawImage(rho_lower_icon, symbolX[16], symbolY[16]); }
	rho_lower_icon.src = prefixGA + phonecianPaths[16] + postfixSVG;
	// Icon 17 : sigma
	sigma_lower_icon.onload = function () {
	ctxG.drawImage(sigma_lower_icon, symbolX[17], symbolY[17]); }
	sigma_lower_icon.src = prefixGA + phonecianPaths[17] + postfixSVG;
	// Icon 18 : tau
	tau_lower_icon.onload = function () {
	ctxG.drawImage(tau_lower_icon, symbolX[18], symbolY[18]); }
	tau_lower_icon.src = prefixGA + phonecianPaths[18] + postfixSVG;
	// Icon 19 : upsilon
	upsilon_lower_icon.onload = function () {
	ctxG.drawImage(upsilon_lower_icon, symbolX[19], symbolY[19]); }
	upsilon_lower_icon.src = prefixGA + phonecianPaths[19] + postfixSVG;
	// Icon 20 : phi
	phi_lower_icon.onload = function () {
	ctxG.drawImage(phi_lower_icon, symbolX[20], symbolY[20]); }
	phi_lower_icon.src = prefixGA + phonecianPaths[20] + postfixSVG;
	// Icon 21 : chi
	chi_lower_icon.onload = function () {
	ctxG.drawImage(chi_lower_icon, symbolX[21], symbolY[21]); }
	chi_lower_icon.src = prefixGA + phonecianPaths[21] + postfixSVG;
	// Icon 22 : psi
	psi_lower_icon.onload = function () {
	ctxG.drawImage(psi_lower_icon, symbolX[22], symbolY[22]); }
	psi_lower_icon.src = prefixGA + phonecianPaths[22] + postfixSVG;
	// Icon 23 : omega
	omega_lower_icon.onload = function () {
	ctxG.drawImage(omega_lower_icon, symbolX[23], symbolY[23]); }
	omega_lower_icon.src = prefixGA + phonecianPaths[23] + postfixSVG;
	// Icon 24 : sigma alternate
	sigma_alt_lower_icon.onload = function () {
	ctxG.drawImage(sigma_alt_lower_icon, symbolX[24], symbolY[24]); }
	sigma_alt_lower_icon.src = prefixGA + phonecianPaths[24] + postfixSVG;
	
	
	if(debug){console.log("dbg:drawGreekAlphabet End")};

}
// The function to initialize the scene.
function initialize() {
	if(debug){console.log("dbg:initialize entered")};
	
	// Set up the Canvas
	canvas = document.getElementById("phonecianCanvas");
	ctx = canvas.getContext("2d");
	ctx.width = width;
	ctx.height = height;
	
	canvasGreek = document.getElementById("greekCanvas");
	ctxG = canvasGreek.getContext("2d");
	ctxG.width = width;
	ctxG.height = height;
	
	
	// fill background Phonecian grey
	ctx.beginPath();
    ctx.rect(0, 0, width, height);
	ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.fill();
    ctx.closePath();
	// fill background Greek grey
	ctxG.beginPath();
    ctxG.rect(0, 0, width, height);
	ctxG.fillStyle = "rgba(255,255,255,0.5)";
    ctxG.fill();
    ctxG.closePath();
	// Center Vertical Line
	//ctx.beginPath();
    //ctx.rect(width/2, 0, 4, height);
	//ctx.fillStyle = "rgba(255,0,0,0.5)";
    //ctx.fill();
    //ctx.closePath();
	
   // Display initial image
   
    drawPhonecianAlphabet();
	drawGreekAlphabet();
	
	/*
    // Icon 0 : alep
    alepIcon.onload = function () {
	ctx.drawImage(alepIcon, phonecianX[0], 0);  }
	//var alepPath ="img/svg/PA_00/PA_00_00.svg";
	betIcon.src = prefixPA + phonecianPaths[0] + postfixPA;

   
	// Icon 1 : bet
	betIcon.onload = function () {
	ctx.drawImage(betIcon, phonecianX[1], 0); }
	betIcon.src = prefixPA + phonecianPaths[1] + postfixPA;
	// Icon 2 : giml
	gimlIcon.onload = function () {
	ctx.drawImage(gimlIcon, phonecianX[2], 0); }
	gimlIcon.src = prefixPA + phonecianPaths[2] + postfixPA;
	// Icon 3 : dalet
	daletIcon.onload = function () {
	ctx.drawImage(daletIcon, phonecianX[3], 0);
	}
	daletIcon.src = prefixPA + phonecianPaths[3] + postfixPA;
 */
 
   if(debug){console.log("dbg:initialize ended")};
}

// Once the window of the browser loads, execute this function
window.onload = function() {
	if(debug){console.log("dbg:window.onload entered")};

	initialize();
	
	if(debug){console.log("dbg:window.onload ended")};
}