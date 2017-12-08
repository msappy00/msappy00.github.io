/* displays a image blocked by squares and allows the user to unblock the image */

var vocArray = [""];
var blockArray = [[0, 0, 200, 150], [200, 0, 400, 150], [400, 0, 600, 150], [600, 0, 800, 150], [800, 0, 1000, 150],
                  [0, 150, 200, 300], [200, 150, 400, 300], [400, 150, 600, 300], [600, 150, 800, 300], [800, 150, 1000, 300],
                  [0, 300, 200, 450], [200, 300, 400, 450], [400, 300, 600, 450], [600, 300, 800, 450], [800, 300, 1000, 450],
                  [0, 450, 200, 600], [200, 450, 400, 600], [400, 450, 600, 600], [600, 450, 800, 600], [800, 450, 1000, 600],
                  [0, 600, 200, 750], [200, 600, 400, 750], [400, 600, 600, 750], [600, 600, 800, 750], [800, 600, 1000, 750]];

var points,
image,
blockCount

function clearArray(){
    vocArray = [""];
    return vocArray;
}

// preps the canvas and displays original image with variable resolution
function init() {
    canvas = document.getElementById('cv');
    ctx = canvas.getContext('2d');
    shuffleArray(blockArray);
}

function setVoc(vocSet){
    points = 5;
    blockCount = 25;
    switch(vocSet) {
        case "AnimalsB3U1":
            vocArray = ["bird", "kitten", "puppy", "bunny", "turtle", "spider", "frog", "fish"];
            document.getElementById("vocSet").innerHTML = "Animals";
            break;
        default:
            vocArray = [""];
            break;
    }
    shuffleArray(blockArray);
    unBlock();
}

function unBlock(){
    document.getElementById("points").innerHTML = "Points: " + points;
    var img = new Image();
    img.src = "mes-flashcards/" + vocArray[array_i] + ".png";
    img.onload = function(){
        ctx.drawImage(img, 0, 0, 1000, 750);
        // block the image
        for(i = 0; i < blockCount; i++){
            ctx.save();
            ctx.beginPath();
            ctx.rect(blockArray[i][0], blockArray[i][1], blockArray[i][2], blockArray[i][3]);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.restore();
        }
        if (points > 0){
            points -= 1;
            blockCount -= 5;
        } else {
            points = 0;
            blockCount = 0;
        }
    }
}
