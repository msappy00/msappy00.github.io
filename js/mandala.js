var ctx = document.getElementById('ctx').getContext('2d');
ctx.fillStyle = "white";
ctx.lineWidth = 2;

// define rgb colors

rgb_colors = ["rgb(0,255,125)", "cyan", "rgb(0,125,255)", "blue", "violet", "magenta", "rgb(255,0,125)", "red", "orange", "yellow", "rgb(125,255,0)", "green"];
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
    var color_02 = rgb_colors[i + 1];
    var color_03 = rgb_colors[i + 2];
}


// define gradients by month
var radgrad = ctx.createRadialGradient(500, 500, 100, 500, 500, 425);
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
var radCos = [Math.cos(Math.PI / 24), Math.cos(Math.PI / 16), Math.cos(Math.PI / 12), Math.cos(5 * Math.PI / 48), Math.cos(Math.PI / 8), Math.cos(7 * Math.PI / 48), Math.cos(Math.PI / 6), Math.cos(3 * Math.PI / 16), Math.cos(5 * Math.PI / 24), Math.cos(11 * Math.PI / 48), Math.cos(Math.PI / 4), Math.cos(13 * Math.PI / 48), Math.cos(7 * Math.PI / 24)];
var radSin = [Math.sin(Math.PI / 24), Math.sin(Math.PI / 16), Math.sin(Math.PI / 12), Math.sin(5 * Math.PI / 48), Math.sin(Math.PI / 8), Math.sin(7 * Math.PI / 48), Math.sin(Math.PI / 6), Math.sin(3 * Math.PI / 16), Math.sin(5 * Math.PI / 24), Math.sin(11 * Math.PI / 48), Math.sin(Math.PI / 4), Math.sin(13 * Math.PI / 48), Math.sin(7 * Math.PI / 24)];

//  0		7.5°		π/24
//  1		11.25°	π/16
//  2		15°			π/12
//	3		18.75°	5π/48
//  4		22.5°		π/8
//  5   26.25°	7π/48
//  6		30°			π/6
//  7		33.75°	3π/16
//  8		37.5°		5π/24
//  9		41.25°	11π/48
//  10	45°			π/4 
//  11	48.75°	13π/48
//  12	52.5°		7π/24

// center for all circles
var centerX = 500;
var centerY = 500;
// outermost circle
var radius4 = 370;
var p1xcp1 = radius4 * 1.1 * radCos[1];
var p1ycp1 = radius4 * 1.1 * radSin[1];
var p1x = radius4 * radCos[2];
var p1y = radius4 * radSin[2];
var p1xcp2 = radius4 * 1.1 * radCos[3];
var p1ycp2 = radius4 * 1.1 * radSin[3];
var p1xcp3 = radius4 * 1.2 * radCos[0];
var p1ycp3 = radius4 * 1.2 * radSin[0];
var p1xcp4 = radius4 * 1.2 * radCos[4];
var p1ycp4 = radius4 * 1.2 * radSin[4];
var p2xcp1 = radius4 * 1.1 * radCos[5];
var p2ycp1 = radius4 * 1.1 * radSin[5];
var p2x = radius4 * radCos[6];
var p2y = radius4 * radSin[6];
var p2xcp2 = radius4 * 1.1 * radCos[7];
var p2ycp2 = radius4 * 1.1 * radSin[7];
var p2xcp3 = radius4 * 1.2 * radCos[4];
var p2ycp3 = radius4 * 1.2 * radSin[4];
var p2xcp4 = radius4 * 1.2 * radCos[8];
var p2ycp4 = radius4 * 1.2 * radSin[8];
var p3xcp1 = radius4 * 1.1 * radCos[9];
var p3ycp1 = radius4 * 1.1 * radSin[9];
var p3x = radius4 * radCos[10];
var p3y = radius4 * radSin[10];
var p3xcp2 = radius4 * 1.1 * radCos[11];
var p3ycp2 = radius4 * 1.1 * radSin[11];
var p3xcp3 = radius4 * 1.2 * radCos[8];
var p3ycp3 = radius4 * 1.2 * radSin[8];
var p3xcp4 = radius4 * 1.2 * radCos[12];
var p3ycp4 = radius4 * 1.2 * radSin[12];
var dp0x = radius4 * 1.1 * radCos[1];
var dp0y = radius4 * 1.1 * radSin[1];
var dp1x = radius4 * radCos[2];
var dp1y = radius4 * radSin[2];
var dp2x = radius4 * 1.1 * radCos[3];
var dp2y = radius4 * 1.1 * radSin[3];
var dp3x = radius4 * 1.2 * radCos[0];
var dp3y = radius4 * 1.2 * radSin[0];
var dp4x = radius4 * 1.2 * radCos[4];
var dp4y = radius4 * 1.2 * radSin[4];

