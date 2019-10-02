function g_08(userInput){
    if (userInput == "Unit 1") {
        
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