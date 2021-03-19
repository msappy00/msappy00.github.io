var ctx = document.getElementById('ctx').getContext('2d');
ctx.fillStyle = "white";
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

//define the coordiaates of the drawing
var radCos = [Math.cos(Math.PI / 24), Math.cos(Math.PI / 16), Math.cos(Math.PI / 12), Math.cos(Math.PI / 8), Math.cos(Math.PI / 6), Math.cos(3 * Math.PI / 16), Math.cos(5 * Math.PI / 24), Math.cos(Math.PI / 4), Math.cos(7 * Math.PI / 24)];
var radSin = [Math.sin(Math.PI / 24), Math.sin(Math.PI / 16), Math.sin(Math.PI / 12), Math.sin(Math.PI / 8), Math.sin(Math.PI / 6), Math.sin(3 * Math.PI / 16), Math.sin(5 * Math.PI / 24), Math.sin(Math.PI / 4), Math.sin(7 * Math.PI / 24)];

//  0		7.5°		π/24
//  1		11.25°	π/16
//  2		15°			π/12
//  3		22.5°		π/8
//  4		30°			π/6
//  5		33.75°	3π/16
//  6		37.5°		5π/24
//  7		45°			π/4 
//  8		52.5°		7π/24

// center for all circles
var centerX = 200;
var centerY = 200;
// outermost circle
var radius3 = 130;
var midX3 = radius3 * 1.2 * radCos[0];
var midY3 = radius3 * 1.2 * radSin[0];
var endX3 = radius3 * radCos[2];
var endY3 = radius3 * radSin[2];
var midX4 = radius3 * 1.2 * radCos[3];
var midY4 = radius3 * 1.2 * radSin[3];
var endX4 = radius3 * radCos[4];
var endY4 = radius3 * radSin[4];
var midX5 = radius3 * 1.2 * radCos[6];
var midY5 = radius3 * 1.2 * radSin[6];
var endX5 = radius3 * radCos[7];
var endY5 = radius3 * radSin[7];

// next circle
var radius2 = 100;
// inward pointing shapes
var startInX = radius2 * radCos[6];
var startInY = radius2 * radSin[6];
var midInX1 = radius2 / 1.2 * radCos[6];
var midInY1 = radius2 / 1.2 * radSin[6];
var midInX2 = radius2 / 1.2 * radCos[8];
var midInY2 = radius2 / 1.2 * radSin[8];
var endInX = radius2 * radCos[8];
var endInY = radius2 * radSin[8];
// next circle
var radius = 40;
var endX = radius * Math.cos(Math.PI / 4);
var midX = radius * 3 * Math.cos(Math.PI / 8);
var endY = radius * Math.sin(Math.PI / 4);
var midY = radius * 3 * Math.sin(Math.PI / 8);

ctx.fillStyle = radgrad;
ctx.fillRect(0, 0, 400, 400);

function draw() {

    var circle3 = new Path2D();
    circle3.arc(centerX, centerY, radius3, 0, 2 * Math.PI);
    ctx.fill(circle3);
    ctx.stroke(circle3);

    var circle2 = new Path2D();
    circle2.arc(centerX, centerY, radius2, 0, 2 * Math.PI);
    ctx.fill(circle2);
    ctx.stroke(circle2);

    ctx.translate(centerX, centerY);
    ctx.save();
    for (var i = 0; i <= 7; i++) {
        ctx.moveTo(radius3, 0);
        ctx.quadraticCurveTo(midX3, midY3, endX3, endY3);
        ctx.quadraticCurveTo(midX4, midY4, endX4, endY4);
        ctx.quadraticCurveTo(midX5, midY5, endX5, endY5);
        ctx.moveTo(startInX, startInY);
        ctx.bezierCurveTo(midInX1, midInY1, midInX2, midInY2, endInX, endInY);
        ctx.moveTo(radius2, 0);
        ctx.lineTo(radius3, 0);
        ctx.moveTo(radius2 * Math.cos(Math.PI / 12), radius2 * radSin[2]);
        ctx.lineTo(radius3 * Math.cos(Math.PI / 12), radius3 * radSin[2]);
        ctx.moveTo(radius2 * Math.cos(Math.PI / 6), radius2 * radSin[4]);
        ctx.lineTo(radius3 * Math.cos(Math.PI / 6), radius3 * radSin[4]);
        ctx.moveTo(radius, 0);
        ctx.quadraticCurveTo(midX, midY, endX, endY);
        ctx.stroke();
        ctx.rotate(Math.PI / 4);
    }
    ctx.restore();
    ctx.translate(-centerX, -centerY);
    var circle1 = new Path2D();
    circle1.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fill(circle1);
    ctx.stroke(circle1);
    var circle = new Path2D();
    circle.arc(centerX, centerY, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill(circle);
    ctx.stroke(circle);
}
draw();