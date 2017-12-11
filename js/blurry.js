/* displays a blurry image and allows the user to increase the resolution of the image */

var vocArray = [""];

// sets the variables 'w * h are original, p * q are affected by user
var w = 800,
h = 600,
p,
q,
points,
image

function clearArray(){
    vocArray = [""];
    return vocArray;
}

// preps the canvas and displays original image with variable resolution
function init() {
    canvas = document.getElementById('cv');
    ctx = canvas.getContext('2d');
}

function setVoc(vocSet){
    
    points = 6,
    p = 10,
    q = 10
    
    switch(vocSet) {
        case "AnimalsB2U9":
            vocArray = ["tiger", "lion", "monkey", "bear", "zebra", "goat", "elephant", "hippo", "snake", "parrot"];
            document.getElementById("vocSet").innerHTML = "Animals";
            break;
        case "ClothesB5U8":
            vocArray = ["socks", "shoes", "boots", "pants", "jeans", "shorts", "gloves", "earrings", "glasses"];
            document.getElementById("vocSet").innerHTML = "Clothes";
            break;
        case "SportsB3U7":
            vocArray = ["soccer", "baseball", "football", "golf", "basketball", "volleyball", "badminton", "ping-pong", "tennis"];
            document.getElementById("vocSet").innerHTML = "Sports";
            break;
        default:
            vocArray = [""];
            break;
    }
    shuffleArray(vocArray);
    drawToCv();
}

function drawToCv(){
    if(points == 6){
        points -= 1;
        p = 10;
        q = 10;
    } else if(points > 1 && points < 6){
        points -= 1;
        p += 10;
        q += 10;
    } else {
        points = 0;
        p = 1000;
        q = 750;
    }
    var img = new Image();
    img.onload = function() {
        ctx.save();
        cv = $("#cv").get(0);
        cv.width = p;
        cv.height = q;
        cv.style.width = w + "px";
        cv.style.height = h + "px";
        ctx.drawImage(img, 0, 0, p, q);
        document.getElementById("points").innerHTML = "Points: " + points;
        ctx.restore();
    }
    img.src = "mes-flashcards/" + vocArray[array_i] + ".png";
}
