/*
	Script name:	Pong_v001.js
	By:				Kyle Brown
	Date:			2015/09/08
	
	Description
	-----------
	A simple tennis - paddle ball simulation where the objective of the game is to get the ball in the opposing players goal.
	The ball speeds up the longer it is in play.
	First one to 10 points wins.
 
	How to play
	-----------
	Player one uses "w" to move up and "s" to move down.
	Player two uses arrow key up to move up and arrow key down to move down.

	Game Files Details
	------------
	Used in conjunction with Pong_v001.html which has a canvas element called myCanvas where the game is played.
*/

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var xB = canvas.width/2;
var yB = canvas.height/2;
var dxB = -1;
var dyB = .5;
var dxIncrease = .5;
var dyIncrease = .1;
var directionInt= 1;
var ballRadius = 10;
var paddlesHeight = 64;
var paddlesWidth = 16;
var paddlesOffset = canvas.width/3 + canvas.width/8;
var paddlesSideOffset = canvas.width/16;
var paddle1X = (canvas.width/2)- paddlesOffset;
var paddle1Y = canvas.height/2 - paddlesHeight/2;
var paddle2X = (canvas.width/2)+ paddlesOffset - paddlesWidth;
var paddle2Y = canvas.height/2 - paddlesHeight/2;
var paddle1UpPressed = false;
var paddle1DownPressed = false;
var paddle2UpPressed = false;
var paddle2DownPressed = false;
var p1Score = 0;
var p2Score = 0;
var scoreLimit = 10;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if(e.keyCode == 87) {
        paddle1UpPressed = true;
    }
    else if(e.keyCode == 83) {
        paddle1DownPressed = true;
    } 
	else if(e.keyCode == 38) {
		paddle2UpPressed = true;
	}
	else if(e.keyCode == 40) {
		paddle2DownPressed = true;
	}
}
function keyUpHandler(e) {
    if(e.keyCode == 87) {
        paddle1UpPressed = false;
    }
    else if(e.keyCode == 83) {
        paddle1DownPressed = false;
    }
	else if(e.keyCode == 38) {
		paddle2UpPressed = false;
	}
	else if(e.keyCode == 40) {
		paddle2DownPressed = false;
	}
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(xB, yB, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddles(){
	ctx.beginPath();
    ctx.rect(paddle1X, paddle1Y, paddlesWidth, paddlesHeight);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
	
	ctx.beginPath();
    ctx.rect(paddle2X, paddle2Y, paddlesWidth, paddlesHeight);
    ctx.fillStyle = "#0000FF";
    ctx.fill();
    ctx.closePath();
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);	// Clears the canvas
	drawBackground();
	drawBall();				// Draws the ball
	drawPaddles();
	drawScore();
	
	// Collision detection for goals... Add score if scoreLimit not reached else reloads game
	if(xB + dxB < ballRadius + paddlesSideOffset) {
		if(yB > paddle1Y && yB < paddle1Y + paddlesHeight)
		{
			dxB =  -dxB + dxIncrease;
			dyB = dyB + Math.random();
		}
		else {
			p2Score ++;
			if(p2Score > scoreLimit-1)
			{
				alert("Player 2 WINS!!!")
				document.location.reload();
			} else	// Reset Paddle and Ball Positions
			{
				serveBall();
			}			
		}

	} else if(xB + dxB > canvas.width-ballRadius - paddlesSideOffset) {
		if (yB > paddle2Y && yB < paddle2Y + paddlesHeight)
		{
			dxB = -dxB - dxIncrease;
			dyB = dyB + Math.random();
		}
		else {
			p1Score ++;
			if(p1Score > scoreLimit-1)
			{
				alert("Player 1 WINS!!!")
				document.location.reload();
			} else	// Reset Paddle and Ball Positions
			{
				serveBall();
			}
		}
	}
	// Collision detection for top and bottom walls
	if(yB + dyB > canvas.height-ballRadius || yB + dyB < ballRadius) {
		dyB = -dyB;
	}

	// Player keyboard control logic
	if(paddle1UpPressed && paddle1Y > 0) {
        paddle1Y -= 4;
    }
    else if(paddle1DownPressed && paddle1Y < canvas.height-paddlesHeight) {
        paddle1Y += 4;
    }
	if(paddle2UpPressed && paddle2Y > 0) {
        paddle2Y -= 4;
    }
    else if(paddle2DownPressed && paddle2Y < canvas.height-paddlesHeight) {
        paddle2Y += 4;
    }
	
	
	// Increase ball position
    xB += dxB;			
    yB += dyB;
	
	// In requestAnimationFrame loop 
	requestAnimationFrame(draw);
}

// Draws the score text on the top of the canvas
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("P1 Score: "+p1Score, 36, 20);
	ctx.fillText("P2 Score: "+p2Score, canvas.width-124,20)
}

// Resets ball and paddle positions.  Also serves ball in a random direction.
function serveBall() {
	directionInt = randomIntFromInterval(1,4);
	if(directionInt > 2)
	{
		dxB = 1

	} else {
		dxB = -1
	}
	xB = canvas.width/2;
	yB = canvas.height/2;
	dyB = .5;
	paddle1Y = canvas.height/2 - paddlesHeight/2;
	paddle2Y = canvas.height/2 - paddlesHeight/2;

}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function drawBackground(){
	// Left Endzone
	ctx.beginPath();
    ctx.rect(0, 0, 32, canvas.height);
    ctx.fillStyle = "#FFAAAA";
    ctx.fill();
    ctx.closePath();
	
	// Center Zone
	ctx.beginPath();
    ctx.rect(canvas.width/4, 0, 256, canvas.height);
    ctx.fillStyle = "#AABBCC";
    ctx.fill();
    ctx.closePath();
	
	// Right Endzone
	ctx.beginPath();
    ctx.rect(canvas.width-32, 0, 32, canvas.height);
    ctx.fillStyle = "#AAAAFF";
    ctx.fill();
    ctx.closePath();
	
}



// draw is the main function called here, then continues in a requestAnimationFrame loop
draw();
