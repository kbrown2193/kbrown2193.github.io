/*
 * ==============
 * Script ID Data
 * ==============
 * File Name: Alphabets_SVG.js
 * Version Date:  ad-2016-04-20 00:08:00
 * Contributors: Kyle Brown
 *
 * Documentation Language: English  (en){lkb-000-001}
 *
 * ===========
 * Description
 * ===========
 * This script draws alphabets from svg's (Scalable Vector Graphics)
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
 * For the canvas and icon references
        <canvas id = "phoenicianCanvas" width="512" height="512">
			<img id = alep_icon src="../img/svg/PA_00/PA_00_00.svg" alt="Phoenician Alphabet: alep" />
			<img id = bet_icon src="../img/svg/PA_00/PA_00_01.svg" alt="Phoenician Alphabet: bet" />
			<img id = giml_icon src="../img/svg/PA_00/PA_00_02.svg" alt="Phoenician Alphabet: giml" />
			<img id = dalet_icon src="../img/svg/PA_00/PA_00_03.svg" alt="Phoenician Alphabet: dalet" />
			<img id = he_icon src="../img/svg/PA_00/PA_00_04.svg" alt="Phoenician Alphabet: he" />
			<img id = waw_icon src="../img/svg/PA_00/PA_00_05.svg" alt="Phoenician Alphabet: waw" />
			<img id = zayin_icon src="../img/svg/PA_00/PA_00_06.svg" alt="Phoenician Alphabet: zayin" />
			<img id = het_icon src="../img/svg/PA_00/PA_00_07.svg" alt="Phoenician Alphabet: het" />
			<img id = tet_icon src="../img/svg/PA_00/PA_00_08.svg" alt="Phoenician Alphabet: tet" />
			<img id = yod_icon src="../img/svg/PA_00/PA_00_09.svg" alt="Phoenician Alphabet: yod" />
			<img id = kap_icon src="../img/svg/PA_00/PA_00_10.svg" alt="Phoenician Alphabet: kap" />
			<img id = lamed_icon src="../img/svg/PA_00/PA_00_11.svg" alt="Phoenician Alphabet: lamed" />
			<img id = mem_icon src="../img/svg/PA_00/PA_00_12.svg" alt="Phoenician Alphabet: mem" />
			<img id = nun_icon src="../img/svg/PA_00/PA_00_13.svg" alt="Phoenician Alphabet: nun" />
			<img id = samek_icon src="../img/svg/PA_00/PA_00_14.svg" alt="Phoenician Alphabet: samek" />
			<img id = ayin_icon src="../img/svg/PA_00/PA_00_15.svg" alt="Phoenician Alphabet: ayin" />
			<img id = pe_icon src="../img/svg/PA_00/PA_00_16.svg" alt="Phoenician Alphabet: pe" />
			<img id = cade_icon src="../img/svg/PA_00/PA_00_17.svg" alt="Phoenician Alphabet: cade" />
			<img id = qop_icon src="../img/svg/PA_00/PA_00_18.svg" alt="Phoenician Alphabet: qop" />
			<img id = res_icon src="../img/svg/PA_00/PA_00_19.svg" alt="Phoenician Alphabet: res" />
			<img id = sin_icon src="../img/svg/PA_00/PA_00_20.svg" alt="Phoenician Alphabet: sin" />
			<img id = taw_icon src="../img/svg/PA_00/PA_00_21.svg" alt="Phoenician Alphabet: taw" />
		</canvas>

	  	<canvas id = "greekCanvas" width="512" height="512">
			<img id = alpha-lower_icon src="../img/svg/GA_00/GA_64_00_00.svg" alt="Greek Alphabet: alpha" />
			<img id = beta-lower_icon src="../img/svg/GA_00/GA_64_00_01.svg" alt="Greek Alphabet: beta" />
			<img id = gamma-lower_icon src="../img/svg/GA_00/GA_64_00_02.svg" alt="Greek Alphabet: gamma" />
			<img id = delta-lower_icon src="../img/svg/GA_00/GA_64_00_03.svg" alt="Greek Alphabet: delta" />
			<img id = epsilon-lower_icon src="../img/svg/GA_00/GA_64_00_04.svg" alt="Greek Alphabet: epsilon" />
			<img id = zeta-lower_icon src="../img/svg/GA_00/GA_64_00_05.svg" alt="Greek Alphabet: zeta" />
			<img id = eta-lower_icon src="../img/svg/GA_00/GA_64_00_06.svg" alt="Greek Alphabet: eta" />
			<img id = theta-lower_icon src="../img/svg/GA_00/GA_64_00_07.svg" alt="Greek Alphabet: theta" />
			<img id = iota-lower_icon src="../img/svg/GA_00/GA_64_00_08.svg" alt="Greek Alphabet: iota" />
			<img id = kappa-lower_icon src="../img/svg/GA_00/GA_64_00_09.svg" alt="Greek Alphabet: kappa" />
			<img id = lambda-lower_icon src="../img/svg/GA_00/GA_64_00_10.svg" alt="Greek Alphabet: lambda" />
			<img id = mu-lower_icon src="../img/svg/GA_00/GA_64_00_11.svg" alt="Greek Alphabet: mu" />
			<img id = nu-lower_icon src="../img/svg/GA_00/GA_64_00_12.svg" alt="Greek Alphabet: nu" />
			<img id = xi-lower_icon src="../img/svg/GA_00/GA_64_00_13.svg" alt="Greek Alphabet: xi" />
			<img id = omicron-lower_icon src="../img/svg/GA_00/GA_64_00_14.svg" alt="Greek Alphabet: omicron" />
			<img id = pi-lower_icon src="../img/svg/GA_00/GA_64_00_15.svg" alt="Greek Alphabet: pi" />
			<img id = rho-lower_icon src="../img/svg/GA_00/GA_64_00_16.svg" alt="Greek Alphabet: rho" />
			<img id = sigma-lower_icon src="../img/svg/GA_00/GA_64_00_17.svg" alt="Greek Alphabet: sigma" />
			<img id = tau-lower_icon src="../img/svg/GA_00/GA_64_00_18.svg" alt="Greek Alphabet: tau" />
			<img id = upsilon-lower_icon src="../img/svg/GA_00/GA_64_00_19.svg" alt="Greek Alphabet: upsilon" />
			<img id = phi-lower_icon src="../img/svg/GA_00/GA_64_00_20.svg" alt="Greek Alphabet: phi" />
			<img id = chi-lower_icon src="../img/svg/GA_00/GA_64_00_21.svg" alt="Greek Alphabet: chi" />
			<img id = psi-lower_icon src="../img/svg/GA_00/GA_64_00_22.svg" alt="Greek Alphabet: psi" />
			<img id = omega-lower_icon src="../img/svg/GA_00/GA_64_00_23.svg" alt="Greek Alphabet: omega" />
			<img id = sigma-alt-lower_icon src="../img/svg/GA_00/GA_64_00_24.svg" alt="Greek Alphabet: sigma {alternate}" />
			<img id = alpha-upper_icon src="../img/svg/GA_00/GA_64_00_32.svg" alt="Greek Alphabet: Alpha" />
			<img id = beta-upper_icon src="../img/svg/GA_00/GA_64_00_33.svg" alt="Greek Alphabet: Beta" />
			<img id = gamma-upper_icon src="../img/svg/GA_00/GA_64_00_34.svg" alt="Greek Alphabet: Gamma" />
			<img id = delta-upper_icon src="../img/svg/GA_00/GA_64_00_35.svg" alt="Greek Alphabet: Delta" />
			<img id = epsilon-upper_icon src="../img/svg/GA_00/GA_64_00_36.svg" alt="Greek Alphabet: Epsilon" />
			<img id = zeta-upper_icon src="../img/svg/GA_00/GA_64_00_37.svg" alt="Greek Alphabet: Zeta" />
			<img id = eta-upper_icon src="../img/svg/GA_00/GA_64_00_38.svg" alt="Greek Alphabet: Eta" />
			<img id = theta-upper_icon src="../img/svg/GA_00/GA_64_00_39.svg" alt="Greek Alphabet: Theta" />
			<img id = iota-upper_icon src="../img/svg/GA_00/GA_64_00_40.svg" alt="Greek Alphabet: Iota" />
			<img id = kappa-upper_icon src="../img/svg/GA_00/GA_64_00_41.svg" alt="Greek Alphabet: Kappa" />
			<img id = lambda-upper_icon src="../img/svg/GA_00/GA_64_00_42.svg" alt="Greek Alphabet: lambda" />
			<img id = mu-upper_icon src="../img/svg/GA_00/GA_64_00_43.svg" alt="Greek Alphabet: Mu" />
			<img id = nu-upper_icon src="../img/svg/GA_00/GA_64_00_44.svg" alt="Greek Alphabet: Nu" />
			<img id = xi-upper_icon src="../img/svg/GA_00/GA_64_00_45.svg" alt="Greek Alphabet: Xi" />
			<img id = omicron-upper_icon src="../img/svg/GA_00/GA_64_00_46.svg" alt="Greek Alphabet: Omicron" />
			<img id = pi-upper_icon src="../img/svg/GA_00/GA_64_00_47.svg" alt="Greek Alphabet: Pi" />
			<img id = rho-upper_icon src="../img/svg/GA_00/GA_64_00_48.svg" alt="Greek Alphabet: Rho" />
			<img id = sigma-upper_icon src="../img/svg/GA_00/GA_64_00_49.svg" alt="Greek Alphabet: Sigma" />
			<img id = tau-upper_icon src="../img/svg/GA_00/GA_64_00_50.svg" alt="Greek Alphabet: Tau" />
			<img id = upsilon-upper_icon src="../img/svg/GA_00/GA_64_00_51.svg" alt="Greek Alphabet: Upsilon" />
			<img id = phi-upper_icon src="../img/svg/GA_00/GA_64_00_52.svg" alt="Greek Alphabet: Phi" />
			<img id = chi-upper_icon src="../img/svg/GA_00/GA_64_00_53.svg" alt="Greek Alphabet: Chi" />
			<img id = psi-upper_icon src="../img/svg/GA_00/GA_64_00_54.svg" alt="Greek Alphabet: Psi" />
			<img id = omega-upper_icon src="../img/svg/GA_00/GA_64_00_55.svg" alt="Greek Alphabet: Omega" />
			</canvas>
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
 * ad-2016-04-20 00:08:00	(0,0,1)(0,7,232)(1,4,20)(0,08,0)	Clean-up and upper-case Greek
 * 00-00-01 | 00-07-E8 | 01-04-14 | 00-08-00 
 *
 * =================
 * File Dependencies !@#!@#
 * =================
 * For displaying the images, it requires the following Scalable Vector Graphics (SVG) files in img/svg/ folder:
 * File Name							Description
 * ---------							-----------
 * PA_00_00.svg to PA_00_21.svg			Phoenician alphabet SVGs
 * GA_64_00_00.svg to  GA_64_00_24.svg	Greek lower-case alphabet SVGs
 * GA_64_00_32.svg to  GA_64_00_55.svg	Greek upper-case alphabet SVGs
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
 * Alphabets_SVG.js Functions
 * -------------------------
 * Function Name            Description
 * -------------            -----------
 * initialize				Initializes the scene
 * drawPhoenicianAlphabet	Draws the Phoenician alphabet in SVG format on a canvas
 * drawGreekAlphabet		Draws the Greek alphabet in SVG format on a canvas

 * =========
 * Variables
 * =========
 * width			// integer of the width of the canvas in pixels
 * height			// integer of the height of the canvas in pixels
 * canvas			// the canvas 
 * ctx;				// the context 
 *
 * debug			// boolean for printing debug statements
 *
 * prefixPA 		// The prefix that is the general name for each of the Phoenician svgs
 * postfixSVG 		//  The postfix that is for an svg
 * prefixGA 		// The prefix that is the general name for each of the Greek svgs
 *
 * symbolX 			// integers of the X positions of the symbols in pixels
 * symbolY 			// integers of the Y positions of the symbols in pixels
 *
 * phoenicianPaths	// The names of the Phoenician svgs, not including the prefix or postfix
 * phoenicianIconNames 	// The names of the  phoenician alphabet, Not currently used
 * greekPaths		// The names of the Greek svgs, not including the prefix or postfix
 *
 */
 
