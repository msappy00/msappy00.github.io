function g_04(userInput){
    if (userInput == "Unit 1") {
        randomG = randG(2);
        PRPArray = PRPArray = [{PRP: "I", RESPONSE: "you"}, {PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        timeArray = [{time:"1:00", text:"one o'clock"}, {time:"1:30", text:"one thirty"}, {time:"2:00", text: "two o'clock"}, {time:"2:30", text:"two thirty"}, {time:"3:00", text:"three o'clock"}, {time:"3:30", text:"three thirty"}, {time:"4:00", text:"four o'clock"}, {time:"4:30", text:"four thirty"}, {time:"5:00", text:"five o'clock"}, {time:"5:30", text:"five thirty"}, {time:"6:00", text:"six o'clock"}, {time:"6:30", text:"six thirty"}, {time:"7:00", text:"seven o'clock"}, {time:"7:30", text:"seven thirty"}, {time:"8:00", text:"eight o'clock"}, {time:"8:30", text:"eight thirty"}, {time:"9:00", text:"nine o'clock"}, {time:"9:30", text:"nine thirty"}, {time:"10:00", text:"ten o'clock"}, {time:"10:30", text:"ten thirty"}, {time:"11:00", text:"eleven o'clock"}, {time:"11:30", text:"eleven thirty"}, {time:"12:00", text:"twelve o'clock"}, {time:"12:30", text:"twelve thirty"}];
        shuffleArray(timeArray);
        document.getElementById("altText").textContent = timeArray[0].time;
        verbArray = [{VB: "get", RP: "up"}, {VB: "go", RP: "to school"}, {VB: "go", RP: "home"}, {VB: "do", RP: "homework"}, {VB: "take", RP: "a bath"}, {VB: "go", RP: "to bed"}, {VB: "have", RP: "English class"}];            
        shuffleArray(verbArray);
        if (randomG < 1) {
            sentence = "What time is it?";
            document.getElementById("grammarCheck").value = "It's " + timeArray[0].text + ".";
            sentenceArray[0] = "It's " + timeArray[0].text + ".";
            sentenceArray[1] = "It's " + timeArray[1].text + ".";
            sentenceArray[2] = "It's " + timeArray[2].text + ".";
            sentenceArray[3] = "It's " + timeArray[3].text + ".";
        } else {
            sentence = "What time " + conjugate_VB(PRPArray[0].PRP, "doVerb") + " " + PRPArray[0].PRP + " " + verbArray[0].VB + " " + verbArray[0].RP + "?";
            temp = verbArray[0].VB + "Verb";
            verb = conjugate_VB(PRPArray[0].RESPONSE, temp);
            document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + verbArray[0].RP + " at " + timeArray[0].text + ".";
            sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + verbArray[0].RP + " at " + timeArray[0].text + ".";
            sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + verbArray[0].RP + " at " + timeArray[1].text + ".";
            sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + verbArray[0].RP + " at " + timeArray[2].text + ".";
            sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + verbArray[0].RP + " at " + timeArray[3].text + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = ['<a href="http://scratch.mit.edu/projects/64711462/" target="_newtab">Scratch: What Time Is It?</a>'];
        grammarLesson = "";
    } else if (userInput == "Unit 2") {
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}, {PRP: "your father", RESPONSE: "my father"}, {PRP: "your sister", RESPONSE: "my sister"}];
        shuffleArray(PRPArray);
        NOUNArray = [{NN:'on foot', pic:"Level 4/images/on foot.png"}, {NN:'by scooter', pic:"Level 4/images/scooter.png"}, {NN:'by motorcycle', pic:"Level 4/images/motorcycle.png"}, {NN:'by car', pic:"Level 4/images/car.png"}, {NN:'by bus', pic:"Level 4/images/bus.png"}, {NN:'by bicycle', pic:"Level 4/images/bicycle.png"}, {NN:'by MRT', pic:"Level 4/images/MRT.png"}, {NN:'by train', pic:"Level 4/images/train.png"}, {NN:'by taxi', pic:"Level 4/images/taxi.png"}, {NN:'by high-speed rail', pic:"Level 4/images/high-speed rail.png"}];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").src = NOUNArray[0].pic;
        verbArray = [{VB: "go", NN: " work"}, {VB: "go", NN: " school"}];
        shuffleArray(verbArray);
        verb = conjugate_VB(PRPArray[0].PRP, "doVerb");
        sentence = "How " + verb + " " + PRPArray[0].PRP + " go to " + verbArray[0].NN + "?";
        verb = conjugate_VB(PRPArray[0].PRP, "goVerb");
        document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verb + " to " + verbArray[0].NN + " " + NOUNArray[0].NN + ".";
        sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " to " + verbArray[0].NN + " " + NOUNArray[0].NN + ".";
        sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " to " + verbArray[0].NN + " " + NOUNArray[1].NN + ".";
        sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " to " + verbArray[0].NN + " " + NOUNArray[2].NN + ".";
        sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " to " + verbArray[0].NN + " " + NOUNArray[3].NN + ".";
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = ['<a href="http://www.classtools.net/QR/teacher.php?fold=7&fname=kfNhe">QR Challenge</a><br><a href="http://scratch.mit.edu/projects/66810966/" target="_newtab">Scratch: B4U2 Vocab</a>'];
        grammarLesson = "";
    } else if (userInput == "Unit 3") {
        randomG = randG(2);
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "we", RESPONSE: "we"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        verbArray = [{VB:"take", RP:" a boat", pic:"Level 4/images/boat.png"}, {VB:"take", RP:" a ship", pic:"Level 4/images/ship.png"}, {VB:"take", RP:" an airplane", pic:"Level 4/images/airplane.png"}, {VB:"take", RP:" a helicopter", pic:"Level 4/images/helicopter.png"}, {VB:"take", RP:" the subway", pic:"Level 4/images/subway.png"}, {VB:"drive", RP:" a van", pic:"Level 4/images/van.png"}, {VB:"walk", RP:" ", pic:"Level 4/images/walk.png"}];
        shuffleArray(verbArray);
        document.getElementById("gPic").src = verbArray[0].pic;
        locArray = [" to the park", " to the supermarket", " to the city", " to the countryside"];
        shuffleArray(locArray);
        verb = conjugate_VB(PRPArray[0].PRP, "doVerb");
        if (randomG < 1){
            sentence = capitalize(verb) + " " + PRPArray[0].PRP + " " + verbArray[0].VB + verbArray[0].RP + locArray[0] + "?";
            temp = verbArray[0].VB + "Verb";
            verb = conjugate_VB(PRPArray[0].RESPONSE, temp);
            document.getElementById("grammarCheck").value = "Yes, " + PRPArray[0].RESPONSE + " " + verb + verbArray[0].RP + locArray[0] + ".";
            sentenceArray[0] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + verbArray[0].RP + locArray[0] + ".";
            temp = verbArray[1].VB + "Verb";
            verb = conjugate_VB(PRPArray[0].RESPONSE, temp);
            sentenceArray[1] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + verbArray[1].RP + locArray[0] + ".";
            temp = verbArray[2].VB + "Verb";
            verb = conjugate_VB(PRPArray[0].RESPONSE, temp);
            sentenceArray[2] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + verbArray[2].RP + locArray[0] + ".";
            temp = verbArray[3].VB + "Verb";
            verb = conjugate_VB(PRPArray[0].RESPONSE, temp);
            sentenceArray[3] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + verbArray[3].RP + locArray[0] + ".";
        } else {
            sentence = capitalize(verb) + " " + PRPArray[0].PRP + " " + verbArray[1].VB + verbArray[1].RP + locArray[0] + "?";
            verb = conjugate_VB(PRPArray[0].RESPONSE, "doVerb");
            document.getElementById("grammarCheck").value = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't " + verbArray[1].VB + verbArray[1].RP + locArray[0] + ".";
            sentenceArray[0] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't " + verbArray[0].VB + verbArray[0].RP + locArray[0] + ".";
            sentenceArray[1] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't " + verbArray[1].VB + verbArray[1].RP + locArray[0] + ".";
            sentenceArray[2] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't " + verbArray[2].VB + verbArray[2].RP + locArray[0] + ".";
            sentenceArray[3] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't " + verbArray[3].VB + verbArray[3].RP + locArray[0] + ".";
        }
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
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "you", RESPONSE: "we"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        verbArray = [{VB:'exercise', RP:'', pic:"Level 4/images/exercise.png"}, {VB:'read', RP:'the newspaper', pic:"Level 4/images/read the newspaper.png"}, {VB:'take', RP:'a nap', pic:"Level 4/images/take a nap.png"}, {VB:'surf', RP:'the Net', pic:"Level 4/images/surf the Net.png"}, {VB:'keep', RP:'a diary', pic:"Level 4/images/keep my diary.png"}, {VB:'have', RP:'a snack', pic:"Level 4/images/have a snack.png"}, {VB:'play', RP:'the piano', pic:"Level 4/images/play the piano.png"}, {VB:'play', RP:'the violin', pic:"Level 4/images/play the violin.png"}, {VB:'walk', RP:'the dog', pic:"Level 4/images/walk the dog.png"}];
        shuffleArray(verbArray);
        document.getElementById("gPic").src = verbArray[0].pic;
        timeArray = ["morning", "afternoon", "evening"];
        shuffleArray(timeArray);
        verb = conjugate_VB(PRPArray[0].PRP, "doVerb");
        sentence = "What " + verb + " " + PRPArray[0].PRP + " do every " + timeArray[0] + "?";
        temp = verbArray[0].VB + "Verb";
        verb = conjugate_VB(PRPArray[0].RESPONSE, temp);
        document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + verbArray[0].RP + " every " + timeArray[0] + ".";
        sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + verbArray[0].RP + " every " + timeArray[0] + ".";
        temp = verbArray[1].VB + "Verb";
        verb = conjugate_VB(PRPArray[0].RESPONSE, temp);
        sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + verbArray[1].RP + " every " + timeArray[0] + ".";
        temp = verbArray[2].VB + "Verb";
        verb = conjugate_VB(PRPArray[0].RESPONSE, temp);
        sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + verbArray[2].RP + " every " + timeArray[0] + ".";
        temp = verbArray[3].VB + "Verb";
        verb = conjugate_VB(PRPArray[0].RESPONSE, temp);
        sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + verbArray[3].RP + " every " + timeArray[0] + ".";
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 5") {
        verbArray = [{VBG:'eating', pic:"Level 4/images/eat.png"}, {VBG:'drinking', pic:"Level 4/images/drink.png"}, {VBG:'cooking', pic:"Level 4/images/cook.png"}, {VBG:'laughing', pic:"Level 4/images/laugh.png"}, {VBG:'drawing', pic:"Level 4/images/draw.png"}, {VBG:'sweeping', pic:"Level 4/images/sweep.png"}, {VBG:'studying', pic:"Level 4/images/study.png"}, {VBG:'driving', pic:"Level 4/images/drive.png"}, {VBG:'writing', pic:"Level 4/images/write.png"}, {VBG:'sleeping', pic:"Level 4/images/sleep.png"}, {VBG:'playing', pic:"Level 4/images/play.png"}];
        shuffleArray(verbArray);
        document.getElementById("gPic").src = verbArray[0].pic;
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "you", RESPONSE: "we"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}, {PRP:"Lumi", RESPONSE: "Lumi"}];
        shuffleArray(PRPArray);
        verb = conjugate_VB(PRPArray[0].PRP, "beVerb");
        sentence = "What " + verb + " " + PRPArray[0].PRP + " doing?";
        verb = conjugate_VB(PRPArray[0].RESPONSE, "beVerb");
        document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + verbArray[0].VBG + ".";
        sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + verbArray[0].VBG + ".";
        sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + verbArray[1].VBG + ".";
        sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + verbArray[2].VBG + ".";
        sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + verbArray[3].VBG + ".";
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 6") {
        randomG = randG(2);
        PRPArray = [{PRP: "you", P1:"your", RESPONSE: "I", P2:"my"}, {PRP: "you", P1:"your", RESPONSE: "we", P2:"our"}, {PRP: "they", P1:"their", RESPONSE: "they", P2:"their"}, {PRP: "he", P1:"his", RESPONSE: "he", P2:"his"}, {PRP: "she", P1:"her", RESPONSE: "she", P2:"her"}];
        shuffleArray(PRPArray);
        verbArray = [{VBG:'washing', RP:'face', pic:"Level 4/images/wash my face.png"}, {VBG:'brushing', RP:'teeth', pic:"Level 4/images/brush my teeth.png"}, {VBG:'combing', RP:'hair', pic:"Level 4/images/comb my hair.png"}, {VBG:'making', RP:'bed', pic:"Level 4/images/make my bed.png"}, {VBG:'eating', RP:' breakfast', pic:"Level 4/images/eat breakfast.png"}, {VBG:'eating', RP:' lunch', pic:"Level 4/images/eat lunch.png"}, {VBG:'eating', RP:' dinner', pic:"Level 4/images/eat dinner.png"}, {VBG:'washing', RP:' the dishes', pic:"Level 4/images/wash the dishes.png"}];
        shuffleArray(verbArray);
        document.getElementById("gPic").src = verbArray[0].pic;
        verb = conjugate_VB(PRPArray[0].PRP, "beVerb");
        PRP$List = ["face", "teeth", "hair", "bed"];
        if (PRP$List.includes(verbArray[0].RP)){temp1 = " " + PRPArray[0].P1 + " " + verbArray[0].RP;}
        if (PRP$List.includes(verbArray[1].RP)){temp2 = " " + PRPArray[0].P1 + " " + verbArray[1].RP;}
        if (PRP$List.includes(verbArray[0].RP)){verbArray[0].RP = " " + PRPArray[0].P2 + " " + verbArray[0].RP;}
        if (PRP$List.includes(verbArray[1].RP)){verbArray[1].RP = " " + PRPArray[0].P2 + " " + verbArray[1].RP;}
        if (PRP$List.includes(verbArray[2].RP)){verbArray[2].RP = " " + PRPArray[0].P2 + " " + verbArray[2].RP;}
        if (PRP$List.includes(verbArray[3].RP)){verbArray[3].RP = " " + PRPArray[0].P2 + " " + verbArray[3].RP;}
        if (PRP$List.includes(verbArray[4].RP)){verbArray[4].RP = " " + PRPArray[0].P2 + " " + verbArray[4].RP;}
        if (randomG < 1){
            sentence = capitalize(verb) + " " + PRPArray[0].PRP + " " + verbArray[0].VBG + " " + temp1 + "?";
            verb = conjugate_VB(PRPArray[0].RESPONSE, "beVerb");
            document.getElementById("grammarCheck").value = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " " + verbArray[0].VBG + verbArray[0].RP + ".";
            sentenceArray[0] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " " + verbArray[0].VBG + verbArray[0].RP + ".";
            sentenceArray[1] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " " + verbArray[1].VBG + verbArray[1].RP + ".";
            sentenceArray[2] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " " + verbArray[2].VBG + verbArray[2].RP + ".";
            sentenceArray[3] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " " + verbArray[3].VBG + verbArray[3].RP + ".";
        } else {
            sentence = capitalize(verb) + " " + PRPArray[0].PRP + " " + verbArray[1].VBG + " " + temp2 + "?";
            verb = conjugate_VB(PRPArray[0].RESPONSE, "beVerb");
            document.getElementById("grammarCheck").value = "No, " + PRPArray[0].RESPONSE + " " + verb + " not " + verbArray[1].VBG + verbArray[1].RP + ".";
            sentenceArray[0] = "No, " + PRPArray[0].RESPONSE + " " + verb + " not " + verbArray[1].VBG + verbArray[1].RP + ".";
            sentenceArray[1] = "No, " + PRPArray[0].RESPONSE + " " + verb + " not " + verbArray[2].VBG + verbArray[2].RP + ".";
            sentenceArray[2] = "No, " + PRPArray[0].RESPONSE + " " + verb + " not " + verbArray[3].VBG + verbArray[3].RP + ".";
            sentenceArray[3] = "No, " + PRPArray[0].RESPONSE + " " + verb + " not " + verbArray[4].VBG + verbArray[4].RP + ".";
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
        randomG = randG(3);
        NOUNArray = [{NN:"police station", pic:"Level 4/images/police station.png"}, {NN:"fire station", pic:"Level 4/images/fire station.png"}, {NN:"MRT station", pic:"Level 4/images/MRT station.png"}, {NN:"bus stop", pic:"Level 4/images/bus stop.png"}, {NN:"bank", pic:"Level 4/images/bank.png"}, {NN:"bookstore", pic:"Level 4/images/bookstore.png"}, {NN:"convenience store", pic:"Level 4/images/convenience store.png"}, {NN:"department store", pic:"Level 4/images/department store.png"}];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").src = NOUNArray[0].pic;
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        if (randomG == 0) {
            if (PRPArray[0].PRP == "you"){
                sentence = "Where are you going?"
                document.getElementById("grammarCheck").value = "I am going to the " + NOUNArray[0].NN + ".";
                sentenceArray[0] = "I am going to the " + NOUNArray[0].NN + ".";
                sentenceArray[1] = "I am going to the " + NOUNArray[1].NN + ".";
                sentenceArray[2] = "I am going to the " + NOUNArray[2].NN + ".";
                sentenceArray[3] = "I am going to the " + NOUNArray[3].NN + ".";
            } else {
                sentence = "Where is " + PRPArray[0].PRP + " going?"
                document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " is going to the " + NOUNArray[0].NN + ".";
                sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " is going to the " + NOUNArray[0].NN + ".";
                sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " is going to the " + NOUNArray[1].NN + ".";
                sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " is going to the " + NOUNArray[2].NN + ".";
                sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " is going to the " + NOUNArray[3].NN + ".";
            }
        } else if (randomG == 1) {
            sentence = "Where is the " + NOUNArray[0].NN + "?";
            document.getElementById("grammarCheck").value = "The " + NOUNArray[0].NN + " is next to the " + NOUNArray[1].NN + ".";
            sentenceArray[0] = "The " + NOUNArray[0].NN + " is next to the " + NOUNArray[1].NN + ".";
            sentenceArray[1] = "The " + NOUNArray[1].NN + " is next to the " + NOUNArray[2].NN + ".";
            sentenceArray[2] = "The " + NOUNArray[2].NN + " is next to the " + NOUNArray[1].NN + ".";
            sentenceArray[3] = "The " + NOUNArray[3].NN + " is next to the " + NOUNArray[1].NN + ".";
        } else {
            sentence = "Where is the " + NOUNArray[0].NN + "?";
            document.getElementById("grammarCheck").value = "The " + NOUNArray[0].NN + " is across from the " + NOUNArray[1].NN + ".";
            sentenceArray[0] = "The " + NOUNArray[0].NN + " is across from the " + NOUNArray[1].NN + ".";
            sentenceArray[1] = "The " + NOUNArray[1].NN + " is across from the " + NOUNArray[2].NN + ".";
            sentenceArray[2] = "The " + NOUNArray[2].NN + " is across from the " + NOUNArray[1].NN + ".";
            sentenceArray[3] = "The " + NOUNArray[3].NN + " is across from the " + NOUNArray[1].NN + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = ['<a href="Level 4/images/city_buildings.png" target="_newtab">City Buildings</a>'];
        grammarLesson = "";
    } else if (userInput == "Unit 8") {
        randomG = randG(2);
        NOUNArray = [{NN:"police station", pic:"Level 4/images/police station.png"}, {NN:"fire station", pic:"Level 4/images/fire station.png"}, {NN:"MRT station", pic:"Level 4/images/MRT station.png"}, {NN:"bus stop", pic:"Level 4/images/bus stop.png"}, {NN:"bank", pic:"Level 4/images/bank.png"}, {NN:"bookstore", pic:"Level 4/images/bookstore.png"}, {NN:"convenience store", pic:"Level 4/images/convenience store.png"}, {NN:"department store", pic:"Level 4/images/department store.png"}];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").src = NOUNArray[0].pic;
        DET0 = setDET(NOUNArray[0].NN);
        DET1 = setDET(NOUNArray[1].NN);
        DET2 = setDET(NOUNArray[2].NN);
        DET3 = setDET(NOUNArray[3].NN);
        if (randomG < 1) {
            sentence = "Is there " + DET0 + " " + NOUNArray[0].NN + " near the " + NOUNArray[1].NN + "?";
            document.getElementById("grammarCheck").value = "Yes, there is " + DET0 + " " + NOUNArray[0].NN + " near the " + NOUNArray[1].NN + ".";
            sentenceArray[0] = "Yes, there is " + DET0 + " " + NOUNArray[0].NN + " near the " + NOUNArray[1].NN + ".";
            sentenceArray[1] = "Yes, there is " + DET1 + " " + NOUNArray[1].NN + " near the " + NOUNArray[0].NN + ".";
            sentenceArray[2] = "Yes, there is " + DET2 + " " + NOUNArray[2].NN + " near the " + NOUNArray[1].NN + ".";
            sentenceArray[3] = "Yes, there is " + DET3 + " " + NOUNArray[3].NN + " near the " + NOUNArray[1].NN + ".";
        } else {
            sentence = "Is there " + DET1 + " " + NOUNArray[1].NN + " near the " + NOUNArray[2].NN + "?";
            document.getElementById("grammarCheck").value = "No, there is not " + DET1 + " " + NOUNArray[1].NN + " near the " + NOUNArray[2].NN + ".";
            sentenceArray[0] = "No, there is not " + DET0 + " " + NOUNArray[0].NN + " near the " + NOUNArray[2].NN + ".";
            sentenceArray[1] = "No, there is not " + DET1 + " " + NOUNArray[1].NN + " near the " + NOUNArray[2].NN + ".";
            sentenceArray[2] = "No, there is not " + DET2 + " " + NOUNArray[2].NN + " near the " + NOUNArray[1].NN + ".";
            sentenceArray[3] = "No, there is not " + DET3 + " " + NOUNArray[3].NN + " near the " + NOUNArray[2].NN + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = ['<a href="Level 4/images/city2.png" target="_newtab">City Buildings</a>'];
        grammarLesson = "";
    } else if (userInput == "Unit 9") {
        PRPArray = ["I", "we", "they", "he", "she"];
        shuffleArray(PRPArray);
        NOUNArray = ["police station", "fire station", "MRT station", "bus stop", "bank", "bookstore", "convenience store", "department store", "museum", "post office", "restaurant", "movie theater", "bakery", "hospital", "library", "clinic", "gas station", "toy store"];
        shuffleArray(NOUNArray);
        verbArray = ["go straight", "turn right", "turn left"];
        shuffleArray(verbArray);
        document.getElementById("gPic").src = "Level 4/images/" + verbArray[0] + ".png";
        lightArray = ["first traffic light.", "second traffic light.", "third traffic light."];
        shuffleArray(lightArray);
        locArray = ["on the left side.", "on the right side.", "at the corner."];
        shuffleArray(locArray);
        document.getElementById("gInstructions").textContent = capitalize(verbArray[0]) + " at the " + lightArray[0];
        sentence = "How can " + PRPArray[0] + " get to the " + NOUNArray[0] + "?";
        document.getElementById("grammarCheck").value = "The " + NOUNArray[0] + " is " + locArray[0];
        sentenceArray[0] = "The " + NOUNArray[0] + " is " + locArray[0];
        sentenceArray[1] = "The " + NOUNArray[1] + " is " + locArray[0];
        sentenceArray[2] = "The " + NOUNArray[2] + " is " + locArray[0];
        sentenceArray[3] = "The " + NOUNArray[3] + " is " + locArray[0];
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = ['<a href="Level 4/images/city3.png" target="_newtab">City Buildings</a>'];
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