// next circle
var radius3 = 330;
var midX3 = radius3 * 1.2 * radCos[0];
var midY3 = radius3 * 1.2 * radSin[0];
var endX3 = radius3 * radCos[2];
var endY3 = radius3 * radSin[2];
var midX4 = radius3 * 1.2 * radCos[3];
var midY4 = radius3 * 1.2 * radSin[3];
var endX4 = radius3 * radCos[4];
var endY4 = radius3 * radSin[4];
var midX5 = radius3 * 1.2 * radCos[7];
var midY5 = radius3 * 1.2 * radSin[7];
var endX5 = radius3 * radCos[8];
var endY5 = radius3 * radSin[8];

// next circle
var radius2 = 250;
// inward pointing shapes
var startInX = radius2 * radCos[2];
var startInY = radius2 * radSin[2];
var midInX1 = radius2 * 1.2 * radCos[2];
var midInY1 = radius2 * 1.2 * radSin[2];
var midInX2 = radius2 * 1.2 * radCos[6];
var midInY2 = radius2 * 1.2 * radSin[6];
var cp1x = radius2 / 1.1 * radCos[2];
var cp1y = radius2 / 1.1 * radSin[2];
var cp2x = radius2 / 1.1 * radCos[4];
var cp2y = radius2 / 1.1 * radSin[4];
var midcpx = radius2 / 1.4 * radCos[4];
var midcpy = radius2 / 1.4 * radSin[4];
var cp3x = radius2 / 1.1 * radCos[4];
var cp3y = radius2 / 1.1 * radSin[4];
var cp4x = radius2 / 1.1 * radCos[6];
var cp4y = radius2 / 1.1 * radSin[6];
var endInX = radius2 * radCos[6];
var endInY = radius2 * radSin[6];
// next circle
var radius = 100;
var endX = radius * Math.cos(Math.PI / 4);
var midX = radius * 3 * Math.cos(Math.PI / 8);
var endY = radius * Math.sin(Math.PI / 4);
var midY = radius * 3 * Math.sin(Math.PI / 8);

function draw() {

    ctx.fillStyle = radgrad;
    ctx.fillRect(0, 0, 1000, 1000);

    var circle3 = new Path2D();
    circle3.arc(centerX, centerY, radius3, 0, 2 * Math.PI);
    ctx.fill(circle3);
    ctx.stroke(circle3);

    ctx.translate(centerX, centerY);
    ctx.save();
    for (var i = 0; i <= 7; i++) {
        var circle4 = new Path2D();
        var circle5 = new Path2D();
        var circle6 = new Path2D();
        circle4.arc(radius3, 0, 10, 0, 2 * Math.PI);
        circle5.arc((radius3 * radCos[2]), (radius3 * radSin[2]), 10, 0, 2 * Math.PI);
        circle6.arc((radius3 * radCos[6]), (radius3 * radSin[6]), 10, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill(circle4);
        ctx.fill(circle5);
        ctx.fill(circle6);
        ctx.moveTo(startInX, startInY);
        ctx.bezierCurveTo(midInX1, midInY1, midInX2, midInY2, endInX, endInY);
        ctx.moveTo(startInX, startInY);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, midcpx, midcpy);
        ctx.bezierCurveTo(cp3x, cp3y, cp4x, cp4y, endInX, endInY);
        ctx.stroke();
        ctx.moveTo(p1x, p1y);
        ctx.bezierCurveTo(p1xcp1, p1ycp1, p1xcp2, p1ycp2, p1x, p1y);
        ctx.bezierCurveTo(p1xcp3, p1ycp3, p1xcp4, p1ycp4, p1x, p1y);
        ctx.stroke();
        ctx.moveTo(p2x, p2y);
        ctx.bezierCurveTo(p2xcp1, p2ycp1, p2xcp2, p2ycp2, p2x, p2y);
        ctx.bezierCurveTo(p2xcp3, p2ycp3, p2xcp4, p2ycp4, p2x, p2y);
        ctx.stroke();
        ctx.moveTo(p3x, p3y);
        ctx.bezierCurveTo(p3xcp1, p3ycp1, p3xcp2, p3ycp2, p3x, p3y);
        ctx.bezierCurveTo(p3xcp3, p3ycp3, p3xcp4, p3ycp4, p3x, p3y);
        ctx.stroke();

        var circle2 = new Path2D();
        circle2.arc((radius2 / 1.2 * radCos[8]), 0, 30, 0, 2 * Math.PI);
        ctx.stroke(circle2);
        var circle7 = new Path2D();
        circle7.arc((radius2 / 1.2 * radCos[8]), 0, 5, 0, 2 * Math.PI);
        ctx.stroke(circle7);
        ctx.fillStyle = "black";
        ctx.fill(circle7);
        ctx.rotate(Math.PI / 4);
    }
    ctx.restore();
    ctx.translate(-centerX, -centerY);
    var circle8 = new Path2D();
    circle8.arc(centerX, centerY, radius4, 0, 2 * Math.PI);
    ctx.stroke(circle8);
    var circle1 = new Path2D();
    circle1.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke(circle1);
    var circle = new Path2D();
    circle.arc(centerX, centerY, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill(circle);
    ctx.stroke(circle);
}
ctx.scale(0.4, 0.4);
draw();