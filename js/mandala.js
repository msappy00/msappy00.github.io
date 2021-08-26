var ctx = document.getElementById('ctx').getContext('2d');
//ctx.fillStyle = "white";
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

function draw() {
    ctx.fillStyle = radgrad;
    ctx.fillRect(0, 0, 1000, 1000);

    var img1 = new Image();
    img1.src = 'images/mandala_september.png';
    img1.onload = function () {
        ctx.drawImage(img1, 0, 0);
    };
}

ctx.scale(0.4, 0.4);
draw();