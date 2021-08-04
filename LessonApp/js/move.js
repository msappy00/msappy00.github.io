canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");

// Create the image object
const sun_img = new Image();
var isDraggable = false;
var mousePos = { x: canvas.width / 2, y: canvas.height / 2 };
var lastPos = mousePos;

// Add onload event handler
sun_img.onload = function () {
    _Go();
};

// Set the source url of the image
sun_img.src = "/images/sun.png";

function _Go() {
    setInterval(function () {
        _ResetCanvas();
        _DrawImage();
    }, 1000 / 30);
}

function _ResetCanvas() {
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function _DrawImage() {
    context.drawImage(sun_img, mousePos.x - (sun_img.width / 2), mousePos.y - (sun_img.height / 2));
}

// Mouse events
canvas.onmousedown = function (e) {
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;


    if (mouseX >= (mousePos.x - sun_img.width / 2) &&
        mouseX <= (mousePos.x + sun_img.width / 2) &&
        mouseY >= (mousePos.y - sun_img.height / 2) &&
        mouseY <= (mousePos.y + sun_img.height / 2)) {
        isDraggable = true;
    }
};

canvas.onmouseup = function (e) {
    isDraggable = false;
};

canvas.onmouseout = function (e) {
    isDraggable = false;
};

canvas.onmousemove = function (e) {
    if (isDraggable) {
        mousePos.x = e.pageX - this.offsetLeft;
        mousePos.y = e.pageY - this.offsetTop;
    }
};

// Set up touch events for mobile, etc
canvas.addEventListener("touchstart", function (e) {
    mousePos = getTouchPos(canvas, e);
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchend", function (e) {
    var mouseEvent = new MouseEvent("mouseup", {});
    canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchmove", function (e) {
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}, false);

// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {
    var rect = canvasDom.getBoundingClientRect();
    return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top
    };
}