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



function draw() {

    ctx.fillStyle = radgrad;
    ctx.fillRect(0, 0, 1000, 1000);

    var img1 = new Image();
    img1.src = 'images/mandala.png';
    img1.onload = function () {
        ctx.drawImage(img1, 0, 0);
    };

}
ctx.scale(0.4, 0.4);
draw();