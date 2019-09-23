function g_06(userInput){
    if (userInput == "Unit 1") {
        randomG = randG(3);
        monthArray = [{month: "January", pic:"Level 6/images/January.png"}, {month: "February", pic:"Level 6/images/February.png"}, {month: "March", pic:"Level 6/images/March.png"}, {month: "April", pic:"Level 6/images/April.png"}, {month: "May", pic:"Level 6/images/May.png"}, {month: "June", pic:"Level 6/images/June.png"}, {month: "July", pic:"Level 6/images/July.png"}, {month: "August", pic:"Level 6/images/August.png"}, {month: "September", pic:"Level 6/images/September.png"}, {month: "October", pic:"Level 6/images/October.png"}, {month: "November", pic:"Level 6/images/November.png"}, {month: "December", pic:"Level 6/images/December.png"}];
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
        
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 3") {
        
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Review 1") {
        q1Array = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 1";
    } else if (userInput == "Unit 4") {
        
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 5") {
        
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