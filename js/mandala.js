var ctx = document.getElementById('ctx').getContext('2d');
ctx.lineWidth = 3;

// define rgb colors

rgb_colors = ["rgb(0,255,125)", "cyan", "rgb(0,125,255)", "blue", "violet", "magenta",
    "rgb(255,0,125)", "red", "orange", "yellow", "rgb(125,255,0)", "green"];
var i = cal_current_date.getMonth();
if (i == 10) {
    var color_01 = rgb_colors[i];
    var color_02 = rgb_colors[i + 1];
    var color_03 = rgb_colors[0];
}
else if (i == 11) {
    var color_01 = rgb_colors[i];
    var color_02 = rgb_colors[0];
    var color_03 = rgb_colors[1];
}
else {
    var color_01 = rgb_colors[i];
    var color_02 = rgb_colors[i+1];
    var color_03 = rgb_colors[i+2];
}


// define gradients by month
var radgrad = ctx.createRadialGradient(200, 200, 40, 200, 200, 150);
var lingrad = ctx.createLinearGradient(0, 0, 400, 0);
radgrad.addColorStop(0, color_01);
radgrad.addColorStop(0.3, color_02);
radgrad.addColorStop(0.5, color_02);
radgrad.addColorStop(0.7, color_03);
radgrad.addColorStop(1, "white");
lingrad.addColorStop(0, color_01);
lingrad.addColorStop(0.3, color_02);
lingrad.addColorStop(0.7, color_02);
lingrad.addColorStop(1, color_03);

//define the coordinates of the drawing
var centerX = 200;
var centerY = 200;
var radius = 40;
var testX = radius * Math.cos(Math.PI / 4);
var midX = radius * 3 * Math.cos(Math.PI / 8);
var testY = radius * Math.sin(Math.PI / 4);
var midY = radius * 3 * Math.sin(Math.PI / 8);
var radius2 = 100;
var testX2 = radius2 * Math.cos(Math.PI / 4);
var midX2 = radius2 / 1.5 * Math.cos(Math.PI / 8);
var testY2 = radius2 * Math.sin(Math.PI / 4);
var midY2 = radius2 / 1.5 * Math.sin(Math.PI / 8);
var radius3 = 130;
var testX3 = radius3 * Math.cos(Math.PI / 12);
var midX3 = radius3 * 1.2 * Math.cos(Math.PI / 24);
var testY3 = radius3 * Math.sin(Math.PI / 12);
var midY3 = radius3 * 1.2 * Math.sin(Math.PI / 24);
var testX4 = radius3 * Math.cos(Math.PI / 6);
var midX4 = radius3 * 1.2 * Math.cos(Math.PI / 8);
var testY4 = radius3 * Math.sin(Math.PI / 6);
var midY4 = radius3 * 1.2 * Math.sin(Math.PI / 8);
var testX5 = radius3 * Math.cos(Math.PI / 4);
var midX5 = radius3 * 1.2 * Math.cos(5 * Math.PI / 24);
var testY5 = radius3 * Math.sin(Math.PI / 4);
var midY5 = radius3 * 1.2 * Math.sin(5 * Math.PI / 24);
var startInX = radius2 * Math.cos(5 * Math.PI / 24);
var startInY = radius2 * Math.sin(5 * Math.PI / 24);
var midInX = radius2 / 1.4 * Math.cos(Math.PI / 4);
var midInY = radius2 / 1.4 * Math.sin(Math.PI / 4);
var testInX = radius2 * Math.cos(7 * Math.PI / 24);
var testInY = radius2 * Math.sin(7 * Math.PI / 24);

ctx.fillStyle = radgrad;
ctx.fillRect(0, 0, 400, 400);

function draw() {

    var circle3 = new Path2D();
    circle3.arc(centerX, centerY, radius3, 0, 2 * Math.PI);
    ctx.stroke(circle3);

    var circle2 = new Path2D();
    circle2.arc(centerX, centerY, radius2, 0, 2 * Math.PI);
    ctx.stroke(circle2);

    var circle1 = new Path2D();
    circle1.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke(circle1);

    ctx.translate(centerX, centerY);
    ctx.save();

    for (var i = 0; i <= 7; i++) {
        ctx.moveTo(radius3, 0);
        ctx.quadraticCurveTo(midX3, midY3, testX3, testY3);
        ctx.quadraticCurveTo(midX4, midY4, testX4, testY4);
        ctx.quadraticCurveTo(midX5, midY5, testX5, testY5);
        ctx.moveTo(startInX, startInY);
        ctx.quadraticCurveTo(midInX, midInY, testInX, testInY);
        ctx.moveTo(radius2, 0);
        ctx.lineTo(radius3, 0);
        ctx.moveTo(radius2 * Math.cos(Math.PI / 12), radius2 * Math.sin(Math.PI / 12));
        ctx.lineTo(radius3 * Math.cos(Math.PI / 12), radius3 * Math.sin(Math.PI / 12));
        ctx.moveTo(radius2 * Math.cos(Math.PI / 6), radius2 * Math.sin(Math.PI / 6));
        ctx.lineTo(radius3 * Math.cos(Math.PI / 6), radius3 * Math.sin(Math.PI / 6));
        ctx.moveTo(radius, 0);
        ctx.quadraticCurveTo(midX, midY, testX, testY);
        ctx.stroke();
        ctx.rotate(Math.PI / 4);
    }
    ctx.restore();
    ctx.translate(-centerX, -centerY);

    var circle = new Path2D();
    circle.arc(centerX, centerY, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.stroke(circle);
}
draw();