// Height and width of the canvas/drawing area
var width = 512;
var height = 512;

var canvas;		// the canvas 
var ctx;		// the context 

var debug = false; // boolean for printing debug statements

var prefixPA = "../img/svg/PA_00/PA_00_";
var postfixSVG = ".svg";
var prefixGA ="../img/svg/GA_00/GA_64_00_";


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
};


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
	62: 448,
	63: 448,
	
};


var phoenicianPaths = {
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
};

var phoenicianIconNames = {
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
};


var greekPaths = {
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

};


function drawPhoenicianAlphabet()
{
	if(debug){console.log("dbg:drawPhoenicianAlphabet Begun")};
	
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
	
	
	// Individual name draw method
    // Icon 0 : alep
    alepIcon.onload = function () {
	ctx.drawImage(alepIcon, symbolX[0], symbolY[0]);  }
	alepIcon.src = prefixPA + phoenicianPaths[0] + postfixSVG;
	// Icon 1 : bet
	betIcon.onload = function () {
	ctx.drawImage(betIcon, symbolX[1], symbolY[1]); }
	betIcon.src = prefixPA + phoenicianPaths[1] + postfixSVG;
	// Icon 2 : giml
	gimlIcon.onload = function () {
	ctx.drawImage(gimlIcon, symbolX[2], symbolY[2]); }
	gimlIcon.src = prefixPA + phoenicianPaths[2] + postfixSVG;
	// Icon 3 : dalet
	daletIcon.onload = function () {
	ctx.drawImage(daletIcon, symbolX[3], symbolY[3]);	}
	daletIcon.src = prefixPA + phoenicianPaths[3] + postfixSVG;
	// Icon 4 : he
	heIcon.onload = function () {
	ctx.drawImage(heIcon, symbolX[4], symbolY[4]); }
	heIcon.src = prefixPA + phoenicianPaths[4] + postfixSVG;
	// Icon 5 : waw
	wawIcon.onload = function () {
	ctx.drawImage(wawIcon, symbolX[5], symbolY[5]); }
	wawIcon.src = prefixPA + phoenicianPaths[5] + postfixSVG;
	// Icon 6 : zayin
	zayinIcon.onload = function () {
	ctx.drawImage(zayinIcon, symbolX[6], symbolY[6]); }
	zayinIcon.src = prefixPA + phoenicianPaths[6] + postfixSVG;
	// Icon 7 : het
	hetIcon.onload = function () {
	ctx.drawImage(hetIcon, symbolX[7], symbolY[7]); }
	hetIcon.src = prefixPA + phoenicianPaths[7] + postfixSVG;
	// Icon 8 : tet
	tetIcon.onload = function () {
	ctx.drawImage(tetIcon, symbolX[8], symbolY[8]); }
	tetIcon.src = prefixPA + phoenicianPaths[8] + postfixSVG;
	// Icon 9 : yod
	yodIcon.onload = function () {
	ctx.drawImage(yodIcon, symbolX[9], symbolY[9]); }
	yodIcon.src = prefixPA + phoenicianPaths[9] + postfixSVG;
	// Icon 10 : kap
	kapIcon.onload = function () {
	ctx.drawImage(kapIcon, symbolX[10], symbolY[10]); }
	kapIcon.src = prefixPA + phoenicianPaths[10] + postfixSVG;
	// Icon 11 : lamed
	lamedIcon.onload = function () {
	ctx.drawImage(lamedIcon, symbolX[11], symbolY[11]); }
	lamedIcon.src = prefixPA + phoenicianPaths[11] + postfixSVG;
	// Icon 12 : mem
	memIcon.onload = function () {
	ctx.drawImage(memIcon, symbolX[12], symbolY[12]); }
	memIcon.src = prefixPA + phoenicianPaths[12] + postfixSVG;
	// Icon 13 : nun
	nunIcon.onload = function () {
	ctx.drawImage(nunIcon, symbolX[13], symbolY[13]); }
	nunIcon.src = prefixPA + phoenicianPaths[13] + postfixSVG;
	// Icon 14 : samek
	samekIcon.onload = function () {
	ctx.drawImage(samekIcon, symbolX[14], symbolY[14]); }
	samekIcon.src = prefixPA + phoenicianPaths[14] + postfixSVG;
	// Icon 15 : ayin
	ayinIcon.onload = function () {
	ctx.drawImage(ayinIcon, symbolX[15], symbolY[15]); }
	ayinIcon.src = prefixPA + phoenicianPaths[15] + postfixSVG;
	// Icon 16 : pe
	peIcon.onload = function () {
	ctx.drawImage(peIcon, symbolX[16], symbolY[16]); }
	peIcon.src = prefixPA + phoenicianPaths[16] + postfixSVG;
	// Icon 17 : cade
	cadeIcon.onload = function () {
	ctx.drawImage(cadeIcon, symbolX[17], symbolY[17]); }
	cadeIcon.src = prefixPA + phoenicianPaths[17] + postfixSVG;
	// Icon 18 : qop
	qopIcon.onload = function () {
	ctx.drawImage(qopIcon, symbolX[18], symbolY[18]); }
	qopIcon.src = prefixPA + phoenicianPaths[18] + postfixSVG;
	// Icon 19 : res
	resIcon.onload = function () {
	ctx.drawImage(resIcon, symbolX[19], symbolY[19]); }
	resIcon.src = prefixPA + phoenicianPaths[19] + postfixSVG;
	// Icon 20 : sin
	sinIcon.onload = function () {
	ctx.drawImage(sinIcon, symbolX[20], symbolY[20]); }
	sinIcon.src = prefixPA + phoenicianPaths[20] + postfixSVG;
	// Icon 21 : taw
	tawIcon.onload = function () {
	ctx.drawImage(tawIcon, symbolX[21], symbolY[21]); }
	tawIcon.src = prefixPA + phoenicianPaths[21] + postfixSVG;
	
	
	if(debug){console.log("dbg:drawPhoenicianAlphabet End")};

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
	var lambda_lower_icon = document.getElementById("lambda-lower_icon");
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
	// upper case
	var alpha_upper_icon = document.getElementById("alpha-upper_icon");
	var beta_upper_icon = document.getElementById("beta-upper_icon");
	var gamma_upper_icon = document.getElementById("gamma-upper_icon");
	var delta_upper_icon = document.getElementById("delta-upper_icon");
	var epsilon_upper_icon = document.getElementById("epsilon-upper_icon");
	var zeta_upper_icon = document.getElementById("zeta-upper_icon");
	var eta_upper_icon = document.getElementById("eta-upper_icon");
	var theta_upper_icon = document.getElementById("theta-upper_icon");
	var iota_upper_icon = document.getElementById("iota-upper_icon");
	var kappa_upper_icon = document.getElementById("kappa-upper_icon");
	var lambda_upper_icon = document.getElementById("lambda-upper_icon");
	var mu_upper_icon = document.getElementById("mu-upper_icon");
	var nu_upper_icon = document.getElementById("nu-upper_icon");
	var xi_upper_icon = document.getElementById("xi-upper_icon");
	var omicron_upper_icon = document.getElementById("omicron-upper_icon");
	var pi_upper_icon = document.getElementById("pi-upper_icon");
	var rho_upper_icon = document.getElementById("rho-upper_icon");
	var sigma_upper_icon = document.getElementById("sigma-upper_icon");
	var tau_upper_icon = document.getElementById("tau-upper_icon");
	var upsilon_upper_icon = document.getElementById("upsilon-upper_icon");
	var phi_upper_icon = document.getElementById("phi-upper_icon");
	var chi_upper_icon = document.getElementById("chi-upper_icon");
	var psi_upper_icon = document.getElementById("psi-upper_icon");
	var omega_upper_icon = document.getElementById("omega-upper_icon");
	
	
	// Individual name draw method
    // Icon 0 : alpha
    alpha_lower_icon.onload = function () {
	ctxG.drawImage(alpha_lower_icon, symbolX[0], symbolY[0]);  }
	alpha_lower_icon.src = prefixGA + greekPaths[0] + postfixSVG;
	// Icon 1 : beta
	beta_lower_icon.onload = function () {
	ctxG.drawImage(beta_lower_icon, symbolX[1], symbolY[1]); }
	beta_lower_icon.src = prefixGA + greekPaths[1] + postfixSVG;
	// Icon 2 : gamma
	gamma_lower_icon.onload = function () {
	ctxG.drawImage(gamma_lower_icon, symbolX[2], symbolY[2]); }
	gamma_lower_icon.src = prefixGA + greekPaths[2] + postfixSVG;
	// delta_lower_icon 3 : delta
	delta_lower_icon.onload = function () {
	ctxG.drawImage(delta_lower_icon, symbolX[3], symbolY[3]);	}
	delta_lower_icon.src = prefixGA + greekPaths[3] + postfixSVG;
	// Icon 4 : epsilon
	epsilon_lower_icon.onload = function () {
	ctxG.drawImage(epsilon_lower_icon, symbolX[4], symbolY[4]); }
	epsilon_lower_icon.src = prefixGA + greekPaths[4] + postfixSVG;
	// Icon 5 : zeta
	zeta_lower_icon.onload = function () {
	ctxG.drawImage(zeta_lower_icon, symbolX[5], symbolY[5]); }
	zeta_lower_icon.src = prefixGA + greekPaths[5] + postfixSVG;
	// Icon 6 : eta
	eta_lower_icon.onload = function () {
	ctxG.drawImage(eta_lower_icon, symbolX[6], symbolY[6]); }
	eta_lower_icon.src = prefixGA + greekPaths[6] + postfixSVG;
	// Icon 7 : theta
	theta_lower_icon.onload = function () {
	ctxG.drawImage(theta_lower_icon, symbolX[7], symbolY[7]); }
	theta_lower_icon.src = prefixGA + greekPaths[7] + postfixSVG;
	// Icon 8 : iota
	iota_lower_icon.onload = function () {
	ctxG.drawImage(iota_lower_icon, symbolX[8], symbolY[8]); }
	iota_lower_icon.src = prefixGA + greekPaths[8] + postfixSVG;
	// Icon 9 : kappa
	kappa_lower_icon.onload = function () {
	ctxG.drawImage(kappa_lower_icon, symbolX[9], symbolY[9]); }
	kappa_lower_icon.src = prefixGA + greekPaths[9] + postfixSVG;
	// Icon 10 : lambda
	lambda_lower_icon.onload = function () {
	ctxG.drawImage(lambda_lower_icon, symbolX[10], symbolY[10]); }
	lambda_lower_icon.src = prefixGA + greekPaths[10] + postfixSVG;
	// Icon 11 : mu
	mu_lower_icon.onload = function () {
	ctxG.drawImage(mu_lower_icon, symbolX[11], symbolY[11]); }
	mu_lower_icon.src = prefixGA + greekPaths[11] + postfixSVG;
	// Icon 12 : nu
	nu_lower_icon.onload = function () {
	ctxG.drawImage(nu_lower_icon, symbolX[12], symbolY[12]); }
	nu_lower_icon.src = prefixGA + greekPaths[12] + postfixSVG;
	// Icon 13 : xi
	xi_lower_icon.onload = function () {
	ctxG.drawImage(xi_lower_icon, symbolX[13], symbolY[13]); }
	xi_lower_icon.src = prefixGA + greekPaths[13] + postfixSVG;
	// Icon 14 : omicron
	omicron_lower_icon.onload = function () {
	ctxG.drawImage(omicron_lower_icon, symbolX[14], symbolY[14]); }
	omicron_lower_icon.src = prefixGA + greekPaths[14] + postfixSVG;
	// Icon 15 : pi
	pi_lower_icon.onload = function () {
	ctxG.drawImage(pi_lower_icon, symbolX[15], symbolY[15]); }
	pi_lower_icon.src = prefixGA + greekPaths[15] + postfixSVG;
	// Icon 16 : rho
	rho_lower_icon.onload = function () {
	ctxG.drawImage(rho_lower_icon, symbolX[16], symbolY[16]); }
	rho_lower_icon.src = prefixGA + greekPaths[16] + postfixSVG;
	// Icon 17 : sigma
	sigma_lower_icon.onload = function () {
	ctxG.drawImage(sigma_lower_icon, symbolX[17], symbolY[17]); }
	sigma_lower_icon.src = prefixGA + greekPaths[17] + postfixSVG;
	// Icon 18 : tau
	tau_lower_icon.onload = function () {
	ctxG.drawImage(tau_lower_icon, symbolX[18], symbolY[18]); }
	tau_lower_icon.src = prefixGA + greekPaths[18] + postfixSVG;
	// Icon 19 : upsilon
	upsilon_lower_icon.onload = function () {
	ctxG.drawImage(upsilon_lower_icon, symbolX[19], symbolY[19]); }
	upsilon_lower_icon.src = prefixGA + greekPaths[19] + postfixSVG;
	// Icon 20 : phi
	phi_lower_icon.onload = function () {
	ctxG.drawImage(phi_lower_icon, symbolX[20], symbolY[20]); }
	phi_lower_icon.src = prefixGA + greekPaths[20] + postfixSVG;
	// Icon 21 : chi
	chi_lower_icon.onload = function () {
	ctxG.drawImage(chi_lower_icon, symbolX[21], symbolY[21]); }
	chi_lower_icon.src = prefixGA + greekPaths[21] + postfixSVG;
	// Icon 22 : psi
	psi_lower_icon.onload = function () {
	ctxG.drawImage(psi_lower_icon, symbolX[22], symbolY[22]); }
	psi_lower_icon.src = prefixGA + greekPaths[22] + postfixSVG;
	// Icon 23 : omega
	omega_lower_icon.onload = function () {
	ctxG.drawImage(omega_lower_icon, symbolX[23], symbolY[23]); }
	omega_lower_icon.src = prefixGA + greekPaths[23] + postfixSVG;
	// Icon 24 : sigma alternate
	sigma_alt_lower_icon.onload = function () {
	ctxG.drawImage(sigma_alt_lower_icon, symbolX[24], symbolY[24]); }
	sigma_alt_lower_icon.src = prefixGA + greekPaths[24] + postfixSVG;



	// Icon 32 : alpha
    alpha_upper_icon.onload = function () {
	ctxG.drawImage(alpha_upper_icon, symbolX[32], symbolY[32]);  }
	alpha_upper_icon.src = prefixGA + greekPaths[32] + postfixSVG;
	// Icon 33 : beta
	beta_upper_icon.onload = function () {
	ctxG.drawImage(beta_upper_icon, symbolX[33], symbolY[33]); }
	beta_upper_icon.src = prefixGA + greekPaths[33] + postfixSVG;
	// Icon 34 : gamma
	gamma_upper_icon.onload = function () {
	ctxG.drawImage(gamma_upper_icon, symbolX[34], symbolY[34]); }
	gamma_upper_icon.src = prefixGA + greekPaths[34] + postfixSVG;
	// delta_upper_icon 35 : delta
	delta_upper_icon.onload = function () {
	ctxG.drawImage(delta_upper_icon, symbolX[35], symbolY[35]);	}
	delta_upper_icon.src = prefixGA + greekPaths[35] + postfixSVG;
	// Icon 36 : epsilon
	epsilon_upper_icon.onload = function () {
	ctxG.drawImage(epsilon_upper_icon, symbolX[36], symbolY[36]); }
	epsilon_upper_icon.src = prefixGA + greekPaths[36] + postfixSVG;
	// Icon 37 : zeta
	zeta_upper_icon.onload = function () {
	ctxG.drawImage(zeta_upper_icon, symbolX[37], symbolY[37]); }
	zeta_upper_icon.src = prefixGA + greekPaths[37] + postfixSVG;
	// Icon 38 : eta
	eta_upper_icon.onload = function () {
	ctxG.drawImage(eta_upper_icon, symbolX[38], symbolY[38]); }
	eta_upper_icon.src = prefixGA + greekPaths[38] + postfixSVG;
	// Icon 39 : theta
	theta_upper_icon.onload = function () {
	ctxG.drawImage(theta_upper_icon, symbolX[39], symbolY[39]); }
	theta_upper_icon.src = prefixGA + greekPaths[39] + postfixSVG;
	// Icon 40 : iota
	iota_upper_icon.onload = function () {
	ctxG.drawImage(iota_upper_icon, symbolX[40], symbolY[40]); }
	iota_upper_icon.src = prefixGA + greekPaths[40] + postfixSVG;
	// Icon 41 : kappa
	kappa_upper_icon.onload = function () {
	ctxG.drawImage(kappa_upper_icon, symbolX[41], symbolY[41]); }
	kappa_upper_icon.src = prefixGA + greekPaths[41] + postfixSVG;
	// Icon 42 : lambda
	lambda_upper_icon.onload = function () {
	ctxG.drawImage(lambda_upper_icon, symbolX[42], symbolY[42]); }
	lambda_upper_icon.src = prefixGA + greekPaths[42] + postfixSVG;
	// Icon 43 : mu
	mu_upper_icon.onload = function () {
	ctxG.drawImage(mu_upper_icon, symbolX[43], symbolY[43]); }
	mu_upper_icon.src = prefixGA + greekPaths[43] + postfixSVG;
	// Icon 44 : nu
	nu_upper_icon.onload = function () {
	ctxG.drawImage(nu_upper_icon, symbolX[44], symbolY[44]); }
	nu_upper_icon.src = prefixGA + greekPaths[44] + postfixSVG;
	// Icon 45 : xi
	xi_upper_icon.onload = function () {
	ctxG.drawImage(xi_upper_icon, symbolX[45], symbolY[45]); }
	xi_upper_icon.src = prefixGA + greekPaths[45] + postfixSVG;
	// Icon 46 : omicron
	omicron_upper_icon.onload = function () {
	ctxG.drawImage(omicron_upper_icon, symbolX[46], symbolY[46]); }
	omicron_upper_icon.src = prefixGA + greekPaths[46] + postfixSVG;
	// Icon 47 : pi
	pi_upper_icon.onload = function () {
	ctxG.drawImage(pi_upper_icon, symbolX[47], symbolY[47]); }
	pi_upper_icon.src = prefixGA + greekPaths[47] + postfixSVG;
	// Icon 48 : rho
	rho_upper_icon.onload = function () {
	ctxG.drawImage(rho_upper_icon, symbolX[48], symbolY[48]); }
	rho_upper_icon.src = prefixGA + greekPaths[48] + postfixSVG;
	// Icon 49 : sigma
	sigma_upper_icon.onload = function () {
	ctxG.drawImage(sigma_upper_icon, symbolX[49], symbolY[49]); }
	sigma_upper_icon.src = prefixGA + greekPaths[49] + postfixSVG;
	// Icon 50 : tau
	tau_upper_icon.onload = function () {
	ctxG.drawImage(tau_upper_icon, symbolX[50], symbolY[50]); }
	tau_upper_icon.src = prefixGA + greekPaths[50] + postfixSVG;
	// Icon 51 : upsilon
	upsilon_upper_icon.onload = function () {
	ctxG.drawImage(upsilon_upper_icon, symbolX[51], symbolY[51]); }
	upsilon_upper_icon.src = prefixGA + greekPaths[51] + postfixSVG;
	// Icon 52 : phi
	phi_upper_icon.onload = function () {
	ctxG.drawImage(phi_upper_icon, symbolX[52], symbolY[52]); }
	phi_upper_icon.src = prefixGA + greekPaths[52] + postfixSVG;
	// Icon 53 : chi
	chi_upper_icon.onload = function () {
	ctxG.drawImage(chi_upper_icon, symbolX[53], symbolY[53]); }
	chi_upper_icon.src = prefixGA + greekPaths[53] + postfixSVG;
	// Icon 54 : psi
	psi_upper_icon.onload = function () {
	ctxG.drawImage(psi_upper_icon, symbolX[54], symbolY[54]); }
	psi_upper_icon.src = prefixGA + greekPaths[54] + postfixSVG;

	// Icon 55 : omega
	omega_upper_icon.onload = function () {
	ctxG.drawImage(omega_upper_icon, symbolX[55], symbolY[55]); }
	omega_upper_icon.src = prefixGA + greekPaths[55] + postfixSVG;
	
	if(debug){console.log("dbg:drawGreekAlphabet End")};

}
// The function to initialize the scene.
function initialize() {
	if(debug){console.log("dbg:initialize entered")};
	
	// Set up the Canvas
	canvas = document.getElementById("phoenicianCanvas");
	ctx = canvas.getContext("2d");
	ctx.width = width;
	ctx.height = height;
	
	canvasGreek = document.getElementById("greekCanvas");
	ctxG = canvasGreek.getContext("2d");
	ctxG.width = width;
	ctxG.height = height;
	
	
	// fill background Phoenician grey
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

    drawPhoenicianAlphabet();
	drawGreekAlphabet();
	
 
   if(debug){console.log("dbg:initialize ended")};
}

// Once the window of the browser loads, execute this function
window.onload = function() {
	if(debug){console.log("dbg:window.onload entered")};

	initialize();
	
	if(debug){console.log("dbg:window.onload ended")};
}