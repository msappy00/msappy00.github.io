function g_05(userInput){
    if (userInput == "Unit 1") {
        randomG = randG(2);
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        ADJArray = [{ADJ: "first", pic:"Level 5/images/first.png"}, {ADJ: "second", pic:"Level 5/images/second.png"}, {ADJ: "third", pic:"Level 5/images/third.png"}, {ADJ: "fourth", pic:"Level 5/images/fourth.png"}, {ADJ: "fifth", pic:"Level 5/images/fifth.png"}, {ADJ: "sixth", pic:"Level 5/images/sixth.png"}, {ADJ: "seventh", pic:"Level 5/images/seventh.png"}, {ADJ: "eighth", pic:"Level 5/images/eighth.png"}, {ADJ: "ninth", pic:"Level 5/images/ninth.png"}, {ADJ: "tenth", pic:"Level 5/images/tenth.png"}, {ADJ: "eleventh", pic:"Level 5/images/eleventh.png"}, {ADJ: "twelfth", pic:"Level 5/images/twelfth.png"}];
        shuffleArray(ADJArray);
        document.getElementById("gPic").src = ADJArray[0].pic;
        verb1 = conjugate_VB(PRPArray[0].PRP, "beVerb");
        verb2 = conjugate_VB(PRPArray[0].RESPONSE, "beVerb");
        sentence = "What grade " + verb1 + " " + PRPArray[0].PRP + " in?";
        document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verb2 + " in the " + ADJArray[0].ADJ + " grade.";
        sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verb2 + " in the " + ADJArray[0].ADJ + " grade.";
        sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + verb2 + " in the " + ADJArray[1].ADJ + " grade.";
        sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + verb2 + " in the " + ADJArray[2].ADJ + " grade.";
        sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + verb2 + " in the " + ADJArray[3].ADJ + " grade.";
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 2") {
        
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 3") {
        randomG = randG(2);
       
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 1") {
        q1Array = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 1";
    } else if (userInput == "Unit 4") {
        
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 5") {
       
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 6") {
        
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 2") {
        q1Array = ["Unit 4", "Unit 5", "Unit 6"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 2";
    } else if (userInput == "Unit 7") {
       
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 8") {
       
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 9") {
       
        gLinks = [''];
        grammarLesson = "";
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
        grammarLesson = "";
    }
    shuffleArray(sentenceArray);
    document.getElementById("g0r1d0").textContent = sentenceArray[0];
    document.getElementById("g0r1d2").textContent = sentenceArray[1];
    document.getElementById("g0r2d0").textContent = sentenceArray[2];
    document.getElementById("g0r2d2").textContent = sentenceArray[3];
    document.getElementById("grammar_links").innerHTML = gLinks;
    document.getElementById("grammar_lesson").innerHTML = grammarLesson;
    document.getElementById('g_request').textContent = sentence;
}