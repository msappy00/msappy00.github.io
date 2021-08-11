var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");
var canvasWidth;
var orientation;
var w, h;
var x, y;
var currentScore = 0;

$("#StartButton").click(function () {
    $("#SplashScreen").hide();
    $("#myCanvas").show();
    init();
});

function init() {

    canvas = document.getElementById('myCanvas');
    context = canvas.getContext("2d");

    if (orientation == 0) {
        canvasWidth = Math.min(600,  window.innerWidth);

    } else {
        canvasWidth = Math.min(600, window.innerHeight);
    }
    canvas.width = canvasWidth;
    canvas.height = canvasWidth;

    var game = new GF();
    game.start();
};

var GF = function () {
    // Vars relative to the canvas
    var canvas, context;
    var letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var targetArray = [];
    var targetLetter;
    var currentScore = 0;
    var currentColor = "green";

    // game states
    var gameStates = {
        gameRunning: 1,
        gameOver: 0
    }

    var currentGameState = gameStates.gameRunning;

    // shuffles up the letters
    function shuffleLetterArray(letterArray) {
        if (currentGameState == gameStates.gameRunning) {
            for (var i = letterArray.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = letterArray[i];
                letterArray[i] = letterArray[j];
                letterArray[j] = temp;
            }
            targetLetter = letterArray[Math.floor((Math.random() * 7))];
            document.getElementById("letterAudio").src = 'alphabet/audio/' + targetLetter + '.mp3';
            letterAudio.play();
            return letterArray;
        }
    }
    shuffleLetterArray(letterArray);

    // Canvas, context etc.
    canvas = document.querySelector("#myCanvas");

    // often useful
    w = canvasWidth;
    h = canvasWidth;

    // The monster !
    var monster = {
        x: w / 2 - 40,
        y: h / 2 - 40,
        boundingCircleRadius: 40,
        isDraggable: false
    }

    // clears the canvas content
    function clearCanvas() {
        context.clearRect(0, 0, w, h);
    }

    // Functions for drawing the monster and maybe other objects
    function drawMyMonster(x, y) {

        // save the context
        context.save();

        // translate the coordinate system, draw relative to it
        context.translate(x, y);

        // (0, 0) is the top left corner of the monster.

        // head
        context.fillStyle = 'yellow';
        context.beginPath();
        context.arc(40, 40, monster.boundingCircleRadius, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // eyes
        context.beginPath();
        context.fillStyle = 'black';
        context.arc(25, 35, 3, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
        context.beginPath();
        context.arc(55, 35, 3, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        // mouth
        context.beginPath();
        context.arc(40, 40, 25, (Math.PI/4), (3*Math.PI/4));
        context.stroke();

        // restore the context
        context.restore();
    }

    // function for adding text and targets
    function drawLetters() {
        context.save();
        context.fillStyle = currentColor;
        context.fillRect(0, 0, w, h);

        // creates targets
        function target(x, y) {
            this.x = x;
            this.y = y;
            this.boundingCircleRadius = 30;
            context.beginPath();
            context.fillStyle = 'white';
            context.arc(this.x, this.y, this.boundingCircleRadius, 0, 2 * Math.PI);
            context.fill();
            context.stroke();
        }

        targetArray[0] = new target(canvasWidth / 2 - (150 * Math.sin(3 * Math.PI / 4)), canvasWidth / 2 + (150 * Math.cos(3 * Math.PI / 4)));
        targetArray[1] = new target(canvasWidth / 2, canvasWidth / 2 - 150);
        targetArray[2] = new target(canvasWidth / 2 + (150 * Math.sin(Math.PI / 4)), canvasWidth / 2 - (150 * Math.cos(Math.PI / 4)));
        targetArray[3] = new target(canvasWidth / 2 + 150, canvasWidth / 2);
        targetArray[4] = new target(canvasWidth / 2 - (150 * Math.sin(7 * Math.PI / 4)), canvasWidth / 2 + (150 * Math.cos(7 * Math.PI / 4)));
        targetArray[5] = new target(canvasWidth / 2, canvasWidth / 2 + 150);
        targetArray[6] = new target(canvasWidth / 2 + (150 * Math.sin(5 * Math.PI / 4)), canvasWidth / 2 - (150 * Math.cos(5 * Math.PI / 4)));
        targetArray[7] = new target(canvasWidth / 2 - 150, canvasWidth / 2);

        context.font = "50px Arial";
        context.fillStyle = 'black';
        context.textAlign = 'center';
        context.fillText(letterArray[0], canvasWidth / 2 - (150 * Math.sin(3 * Math.PI / 4)), canvasWidth / 2 + (150 * Math.cos(3 * Math.PI / 4) + 17.5));
        context.fillText(letterArray[1], canvasWidth / 2, canvasWidth / 2 - 132.5);
        context.fillText(letterArray[2], canvasWidth / 2 + (150 * Math.sin(Math.PI / 4)), canvasWidth / 2 - (150 * Math.cos(Math.PI / 4) - 17.5));
        context.fillText(letterArray[3], canvasWidth / 2 + 150, canvasWidth / 2 + 17.5);
        context.fillText(letterArray[4], canvasWidth / 2 - (150 * Math.sin(7 * Math.PI / 4)), canvasWidth / 2 + (150 * Math.cos(7 * Math.PI / 4) + 17.5));
        context.fillText(letterArray[5], canvasWidth / 2, canvasWidth / 2 + 167.5);
        context.fillText(letterArray[6], canvasWidth / 2 + (150 * Math.sin(5 * Math.PI / 4)), canvasWidth / 2 - (150 * Math.cos(5 * Math.PI / 4) -17.5));
        context.fillText(letterArray[7], canvasWidth / 2 - 150, canvasWidth / 2 + 17.5);

        context.restore();
    }

    var mainLoop = function () {

        // Clear the canvas
        clearCanvas();

        if (currentScore >= 10 || currentScore <= -3) {
            currentGameState = gameStates.gameOver;
        }

        switch (currentGameState) {

            case gameStates.gameRunning:
                // Check for collisions
                for (var i = 0; i < targetArray.length; i++) {
                    var target = targetArray[i];

                    if (circleCollide(monster.x + 40, monster.y + 40, monster.boundingCircleRadius, target.x, target.y, target.boundingCircleRadius)) {
                        if (letterArray[i] === targetLetter) {
                            currentColor = 'green';
                            pop.play();
                            currentScore += 1;
                        } else {
                            currentColor = 'red';
                            setTimeout(function () { currentColor = 'green'; }, 1000);
                            buzzer.play();
                            currentScore -= 1;
                        }
                        monster.x = w / 2 - 40;
                        monster.y = h / 2 - 40;
                        if (currentScore < 10 && currentScore > -3) {
                            shuffleLetterArray(letterArray);
                        }
                    }
                }

                // draw text
                drawLetters();

                // draw the monster
                drawMyMonster(monster.x, monster.y);

                // display Score
                displayScore();

                // call the animation loop every 1/60th of second
                requestAnimationFrame(mainLoop);
                break;

            case gameStates.gameOver:
                context.fillStyle = 'white';
                context.fillRect(0, 0, w, h);
                context.fillStyle = 'black';
                context.fillText("Score: " + currentScore, canvasWidth * 0.75, 25);
                context.textAlign = 'center';
                context.fontWeight = 'bold';
                context.fillText("GAME OVER", w / 2, h / 2);

                cancelAnimationFrame(mainLoop);
        }
    }

    function displayScore() {
        context.save();
        context.fillStyle = 'white';
        context.fillText("Score: " + currentScore, canvasWidth * 0.75, 25);
        context.restore();
    }

    function circleCollide(x1, y1, r1, x2, y2, r2) {
        var dx = x1 - x2;
        var dy = y1 - y2;
        return ((dx * dx + dy * dy) < (r1 + r2) * (r1 + r2));
    }

    var start = function () {
        context = canvas.getContext('2d');
        context.font = '20px Arial';

        function getTouchPos(evt) {
            var touchobj = evt.changedTouches[0]
            if (touchobj.target.id = 'myCanvas') {
                return {
                    x: touchobj.pageX - canvas.offsetLeft,
                    y: touchobj.pageY - canvas.offsetTop
                };
            }
        }

        function touchingImage(x0, y0, x1, y1, r) {
            if (Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0)) < r) {
                return true
            }
        }

        // Set up touch events for mobile, etc
        canvas.addEventListener("touchstart", function (e) {
            e.preventDefault();
            touchPos = getTouchPos(e);
            monster.isDraggable = true;
            currentGameState = gameStates.gameRunning;
            var mouseEvent = new MouseEvent("mousedown", {
                
            });
            canvas.dispatchEvent(mouseEvent);
        }, { passive: false });


        canvas.addEventListener("touchmove", function (e) {
            e.preventDefault();
            touchPos = getTouchPos(e);
            let x = monster.x + 40;
            let y = monster.y + 40;
            if (touchingImage(touchPos.x, touchPos.y, x, y, monster.boundingCircleRadius)
                && monster.isDraggable) {
                monster.x = touchPos.x - 40;
                monster.y = touchPos.y - 40;
                context.clearRect(0, 0, canvasWidth, canvasWidth);
                drawMyMonster(monster.x, monster.y);
                var mouseEvent = new MouseEvent("mousemove", {

                });
                canvas.dispatchEvent(mouseEvent);
            }
        }, { passive: false });

        canvas.addEventListener("touchend", function (e) {
            e.preventDefault();
            monster.isDraggable = false;
            var mouseEvent = new MouseEvent("mouseup", {

            });
            canvas.dispatchEvent(mouseEvent);
        }, { passive: false });

        // start the animation
        requestAnimationFrame(mainLoop);
    }

    //our GameFramework returns a public API visible from outside its scope
    return {
        start: start
    }
}

screen.orientation.onchange = function () {
    // logs 'portrait' or 'landscape'
    console.log(screen.orientation.type.match(/\w+/)[0] + ': ' + canvasWidth);
};
