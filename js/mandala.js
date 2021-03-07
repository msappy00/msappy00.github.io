var ctx = document.getElementById('mycanvas').getContext('2d');
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
var lingrad = ctx.createLinearGradient(0, 0, 400, 0);
lingrad.addColorStop(0, color_01);
lingrad.addColorStop(0.3, color_02);
lingrad.addColorStop(0.7, color_02);
lingrad.addColorStop(1, color_03);

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

function draw() {
 
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
draw();