var possible = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var letter = possible[Math.floor(Math.random() * 26)];

var ctx;
var active = true;
var wall = new Image();
wall.src = 'images/brick_wall.png';
var cannonball1 = new Image();
cannonball1.src = 'images/cannonball1.png';
var cannonball2 = new Image();
cannonball2.src = 'images/cannonball2.png';

var ballx = 300;
var bally = 680;

function init() {
    ballx = 300;
    bally = 720;
    ctx = document.getElementById('myCanvas').getContext('2d');
    ctx.save();
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
    ctx.drawImage(wall,0,0);
    ctx.restore();
}

function animationLoop() {
    active = true;
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
    if (ballx < 480) {
        ballx += 6;
        bally -= 16;
    }
    if (ballx >= 480 && ballx <= 500) {
        ballx += 2;
        bally -= 2;
    }
    if (ballx > 500 && bally < 720) {
        ballx += 0;
        bally += 16;
    }
    if (bally >= 720) {
        active = false;
        ballx = 300;
        bally = 720;
        letter = possible[Math.floor(Math.random() * 26)];
    }
    ctx.drawImage(wall,0,0);
        if (ballx >= 480 && ballx <= 500) {
        ctx.drawImage(cannonball2,ballx-44,bally-44);
    } else {
        ctx.drawImage(cannonball1,ballx,bally);
    }
    if (bally < 260) {
        ctx.fillStyle = "white";
        ctx.font = "180px Arial";
        ctx.textAlign = "center";
        ctx.fillText(letter,586,376);
        impact.play();
    }
    if (active) {
        requestAnimationFrame(animationLoop);
    }
}

function start() {
    requestId = requestAnimationFrame(animationLoop);
}
function stop() {
    if (requestId) {
        cancelAnimationFrame(requestId);
    }
}