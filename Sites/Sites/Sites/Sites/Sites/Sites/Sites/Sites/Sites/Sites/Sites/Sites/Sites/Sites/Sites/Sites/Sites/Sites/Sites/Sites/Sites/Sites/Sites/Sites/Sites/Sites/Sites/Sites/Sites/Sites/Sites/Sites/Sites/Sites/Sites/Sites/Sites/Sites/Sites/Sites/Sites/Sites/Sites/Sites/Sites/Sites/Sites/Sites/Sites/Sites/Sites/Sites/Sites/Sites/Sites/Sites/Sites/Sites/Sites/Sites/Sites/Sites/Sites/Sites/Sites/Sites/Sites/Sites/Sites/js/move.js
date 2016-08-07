// Inits
window.onload = function init() {
    var letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var game = new GF();
    
    // shuffles up the letters
    function shuffleLetterArray(letterArray) {
        for (var i = letterArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = letterArray[i];
            letterArray[i] = letterArray[j];
            letterArray[j] = temp;
        }
        return letterArray;
    }
    
    shuffleLetterArray(letterArray);
    game.start();
};


// GAME FRAMEWORK STARTS HERE
var GF = function(){
    // Vars relative to the canvas
    var canvas, ctx;
    var w, h;
    var x, y;
    var speed = 1;
    var letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var targetArray = [];
    var targetLetter;
    var currentScore = 0;
    var currentColor = "green";
    
    // game states
    var gameStates = {
    gameRunning: 0,
    gameOver: 1
    };
    
    var currentGameState = gameStates.gameRunning;
 
    // shuffles up the letters
    function shuffleLetterArray(letterArray) {
        if(currentGameState == gameStates.gameRunning) {
            for (var i = letterArray.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = letterArray[i];
                letterArray[i] = letterArray[j];
                letterArray[j] = temp;
            }
            targetLetter = letterArray[Math.floor((Math.random() * 7))];
            document.getElementById("letterAudio").innerHTML = '<audio controls autoplay><source src="alphabet/audio/'+targetLetter+'.mp3" type="audio/mp3" /></audio>';
            return letterArray;
        }
    };
    
    shuffleLetterArray(letterArray);
    
    
    // vars for handling inputs
    var inputStates = {};
    
    // Canvas, context etc.
    canvas = document.querySelector("#myCanvas");
    
    // often useful
    w = canvas.width;
    h = canvas.height;
    
    // The monster !
    var monster = {
        x:w/2 - 50,
        y:h/2 - 50,
        boundingCircleRadius: 75
    };
    
    // clears the canvas content
    function clearCanvas() {
        ctx.clearRect(0, 0, w, h);
    }
    
    // Functions for drawing the monster and maybe other objects
    function drawMyMonster(x, y) {

        // save the context
        ctx.save();
        
        // translate the coordinate system, draw relative to it
        ctx.translate(x, y);
        
        // (0, 0) is the top left corner of the monster.

        // head
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(50, 50, monster.boundingCircleRadius, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        
        // eyes
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.arc(25, 25, 10, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(75, 25, 10, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        
        // mouth
        ctx.beginPath();
        ctx.arc(50, 60, 40, 0, Math.PI);
        ctx.stroke();
        
        // restore the context
        ctx.restore();
    }
    
    // function for adding text and targets
    function drawLetters() {
        ctx.save();
        ctx.fillStyle = currentColor;
        ctx.fillRect(0, 0, w, h);
        
        // creates targets
        function target(x,y) {
            this.x = x;
            this.y = y;
            this.boundingCircleRadius = 60;
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(this.x, this.y, this.boundingCircleRadius, 0, 2*Math.PI);
            ctx.fill();
            ctx.stroke();
        };
        
        targetArray[0] = new target(220, 140);
        targetArray[1] = new target(400, 90);
        targetArray[2] = new target(580, 140);
        targetArray[3] = new target(150, 300);
        targetArray[4] = new target(650, 300);
        targetArray[5] = new target(220, 460);
        targetArray[6] = new target(400, 510);
        targetArray[7] = new target(580, 460);
        
        ctx.font = "100px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText(letterArray[0], 220, 175);
        ctx.fillText(letterArray[1], 400, 125);
        ctx.fillText(letterArray[2], 580, 175);
        ctx.fillText(letterArray[3], 150, 335);
        ctx.fillText(letterArray[4], 650, 335);
        ctx.fillText(letterArray[5], 220, 495);
        ctx.fillText(letterArray[6], 400, 545);
        ctx.fillText(letterArray[7], 580, 495);
        
        ctx.restore();
    };
    
    var mainLoop = function(){
        
        // Clear the canvas
        clearCanvas();
        
        if (currentScore >= 10 || currentScore <= -3) {
            currentGameState = gameStates.gameOver;
        }
        
        switch (currentGameState) {
            case gameStates.gameRunning:
        
            // Check for collisions
            for(var i=0; i < targetArray.length; i++) {
                var target = targetArray[i];
                
                if(circleCollide(monster.x+50, monster.y+50, monster.boundingCircleRadius, target.x, target.y, target.boundingCircleRadius)) {
                    if (letterArray[i] === targetLetter){
                        currentColor = "green";
                        pop.play();
                        currentScore += 1;
                    } else {
                        currentColor = "red";
                        setTimeout(function() {currentColor = "green";}, 1000);
                        buzzer.play();
                        currentScore -= 1;
                    }
                    monster.x = w/2 - 50;
                    monster.y = h/2 - 60;
                    if (currentScore < 10 && currentScore > -3) {
                        shuffleLetterArray(letterArray);}
                }
            };
            
            // draw text
            drawLetters();
            
            // draw the monster
            drawMyMonster(monster.x, monster.y);
            
            // Check inputs and move the monster
            updateMonsterPosition();
            
            // display Score
            displayScore();
            
            // call the animation loop every 1/60th of second
            requestAnimationFrame(mainLoop);
            break;
                
            case gameStates.gameOver:
                ctx.fillStyle = "black";
                ctx.fillText("Score: " + currentScore, 690, 25);
                ctx.textAlign = "center";
                ctx.fontWeight = "bold";
                ctx.fillText("GAME OVER", w/2, h/2);
                
                if (inputStates.space) {
                    start();
                }
                break;
            }
    };
    
    function displayScore() {
        ctx.save();
        ctx.fillStyle = "white";
        ctx.fillText("Score: " + currentScore, 690, 25);
        ctx.restore();
    }
    
    function circleCollide(x1, y1, r1, x2, y2, r2) {
        var dx = x1 - x2;
        var dy = y1 - y2;
        return ((dx * dx + dy * dy) < (r1 + r2)*(r1+r2));  
    }
    
    function updateMonsterPosition() {
        // check inputStates
        if (inputStates.left) {
            monster.x -= speed;
        }
        if (inputStates.up) {
            monster.y -= speed;
        }
        if (inputStates.right) {
            monster.x += speed;
        }
        if (inputStates.down) {
            monster.y += speed;
        }
        if (inputStates.space) {
            speed = 5;
        } else {
            // mouse up
            speed = 1;
        }
        // check collision on left or right
        if(monster.x <= 0) {
            monster.x += 5;
        }
        if(monster.x >= w-100) {
            monster.x -= 5;
        }
        // check collision on top or bottom
        if(monster.y <= 0) {
            monster.y += 5;
        }
        if(monster.y >= h-100) {
            monster.y -= 5;
        }

        
    }
    
    var start = function(){
        
        // important, we will draw with this object
        ctx = canvas.getContext('2d');
        // default police for text
        ctx.font="20px Arial";
        
        //add the listener to the main, window object, and update the states
        window.addEventListener('keydown', function(event){
                                if (event.keyCode === 37) {
                                inputStates.left = true;
                                } else if (event.keyCode === 38) {
                                inputStates.up = true;
                                } else if (event.keyCode === 39) {
                                inputStates.right = true;
                                } else if (event.keyCode === 40) {
                                inputStates.down = true;
                                }  else if (event.keyCode === 32) {
                                inputStates.space = true;
                                }
                                }, false);
        
        //if the key will be released, change the states object
        window.addEventListener('keyup', function(event){
                                if (event.keyCode === 37) {
                                inputStates.left = false;
                                } else if (event.keyCode === 38) {
                                inputStates.up = false;
                                } else if (event.keyCode === 39) {
                                inputStates.right = false;
                                } else if (event.keyCode === 40) {
                                inputStates.down = false;
                                } else if (event.keyCode === 32) {
                                inputStates.space = false;
                                }
                                }, false);
        
        // start the animation
        requestAnimationFrame(mainLoop);
    };
    
    //our GameFramework returns a public API visible from outside its scope
    return {
    start: start
    };
};