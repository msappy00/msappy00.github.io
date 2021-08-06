canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");

const sun_img = new Image();

// Add onload event handler
sun_img.onload = function () {
    _Go();
};

sun_img.src = "/images/sun.png";
sun_img.boundingCircleRadius = 75;
sun_img.isDraggable = false;

var monsterPos = { x: (canvas.width / 2) - 75, y: (canvas.height / 2) - 75 };
var touchPos = monsterPos;
function _Go() {

        _ResetCanvas();
        _DrawImage(monsterPos.x, monsterPos.y);

}

function _ResetCanvas() {
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function _DrawImage(x, y) {
    context.drawImage(sun_img, x, y);
}

function getTouchPos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.touches[0].clientX - rect.left,
        y: evt.touches[0].clientY - rect.top
    };
}

// Set up touch events for mobile, etc
canvas.addEventListener("touchstart", function (e) {
    e.preventDefault();
    touchPos = getTouchPos(canvas, e);
    var mouseEvent = new MouseEvent("mousedown", {
       
    });
    canvas.dispatchEvent(mouseEvent);
}, { passive: false });

canvas.addEventListener("touchmove", function (e) {
    e.preventDefault();
    touchPos = getTouchPos(canvas, e);
    if (touchingImage(touchPos.x, touchPos.y, monsterPos.x, monsterPos.y, 75)) {
        monsterPos.x = touchPos.x;
        monsterPos.y = touchPos.y;
        _Go();
        var mouseEvent = new MouseEvent("mousemove", {

        });
        canvas.dispatchEvent(mouseEvent);
    }
}, { passive: false });

function circleCollide(x1, y1, r1, x2, y2, r2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return ((dx * dx + dy * dy) < (r1 + r2) * (r1 + r2));
}

function touchingImage(x0, y0, x1, y1, r) {
    if (Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0)) < r) {
        return true
    } 
}