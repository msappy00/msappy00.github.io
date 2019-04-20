function g_02(userInput){
    sentenceArray = [];
    pronounArray = ([{value: "I", verb: "am", qp: "you", qv: "are"}, {value: "you", verb: "are", qp: "I", qv: "am"}, {value: "they", verb: "are", qp: "they", qv: "are"}, {value: "he", verb: "is", qp: "he", qv: "is"}, {value: "she", verb: "is", qp: "she", qv: "is"}]);
    if (userInput == "Unit 1") {
        vocArray = ["blackboard", "DVD player", "door", "fan", "television", "table", "trash can", "window", "telephone"];
        shuffleArray(vocArray);
        document.getElementById("gPic").innerHTML = '<img src="Level 2/images/no_' + vocArray[0] + '.png" style="width:100%" />';
        if (randomG < 2) {
            sentence = "There is a " + vocArray[1] + ".";
            document.getElementById("grammarCheck").value = "There is a " + vocArray[1] + ".";
            sentenceArray[0] = "There is a " + vocArray[0] + ".";
            sentenceArray[1] = "There is a " + vocArray[1] + ".";
            sentenceArray[2] = "There is not a " + vocArray[2] + ".";
            sentenceArray[3] = "There is not a " + vocArray[3] + ".";
        } else {
            sentence = "There is not a " + vocArray[0] + ".";
            document.getElementById("grammarCheck").value = "There is not a " + vocArray[0] + ".";
            sentenceArray[0] = "There is not a " + vocArray[0] + ".";
            sentenceArray[1] = "There is a " + vocArray[0] + ".";
            sentenceArray[2] = "There is not a " + vocArray[1] + ".";
            sentenceArray[3] = "There is not a " + vocArray[2] + ".";
        }
        shuffleArray(sentenceArray);
        document.getElementById("g0r1d0").textContent = sentenceArray[0];
        document.getElementById("g0r1d2").textContent = sentenceArray[1];
        document.getElementById("g0r2d0").textContent = sentenceArray[2];
        document.getElementById("g0r2d2").textContent = sentenceArray[3];
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 2") {
        numberArray = [({text: 'eleven', num:'11'}), ({text:'twelve', num:'12'}), ({text:'thirteen', num:'13'}), ({text:'fourteen', num:'14'}), ({text:'fifteen', num:'15'}), ({text:'sixteen', num:'16'}), ({text:'seventeen', num:'17'}), ({text:'eighteen', num:'18'}), ({text:'nineteen', num:'19'}), ({text:'twenty', num:'20'})];
        shuffleArray(numberArray);
        vocArray = [({voc:'pencil', article:'a', pic:'<img src = "Level 1/images/pencil.png" />'}), ({voc:'eraser', article:'an', pic:'<img src = "Level 1/images/eraser.png" />'}), ({voc:'ruler', article:'a', pic:'<img src = "Level 1/images/ruler.png" />'}), ({voc:'pen', article:'a', pic:'<img src = "Level 1/images/pen.png" />'}), ({voc:'desk', article:'a', pic:'<img src = "Level 1/images/desk.png" />'}), ({voc:'jacket', pic:'<img src = "Level 1/images/jacket.png" />'}), ({voc:'skirt', pic:'<img src = "Level 1/images/skirt.png" />'}), ({voc:'shirt', pic:'<img src = "Level 1/images/shirt.png" />'}), ({voc:'shirt', pic:'<img src = "Level 1/images/shirt.png" />'}), ({voc:'T-shirt', pic:'<img src = "Level 1/images/T-shirt.png" />'}), ({voc:'dog', pic:'<img src = "Level 1/images/dog.png" />'}), ({voc:'cat', pic:'<img src = "Level 1/images/cat.png" />'}), ({voc:'rat', pic:'<img src = "Level 1/images/rat.png" />'}), ({voc:'rabbit', pic:'<img src = "Level 1/images/rabbit.png" />'})];
        shuffleArray(vocArray);
        document.getElementById("gPic").innerHTML = '<p style="font-size:100px">' + numberArray[0].num + '</p>';
        if (randomG < 2) {
            sentence = "How many " + vocArray[0].voc + "s are there?";
            document.getElementById("grammarCheck").value = "There are " + numberArray[0].text + " " + vocArray[0].voc + "s.";
            sentenceArray[0] = "There are " + numberArray[0].text + " " + vocArray[0].voc + "s.";
            sentenceArray[1] = "There are " + numberArray[1].text + " " + vocArray[0].voc + "s.";
            sentenceArray[2] = "There are " + numberArray[2].text + " " + vocArray[0].voc + "s.";
            sentenceArray[3] = "There are " + numberArray[3].text + " " + vocArray[0].voc + "s.";
        } else {
            if (randomG < 2) {
                sentence = "Are there " + numberArray[0].text + " " + vocArray[0].voc + "s?";
                document.getElementById("grammarCheck").value = "Yes, there are " + numberArray[0].text + " " + vocArray[0].voc + "s.";
                sentenceArray[0] = "Yes, there are " + numberArray[0].text + " " + vocArray[0].voc + "s.";
                sentenceArray[1] = "Yes, there are " + numberArray[1].text + " " + vocArray[0].voc + "s.";
                sentenceArray[2] = "Yes, there are " + numberArray[2].text + " " + vocArray[0].voc + "s.";
                sentenceArray[3] = "No, there are not " + numberArray[0].text + " " + vocArray[0].voc + "s.";
            } else {
                sentence = "Are there " + numberArray[1].text + " " + vocArray[0].voc + "s?";
                document.getElementById("grammarCheck").value = "No, there are not " + numberArray[1].text + " " + vocArray[0].voc + "s.";
                sentenceArray[0] = "Yes, there are " + numberArray[0].text + " " + vocArray[0].voc + "s.";
                sentenceArray[1] = "Yes, there are " + numberArray[1].text + " " + vocArray[0].voc + "s.";
                sentenceArray[2] = "Yes, there are " + numberArray[2].text + " " + vocArray[0].voc + "s.";
                sentenceArray[3] = "No, there are not " + numberArray[1].text + " " + vocArray[0].voc + "s.";
            }
        }
        shuffleArray(sentenceArray);
        document.getElementById("g0r1d0").textContent = sentenceArray[0];
        document.getElementById("g0r1d2").textContent = sentenceArray[1];
        document.getElementById("g0r2d0").textContent = sentenceArray[2];
        document.getElementById("g0r2d2").textContent = sentenceArray[3];
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 3") {
        vocArray = [({sing:'yo-yo', plur:'yo-yos'}), ({sing:'robot', plur:'robots'}), ({sing:'doll', plur:'dolls'}), ({sing:'teddy bear', plur:'teddy bears'}), ({sing:'ball', plur:'balls'}), ({sing:'block', plur:'blocks'}), ({sing:'video game', plur:'video games'}), ({sing:'board game', plur:'board games'})];
        shuffleArray(vocArray);
        numberArray = [({text: 'one', num:'1'}), ({text:'two', num:'2'}), ({text:'three', num:'3'}), ({text:'four', num:'4'}), ({text:'five', num:'5'}), ({text:'six', num:'6'}), ({text:'seven', num:'7'}), ({text:'eight', num:'8'}), ({text:'nine', num:'9'}), ({text:'ten', num:'10'}), ({text: 'eleven', num:'11'}), ({text:'twelve', num:'12'}), ({text:'thirteen', num:'13'}), ({text:'fourteen', num:'14'}), ({text:'fifteen', num:'15'}), ({text:'sixteen', num:'16'}), ({text:'seventeen', num:'17'}), ({text:'eighteen', num:'18'}), ({text:'nineteen', num:'19'}), ({text:'twenty', num:'20'})];
        shuffleArray(numberArray);
        vocArray = [({voc:'yo-yo', pic:'<img src = "Level 1/images/yo-yo.png" />'}), ({voc:'robot', pic:'<img src = "Level 1/images/robot.png" />'}), ({voc:'doll', pic:'<img src = "Level 1/images/doll.png" />'}), ({voc:'teddy bear', pic:'<img src = "Level 1/images/teddy bear.png" />'}), ({voc:'ball', pic:'<img src = "Level 1/images/ball.png" />'}), ({voc:'block', pic:'<img src = "Level 1/images/blocks.png" />'}), ({voc:'video game', pic:'<img src = "Level 1/images/video games.png" />'}), ({voc:'board game', pic:'<img src = "Level 1/images/board game.png" />'})];
        shuffleArray(vocArray);
        document.getElementById("gPic").innerHTML = '<p style="font-size:100px">' + numberArray[0].num + '</p>';
        sentence = "How many " + vocArray[0].voc + "s are there?";
        if (numberArray[0].text == "one") {
            document.getElementById("grammarCheck").value = "There is one " + vocArray[0].voc + ".";
            sentenceArray[0] = "There is one " +vocArray[0].voc + ".";
        } else {
            document.getElementById("grammarCheck").value = "There are " + numberArray[0].text + " " + vocArray[0].voc + "s.";
            sentenceArray[0] = "There are " + numberArray[0].text + " " + vocArray[0].voc + "s.";
        }
        sentenceArray[1] = "There are " + numberArray[1].text + " " + vocArray[0].voc + "s.";
        sentenceArray[2] = "There are " + numberArray[2].text + " " + vocArray[0].voc + "s.";
        sentenceArray[3] = "There are " + numberArray[3].text + " " + vocArray[0].voc + "s.";
        shuffleArray(sentenceArray);
        document.getElementById("g0r1d0").textContent = sentenceArray[0];
        document.getElementById("g0r1d2").textContent = sentenceArray[1];
        document.getElementById("g0r2d0").textContent = sentenceArray[2];
        document.getElementById("g0r2d2").textContent = sentenceArray[3];
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 1") {
        sentenceArray = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(sentenceArray);
        setGrammar(sentenceArray[0]);
        currentUnit = "Review 1";
        grammarLesson = "";
    } else if (userInput == "Unit 4") {
        vocArray = [({voc:'bananas', pic:'<img src="Level 2/images/bananas.png" />'}), ({voc:'lemons', pic:'<img src="Level 2/images/lemons.png" />'}), ({voc:'wax apples', pic:'<img src="Level 2/images/wax apples.png" />'}), ({voc:'pears', pic:'<img src="Level 2/images/pears.png" />'}), ({voc:'papayas', pic:'<img src="Level 2/images/papayas.png" />'}), ({voc:'watermelons', pic:'<img src="Level 2/images/watermelons.png" />'}), ({voc:'guavas', pic:'<img src="Level 2/images/guavas.png" />'}), ({voc:'grapes', pic:'<img src="Level 2/images/grapes.png" />'})];
        shuffleArray(vocArray);
        document.getElementById("gPic").innerHTML = vocArray[0].pic;
        if (randomG < 2) {
            sentence = "What are these?";
            if (randomG < 2) {
                document.getElementById("grammarCheck").value = "These are " + vocArray[0].voc + ".";
                sentenceArray[0] = "These are " + vocArray[0].voc + ".";
                sentenceArray[1] = "These are " + vocArray[1].voc + ".";
                sentenceArray[2] = "These are " + vocArray[2].voc + ".";
                sentenceArray[3] = "These are " + vocArray[3].voc + ".";
            } else {
                document.getElementById("grammarCheck").value = "These are not " + vocArray[1].voc + ".";
                sentenceArray[0] = "These are not " + vocArray[0].voc + ".";
                sentenceArray[1] = "These are not " + vocArray[1].voc + ".";
                sentenceArray[2] = "These are " + vocArray[2].voc + ".";
                sentenceArray[3] = "These are " + vocArray[3].voc + ".";
            }
        } else {
            sentence = "What are those?";
            if (randomG < 2) {
                document.getElementById("grammarCheck").value = "Those are " + vocArray[0].voc + ".";
                sentenceArray[0] = "Those are " + vocArray[0].voc + ".";
                sentenceArray[1] = "Those are " + vocArray[1].voc + ".";
                sentenceArray[2] = "Those are " + vocArray[2].voc + ".";
                sentenceArray[3] = "Those are " + vocArray[3].voc + ".";
            } else {
                document.getElementById("grammarCheck").value = "Those are not " + vocArray[1].voc + ".";
                sentenceArray[0] = "Those are not " + vocArray[0].voc + ".";
                sentenceArray[1] = "Those are not " + vocArray[1].voc + ".";
                sentenceArray[2] = "Those are " + vocArray[2].voc + ".";
                sentenceArray[3] = "Those are " + vocArray[3].voc + ".";
            }
        }
        shuffleArray(sentenceArray);
        document.getElementById("g0r1d0").textContent = sentenceArray[0];
        document.getElementById("g0r1d2").textContent = sentenceArray[1];
        document.getElementById("g0r2d0").textContent = sentenceArray[2];
        document.getElementById("g0r2d2").textContent = sentenceArray[3];
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 5") {
        vocArray = [({voc:'tomatoes', pic:'<img src="Level 2/images/tomatoes.png" />'}), ({voc:'mangoes', pic:'<img src="Level 2/images/mangoes.png" />'}), ({voc:'strawberries', pic:'<img src="Level 2/images/strawberries.png" />'}), ({voc:'cherries', pic:'<img src="Level 2/images/cherries.png" />'}), ({voc:'peaches', pic:'<img src="Level 2/images/peaches.png" />'}), ({voc:'oranges', pic:'<img src="Level 2/images/oranges.png" />'}), ({voc:'kiwis', pic:'<img src="Level 2/images/kiwis.png" />'}), ({voc:'coconuts', pic:'<img src="Level 2/images/coconuts.png" />'})];
        shuffleArray(vocArray);
        document.getElementById("gPic").innerHTML = vocArray[0].pic;
        x = randomG;
        if (x == 0) {
            sentence = "What are these?";
            document.getElementById("grammarCheck").value = "These are " + vocArray[0].voc + ".";
            sentenceArray[0] = "These are " + vocArray[0].voc + ".";
            sentenceArray[1] = "These are " + vocArray[1].voc + ".";
            sentenceArray[2] = "These are " + vocArray[2].voc + ".";
            sentenceArray[3] = "These are " + vocArray[3].voc + ".";
        } else if (x == 1) {
            sentence = "What are those?";
            document.getElementById("grammarCheck").value = "Those are " + vocArray[0].voc + ".";
            sentenceArray[0] = "Those are " + vocArray[0].voc + ".";
            sentenceArray[1] = "Those are " + vocArray[1].voc + ".";
            sentenceArray[2] = "Those are " + vocArray[2].voc + ".";
            sentenceArray[3] = "Those are " + vocArray[3].voc + ".";
        } else if (x == 2){     
            if (randomG < 2){    
                sentence = "Are these " + vocArray[0].voc + "?";
            } else {
                sentence = "Are those " + vocArray[0].voc + "?";
            }
            document.getElementById("grammarCheck").value = "Yes, they are.";
                sentenceArray[0] = "Yes, they are.";
                sentenceArray[1] = "No, they are not.";
                sentenceArray[2] = " ";
                sentenceArray[3] = " ";
        } else {
            if (randomG < 2){    
                sentence = "Are these " + vocArray[1].voc + "?";
            } else {
                sentence = "Are those " + vocArray[1].voc + "?";
            }
            document.getElementById("grammarCheck").value = "No, they are not.";
                sentenceArray[0] = "No, they are not.";
                sentenceArray[1] = "Yes, they are.";
                sentenceArray[2] = " ";
                sentenceArray[3] = " ";
        }
        shuffleArray(sentenceArray);
        document.getElementById("g0r1d0").textContent = sentenceArray[0];
        document.getElementById("g0r1d2").textContent = sentenceArray[1];
        document.getElementById("g0r2d0").textContent = sentenceArray[2];
        document.getElementById("g0r2d2").textContent = sentenceArray[3];
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 6") {
        verbArray = [({v:'sing', pic:'<img src = "Level 2/images/sing.png" />'}), ({v: 'dance', pic:'<img src = "Level 2/images/dance.png" />'}), ({v:'run', pic:'<img src = "Level 2/images/run.png" />'}), ({v:'swim', pic:'<img src = "Level 2/images/swim.png" />'}), ({v:'read', pic:'<img src = "Level 2/images/read.png" />'}), ({v:'write', pic:'<img src = "Level 2/images/write.png" />'}), ({v:'type', pic:'<img src = "Level 2/images/type.png" />'}), ({v: 'jump', pic:'<img src = "Level 2/images/jump.png" />'}), ({v: 'draw', pic:'<img src = "Level 2/images/draw.png" />'})];
        shuffleArray(verbArray);
        shuffleArray(pronounArray);
        document.getElementById("gPic").innerHTML = verbArray[0].pic;
        if (randomG < 2) {
            sentence = "Can " + pronounArray[0].qp + " " + verbArray[0].v + "?";
            document.getElementById("grammarCheck").value = "Yes, " + pronounArray[0].value + " can.";
            sentenceArray[0] = "Yes, " + pronounArray[0].value + " can.";
            sentenceArray[1] = "Yes, " + pronounArray[1].value + " can.";
            sentenceArray[2] = "Yes, " + pronounArray[2].value + " can.";
            sentenceArray[3] = "Yes, " + pronounArray[3].value + " can.";
        } else {
            sentence = "Can " + pronounArray[0].q + " " + verbArray[1].v + "?";
            document.getElementById("grammarCheck").value = "No, " + pronounArray[0].value + " can't.";
            sentenceArray[0] = "No, " + pronounArray[0].value + " can't.";
            sentenceArray[1] = "No, " + pronounArray[1].value + " can't.";
            sentenceArray[2] = "No, " + pronounArray[2].value + " can't.";
            sentenceArray[3] = "No, " + pronounArray[3].value + " can't.";
        }
        shuffleArray(sentenceArray);
        document.getElementById("g0r1d0").textContent = sentenceArray[0];
        document.getElementById("g0r1d2").textContent = sentenceArray[1];
        document.getElementById("g0r2d0").textContent = sentenceArray[2];
        document.getElementById("g0r2d2").textContent = sentenceArray[3];
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = ['<a href="http://scratch.mit.edu/projects/36595088/" target="_newtab">Scratch: Can he ___?</a>'];
        grammarLesson = "";
    } else if (userInput == "Review 2") {
        sentenceArray = ["Unit 4", "Unit 5", "Unit 6"];
        shuffleArray(sentenceArray);
        setGrammar(sentenceArray[0]);
        currentUnit = "Review 2";
    } else if (userInput == "Unit 7") {
        vocArray = ['television', 'DVD player', 'fan', 'trash can', 'robot', 'doll', 'teddy bear', 'ball', 'board game'];
        shuffleArray(vocArray);
        locArray = [({voc:' in the box', pic:'<img src="Starter/images/box.png" />'}), ({voc:' behind the door', pic:'<img src="Level 2/images/door.png" />'}), ({voc:' near the window', pic:'<img src="Level 2/images/window.png" />'}), ({voc:' on the table', pic:'<img src="Level 2/images/table.png" />'}), ({voc:' in front of the blackboard', pic:'<img src="Level 2/images/blackboard.png" />'}), ({voc:' under the whiteboard', pic:'<img src="Level 2/images/whiteboard.png" />'})];
        shuffleArray(locArray);
        document.getElementById("gPic").innerHTML = locArray[0].pic;
        if (randomG < 2) {
            sentence = "Where is the " + vocArray[0] + "?";
            document.getElementById("grammarCheck").value = "It is " + locArray[0].voc + ".";
            sentenceArray[0] = "It is " + locArray[0].voc + ".";
            sentenceArray[1] = "It is " + locArray[1].voc + ".";
            sentenceArray[2] = "It is " + locArray[2].voc + ".";
            sentenceArray[3] = "It is " + locArray[3].voc + ".";
        } else if (randomG == 2) {
            sentence = "Where is my " + vocArray[0] + "?";
            document.getElementById("grammarCheck").value = "It is " + locArray[0].voc + ".";
            sentenceArray[0] = "It is " + locArray[0].voc + ".";
            sentenceArray[1] = "It is " + locArray[1].voc + ".";
            sentenceArray[2] = "It is " + locArray[2].voc + ".";
            sentenceArray[3] = "It is " + locArray[3].voc + ".";
        } else {
            if (randomG < 2) {
                sentence = "Is the " + vocArray[0] + locArray[0].voc + "?";
                document.getElementById("grammarCheck").value = "Yes, it is.";
                sentenceArray[0] = "Yes, it is.";
                sentenceArray[1] = "No, it is not.";
                sentenceArray[2] = " ";
                sentenceArray[3] = " ";
            } else {
                sentence = "Is the " + vocArray[0] + locArray[1].voc + "?";
                document.getElementById("grammarCheck").value = "No, it is not.";
                sentenceArray[0] = "No, it is not.";
                sentenceArray[1] = "Yes, it is.";
                sentenceArray[2] = " ";
                sentenceArray[3] = " ";
            }
        }
        shuffleArray(sentenceArray);
        document.getElementById("g0r1d0").textContent = sentenceArray[0];
        document.getElementById("g0r1d2").textContent = sentenceArray[1];
        document.getElementById("g0r2d0").textContent = sentenceArray[2];
        document.getElementById("g0r2d2").textContent = sentenceArray[3];
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = ['<a href="http://www.eslgamesplus.com/prepositions-of-place-esl-fun-game-online-grammar-practice/" target="_newtab">ESL Games+: Prepositions of Place</a>'];
        grammarLesson = "";
    } else if (userInput == "Unit 8") {
        pronounArray = ['you', 'they', 'he', 'she'];
        locArray = [({voc:'living room', pic:'<img src="Level 2/images/living room.png" />'}), ({voc:'dining room', pic:'<img src="Level 2/images/dining room.png" />'}), ({voc:'bedroom', pic:'<img src="Level 2/images/bedroom.png" />'}), ({voc:'bathroom', pic:'<img src="Level 2/images/bathroom.png" />'}), ({voc:'kitchen', pic:'<img src="Level 2/images/kitchen.png" />'}), ({voc:'backyard', pic:'<img src="Level 2/images/backyard.png" />'}), ({voc:'garden', pic:'<img src="Level 2/images/garden.png" />'}), ({voc:'basement', pic:'<img src="Level 2/images/basement.png" />'})];
        shuffleArray(pronounArray);
        shuffleArray(locArray);
        choiceArrayInt = Math.floor(Math.random() * 2);
        if (choiceArrayInt == 1) {
            if (pronounArray[0] == "he" || pronounArray[0] == "she"){
                document.getElementById("g0r0d0").innerHTML = "Where is " + pronounArray[0] + "?";
            } else {
                document.getElementById("g0r0d0").innerHTML = "Where are " + pronounArray[0] + "?";
            }
            var capitalized = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1);
            if (pronounArray[0] == "he" || pronounArray[0] == "she"){
                sampleAnswer = capitalized + " is in the " + locArray[0].voc + ".";
            } else {
                if (capitalized == "You"){
                    sampleAnswer = "I am in the " + locArray[0].voc + ".";
                } else {
                    sampleAnswer = "They are in the " + locArray[0].voc + ".";
                }
            }
        } else {
            answerInt = Math.floor(Math.random() * 2);
            if (pronounArray[0] == "he" || pronounArray[0] == "she"){
                if (answerInt == 0) {
                    document.getElementById("g0r0d0").innerHTML = "Is " + pronounArray[0] + " in the " + locArray[1].voc + "?";
                    sampleAnswer = "No, " + pronounArray[0] + " is not.";
                } else {
                    document.getElementById("g0r0d0").innerHTML = "Is " + pronounArray[0] + " in the " + locArray[0].voc + "?";
                    sampleAnswer = "Yes, " + pronounArray[0] + " is.";
                }
            } else if (pronounArray[0] = "you"){
                if (answerInt == 0) {
                    document.getElementById("g0r0d0").innerHTML = "Are you in the " + locArray[1].voc + "?";
                    sampleAnswer = "No, I am not.";
                } else {
                    document.getElementById("g0r0d0").innerHTML = "Are you in the " + locArray[0].voc + "?";
                    sampleAnswer = "Yes, I am.";
                }
            } else {
                if (answerInt == 0) {
                    document.getElementById("g0r0d0").innerHTML = "Are they in the " + locArray[1].voc + "?";
                    sampleAnswer = "No, they are not.";
                } else {
                    document.getElementById("g0r0d0").innerHTML = "Are they in the " + locArray[0].voc + "?";
                    sampleAnswer = "Yes, they are.";
                }
            }
        }
        document.getElementById("g0r0d5").innerHTML = locArray[0].pic;
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 9") {
        pronounArray = ['you', 'they', 'he', 'she'];
        animalArray = [({voc:'tigers', pic:'<img src="Level 2/images/tiger.png" />'}), ({voc:'lions', pic:'<img src="Level 2/images/lion.png" />'}), ({voc:'monkeys', pic:'<img src="Level 2/images/monkey.png" />'}), ({voc:'bears', pic:'<img src="Level 2/images/bear.png" />'}), ({voc:'zebras', pic:'<img src="Level 2/images/zebra.png" />'}), ({voc:'goats', pic:'<img src="Level 2/images/goat.png" />'}), ({voc:'elephants', pic:'<img src="Level 2/images/elephant.png" />'}), ({voc:'hippos', pic:'<img src="Level 2/images/hippo.png" />'}), ({voc:'snakes', pic:'<img src="Level 2/images/snake.png" />'}), ({voc:'parrots', pic:'<img src="Level 2/images/parrot.png" />'})];
        shuffleArray(pronounArray);
        shuffleArray(animalArray);
        choiceArrayInt = Math.floor(Math.random() * 2);
        if (choiceArrayInt == 1) {
            if (pronounArray[0] == "he" || pronounArray[0] == "she"){
                document.getElementById("g0r0d0").innerHTML = "What does " + pronounArray[0] + " like?";
            } else {
                document.getElementById("g0r0d0").innerHTML = "What do " + pronounArray[0] + " like?";
            }
            var capitalized = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1);
            if (pronounArray[0] == "he" || pronounArray[0] == "she"){
                sampleAnswer = capitalized + " likes " + animalArray[0].voc + ".";
            } else {
                if (capitalized == "You"){
                    sampleAnswer = "I like " + animalArray[0].voc + ".";
                } else {
                    sampleAnswer = "They like " + animalArray[0].voc + ".";
                }
            }
        } else {
            answerInt = Math.floor(Math.random() * 2);
            if (pronounArray[0] == "he" || pronounArray[0] == "she"){
                if (answerInt == 0) {
                    document.getElementById("g0r0d0").innerHTML = "Does " + pronounArray[0] + " like " + animalArray[1].voc + "?";
                    sampleAnswer = "No, " + pronounArray[0] + " doesn't.";
                } else {
                    document.getElementById("g0r0d0").innerHTML = "Does " + pronounArray[0] + " like " + animalArray[0].voc + "?";
                    sampleAnswer = "Yes, " + pronounArray[0] + " does.";
                }
            } else if (pronounArray[0] = "you"){
                if (answerInt == 0) {
                    document.getElementById("g0r0d0").innerHTML = "Do you like " + animalArray[1].voc + "?";
                    sampleAnswer = "No, I don't.";
                } else {
                    document.getElementById("g0r0d0").innerHTML = "Do you like " + animalArray[0].voc + "?";
                    sampleAnswer = "Yes, I do.";
                }
            } else {
                if (answerInt == 0) {
                    document.getElementById("g0r0d0").innerHTML = "Do they like " + animalArray[1].voc + "?";
                    sampleAnswer = "No, they don't.";
                } else {
                    document.getElementById("g0r0d0").innerHTML = "Do they like " + animalArray[0].voc + "?";
                    sampleAnswer = "Yes, they do.";
                }
            }
        }
        document.getElementById("g0r0d5").innerHTML = animalArray[0].pic;
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 3") {
        sentenceArray = ["Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(sentenceArray);
        setGrammar(sentenceArray[0]);
        currentUnit = "Review 3";
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Final Review") {
        sentenceArray = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(sentenceArray);
        setGrammar(sentenceArray[0]);
        currentUnit = "Final Review";
        gLinks = ['<a href="http://scratch.mit.edu/projects/64838632/" target="_newtab">B2 Chat Bot</a>'];
        grammarLesson = "";
    } else {
        sentenceArray = [""];
        gLinks = [''];
        grammarLesson = "";
    }
    document.getElementById("grammar_links").innerHTML = gLinks;
    document.getElementById("grammar_lesson").innerHTML = grammarLesson;
}