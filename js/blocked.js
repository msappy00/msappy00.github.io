/* displays a image blocked by squares and allows the user to unblock the image */

var vocArray = [""];
var blockArray = [[0, 0, 200, 150], [200, 0, 400, 150], [400, 0, 600, 150], [600, 0, 800, 150], [800, 0, 1000, 150],
                  [0, 150, 200, 300], [200, 150, 400, 300], [400, 150, 600, 300], [600, 150, 800, 300], [800, 150, 1000, 300],
                  [0, 300, 200, 450], [200, 300, 400, 450], [400, 300, 600, 450], [600, 300, 800, 450], [800, 300, 1000, 450],
                  [0, 450, 200, 600], [200, 450, 400, 600], [400, 450, 600, 600], [600, 450, 800, 600], [800, 450, 1000, 600],
                  [0, 600, 200, 750], [200, 600, 400, 750], [400, 600, 600, 750], [600, 600, 800, 750], [800, 600, 1000, 750]];

var  ctx, image, points, blockCount

function clearArray(){
    vocArray = [""];
    return vocArray;
}

// preps the canvas and displays original image with variable resolution
function init() {
    points = 6;
    blockCount = 26;
    ctx = document.getElementById("cv").getContext("2d");
}

function setVoc(vocSet){
    switch(vocSet) {
        case "AnimalsB3U1":
            vocArray = ["bird", "kitten", "puppy", "bunny", "turtle", "spider", "frog", "fish"];
            document.getElementById("vocSet").innerHTML = "Animals";
            break;
        case "PlacesB6U5":
            vocArray = ["farm", "airport", "port", "concert", "beach", "playground", "mountain", "amusement park"];
            document.getElementById("vocSet").innerHTML = "Places";
            break;
        default:
            vocArray = [""];
            break;
    }
    shuffleArray(vocArray);
    shuffleArray(blockArray);
    document.getElementById("points").innerHTML = "Points: " + points;
    unBlock();
}

function unBlock(){
    var image = new Image();
    image.src = 'mes-flashcards/' + vocArray[array_i] + '.png';
    blockCount = blockCount - 5;
    image.onload = function() {
        ctx.drawImage(image, 0, 0);
        ctx.beginPath();
        for (i=0; i<blockCount; i++){
            ctx.rect(blockArray[i][0], blockArray[i][1], blockArray[i][2], blockArray[i][3]);
        }
        ctx.fill();
    }
    if (points > 0){
        points -= 1;
    }
    document.getElementById("points").innerHTML = "Points: " + points;

}
