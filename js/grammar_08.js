function g_08(userInput){
    if (userInput == "Unit 1") {
        randomG = randG(4);
        PRPArray = [{PRP: "I", RESPONSE: "me", OBJ: "you"}, {PRP: "you", RESPONSE: "you", OBJ: "me"}, {PRP: "you", RESPONSE: "us", OBJ: "us"}, {PRP: "they", RESPONSE: "them", OBJ: "them"}, {PRP: "he", RESPONSE: "him", OBJ: "him"}, {PRP: "she", RESPONSE: "her", OBJ: "her"}, {PRP: "we", RESPONSE: "you", OBJ: "you"}];
        shuffleArray(PRPArray);
        PERSONArray = ["My mom", " My dad", "Their son", "Their daughter", "His wife", "Her husband"];
        shuffleArray(PERSONArray);
        NOUNArray = [" the cake", " the pen", " the sandwich", " the chocolate", " the markers", " the toy", " the model car", " the doll", " the pencil", " the book", " the school bag", " the notebook", " the eraser", " the pencil case", " the hat", " the belt"];
        shuffleArray(NOUNArray);
        if (randomG == 0) {
            document.getElementById("gPic").src = "Level 8/images/give to.png";
            sentence = "Who gave" + NOUNArray[0] + " to " + PRPArray[0].OBJ + "?";
            document.getElementById("grammarCheck").value = PERSONArray[0] + " gave" + NOUNArray[0] + " to " + PRPArray[0].RESPONSE + ".";
            sentenceArray[0] = PERSONArray[0] + " gave" + NOUNArray[0] + " to " + PRPArray[0].RESPONSE + ".";
            sentenceArray[1] = PERSONArray[0] + " gave" + NOUNArray[1] + " to " + PRPArray[0].RESPONSE + ".";
            sentenceArray[2] = PERSONArray[0] + " gave" + NOUNArray[2] + " to " + PRPArray[0].RESPONSE + ".";
            sentenceArray[3] = PERSONArray[0] + " gave" + NOUNArray[3] + " to " + PRPArray[0].RESPONSE + ".";
        } else if (randomG == 1) {
            document.getElementById("gPic").src = "Level 8/images/bring for.png";
            sentence = "Who brought" + NOUNArray[0] + " for " + PRPArray[0].OBJ + "?";
            document.getElementById("grammarCheck").value = PERSONArray[0] + " brought" + NOUNArray[0] + " for " + PRPArray[0].RESPONSE + ".";
            sentenceArray[0] = PERSONArray[0] + " brought" + NOUNArray[0] + " for " + PRPArray[0].RESPONSE + ".";
            sentenceArray[1] = PERSONArray[0] + " brought" + NOUNArray[1] + " for " + PRPArray[0].RESPONSE + ".";
            sentenceArray[2] = PERSONArray[0] + " brought" + NOUNArray[2] + " for " + PRPArray[0].RESPONSE + ".";
            sentenceArray[3] = PERSONArray[0] + " brought" + NOUNArray[3] + " for " + PRPArray[0].RESPONSE + ".";
        } else if (randomG == 2) {
            document.getElementById("gPic").src = "Level 8/images/give to.png";
            sentence = "Who gave " + PRPArray[0].OBJ + " " + NOUNArray[0] + "?";
            document.getElementById("grammarCheck").value = PERSONArray[0] + " gave " + PRPArray[0].RESPONSE + NOUNArray[0] + ".";
            sentenceArray[0] = PERSONArray[0] + " gave " + PRPArray[0].RESPONSE + NOUNArray[0] + ".";
            sentenceArray[1] = PERSONArray[0] + " gave " + PRPArray[0].RESPONSE + NOUNArray[1] + ".";
            sentenceArray[2] = PERSONArray[0] + " gave " + PRPArray[0].RESPONSE + NOUNArray[2] + ".";
            sentenceArray[3] = PERSONArray[0] + " gave " + PRPArray[0].RESPONSE + NOUNArray[3] + ".";
        } else {
            document.getElementById("gPic").src = "Level 8/images/bring for.png";
            sentence = "Who brought " + PRPArray[0].OBJ + " " + NOUNArray[0] + "?";
            document.getElementById("grammarCheck").value = PERSONArray[0] + " brought " + PRPArray[0].RESPONSE + NOUNArray[0] + ".";
            sentenceArray[0] = PERSONArray[0] + " brought " + PRPArray[0].RESPONSE + NOUNArray[0] + ".";
            sentenceArray[1] = PERSONArray[0] + " brought " + PRPArray[0].RESPONSE + NOUNArray[1] + ".";
            sentenceArray[2] = PERSONArray[0] + " brought " + PRPArray[0].RESPONSE + NOUNArray[2] + ".";
            sentenceArray[3] = PERSONArray[0] + " brought " + PRPArray[0].RESPONSE + NOUNArray[3] + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 2") {
        
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 3") {
        
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Review 1") {
        unitArray = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(unitArray);
        g_07(unitArray[0]);
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
        unitArray = ["Unit 4", "Unit 5", "Unit 6"];
        shuffleArray(unitArray);
        g_07(unitArray[0]);
        currentUnit = "Review 2";
    } else if (userInput == "Unit 7") {
        
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 8") {
        
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 9") {
        
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Review 3") {
        unitArray = ["Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(unitArray);
        g_07(unitArray[0]);
        currentUnit = "Review 3";
    } else if (userInput == "Final Review") {
        unitArray = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(unitArray);
        g_07(unitArray[0]);
        currentUnit = "Final Review";
    } else {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
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