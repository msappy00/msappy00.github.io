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
        randomG = randG(2);
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        verb = conjugate_VB(PRPArray[0].PRP, "doVerb");
        NOUNArray = [{NN: "doctor", pic: "Level 5/images/doctor.png"}, {NN: "nurse", pic: "Level 5/images/nurse.png"}, {NN: "driver", pic: "Level 5/images/driver.png"}, {NN: "police officer", pic: "Level 5/images/police officer.png"}, {NN: "firefighter", pic: "Level 5/images/firefighter.png"}, {NN: "pilot", pic: "Level 5/images/pilot.png"}, {NN: "office worker", pic: "Level 5/images/office worker.png"}, {NN: "housekeeper", pic: "Level 5/images/housekeeper.png"}, {NN: "mail carrier", pic: "Level 5/images/mail carrier.png"}];
        shuffleArray(NOUNArray);
        verb1 = conjugate_VB(PRPArray[0].RESPONSE, "beVerb");
        verb2 = conjugate_VB(PRPArray[1].RESPONSE, "beVerb");
        verb3 = conjugate_VB(PRPArray[2].RESPONSE, "beVerb");
        verb4 = conjugate_VB(PRPArray[3].RESPONSE, "beVerb");
        if (PRPArray[0].RESPONSE == "they") {NOUNPhrase0 = NOUNArray[0].NN + "s"}
        else {NOUNPhrase0 = setDET(NOUNArray[0].NN) + " " + NOUNArray[0].NN}
        if (PRPArray[1].RESPONSE == "they") {NOUNPhrase1 = NOUNArray[0].NN + "s"}
        else {NOUNPhrase1 = setDET(NOUNArray[0].NN) + " " + NOUNArray[0].NN}
        if (PRPArray[2].RESPONSE == "they") {NOUNPhrase2 = NOUNArray[0].NN + "s"}
        else {NOUNPhrase2 = setDET(NOUNArray[0].NN) + " " + NOUNArray[0].NN}
        if (PRPArray[3].RESPONSE == "they") {NOUNPhrase3 = NOUNArray[0].NN + "s"}
        else {NOUNPhrase3 = setDET(NOUNArray[0].NN) + " " + NOUNArray[0].NN}
        if (randomG < 1){
            sentence = "What " + verb + " " + PRPArray[0].PRP + " do?";
            document.getElementById("gPic").src = NOUNArray[0].pic;
            document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verb1 + " " + NOUNPhrase0 + ".";
            sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verb1 + " " + NOUNPhrase0 + ".";
            sentenceArray[1] = capitalize(PRPArray[1].RESPONSE) + " " + verb2 + " " + NOUNPhrase1 + ".";
            sentenceArray[2] = capitalize(PRPArray[2].RESPONSE) + " " + verb3 + " " + NOUNPhrase2 + ".";
            sentenceArray[3] = capitalize(PRPArray[3].RESPONSE) + " " + verb4 + " " + NOUNPhrase3 + ".";
        } else {
            randomG = randG(2);
            if (randomG < 1){
                document.getElementById("gPic").src = NOUNArray[0].pic;
                sentence = capitalize(conjugate_VB(PRPArray[0].PRP, "beVerb")) + " " + PRPArray[0].PRP + " " + NOUNPhrase0 + "?";
                document.getElementById("grammarCheck").value = "Yes, " + PRPArray[0].RESPONSE + " " + verb1 + " " + NOUNPhrase0 + ".";
                sentenceArray[0] = "Yes, " + PRPArray[0].RESPONSE + " " + verb1 + " " + NOUNPhrase0 + ".";
                sentenceArray[1] = "Yes, " + PRPArray[1].RESPONSE + " " + verb2 + " " + NOUNPhrase1 + ".";
                sentenceArray[2] = "Yes, " + PRPArray[2].RESPONSE + " " + verb3 + " " + NOUNPhrase2 + ".";
                sentenceArray[3] = "Yes, " + PRPArray[3].RESPONSE + " " + verb4 + " " + NOUNPhrase3 + ".";
            } else {
                document.getElementById("gPic").src = NOUNArray[1].pic;
                sentence = capitalize(conjugate_VB(PRPArray[0].PRP, "beVerb")) + " " + PRPArray[0].PRP + " " + NOUNPhrase0 + "?";
                document.getElementById("grammarCheck").value = "No, " + PRPArray[0].RESPONSE + " " + verb1 + " not " + NOUNPhrase0 + ".";
                sentenceArray[0] = "No, " + PRPArray[0].RESPONSE + " " + verb1 + " not " + NOUNPhrase0 + ".";
                sentenceArray[1] = "No, " + PRPArray[1].RESPONSE + " " + verb2 + " not " + NOUNPhrase1 + ".";
                sentenceArray[2] = "No, " + PRPArray[2].RESPONSE + " " + verb3 + " not " + NOUNPhrase2 + ".";
                sentenceArray[3] = "No, " + PRPArray[3].RESPONSE + " " + verb4 + " not " + NOUNPhrase3 + ".";
            }
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 3") {
        randomG = randG(2);
        if (randomG < 1){
            time = "today"
        } else {
            weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
            randomG = randG(5);
            time = "on " + weekDays[randomG];
        }
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        verb = conjugate_VB(PRPArray[0].PRP, "doVerb");
        NOUNArray = [{NN: "Chinese", pic: "Level 5/images/Chinese.png"}, {NN: "English", pic: "Level 5/images/English.png"}, {NN: "math", pic: "Level 5/images/math.png"}, {NN: "science", pic: "Level 5/images/science.png"}, {NN: "social studies", pic: "Level 5/images/social studies.png"}, {NN: "music", pic: "Level 5/images/music.png"}, {NN: "art", pic: "Level 5/images/art.png"}];
        shuffleArray(NOUNArray);
        verb1 = conjugate_VB(PRPArray[0].RESPONSE, "haveVerb");
        verb2 = conjugate_VB(PRPArray[1].RESPONSE, "haveVerb");
        verb3 = conjugate_VB(PRPArray[2].RESPONSE, "haveVerb");
        verb4 = conjugate_VB(PRPArray[3].RESPONSE, "haveVerb");
        sentence = "What subjects " + verb + " " + PRPArray[0].PRP + " have " + time + "?";
        document.getElementById("gPic").src = NOUNArray[0].pic;
        document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verb1 + " " + NOUNArray[0].NN + " class " + time + ".";
        sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verb1 + " " + NOUNArray[0].NN + " class " + time + ".";
        sentenceArray[1] = capitalize(PRPArray[1].RESPONSE) + " " + verb2 + " " + NOUNArray[1].NN + " class " + time + ".";
        sentenceArray[2] = capitalize(PRPArray[2].RESPONSE) + " " + verb3 + " " + NOUNArray[2].NN + " class " + time + ".";
        sentenceArray[3] = capitalize(PRPArray[3].RESPONSE) + " " + verb4 + " " + NOUNArray[3].NN + " class " + time + ".";
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 1") {
        q1Array = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 1";
    } else if (userInput == "Unit 4") {
        randomG = randG(2);
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        ADJArray = ["busy", "nervous", "happy", "sad", "angry", "tired"];
        shuffleArray(ADJArray);
        ADVArray = [{ADV: "always", pic: "Level 5/images/always.png"}, {ADV: "usually", pic: "Level 5/images/usually.png"}, {ADV: "often", pic: "Level 5/images/often.png"}, {ADV: "sometimes", pic: "Level 5/images/sometimes.png"}, {ADV: "seldom", pic: "Level 5/images/seldom.png"}, {ADV: "never", pic: "Level 5/images/never.png"}];
        shuffleArray(ADVArray);
        verbArray = ["help", "cry", "study", "play", "dance", "cook", "go hiking", "keep a diary"];
        shuffleArray(verbArray);
        if (randomG < 1){
            sentence = capitalize(PRPArray[0].PRP) + " " + conjugate_VB(PRPArray[0].PRP, "beVerb") + " " + ADVArray[0].ADV + " " + ADJArray[0] + ".";
            document.getElementById("gPic").src = ADVArray[0].pic;
            document.getElementById("grammarCheck").value = sentence;
            sentenceArray[0] = sentence;
            sentenceArray[1] = capitalize(PRPArray[0].PRP) + " " + conjugate_VB(PRPArray[0].PRP, "beVerb") + " " + ADVArray[1].ADV + " " + ADJArray[0] + ".";
            sentenceArray[2] = capitalize(PRPArray[0].PRP) + " " + conjugate_VB(PRPArray[0].PRP, "beVerb") + " " + ADVArray[2].ADV + " " + ADJArray[0] + ".";
            sentenceArray[3] = capitalize(PRPArray[0].PRP) + " " + conjugate_VB(PRPArray[0].PRP, "beVerb") + " " + ADVArray[3].ADV + " " + ADJArray[0] + ".";
        } else {
            verb = verbArray[0].split(" ");
            verb0 = conjugate_VB(PRPArray[0].PRP, verb[0] + "Verb");
            if (verb[1]){
                verb = verb0 + " " +verb.slice(1).join(" ");
            } else {
                verb = verb0;
            }
            sentence = capitalize(PRPArray[0].PRP) + " " + ADVArray[0].ADV + " " + verb + ".";
            document.getElementById("gPic").src = ADVArray[0].pic;
            document.getElementById("grammarCheck").value = sentence;
            sentenceArray[0] = sentence;
            sentenceArray[1] = capitalize(PRPArray[0].PRP) + " " + ADVArray[1].ADV + " " + verb + ".";
            sentenceArray[2] = capitalize(PRPArray[0].PRP) + " " + ADVArray[2].ADV + " " + verb + ".";
            sentenceArray[3] = capitalize(PRPArray[0].PRP) + " " + ADVArray[3].ADV + " " + verb + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 5") {
        randomG = randG(2);
        ADJArray = [{ADJ: "hot", pic: "Level 5/images/hot.png", time:"summer"}, {ADJ: "cold", pic: "Level 5/images/cold.png", time:"winter"}, {ADJ: "warm", pic: "Level 5/images/warm.png", time:"spring"}, {ADJ: "cool", pic: "Level 5/images/cool.png", time:"fall"}];
        shuffleArray(ADJArray);
        document.getElementById("gPic").src = ADJArray[0].pic;
        if (randomG < 1){
            sentence = "Is it always " + ADJArray[0].ADJ + " in " + ADJArray[0].time + "?";
            document.getElementById("grammarCheck").value = "Yes, it is always " + ADJArray[0].ADJ + " in " + ADJArray[0].time + ".";
            sentenceArray[0] = "Yes, it is always " + ADJArray[0].ADJ + " in " + ADJArray[0].time + ".";
            sentenceArray[1] = "Yes, it is always " + ADJArray[1].ADJ + " in " + ADJArray[0].time + ".";
            sentenceArray[2] = "Yes, it is always " + ADJArray[2].ADJ + " in " + ADJArray[0].time + ".";
            sentenceArray[3] = "Yes, it is always " + ADJArray[3].ADJ + " in " + ADJArray[0].time + ".";
        } else {
            sentence = "Is it always " + ADJArray[0].ADJ + " in " + ADJArray[1].time + "?";
            document.getElementById("grammarCheck").value = "No, it is not always " + ADJArray[0].ADJ + " in " + ADJArray[1].time + ".";
            sentenceArray[0] = "No, it is not always " + ADJArray[0].ADJ + " in " + ADJArray[0].time + ".";
            sentenceArray[1] = "No, it is not always " + ADJArray[0].ADJ + " in " + ADJArray[1].time + ".";
            sentenceArray[2] = "No, it is not always " + ADJArray[0].ADJ + " in " + ADJArray[2].time + ".";
            sentenceArray[3] = "No, it is not always " + ADJArray[0].ADJ + " in " + ADJArray[3].time + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 6") {
        randomG = randG(2);
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        verb = conjugate_VB(PRPArray[0].PRP, "doVerb");
        verbArray = [{VB: "do", OBJ: " the laundry", pic: "Level 5/images/do the laundry.png"}, {VB: "sweep", OBJ: " the floor", pic: "Level 5/images/sweep the floor.png"}, {VB: "mop", OBJ: " the floor", pic: "Level 5/images/mop the floor.png"}, {VB: "walk", OBJ: " the dog", pic: "Level 5/images/walk the dog.png"}, {VB: "go", OBJ: " mountain climbing", pic: "Level 5/images/go mountain climbing.png"}, {VB: "play", OBJ: " chess", pic: "Level 5/images/play chess.png"}, {VB: "water", OBJ: " the plants", pic: "Level 5/images/water the plants.png"}, {VB: "take", OBJ: " a walk", pic: "Level 5/images/take a walk.png"}];
        shuffleArray(verbArray);
        timeArray = [" morning", "afternoon", "evening"];
        shuffleArray(timeArray);
        if (randomG < 1){
            document.getElementById("gPic").src = verbArray[0].pic;
            sentence = "What " + verb + " " + PRPArray[0].PRP + " usually do in the " + timeArray[0] + "?";
            document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " usually " + conjugate_VB(PRPArray[0].RESPONSE, verbArray[0].VB + "Verb") + verbArray[0].OBJ + " in the " + timeArray[0] + ".";
            sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " usually " + conjugate_VB(PRPArray[0].RESPONSE, verbArray[0].VB + "Verb") + verbArray[0].OBJ + " in the " + timeArray[0] + ".";
            sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " usually " + conjugate_VB(PRPArray[0].RESPONSE, verbArray[1].VB + "Verb") + verbArray[1].OBJ + " in the " + timeArray[0] + ".";
            sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " usually " + conjugate_VB(PRPArray[0].RESPONSE, verbArray[2].VB + "Verb") + verbArray[2].OBJ + " in the " + timeArray[0] + ".";
            sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " usually " + conjugate_VB(PRPArray[0].RESPONSE, verbArray[3].VB + "Verb") + verbArray[3].OBJ + " in the " + timeArray[0] + ".";
        } else {
            randomG = randG(2);
            sentence = capitalize(verb) + " " + PRPArray[0].PRP + " usually " + verbArray[0].VB + verbArray[0].OBJ + " in the " + timeArray[0] + "?";
            if (randomG < 1){
                document.getElementById("gPic").src = verbArray[0].pic;
                document.getElementById("grammarCheck").value = "Yes, " + PRPArray[0].RESPONSE + " usually " + conjugate_VB(PRPArray[0].RESPONSE, verbArray[0].VB + "Verb") + verbArray[0].OBJ + " in the " + timeArray[0] + ".";
                sentenceArray[0] = "Yes, " + PRPArray[0].RESPONSE + " usually " + conjugate_VB(PRPArray[0].RESPONSE, verbArray[0].VB + "Verb") + verbArray[0].OBJ + " in the " + timeArray[0] + ".";
                sentenceArray[1] = "Yes, " + PRPArray[0].RESPONSE + " usually " + conjugate_VB(PRPArray[0].RESPONSE, verbArray[1].VB + "Verb") + verbArray[1].OBJ + " in the " + timeArray[0] + ".";
                sentenceArray[2] = "Yes, " + PRPArray[0].RESPONSE + " usually " + conjugate_VB(PRPArray[0].RESPONSE, verbArray[2].VB + "Verb") + verbArray[2].OBJ + " in the " + timeArray[0] + ".";
                sentenceArray[3] = "Yes, " + PRPArray[0].RESPONSE + " usually " + conjugate_VB(PRPArray[0].RESPONSE, verbArray[3].VB + "Verb") + verbArray[3].OBJ + " in the " + timeArray[0] + ".";
            } else {
                document.getElementById("gPic").src = verbArray[1].pic;
                document.getElementById("grammarCheck").value = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't" + ".";
                sentenceArray[0] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't" + ".";
                sentenceArray[1] = "No, " + PRPArray[1].RESPONSE + " " + conjugate_VB(PRPArray[1].RESPONSE, "doVerb") + "n't" + ".";
                sentenceArray[2] = "No, " + PRPArray[2].RESPONSE + " " + conjugate_VB(PRPArray[2].RESPONSE, "doVerb") + "n't" + ".";
                sentenceArray[3] = "No, " + PRPArray[3].RESPONSE + " " + conjugate_VB(PRPArray[3].RESPONSE, "doVerb") + "n't" + ".";
            }
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 2") {
        q1Array = ["Unit 4", "Unit 5", "Unit 6"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 2";
    } else if (userInput == "Unit 7") {
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        verb = conjugate_VB(PRPArray[0].PRP, "doVerb");
        freqArray = [" once ", " twice ", " three times "];
        shuffleArray(freqArray);
        timeArray = ["a week.", "a month.", "a year."];
        shuffleArray(timeArray);
        verbArray = [{VB:'play', OBJ:' the piano', pic: "Level 5/images/play the piano.png"}, {VB:'play', OBJ:' cards', pic: "Level 5/images/play cards.png"}, {VB:'go', OBJ:' to the movies', pic: "Level 5/images/go to the movies.png"}, {VB:'go', OBJ:' abroad', pic: "Level 5/images/go abroad.png"}];
        shuffleArray(verbArray);
        document.getElementById("gPic").src = verbArray[0].pic;
            sentence = "How often " + verb + " " + PRPArray[0].PRP + " " + verbArray[0].VB + verbArray[0].OBJ + "?";
            document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + conjugate_VB(PRPArray[0].RESPONSE, verbArray[0].VB + "Verb") + verbArray[0].OBJ + freqArray[0] + timeArray[0];
            sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + conjugate_VB(PRPArray[0].RESPONSE, verbArray[0].VB + "Verb") + verbArray[0].OBJ + freqArray[0] + timeArray[0];
            sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + conjugate_VB(PRPArray[0].RESPONSE, verbArray[1].VB + "Verb") + verbArray[1].OBJ + freqArray[0] + timeArray[0];
            sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + conjugate_VB(PRPArray[0].RESPONSE, verbArray[2].VB + "Verb") + verbArray[2].OBJ + freqArray[0] + timeArray[0];
            sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + conjugate_VB(PRPArray[0].RESPONSE, verbArray[3].VB + "Verb") + verbArray[3].OBJ + freqArray[0] + timeArray[0];
        setTimeout(function(){speak(sentence)}, 2000);
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