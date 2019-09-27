function g_06(userInput){
    if (userInput == "Unit 1") {
        randomG = randG(3);
        monthArray = [{month: "January", pic: "Level 6/images/January.png"}, {month: "February", pic: "Level 6/images/February.png"}, {month: "March", pic: "Level 6/images/March.png"}, {month: "April", pic: "Level 6/images/April.png"}, {month: "May", pic: "Level 6/images/May.png"}, {month: "June", pic: "Level 6/images/June.png"}, {month: "July", pic: "Level 6/images/July.png"}, {month: "August", pic: "Level 6/images/August.png"}, {month: "September", pic: "Level 6/images/September.png"}, {month: "October", pic: "Level 6/images/October.png"}, {month: "November", pic: "Level 6/images/November.png"}, {month: "December", pic: "Level 6/images/December.png"}];
        shuffleArray(monthArray);
        ordinalArray = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];
        if (monthArray[0].month == "February") {
            ordinalArray = ordinalArray.slice(0, 27);
        } else if (monthArray[0].month in ["April", "June", "September", "November"]) {
            ordinalArray = ordinalArray.slice(0, 29);
        }
        shuffleArray(ordinalArray);
        document.getElementById("gPic").src = monthArray[0].pic;
        if (randomG < 1){
            sentence = "What month is it?";
            document.getElementById("grammarCheck").value = "It's " + monthArray[0].month +  ".";
            sentenceArray[0] = "It's " + monthArray[0].month +  ".";
            sentenceArray[1] = "It's " + monthArray[1].month +  ".";
            sentenceArray[2] = "It's " + monthArray[2].month +  ".";
            sentenceArray[3] = "It's " + monthArray[3].month +  ".";
        } else if (randomG == 1) {
            sentence = "What date is it?";
            document.getElementById("grammarCheck").value = "It's " + monthArray[0].month +  " " + ordinalArray[0] + ".";
            sentenceArray[0] = "It's " + monthArray[0].month +  " " + ordinalArray[0] + ".";
            sentenceArray[1] = "It's " + monthArray[1].month +  " " + ordinalArray[0] + ".";
            sentenceArray[2] = "It's " + monthArray[2].month +  " " + ordinalArray[0] + ".";
            sentenceArray[3] = "It's " + monthArray[3].month +  " " + ordinalArray[0] + ".";
        } else {
            sentence = "What date is your birthday?";
            document.getElementById("grammarCheck").value = "My birthday is on " + monthArray[0].month +  " " + ordinalArray[0] + ".";
            sentenceArray[0] = "My birthday is on " + monthArray[0].month +  " " + ordinalArray[0] + ".";
            sentenceArray[1] = "My birthday is on " + monthArray[1].month +  " " + ordinalArray[0] + ".";
            sentenceArray[2] = "My birthday is on " + monthArray[2].month +  " " + ordinalArray[0] + ".";
            sentenceArray[3] = "My birthday is on " + monthArray[3].month +  " " + ordinalArray[0] + ".";
    }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = ['<a href="http://scratch.mit.edu/projects/20797437/" target="_newtab">Scratch: Date Game</a>'];
    } else if (userInput == "Unit 2") {
        randomG = randG(2);
        PRPArray = [{POSS: "my", PER: "mine"}, {POSS: "your", PER: "yours"}, {POSS: "our", PER: "ours"}, {POSS: "their", PER: "theirs"}, {POSS: "his", PER: "his"}, {POSS: "her", PER: "hers"}];
        shuffleArray(PRPArray);
        NOUNArray = [{NN: "tie", NNS: "ties", pic: "Level 6/images/tie.png"}, {NN: "scarf", NNS: "scarves", pic: "Level 6/images/scarf.png"}, {NN: "necklace", NNS: "necklaces", pic: "Level 6/images/necklace.png"}, {NN: "raincoat", NNS: "raincoats", pic: "Level 6/images/raincoat.png"}, {NN: "uniform", NNS: "uniforms", pic: "Level 6/images/uniform.png"}, {NN: "watch", NNS: "watches", pic: "Level 6/images/watch.png"}, {NNS: "sneakers", pic: "Level 6/images/sneakers.png"}, {NNS: "slippers", pic: "Level 6/images/slippers.png"}];
        document.getElementById("gPic").src = NOUNArray[0].pic;
        if (randomG < 1){
            NOUNArray = NOUNArray.slice(0, 6);
            shuffleArray(NOUNArray);
        document.getElementById("gPic").src = NOUNArray[0].pic;
            sentence = "This is " + PRPArray[0].POSS + " " + NOUNArray[0].NN + ". This is " + PRPArray[0].PER + ", not " + PRPArray[1].PER + ".";
            document.getElementById("grammarCheck").value = sentence;
            sentenceArray[0] = sentence;
            sentenceArray[1] = "This is " + PRPArray[0].POSS + " " + NOUNArray[1].NN + ". This is " + PRPArray[0].PER + ", not " + PRPArray[1].PER + ".";
            sentenceArray[2] = "This is " + PRPArray[0].POSS + " " + NOUNArray[2].NN + ". This is " + PRPArray[0].PER + ", not " + PRPArray[1].PER + ".";
            sentenceArray[3] = "This is " + PRPArray[0].POSS + " " + NOUNArray[3].NN + ". This is " + PRPArray[0].PER + ", not " + PRPArray[1].PER + ".";
        } else {
            shuffleArray(NOUNArray);
            document.getElementById("gPic").src = NOUNArray[0].pic;
            sentence = "These are " + PRPArray[0].POSS + " " + NOUNArray[0].NNS + ". These are " + PRPArray[0].PER + ", not " + PRPArray[1].PER + ".";
            document.getElementById("grammarCheck").value = sentence;
            sentenceArray[0] = sentence;
            sentenceArray[1] = "These are " + PRPArray[0].POSS + " " + NOUNArray[1].NNS + ". These are " + PRPArray[0].PER + ", not " + PRPArray[1].PER + ".";
            sentenceArray[2] = "These are " + PRPArray[0].POSS + " " + NOUNArray[2].NNS + ". These are " + PRPArray[0].PER + ", not " + PRPArray[1].PER + ".";
            sentenceArray[3] = "These are " + PRPArray[0].POSS + " " + NOUNArray[3].NNS + ". These are " + PRPArray[0].PER + ", not " + PRPArray[1].PER + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 3") {
        randomG = randG(2);
        PRPArray = [{POSS: "my", PER: "mine"}, {POSS: "your", PER: "yours"}, {POSS: "our", PER: "ours"}, {POSS: "their", PER: "theirs"}, {POSS: "his", PER: "his"}, {POSS: "her", PER: "hers"}];
        shuffleArray(PRPArray);
        document.getElementById("gInstructions").innerHTML = "<h2> hint: (" + PRPArray[0].PER + ")</h2>";
        if (randomG < 1){
            NOUNArray = [{NN: "glue", pic: "Level 6/images/glue.png"}, {NN: "pencil case", pic: "Level 6/images/pencil case.png"}, {NN: "tape", pic: "Level 6/images/tape.png"}, {NN: "pencil sharpener", pic: "Level 6/images/pencil sharpener.png"}, {NN: "notebook", pic: "Level 6/images/notebook.png"}, {NN: "paper", pic: "Level 6/images/paper.png"}, {NN: "correction tape", pic: "Level 6/images/correction tape.png"}];
            shuffleArray(NOUNArray);
            sentence = "Whose " + NOUNArray[0].NN + " is this?";
            document.getElementById("grammarCheck").value = "It's " + PRPArray[0].PER + ", not " + PRPArray[1].PER + ".";
            sentenceArray[0] = "It's " + PRPArray[0].PER + ", not " + PRPArray[1].PER + ".";
            sentenceArray[1] = "It's " + PRPArray[1].PER + ", not " + PRPArray[0].PER + ".";
            sentenceArray[2] = "It's " + PRPArray[2].PER + ", not " + PRPArray[1].PER + ".";
            sentenceArray[3] = "It's " + PRPArray[3].PER + ", not " + PRPArray[1].PER + ".";
        } else {
            NOUNArray = [{NNS: "scissors", pic: "Level 6/images/scissors.png"}, {NNS: "crayons", pic: "Level 6/images/crayons.png"}, {NNS: "markers", pic: "Level 6/images/markers.png"}];
            shuffleArray(NOUNArray);
            sentence = "Whose " + NOUNArray[0].NNS + " are these?";
            document.getElementById("grammarCheck").value = "They're " + PRPArray[0].PER + ", not " + PRPArray[1].PER + ".";
            sentenceArray[0] = "They're " + PRPArray[0].PER + ", not " + PRPArray[1].PER + ".";
            sentenceArray[1] = "They're " + PRPArray[1].PER + ", not " + PRPArray[0].PER + ".";
            sentenceArray[2] = "They're " + PRPArray[2].PER + ", not " + PRPArray[1].PER + ".";
            sentenceArray[3] = "They're " + PRPArray[3].PER + ", not " + PRPArray[1].PER + ".";
        }
        document.getElementById("gPic").src = NOUNArray[0].pic;    
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Review 1") {
        q1Array = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 1";
    } else if (userInput == "Unit 4") {
        randomG = randG(2);
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        verb = conjugate_VBD(PRPArray[0].PRP, "beVerb");
        verb2 = conjugate_VBD(PRPArray[0].RESPONSE, "beVerb");
        VOCArray = [{voc: "excited", pic: "Level 6/images/excited.png"}, {voc: "scared", pic: "Level 6/images/scared.png"}, {voc: "bored", pic: "Level 6/images/bored.png"}, {voc: "sick", pic: "Level 6/images/sick.png"}, {voc: "early", pic: "Level 6/images/early.png"}, {voc: "late", pic: "Level 6/images/late.png"}];
        shuffleArray(VOCArray);
        timeArray = [" yesterday morning", " yesterday afternoon", " yesterday evening", " yesterday", " last weekend", " last Monday", " last Tuesday", " last Wednesday", " last Thursday", " last Friday"];
        shuffleArray(timeArray);
        sentence = capitalize(verb) + " " + PRPArray[0].PRP + " " + VOCArray[0].voc + timeArray[0] + "?";
        if (randomG < 1){
            document.getElementById("gPic").src = VOCArray[0].pic;
            document.getElementById("grammarCheck").value = "Yes, " + PRPArray[0].RESPONSE + " " + verb2 + " " + VOCArray[0].voc + timeArray[0] + ".";
            sentenceArray[0] = "Yes, " + PRPArray[0].RESPONSE + " " + verb2 + " " + VOCArray[0].voc + timeArray[0] + ".";
            sentenceArray[1] = "Yes, " + PRPArray[0].RESPONSE + " " + verb2 + " " + VOCArray[1].voc + timeArray[0] + ".";
            sentenceArray[2] = "Yes, " + PRPArray[0].RESPONSE + " " + verb2 + " " + VOCArray[2].voc + timeArray[0] + ".";
            sentenceArray[3] = "Yes, " + PRPArray[0].RESPONSE + " " + verb2 + " " + VOCArray[3].voc + timeArray[0] + ".";
        } else {
            document.getElementById("gPic").src = VOCArray[1].pic;
            document.getElementById("grammarCheck").value = "No, " + PRPArray[0].RESPONSE + " " + verb2 + "n't " + VOCArray[0].voc + timeArray[0] + ".";
            sentenceArray[0] = "No, " + PRPArray[0].RESPONSE + " " + verb2 + "n't " + VOCArray[0].voc + timeArray[0] + ".";
            sentenceArray[1] = "No, " + PRPArray[0].RESPONSE + " " + verb2 + "n't " + VOCArray[2].voc + timeArray[0] + ".";
            sentenceArray[2] = "No, " + PRPArray[0].RESPONSE + " " + verb2 + "n't " + VOCArray[3].voc + timeArray[0] + ".";
            sentenceArray[3] = "No, " + PRPArray[0].RESPONSE + " " + verb2 + "n't " + VOCArray[4].voc + timeArray[0] + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 5") {
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        verb = conjugate_VBD(PRPArray[0].PRP, "beVerb");
        verb2 = conjugate_VBD(PRPArray[0].RESPONSE, "beVerb");
        LOCArray = [{loc: "at the beach", pic: "Level 6/images/beach.png"}, {loc: "at the airport", pic: "Level 6/images/airport.png"}, {loc: "at the farm", pic: "Level 6/images/farm.png"}, {loc: "at the concert", pic: "Level 6/images/concert.png"}, {loc: "in the mountains", pic: "Level 6/images/mountain.png"}, {loc: "in the amusement park", pic: "Level 6/images/amusement park.png"}, {loc: "at the playground", pic: "Level 6/images/playground.png"}, {loc: "at the port", pic: "Level 6/images/port.png"}];
        shuffleArray(LOCArray);
        document.getElementById("gPic").src = LOCArray[0].pic;
        timeArray = [" yesterday morning", " yesterday afternoon", " yesterday evening", " yesterday", " last weekend", " last Monday", " last Tuesday", " last Wednesday", " last Thursday", " last Friday"];
        shuffleArray(timeArray);
        sentence = "Where " + verb + " " + PRPArray[0].PRP + timeArray[0] + "?";
        document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verb2 + " " + LOCArray[0].loc + " " + timeArray[0] + ".";
            sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verb2 + " " + LOCArray[0].loc + " " + timeArray[0] + ".";
            sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + verb2 + " " + LOCArray[1].loc + " " + timeArray[0] + ".";
            sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + verb2 + " " + LOCArray[2].loc + " " + timeArray[0] + ".";
            sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + verb2 + " " + LOCArray[3].loc + " " + timeArray[0] + ".";
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 6") {
        
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Review 2") {
        q1Array = ["Unit 4", "Unit 5", "Unit 6"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 2";
    } else if (userInput == "Unit 7") {
        
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = ['<a href="http://www.turtlediary.com/grade-3-games/ela-games/simple-past-tense.html" target="_newtab">Turtle Diary: Simple Past Tense</a>'];
    } else if (userInput == "Unit 8") {
        
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = ['<a href="http://www.eslgamesplus.com/irregular-past-tense-esl-grammar-jeopardy-quiz-game/" target="_newtab">ESL Games+: Irregular Past Tense Jeopardy</a></li><li><a href="http://www.turtlediary.com/grade-3-games/ela-games/simple-past-tense.html" target="_newtab">Turtle Diary: Simple Past Tense</a></li><li><a href="http://www.grammar.cl/Games/Past_Irregular_Verbs.htm" target="_newtab">Woodward English: Past Irregular Verbs</a></li><li><a href="http://www.perfect-english-grammar.com/past-simple-exercise-7.html" target="_newtab">Perfect English Grammar: Past Simple Forms</a>'];
    } else if (userInput == "Unit 9") {
        
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = ['<a href="http://www.eslgamesplus.com/food-partitives-expressions-of-quantity-a-slice-of-a-piece-of-esl-grammar-activity/" target="_newtab">ESL Games+: Phrase Monkey</a></li><li><a href="http://www.eslgamesplus.com/food-partitives-esl-fun-game-food-quantities-game/" target="_newtab">ESL Games+: Moonshot</a>'];
    } else if (userInput == "Review 3") {
        q1Array = ["Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 3";
    } else if (userInput == "Final Review") {
        q1Array = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Final Review";
    } else {
        sentenceArray = [""];
        gLinks = [''];  
    }
    shuffleArray(sentenceArray);
    document.getElementById("g0r1d0").textContent = sentenceArray[0];
    document.getElementById("g0r1d2").textContent = sentenceArray[1];
    document.getElementById("g0r2d0").textContent = sentenceArray[2];
    document.getElementById("g0r2d2").textContent = sentenceArray[3];
    document.getElementById("grammar_links").innerHTML = gLinks;
    document.getElementById('g_request').textContent = sentence;
}