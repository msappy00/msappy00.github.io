var ctx = document.getElementById('mycanvas').getContext('2d');
ctx.lineWidth = 3;

// define rgb colors
var turquoise = "rgb(0,255,125)";
var ocean = "rgb(0,125,255)";
var raspberry = "rgb(255,0,125)";
var spring_green = "rgb(125,255,0)";

// define gradients by month
var jangrad = ctx.createLinearGradient(0, 0, 400, 0);
jangrad.addColorStop(0, turquoise);
jangrad.addColorStop(0.3, "cyan");
jangrad.addColorStop(0.7, "cyan");
jangrad.addColorStop(1, ocean);

var febgrad = ctx.createLinearGradient(0, 0, 400, 0);
febgrad.addColorStop(0, "cyan");
febgrad.addColorStop(0.3, ocean);
febgrad.addColorStop(0.7, ocean);
febgrad.addColorStop(1, "blue");

var margrad = ctx.createLinearGradient(0, 0, 400, 0);
margrad.addColorStop(0, ocean);
margrad.addColorStop(0.5, "blue");
margrad.addColorStop(1, "violet");

var aprgrad = ctx.createLinearGradient(0, 0, 400, 0);
aprgrad.addColorStop(0, "blue");
aprgrad.addColorStop(0.3, "violet");
aprgrad.addColorStop(0.7, "violet");
aprgrad.addColorStop(1, "magenta");

var maygrad = ctx.createLinearGradient(0, 0, 400, 0);
maygrad.addColorStop(0, "blue");
maygrad.addColorStop(0.3, "violet");
maygrad.addColorStop(0.7, "violet");
maygrad.addColorStop(1, "magenta");

// assign lingrad to current month's grad
grad_labels = [jangrad, febgrad, margrad, aprgrad, maygrad];
var lingrad = grad_labels[cal_current_date.getMonth()];

// define the coordiaates of the drawing
var centerX = 200;
var centerY = 200;
var radius = 50;
var testX = radius * Math.cos(Math.PI / 4);
var midX = radius * 2 * Math.cos(Math.PI / 8);
var testY = radius * Math.sin(Math.PI / 4);
var midY = radius * 2 * Math.sin(Math.PI / 8);
var radius2 = 180;
var testX2 = radius2 * Math.cos(Math.PI / 4);
var midX2 = radius2 / 1.5 * Math.cos(Math.PI / 8);
var testY2 = radius2 * Math.sin(Math.PI / 4);
var midY2 = radius2 / 1.5 * Math.sin(Math.PI / 8);
var radius3 = 190;

// define radgrad for a dropshadow
var radgrad = ctx.createRadialGradient(centerX, centerY, radius2, centerX, centerY, radius3);
radgrad.addColorStop(0.3, "rgb(200,200,200)");
radgrad.addColorStop(1, "white");

function draw(lingrad) {
 
    var circle3 = new Path2D();
    circle3.arc(centerX, centerY, radius3, 0, 2 * Math.PI);
    ctx.fillStyle = radgrad;
    ctx.fill(circle3);

    var circle2 = new Path2D();
    circle2.arc(centerX, centerY, radius2, 0, 2 * Math.PI);
    ctx.fillStyle = lingrad;
    ctx.fill(circle2);
    ctx.stroke(circle2);

    ctx.translate(centerX, centerY);
    ctx.save();
    for (var i = 0; i <= 8; i++) {
        ctx.beginPath();
        ctx.moveTo(radius, 0);
        ctx.lineTo(midX, midY);
        ctx.lineTo(testX, testY);
        ctx.closePath();
        ctx.stroke();
        ctx.rotate(Math.PI / 8);
        ctx.moveTo(radius2, 0);
        ctx.lineTo(midX2, midY2);
        ctx.lineTo(testX2, testY2);
        //ctx.fill();  
        ctx.stroke();
        ctx.rotate(Math.PI / 8);
    }
    ctx.restore();
    ctx.translate(-centerX, -centerY);
    ctx.fillStyle = "white";
    var circle = new Path2D();
    circle.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = lingrad;
    ctx.fill(circle);
    ctx.stroke(circle);
}
draw(lingrad);