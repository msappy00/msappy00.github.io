canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");

// Create the image object
const sun_img = new Image();
var isDraggable = false;

// Add onload event handler
sun_img.onload = function () {
    _Go();
};

// Set the source url of the image
sun_img.src = "/images/sun.png";

currentX = canvas.width / 2;
currentY = canvas.height / 2;

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
    context.drawImage(sun_img, currentX - (sun_img.width / 2), currentY - (sun_img.height / 2));
}

canvas.onmousedown = function (e) {
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;


    if (mouseX >= (currentX - sun_img.width / 2) &&
        mouseX <= (currentX + sun_img.width / 2) &&
        mouseY >= (currentY - sun_img.height / 2) &&
        mouseY <= (currentY + sun_img.height / 2)) {
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
        currentX = e.pageX - this.offsetLeft;
        currentY = e.pageY - this.offsetTop;
    }
};