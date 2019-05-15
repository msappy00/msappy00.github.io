/*
 draws two circles with one common element
 */

var canvas, canvas2, ctx, ctx2;
var possible = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
                "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
                "o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
var availableColors = ["black", "red", "goldenrod", "navy", "olive", "magenta", "silver", "gray", "maroon", "cornflowerblue", "green", "purple", "lime", "blue"];
var shown = [];
var candidate = possible[Math.floor(Math.random() * 62)];
while (shown.length < 14) {
    if (shown.indexOf(candidate) === -1) {
        shown.push(candidate);
    } else {
        candidate = possible[Math.floor(Math.random()*62)];
    }
}

var circleAngle1 = 0;
var circleAngle2 = 0;
var incrementAngle = 0;

// selects a character to be repeated:
var common = Math.floor((Math.random() * 6) + 1);
var replaced = Math.floor((Math.random() * 6) + 7);

function colorShuffle(availableColors) {
    for (var i = availableColors.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = availableColors[i];
        availableColors[i] = availableColors[j];
        availableColors[j] = temp;
    }
    return availableColors;
}

colorShuffle(availableColors);

// preps the canvas
function init() {
    canvas = document.getElementById('spot_it');
    canvas2 = document.getElementById('spot_it2');
    ctx = canvas.getContext('2d');
    ctx2 = canvas2.getContext('2d');
    window.addEventListener('keyup', handleKeyup, false);
    window.addEventListener('keydown', handleKeydown, false);
    canvas.addEventListener('mousedown', handleMousedown, false);
    canvas.addEventListener('mouseup', handleMouseup, false);
    requestId = requestAnimationFrame(animationLoop);
    reset();
}

// spins the circles while the space bar is down
function handleKeydown(evt) {
    if (evt.keyCode === 32) {
        incrementAngle = 1.0;
    }
}

// resets the letters
function reset() {
    availableColors = ["black", "red", "goldenrod", "navy", "olive", "magenta", "silver", "gray", "maroon", "cornflowerblue", "green", "purple", "lime", "blue"];
    incrementAngle = 0;
    colorShuffle(availableColors);
    shown = [];
    candidate = possible[Math.floor(Math.random() * 62)];
    while (shown.length < 14) {
        if (shown.indexOf(candidate) === -1) {
            shown.push(candidate);
        } else {
            candidate = possible[Math.floor(Math.random() * 62)];
        }
    }
    common = Math.floor((Math.random() * 6) + 1);
    replaced = Math.floor((Math.random() * 6) + 7);
    shown[replaced] = shown[common];
    availableColors[replaced] = availableColors[common];
}


// stops the circles and resets the letters when the space bar is released
function handleKeyup(evt) {
    if (evt.keyCode === 32) {
        reset();
    }
}

// spins the circles while the mouse is down
function handleMousedown(evt) {
    incrementAngle = 1.0;
}

// stops the circles and resets the letters when the mouse is released
function handleMouseup(evt) {
    reset();
}

// animates the rotation
function animationLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle1();
    circleAngle1 += incrementAngle;
    drawCircle2();
    circleAngle2 -= incrementAngle;
    requestAnimationFrame(animationLoop);
}

function drawCircle1(){
    ctx.save();
    ctx.font = "80px Arial";
    ctx.translate(200, 200);
    ctx.rotate(circleAngle1);
    ctx.translate(-100, -100);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(100, 100, 175, 0, 2*Math.PI, false);
    ctx.fillStyle=availableColors[0];
    ctx.fillText(shown[0], 0, 35);
    ctx.fillStyle=availableColors[1];
    ctx.fillText(shown[1], 130, 35);
    ctx.fillStyle=availableColors[2];
    ctx.fillText(shown[2], -30, 125);
    ctx.fillStyle=availableColors[3];
    ctx.fillText(shown[3], 70, 125);
    ctx.fillStyle=availableColors[4];
    ctx.fillText(shown[4], 170, 125);
    ctx.fillStyle=availableColors[5];
    ctx.fillText(shown[5], 0, 210);
    ctx.fillStyle=availableColors[6];
    ctx.fillText(shown[6], 130, 210);
    ctx.stroke();
    ctx.restore();
}

function drawCircle2(){
    
    // puts characters in the second circle and rotates them
    ctx2.save();
    ctx2.font = "80px Arial";
    ctx2.translate(200, 200);
    ctx2.rotate(circleAngle2);
    ctx2.translate(-100, -100);
    ctx2.lineWidth = 1;
    ctx2.beginPath();
    ctx2.arc(100, 100, 175, 0, 2*Math.PI, false);
    ctx2.fillStyle=availableColors[7];
    ctx2.fillText(shown[7], 0, 35);
    ctx2.fillStyle=availableColors[8];
    ctx2.fillText(shown[8], 130, 35);
    ctx2.fillStyle=availableColors[9];
    ctx2.fillText(shown[9], -30, 125);
    ctx2.fillStyle=availableColors[10];
    ctx2.fillText(shown[10], 70, 125);
    ctx2.fillStyle=availableColors[11];
    ctx2.fillText(shown[11], 170, 125);
    ctx2.fillStyle=availableColors[12];
    ctx2.fillText(shown[12], 0, 210);
    ctx2.fillStyle=availableColors[13];
    ctx2.fillText(shown[13], 130, 210);
    ctx2.stroke();
    ctx2.restore();
}

function start() {
    requestId = requestAnimationFrame(animationLoop);
}
function stop() {
    if (requestId) {
        cancelAnimationFrame(requestId);
    }
}
