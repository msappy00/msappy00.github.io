/* displays a blurry image and allows the user to increase the resolution of the image */

var vocArray = [""];

// sets the variables 'w * h are original, p * q are affected by user
var w = 1000,
h = 750,
p = 5,
q = 5,
points = 6;


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
    
    // sets the variables 'w * h are original, p * q are affected by user
    var w = 1000,
    h = 750,
    p = 5,
    q = 5,
    points = 6;
    
    document.getElementById("vocSet").innerHTML = vocSet;
    
    if (vocSet == "Clothes") {
        vocArray = ["socks", "shoes", "boots", "pants", "jeans", "shorts", "gloves", "earrings", "glasses"];
    } else {
        vocArray = [""];
    }
    shuffleArray(vocArray);
    drawToCv();
}

function drawToCv(){
    var image = new Image();
    image.src = "mes-flashcards/" + vocArray[array_i] + ".png";
    
    if(points == 6){
        points -= 1;
        p = 5;
        q = 5;
    } else if(points > 1 && points < 6){
        points -= 1;
        p += 10;
        q += 10;
    } else {
        points = 0;
        p = 1000;
        q = 750;
    }
    ctx.save();
    cv = $("#cv").get(0);
    cv.width = p;
    cv.height = q;
    cv.style.width = w + "px";
    cv.style.height = h + "px";
    ctx.drawImage(image, 0, 0, p, q);
    document.getElementById("points").innerHTML = "Points: " + points;
    ctx.restore();
}