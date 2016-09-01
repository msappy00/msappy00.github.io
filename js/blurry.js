/* displays a blurry image and allows the user to increase the resolution of the image */

var canvas, ctx, cv;
var image = new Image();
image.src = "mes-flashcards/socks.png";

// sets the variables 'w * h are original, p * q are affected by user
var w = 1000,
h = 750,
p,
q,
points = 6;

// preps the canvas and displays original image with variable resolution
function init() {
    canvas = document.getElementById('cv');
    ctx = canvas.getContext('2d');
    drawToCv();
}

function drawToCv(){
    if(points == 6){
        points -= 1;
        p = 5;
        q = 5;
    } else if(points > 1 && points < 6){
        points -= 1;
        p += 10;
        q += 10;
    } else {
        points = 0;
        p = 1000;
        q = 750;
    }
    ctx.save();
    cv = $("#cv").get(0);
    cv.width = p;
    cv.height = q;
    cv.style.width = w + "px";
    cv.style.height = h + "px";
    ctx.drawImage(image, 0, 0, p, q);
    document.getElementById("points").innerHTML = "Points: " + points;
    ctx.restore();
}

function start() {
    requestId = requestAnimationFrame(animationLoop);
}
function stop() {
    if (requestId) {
        cancelAnimationFrame(requestId);
    }
}