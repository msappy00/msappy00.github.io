/* generate a random number 
   then draws a dice
   */

var canvas, ctx, numberText;
var number = Math.floor((Math.random() * 6) + 1);
var diceAngle = 0;
var incrementAngle = 0;

// preps the canvas
function init() {
    canvas = document.getElementById('myCtx');
    ctx = canvas.getContext('2d');
    window.addEventListener('keyup', handleKeyup, false);
    window.addEventListener('keydown', handleKeydown, false);
    canvas.addEventListener('mousedown', handleMousedown, false);
    canvas.addEventListener('mouseup', handleMouseup, false);
    requestId = requestAnimationFrame(animationLoop);
}

// spins the dice while the space bar is down
function handleKeydown(evt) {
    if (evt.keyCode === 32) {
        incrementAngle = 1.0;
    }
}

// rolls the dice when the space bar is released
function handleKeyup(evt) {
    if (evt.keyCode === 32) {
        incrementAngle = 0;
        number = Math.floor((Math.random() * 6) + 1);
        dice_roll.play();
    }
}

// spins the dice while the mouse button is down
function handleMousedown(evt) {
    incrementAngle = 1.0;
}

// rolls the dice when the mouse button is released
function handleMouseup(evt) {
    incrementAngle = 0;
    number = Math.floor((Math.random() * 6) + 1);
    dice_roll.play();
}

// animates the rotation
function animationLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDice();
    diceAngle += incrementAngle;
    requestAnimationFrame(animationLoop);
    }

// draws the dice
function drawDice() {
    ctx.save();
    ctx.translate(300, 200);
    ctx.rotate(diceAngle);
    ctx.translate(-100, -100);
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, 200, 200);
    switch(number) {
        case 1:
            numberText = "one";
            ctx.beginPath();
            ctx.fillStyle="red";
            ctx.arc(100, 100, 25, 0, 2*Math.PI, false);
            ctx.fill();
            break;
        case 2:
            numberText = "two";
            ctx.beginPath();
            ctx.fillStyle="red";
            ctx.arc(60, 60, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(140, 140, 20, 0, 2*Math.PI, false);
            ctx.fill();
            break;
        case 3:
            numberText = "three";
            ctx.beginPath();
            ctx.fillStyle="red";
            ctx.arc(50, 50, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(100, 100, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(150, 150, 20, 0, 2*Math.PI, false);
            ctx.fill();
            break;
        case 4:
            numberText = "four";
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(60, 60, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(60, 140, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(140, 140, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(140, 60, 20, 0, 2*Math.PI, false);
            ctx.fill();
            break;
        case 5:
            numberText = "five";
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(100, 100, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(50, 50, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(50, 150, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(150, 150, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(150, 50, 20, 0, 2*Math.PI, false);
            ctx.fill();
            break;
        case 6:
            numberText = "six";
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(55, 100, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(145, 100, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(55, 40, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(55, 160, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(145, 160, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(145, 40, 20, 0, 2*Math.PI, false);
            ctx.fill();
            break; 
    }
    ctx.restore();
    ctx.font = "80px Arial";
    ctx.textAlign = "center";
    ctx.fillText(numberText, 300, 530);
}

function start() {
    requestId = requestAnimationFrame(animationLoop);
}
function stop() {
    if (requestId) {
        cancelAnimationFrame(requestId);
    }
}