/* generate a random number
 then draws a dice
 */

var canvas, ctx;
var number1 = Math.floor((Math.random() * 6) + 1);
var number2 = Math.floor((Math.random() * 6) + 1);
var sum;
var temp_points;
var firstThrow = true;

// preps the canvas
function init() {
    canvas = document.getElementById('craps_canvas');
    ctx = canvas.getContext('2d');
}

// draws the first dice
function drawDice1() {
    number1 = Math.floor((Math.random() * 6) + 1);
    number2 = Math.floor((Math.random() * 6) + 1);
    sum = number1 + number2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(Math.random() * 2 * Math.PI);
    ctx.translate(-100, -100);
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, 200, 200);
    switch(number1) {
        case 1:
            ctx.beginPath();
            ctx.fillStyle="red";
            ctx.arc(100, 100, 25, 0, 2*Math.PI, false);
            ctx.fill();
            break;
        case 2:
            ctx.beginPath();
            ctx.fillStyle="red";
            ctx.arc(60, 60, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(140, 140, 20, 0, 2*Math.PI, false);
            ctx.fill();
            break;
        case 3:
            ctx.beginPath();
            ctx.fillStyle="red";
            ctx.arc(50, 50, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(100, 100, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(150, 150, 20, 0, 2*Math.PI, false);
            ctx.fill();
            break;
        case 4:
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(60, 60, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(60, 140, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(140, 140, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(140, 60, 20, 0, 2*Math.PI, false);
            ctx.fill();
            break;
        case 5:
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(100, 100, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(50, 50, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(50, 150, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(150, 150, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(150, 50, 20, 0, 2*Math.PI, false);
            ctx.fill();
            break;
        case 6:
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(55, 100, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(145, 100, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(55, 40, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(55, 160, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(145, 160, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(145, 40, 20, 0, 2*Math.PI, false);
            ctx.fill();
            break;
    }
    ctx.restore();
    drawDice2(number2);
    dice_roll.play();
    if (firstThrow) {
        switch(sum) {
            case 2:
            case 3:
            case 12:
                document.getElementById("points").innerHTML = "Points: " + sum;
                document.getElementById("outcome").innerHTML = "You Lose";
                document.getElementById("diceButton").innerHTML = "Play Again";
                firstThrow = true;
                break;
            case 7:
            case 11:
                document.getElementById("points").innerHTML = "Points: " + sum;
                document.getElementById("outcome").innerHTML = "You Win!";
                document.getElementById("diceButton").innerHTML = "Play Again";
                firstThrow = true;
                break;
            default:
                temp_points = sum;
                document.getElementById("points").innerHTML = "Points: " + temp_points;
                document.getElementById("outcome").innerHTML = " ";
                document.getElementById("diceButton").innerHTML = "Roll Again";
                break;
        }
        firstThrow = false;
    } else {
        switch(sum) {
            case 7:
                document.getElementById("points").innerHTML = "Points: ";
                document.getElementById("outcome").innerHTML = "You Lose";
                document.getElementById("diceButton").innerHTML = "Play Again";
                firstThrow = true;
                break;
            case temp_points:
                document.getElementById("points").innerHTML = "Points: " + temp_points;
                document.getElementById("outcome").innerHTML = "You Win!";
                document.getElementById("diceButton").innerHTML = "Play Again";
                firstThrow = true;
                break;
            default:
                temp_points = sum;
                document.getElementById("points").innerHTML = "Points: " + temp_points;
                document.getElementById("outcome").innerHTML = " ";
                document.getElementById("diceButton").innerHTML = "Roll Again";
                break;
        }
    }
}
// draws the second dice
function drawDice2(number) {
    ctx.save();
    ctx.translate(600, 200);
    ctx.rotate(Math.random() * 2 * Math.PI);
    ctx.translate(-100, -100);
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, 200, 200);
    switch(number) {
        case 1:
            ctx.beginPath();
            ctx.fillStyle="red";
            ctx.arc(100, 100, 25, 0, 2*Math.PI, false);
            ctx.fill();
            break;
        case 2:
            ctx.beginPath();
            ctx.fillStyle="red";
            ctx.arc(60, 60, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(140, 140, 20, 0, 2*Math.PI, false);
            ctx.fill();
            break;
        case 3:
            ctx.beginPath();
            ctx.fillStyle="red";
            ctx.arc(50, 50, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(100, 100, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(150, 150, 20, 0, 2*Math.PI, false);
            ctx.fill();
            break;
        case 4:
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(60, 60, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(60, 140, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(140, 140, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(140, 60, 20, 0, 2*Math.PI, false);
            ctx.fill();
            break;
        case 5:
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(100, 100, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(50, 50, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(50, 150, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(150, 150, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(150, 50, 20, 0, 2*Math.PI, false);
            ctx.fill();
            break;
        case 6:
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(55, 100, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(145, 100, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(55, 40, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(55, 160, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(145, 160, 20, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(145, 40, 20, 0, 2*Math.PI, false);
            ctx.fill();
            break;
    }
    ctx.restore();
    dice_roll.play();
}
