function g_02(userInput){
    if (userInput == "Unit 1") {
        randomG = randG(2);
        NOUNArray = ["blackboard", "DVD player", "door", "fan", "television", "table", "trash can", "window", "telephone"];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").src = "Level 2/images/no_" + NOUNArray[0] + ".png";
        document.getElementById("gPic").width = 400;
        if (randomG < 1) {
            sentence = "There is a " + NOUNArray[1] + ".";
            document.getElementById("grammarCheck").value = "There is a " + NOUNArray[1] + ".";
            sentenceArray[0] = "There is a " + NOUNArray[0] + ".";
            sentenceArray[1] = "There is a " + NOUNArray[1] + ".";
            sentenceArray[2] = "There is not a " + NOUNArray[2] + ".";
            sentenceArray[3] = "There is not a " + NOUNArray[3] + ".";
        } else {
            sentence = "There is not a " + NOUNArray[0] + ".";
            document.getElementById("grammarCheck").value = "There is not a " + NOUNArray[0] + ".";
            sentenceArray[0] = "There is not a " + NOUNArray[0] + ".";
            sentenceArray[1] = "There is a " + NOUNArray[0] + ".";
            sentenceArray[2] = "There is not a " + NOUNArray[1] + ".";
            sentenceArray[3] = "There is not a " + NOUNArray[2] + ".";
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
        randomG = randG(2);
        NUMArray = [{TEXT: 'eleven', NUM:'11'}, {TEXT:'twelve', NUM:'12'}, {TEXT:'thirteen', NUM:'13'}, {TEXT:'fourteen', NUM:'14'}, {TEXT:'fifteen', NUM:'15'}, {TEXT:'sixteen', NUM:'16'}, {TEXT:'seventeen', NUM:'17'}, {TEXT:'eighteen', NUM:'18'}, {TEXT:'nineteen', NUM:'19'}, {TEXT:'twenty', NUM:'20'}];
        picArray = ["", "", "", "", "", "", "", "", "", "", "", "Level 2/images/eleven.png", "Level 2/images/twelve.png", "Level 2/images/thirteen.png", "Level 2/images/fourteen.png", "Level 2/images/fifteen.png", "Level 2/images/sixteen.png", "Level 2/images/seventeen.png", "Level 2/images/eighteen.png", "Level 2/images/nineteen.png", "Level 2/images/twenty.png"];
        shuffleArray(NUMArray);
        NOUNArray = [{NNS:'pencils'}, {NNS:'erasers'}, {NNS:'rulers'}, {NNS:'pens'}, {NNS:'desks'}, {NNS:'jackets'}, {NNS:'skirts'}, {NNS:'shirts'}, {NNS:'T-shirts'}, {NNS:'dogs'}, {NNS:'cats'}, {NNS:'rats'}, {NNS:'rabbits'}];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").src = picArray[NUMArray[0].NUM];
        if (randomG < 1) {
            sentence = "How many " + NOUNArray[0].NNS + " are there?";
            document.getElementById("grammarCheck").value = "There are " + NUMArray[0].TEXT + " " + NOUNArray[0].NNS + ".";
            sentenceArray[0] = "There are " + NUMArray[0].TEXT + " " + NOUNArray[0].NNS + ".";
            sentenceArray[1] = "There are " + NUMArray[1].TEXT + " " + NOUNArray[0].NNS + ".";
            sentenceArray[2] = "There are " + NUMArray[2].TEXT + " " + NOUNArray[0].NNS + ".";
            sentenceArray[3] = "There are " + NUMArray[3].TEXT + " " + NOUNArray[0].NNS + ".";
        } else {
            randomG = randG(2);
            if (randomG < 1) {
                sentence = "Are there " + NUMArray[0].TEXT + " " + NOUNArray[0].NNS + "?";
                document.getElementById("grammarCheck").value = "Yes, there are " + NUMArray[0].TEXT + " " + NOUNArray[0].NNS + ".";
                sentenceArray[0] = "Yes, there are " + NUMArray[0].TEXT + " " + NOUNArray[0].NNS + ".";
                sentenceArray[1] = "Yes, there are " + NUMArray[1].TEXT + " " + NOUNArray[0].NNS + ".";
                sentenceArray[2] = "Yes, there are " + NUMArray[2].TEXT + " " + NOUNArray[0].NNS + ".";
                sentenceArray[3] = "No, there are not " + NUMArray[0].TEXT + " " + NOUNArray[0].NNS + ".";
            } else {
                sentence = "Are there " + NUMArray[1].TEXT + " " + NOUNArray[0].NNS + "?";
                document.getElementById("grammarCheck").value = "No, there are not " + NUMArray[1].TEXT + " " + NOUNArray[0].NNS + ".";
                sentenceArray[0] = "Yes, there are " + NUMArray[0].TEXT + " " + NOUNArray[0].NNS + ".";
                sentenceArray[1] = "Yes, there are " + NUMArray[1].TEXT + " " + NOUNArray[0].NNS + ".";
                sentenceArray[2] = "Yes, there are " + NUMArray[2].TEXT + " " + NOUNArray[0].NNS + ".";
                sentenceArray[3] = "No, there are not " + NUMArray[1].TEXT + " " + NOUNArray[0].NNS + ".";
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
        shuffleArray(NOUNArray);
        NUMArray = [{TEXT: 'one', NUM:'1'}, {TEXT:'two', NUM:'2'}, {TEXT:'three', NUM:'3'}, {TEXT:'four', NUM:'4'}, {TEXT:'five', NUM:'5'}, {TEXT:'six', NUM:'6'}, {TEXT:'seven', NUM:'7'}, {TEXT:'eight', NUM:'8'}, {TEXT:'nine', NUM:'9'}, {TEXT:'ten', NUM:'10'}, {TEXT: 'eleven', NUM:'11'}, {TEXT:'twelve', NUM:'12'}, {TEXT:'thirteen', NUM:'13'}, {TEXT:'fourteen', NUM:'14'}, {TEXT:'fifteen', NUM:'15'}, {TEXT:'sixteen', NUM:'16'}, {TEXT:'seventeen', NUM:'17'}, {TEXT:'eighteen', NUM:'18'}, {TEXT:'nineteen', NUM:'19'}, {TEXT:'twenty', NUM:'20'}];
        picArray = ["", "Level 1/images/one.png", "Level 1/images/two.png", "Level 1/images/three.png", "Level 1/images/four.png", "Level 1/images/five.png", "Level 1/images/six.png", "Level 1/images/seven.png", "Level 1/images/eight.png", "Level 1/images/nine.png", "Level 1/images/ten.png", "Level 2/images/eleven.png", "Level 2/images/twelve.png", "Level 2/images/thirteen.png", "Level 2/images/fourteen.png", "Level 2/images/fifteen.png", "Level 2/images/sixteen.png", "Level 2/images/seventeen.png", "Level 2/images/eighteen.png", "Level 2/images/nineteen.png", "Level 2/images/twenty.png"];
        shuffleArray(NUMArray);
        NOUNArray = [{NN:'yo-yo', NNS:'yo-yos'}, {NN:'robot', NNS:'robots'}, {NN:'doll', NNS:'dolls'}, {NN:'teddy bear', NNS:'teddy bears'}, {NN:'ball', NNS:'balls'}, {NN:'block', NNS:'blocks'}, {NN:'video game', NNS:'video games'}, {NN:'board game', NNS:'board games'}];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").src = picArray[NUMArray[0].NUM];
        sentence = "How many " + NOUNArray[0].NNS + " are there?";
        if (NUMArray[0].TEXT == "one") {
            document.getElementById("grammarCheck").value = "There is one " + NOUNArray[0].NN + ".";
            sentenceArray[0] = "There is one " + NOUNArray[0].NN + ".";
            sentenceArray[1] = "There are " + NUMArray[1].TEXT + " " + NOUNArray[0].NNS + ".";
        } else {
            document.getElementById("grammarCheck").value = "There are " + NUMArray[0].TEXT + " " + NOUNArray[0].NNS + ".";
            sentenceArray[0] = "There are " + NUMArray[0].TEXT + " " + NOUNArray[0].NNS + ".";
            sentenceArray[1] = "There is one "  + NOUNArray[0].NN + ".";
        }
        sentenceArray[2] = "There are " + NUMArray[2].TEXT + " " + NOUNArray[0].NNS + ".";
        sentenceArray[3] = "There are " + NUMArray[3].TEXT + " " + NOUNArray[0].NNS + ".";
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
        randomG = randG(4);
        NOUNArray = [{NNS:'bananas', pic:"Level 2/images/bananas.png"}, {NNS:'lemons', pic:"Level 2/images/lemons.png"}, {NNS:'wax apples', pic:"Level 2/images/wax apples.png"}, {NNS:'pears', pic:"Level 2/images/pears.png"}, {NNS:'papayas', pic:"Level 2/images/papayas.png"}, {NNS:'watermelons', pic:"Level 2/images/watermelons.png"}, {NNS:'guavas', pic:"Level 2/images/guavas.png"}, {NNS:'grapes', pic:"Level 2/images/grapes.png"}];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").src = NOUNArray[0].pic;
        if (randomG < 2) {
            sentence = "What are these?";
            if (randomG < 1) {
                document.getElementById("grammarCheck").value = "These are " + NOUNArray[0].NNS + ".";
                sentenceArray[0] = "These are " + NOUNArray[0].NNS + ".";
                sentenceArray[1] = "These are " + NOUNArray[1].NNS + ".";
                sentenceArray[2] = "These are " + NOUNArray[2].NNS + ".";
                sentenceArray[3] = "These are " + NOUNArray[3].NNS + ".";
            } else {
                document.getElementById("grammarCheck").value = "These are not " + NOUNArray[1].NNS + ".";
                sentenceArray[0] = "These are not " + NOUNArray[0].NNS + ".";
                sentenceArray[1] = "These are not " + NOUNArray[1].NNS + ".";
                sentenceArray[2] = "These are " + NOUNArray[2].NNS + ".";
                sentenceArray[3] = "These are " + NOUNArray[3].NNS + ".";
            }
        } else {
            sentence = "What are those?";
            if (randomG < 3) {
                document.getElementById("grammarCheck").value = "Those are " + NOUNArray[0].NNS + ".";
                sentenceArray[0] = "Those are " + NOUNArray[0].NNS + ".";
                sentenceArray[1] = "Those are " + NOUNArray[1].NNS + ".";
                sentenceArray[2] = "Those are " + NOUNArray[2].NNS + ".";
                sentenceArray[3] = "Those are " + NOUNArray[3].NNS + ".";
            } else {
                document.getElementById("grammarCheck").value = "Those are not " + NOUNArray[1].NNS + ".";
                sentenceArray[0] = "Those are not " + NOUNArray[0].NNS + ".";
                sentenceArray[1] = "Those are not " + NOUNArray[1].NNS + ".";
                sentenceArray[2] = "Those are " + NOUNArray[2].NNS + ".";
                sentenceArray[3] = "Those are " + NOUNArray[3].NNS + ".";
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
        randomG = randG(4);
        NOUNArray = [{NNS:'tomatoes', pic:"Level 2/images/tomatoes.png"}, {NNS:'mangoes', pic:"Level 2/images/mangoes.png"}, {NNS:'strawberries', pic:"Level 2/images/strawberries.png"}, {NNS:'cherries', pic:"Level 2/images/cherries.png"}, {NNS:'peaches', pic:"Level 2/images/peaches.png"}, {NNS:'oranges', pic:"Level 2/images/oranges.png"}, {NNS:'kiwis', pic:"Level 2/images/kiwis.png"}, {NNS:'coconuts', pic:"Level 2/images/coconuts.png"}];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").src = NOUNArray[0].pic;
        if (randomG == 0) {
            sentence = "What are these?";
            document.getElementById("grammarCheck").value = "These are " + NOUNArray[0].NNS + ".";
            sentenceArray[0] = "These are " + NOUNArray[0].NNS + ".";
            sentenceArray[1] = "These are " + NOUNArray[1].NNS + ".";
            sentenceArray[2] = "These are " + NOUNArray[2].NNS + ".";
            sentenceArray[3] = "These are " + NOUNArray[3].NNS + ".";
        } else if (randomG == 1) {
            sentence = "What are those?";
            document.getElementById("grammarCheck").value = "Those are " + NOUNArray[0].NNS + ".";
            sentenceArray[0] = "Those are " + NOUNArray[0].NNS + ".";
            sentenceArray[1] = "Those are " + NOUNArray[1].NNS + ".";
            sentenceArray[2] = "Those are " + NOUNArray[2].NNS + ".";
            sentenceArray[3] = "Those are " + NOUNArray[3].NNS + ".";
        } else if (randomG == 2){
            randomG = randG(2);     
            if (randomG < 1){    
                sentence = "Are these " + NOUNArray[0].NNS + "?";
            } else {
                sentence = "Are those " + NOUNArray[0].NNS + "?";
            }
            document.getElementById("grammarCheck").value = "Yes, they are.";
                sentenceArray[0] = "Yes, they are.";
                sentenceArray[1] = "No, they are not.";
                sentenceArray[2] = " ";
                sentenceArray[3] = " ";
        } else {
            randomG = randG(2);
            if (randomG < 1){    
                sentence = "Are these " + NOUNArray[1].NNS + "?";
            } else {
                sentence = "Are those " + NOUNArray[1].NNS + "?";
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
        randomG = randG(2);
        verbArray = [{VB:'sing', pic:"Level 2/images/sing.png"}, {VB: 'dance', pic:"Level 2/images/dance.png"}, {VB:'run', pic:"Level 2/images/run.png"}, {VB:'swim', pic:"Level 2/images/swim.png"}, {VB:'read', pic:"Level 2/images/read.png"}, {VB:'write', pic:"Level 2/images/write.png"}, {VB:'type', pic:"Level 2/images/type.png"}, {VB: 'jump', pic:"Level 2/images/jump.png"}, {VB: 'draw', pic:"Level 2/images/draw.png"}];
        shuffleArray(verbArray);
        PRPArray = [{PRP: "I", RESPONSE: "you"}, {PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}, {PRP: "we", RESPONSE: "you"}];
        shuffleArray(PRPArray);
        document.getElementById("gPic").src = verbArray[0].pic;
        if (randomG < 1) {
            sentence = "Can " + PRPArray[0].PRP + " " + verbArray[0].VB + "?";
            document.getElementById("grammarCheck").value = "Yes, " + PRPArray[0].RESPONSE + " can. " + capitalize(PRPArray[0].RESPONSE) + " can " + verbArray[0].VB + ".";
            sentenceArray[0] = "Yes, " + PRPArray[0].RESPONSE + " can. " + capitalize(PRPArray[0].RESPONSE) + " can " + verbArray[0].VB + ".";
            sentenceArray[1] = "Yes, " + PRPArray[1].RESPONSE + " can. " + capitalize(PRPArray[1].RESPONSE) + " can " + verbArray[0].VB + ".";
            sentenceArray[2] = "Yes, " + PRPArray[2].RESPONSE + " can. " + capitalize(PRPArray[2].RESPONSE) + " can " + verbArray[0].VB + ".";
            sentenceArray[3] = "Yes, " + PRPArray[3].RESPONSE + " can. " + capitalize(PRPArray[3].RESPONSE) + " can " + verbArray[0].VB + ".";
        } else {
            sentence = "Can " + PRPArray[0].PRP + " " + verbArray[1].VB + "?";
            document.getElementById("grammarCheck").value = "No, " + PRPArray[0].RESPONSE + " can't. " + capitalize(PRPArray[0].RESPONSE) + " can't " + verbArray[1].VB + ".";
            sentenceArray[0] = "No, " + PRPArray[0].RESPONSE + " can't. " + capitalize(PRPArray[0].RESPONSE) + " can't " + verbArray[1].VB + ".";
            sentenceArray[1] = "No, " + PRPArray[1].RESPONSE + " can't. " + capitalize(PRPArray[1].RESPONSE) + " can't " + verbArray[1].VB + ".";
            sentenceArray[2] = "No, " + PRPArray[2].RESPONSE + " can't. " + capitalize(PRPArray[2].RESPONSE) + " can't " + verbArray[1].VB + ".";
            sentenceArray[3] = "No, " + PRPArray[3].RESPONSE + " can't. " + capitalize(PRPArray[3].RESPONSE) + " can't " + verbArray[1].VB + ".";
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
        randomG = randG(3);
        NOUNArray = ['television', 'DVD player', 'fan', 'trash can', 'robot', 'doll', 'teddy bear', 'ball', 'board game'];
        shuffleArray(NOUNArray);
        locArray = [{loc:' in the box', pic:"Starter/images/box.png"}, {loc:' behind the door', pic:"Level 2/images/door.png"}, {loc:' near the window', pic:"Level 2/images/window.png"}, {loc:' on the table', pic:"Level 2/images/table.png"}, {loc:' in front of the blackboard', pic:"Level 2/images/blackboard.png"}, {loc:' under the whiteboard', pic:"Level 2/images/whiteboard.png"}];
        shuffleArray(locArray);
        document.getElementById("gPic").src = locArray[0].pic;
        if (randomG == 0) {
            sentence = "Where is the " + NOUNArray[0] + "?";
            document.getElementById("grammarCheck").value = "It is " + locArray[0].loc + ".";
            sentenceArray[0] = "It is " + locArray[0].loc + ".";
            sentenceArray[1] = "It is " + locArray[1].loc + ".";
            sentenceArray[2] = "It is " + locArray[2].loc + ".";
            sentenceArray[3] = "It is " + locArray[3].loc + ".";
        } else if (randomG == 1) {
            sentence = "Where is my " + NOUNArray[0] + "?";
            document.getElementById("grammarCheck").value = "It is " + locArray[0].loc + ".";
            sentenceArray[0] = "It is " + locArray[0].loc + ".";
            sentenceArray[1] = "It is " + locArray[1].loc + ".";
            sentenceArray[2] = "It is " + locArray[2].loc + ".";
            sentenceArray[3] = "It is " + locArray[3].loc + ".";
        } else {
            randomG = randG(2);
            if (randomG < 1) {
                sentence = "Is the " + NOUNArray[0] + locArray[0].loc + "?";
                document.getElementById("grammarCheck").value = "Yes, it is.";
                sentenceArray[0] = "Yes, it is.";
                sentenceArray[1] = "No, it is not.";
                sentenceArray[2] = " ";
                sentenceArray[3] = " ";
            } else {
                sentence = "Is the " + NOUNArray[0] + locArray[1].loc + "?";
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
        randomG = randG(2);
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        verb = conjugate_VB(PRPArray[0].PRP, "beVerb");
        NOUNArray = [{NN:'living room', pic:"Level 2/images/living room.png"}, {NN:'dining room', pic:"Level 2/images/dining room.png"}, {NN:'bedroom', pic:"Level 2/images/bedroom.png"}, {NN:'bathroom', pic:"Level 2/images/bathroom.png"}, {NN:'kitchen', pic:"Level 2/images/kitchen.png"}, {NN:'backyard', pic:"Level 2/images/backyard.png"}, {NN:'garden', pic:"Level 2/images/garden.png"}, {NN:'basement', pic:"Level 2/images/basement.png"}];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").src = NOUNArray[0].pic;
        if (randomG < 1) {
            sentence = "Where " + verb + " " + PRPArray[0].PRP + "?";
            verb = conjugate_VB(PRPArray[0].RESPONSE, "beVerb");
            document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verb + " in the " + NOUNArray[0].NN + ".";
            sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " in the " + NOUNArray[0].NN + ".";
            sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " in the " + NOUNArray[1].NN + ".";
            sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " in the " + NOUNArray[2].NN + ".";
            sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " in the " + NOUNArray[3].NN + ".";
        } else {
            randomG = randG(2);
            if (randomG < 1) {
                sentence = capitalize(verb) + " " + PRPArray[0].PRP + " in the " + NOUNArray[0].NN + "?";
                verb = conjugate_VB(PRPArray[0].RESPONSE, "beVerb");
                document.getElementById("grammarCheck").value = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " in the " + NOUNArray[0].NN + ".";
                sentenceArray[0] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " in the " + NOUNArray[0].NN + ".";
                sentenceArray[1] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " in the " + NOUNArray[1].NN + ".";
                sentenceArray[2] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " in the " + NOUNArray[2].NN + ".";
                sentenceArray[3] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " in the " + NOUNArray[3].NN + ".";
            } else {
                sentence = capitalize(verb) + " " + PRPArray[0].PRP + " in the " + NOUNArray[1].NN + "?";
                verb = conjugate_VB(PRPArray[0].RESPONSE, "beVerb");
                document.getElementById("grammarCheck").value = "No, " + PRPArray[0].RESPONSE + " " + verb + " not in the " + NOUNArray[1].NN + ".";
                sentenceArray[0] = "No, " + PRPArray[0].RESPONSE + " " + verb + " not in the " + NOUNArray[1].NN + ".";
                sentenceArray[1] = "No, " + PRPArray[0].RESPONSE + " " + verb + " not in the " + NOUNArray[2].NN + ".";
                sentenceArray[2] = "No, " + PRPArray[0].RESPONSE + " " + verb + " not in the " + NOUNArray[3].NN + ".";
                sentenceArray[3] = "No, " + PRPArray[0].RESPONSE + " " + verb + " not in the " + NOUNArray[4].NN + ".";
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
    } else if (userInput == "Unit 9") {
        pronounArray = ['you', 'they', 'he', 'she'];
        animalArray = [{voc:'tigers', pic:"Level 2/images/tiger.png"}, {voc:'lions', pic:"Level 2/images/lion.png"}, {voc:'monkeys', pic:"Level 2/images/monkey.png"}, {voc:'bears', pic:"Level 2/images/bear.png"}, {voc:'zebras', pic:"Level 2/images/zebra.png"}, {voc:'goats', pic:"Level 2/images/goat.png"}, {voc:'elephants', pic:"Level 2/images/elephant.png"}, {voc:'hippos', pic:"Level 2/images/hippo.png"}, {voc:'snakes', pic:"Level 2/images/snake.png"}, {voc:'parrots', pic:"Level 2/images/parrot.png"}];
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
    document.getElementById('g_request').textContent = sentence;
}