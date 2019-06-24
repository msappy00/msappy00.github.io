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
        PRPArray = PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}, {PRP: "your father", RESPONSE: "my father"}, {PRP: "your sister", RESPONSE: "my sister"}];
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
        pronounArray = ["you", "they", "he", "she"];
        verbArray = ["take", "drive", "walk"];
        destinationArray = ["to the park", "to the supermarket", "to the city", "to the countryside"];
        shuffleArray(pronounArray);
        shuffleArray(verbArray);
        if (verbArray[0] == "take") {
            vehicleArray = ["a boat", "a ship", "an airplane", "a helicopter"];
        } else if (verbArray[0] == "drive") {
            vehicleArray = ["a van"];
        } else {
            vehicleArray = [""];
        }
        shuffleArray(vehicleArray);
        shuffleArray(destinationArray);
        answerArray = ["&#x2705;", "&#x274C;"]; // YES or NO
        shuffleArray(answerArray);
        document.getElementById("g0r0d1").innerHTML = answerArray[0];
        if (pronounArray[0] == "you" || pronounArray[0] == "they") {
            document.getElementById("g0r0d0").innerHTML = "Do " + pronounArray[0] + " " + verbArray[0] + " " + vehicleArray[0] + " " + destinationArray[0] + "?";
        } else {
            document.getElementById("g0r0d0").innerHTML = "Does " + pronounArray[0] + " " + verbArray[0] + " " + vehicleArray[0] + " " + destinationArray[0] + "?";
        }
        if (answerArray[0] == "&#x274C;") { // if NO
            vehicleAnswer = ["on foot", "scooter", "motorcycle", "car" , "bus", "bicycle", "MRT", "train", "taxi", "high-speed rail"];
            shuffleArray(vehicleAnswer);
            switch(vehicleAnswer[0]){
                case "on foot":
                    vehicleAnswerText1 = "walk";
                    vehicleAnswerText2 = "";
                    break;
                case "scooter":
                    vehicleAnswerText1 = "ride";
                    vehicleAnswerText2 = "a scooter";
                    break;
                case "motorcycle":
                    vehicleAnswerText1 = "ride";
                    vehicleAnswerText2 = "a motorcycle";
                    break;
                case "car":
                    vehicleAnswerText1 = "drive";
                    vehicleAnswerText2 = "a car";
                    break;
                case "bus":
                    vehicleAnswerText1 = "take";
                    vehicleAnswerText2 = "a bus";
                    break;
                case "bicycle":
                    vehicleAnswerText1 = "ride";
                    vehicleAnswerText2 = "a bicycle";
                    break;
                case "MRT":
                    vehicleAnswerText1 = "take";
                    vehicleAnswerText2 = "the MRT";
                    break;
                case "train":
                    vehicleAnswerText1 = "take";
                    vehicleAnswerText2 = "a train";
                    break;
                case "taxi":
                    vehicleAnswerText1 = "take";
                    vehicleAnswerText2 = "a taxi";
                    break;
                case "high-speed rail":
                    vehicleAnswerText1 = "take";
                    vehicleAnswerText2 = "the high-speed rail";
                    
                    break;
                default:
                    vehicleAnswerText1 = "";
                    vehicleAnswerText2 = "";
                    break;
            }
            document.getElementById("g0r0d5").innerHTML = '<img src="Level 4/images/'+vehicleAnswer[0]+'.png" />';
            switch(pronounArray[0]) {
                case "you":
                    sampleAnswer1 = "No, we don't.";
                    document.getElementById("g0r3d0").innerHTML = "How do you get " + destinationArray[0] + "?";
                    sampleAnswer2 = "We" + " " + vehicleAnswerText1 + " " + vehicleAnswerText2 + " " + destinationArray[0] + ".";
                    break;
                case "they":
                    sampleAnswer1 = "No, they don't.";
                    document.getElementById("g0r3d0").innerHTML = "How do they get " + destinationArray[0] + "?";
                    sampleAnswer2 = "They" + " " + vehicleAnswerText1 + " " + vehicleAnswerText2 + " " + destinationArray[0] + ".";
                    break;
                default:
                    sampleAnswer1 = "No, " + pronounArray[0] + " doesn't.";
                    document.getElementById("g0r3d0").innerHTML = "How does " + pronounArray[0] + " get " + destinationArray[0] + "?";
                    var capitalized = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1);
                    sampleAnswer2 = capitalized + " " + vehicleAnswerText1 + "s " + vehicleAnswerText2 + " " + destinationArray[0] + ".";
                    break;
            }
        } else { // if YES
            document.getElementById("g0r0d5").innerHTML = "";
            switch(pronounArray[0]) {
                case "you":
                    sampleAnswer1 = "Yes, we do.";
                    document.getElementById("g0r3d0").innerHTML = "How do you get " + destinationArray[0] + "?";
                    sampleAnswer2 = "We" + " " + verbArray[0] + " " + vehicleArray[0]+ " " + destinationArray[0] + ".";
                    break;
                case "they":
                    sampleAnswer1 = "Yes, they do.";
                    document.getElementById("g0r3d0").innerHTML = "How do you get " + destinationArray[0] + "?";
                    sampleAnswer2 = "They" + " " + verbArray[0] + " " + vehicleArray[0]+ " " + destinationArray[0] + ".";
                    break;
                default:
                    sampleAnswer1 = "Yes, " + pronounArray[0] + " does.";
                    document.getElementById("g0r3d0").innerHTML = "How does " + pronounArray[0] + " get " + destinationArray[0] + "?";
                    var capitalized = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1);
                    sampleAnswer2 = capitalized + " " + verbArray[0] + "s " + vehicleArray[0] + " " + destinationArray[0] + ".";
                    break;
            }
        }
        document.getElementById("g0r1d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" />';
        document.getElementById("g0r1d1").align = "left";
        document.getElementById("g0r1d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar1()">Example</button>';
        document.getElementById("g0r4d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput2" />';
        document.getElementById("g0r4d1").align = "left";
        document.getElementById("g0r4d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar2()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 1") {
        q1Array = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 1";
    } else if (userInput == "Unit 4") {
        q1Array = [({verb:'exercise', object:'', pic:'<img src="Level 4/images/exercise.png" />'}), ({verb:'read', object:'the newspaper', pic:'<img src="Level 4/images/read the newspaper.png" />'}), ({verb:'take', object:'a nap', pic:'<img src="Level 4/images/take a nap.png" />'}), ({verb:'surf', object:'the Net', pic:'<img src="Level 4/images/surf the Net.png" />'}), ({verb:'keep', object:'a diary', pic:'<img src="Level 4/images/keep my diary.png" />'}), ({verb:'have', object:'a snack', pic:'<img src="Level 4/images/have a snack.png" />'}), ({verb:'play', object:'the piano', pic:'<img src="Level 4/images/play the piano.png" />'}), ({verb:'play', object:'the violin', pic:'<img src="Level 4/images/play the violin.png" />'}), ({verb:'walk', object:'the dog', pic:'<img src="Level 4/images/walk the dog.png" />'})];
        pronounArray = ["you", "they", "he", "she"];
        timeArray = ["morning", "afternoon", "evening"];
        shuffleArray(q1Array);
        shuffleArray(pronounArray);
        shuffleArray(timeArray);
        if (pronounArray[0] == "you" || pronounArray[0] == "they") {
            document.getElementById("g0r0d0").innerHTML = "What do " + pronounArray[0] + " do every " + timeArray[0] + "?";
            if (pronounArray[0] == "you") {
                sampleAnswer = "I " + q1Array[0].verb + " " + q1Array[0].object + " every " + timeArray[0] + ".";
            } else {
                sampleAnswer = "They " + q1Array[0].verb + " " + q1Array[0].object + " every " + timeArray[0] + ".";
            }
        } else {
            document.getElementById("g0r0d0").innerHTML = "What does " + pronounArray[0] + " do every " + timeArray[0] + "?";
            if (q1Array[0].verb == "have") {
                answerVerb = "has";
            } else {
                answerVerb = q1Array[0].verb + "s";
            }
            var capitalized = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1);
            sampleAnswer = capitalized + " " + answerVerb + " " + q1Array[0].object + " every " + timeArray[0] + ".";
        }
        document.getElementById("g0r0d5").innerHTML = q1Array[0].pic;
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 5") {
        vocArray = [({verb:'eating', pic:'<img src="Level 4/images/eat.png" />'}), ({verb:'drinking', pic:'<img src="Level 4/images/drink.png" />'}), ({verb:'cooking', pic:'<img src="Level 4/images/cook.png" />'}), ({verb:'laughing', pic:'<img src="Level 4/images/laugh.png" />'}), ({verb:'drawing', pic:'<img src="Level 4/images/draw.png" />'}), ({verb:'sweeping', pic:'<img src="Level 4/images/sweep.png" />'}), ({verb:'studying', pic:'<img src="Level 4/images/study.png" />'}), ({verb:'driving', pic:'<img src="Level 4/images/drive.png" />'}), ({verb:'writing', pic:'<img src="Level 4/images/write.png" />'}), ({verb:'sleeping', pic:'<img src="Level 4/images/sleep.png" />'}), ({verb:'playing', pic:'<img src="Level 4/images/play.png" />'})];
        shuffleArray(vocArray);
        document.getElementById("gPic").innerHTML = vocArray[0].pic;
        pronounArray = ([{value: "you", verb: "are", qp: "I", qv: "am"}, {value: "they", verb: "are", qp: "they", qv: "are"}, {value: "he", verb: "is", qp: "he", qv: "is"}, {value: "she", verb: "is", qp: "she", qv: "is"}]);
        shuffleArray(pronounArray);
        sentence = "What " + pronounArray[randomG].verb + " " + pronounArray[randomG].value + " doing?";
        document.getElementById("grammarCheck").value = pronounArray[randomG].qp.charAt(0).toUpperCase() + pronounArray[randomG].qp.slice(1) + " " + pronounArray[randomG].qv + " " + vocArray[0].verb + ".";
        document.getElementById("g0r1d0").textContent = pronounArray[0].qp.charAt(0).toUpperCase() + pronounArray[0].qp.slice(1) + " " + pronounArray[0].qv + " " + vocArray[0].verb + ".";
        document.getElementById("g0r1d2").textContent = pronounArray[1].qp.charAt(0).toUpperCase() + pronounArray[1].qp.slice(1) + " " + pronounArray[1].qv + " " + vocArray[0].verb + ".";
        document.getElementById("g0r2d0").textContent = pronounArray[2].qp.charAt(0).toUpperCase() + pronounArray[2].qp.slice(1) + " " + pronounArray[2].qv + " " + vocArray[0].verb + ".";
        document.getElementById("g0r2d2").textContent = pronounArray[3].qp.charAt(0).toUpperCase() + pronounArray[3].qp.slice(1) + " " + pronounArray[3].qv + " " + vocArray[0].verb + ".";
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 6") {
        q1Array = [({verb:'washing', obj:'face', pic:'<img src="Level 4/images/wash my face.png" />'}), ({verb:'brushing', obj:'teeth', pic:'<img src="Level 4/images/brush my teeth.png" />'}), ({verb:'combing', obj:'hair', pic:'<img src="Level 4/images/comb my hair.png" />'}), ({verb:'making', obj:'bed', pic:'<img src="Level 4/images/make my bed.png" />'}), ({verb:'eating', obj:' breakfast', pic:'<img src="Level 4/images/eat breakfast.png" />'}), ({verb:'eating', obj:' lunch', pic:'<img src="Level 4/images/eat lunch.png" />'}), ({verb:'eating', obj:' dinner', pic:'<img src="Level 4/images/eat dinner.png" />'}), ({verb:'washing', obj:' the dishes', pic:'<img src="Level 4/images/wash the dishes.png" />'})];
        pronounArray = [({pro:'you ', poss:' your '}), ({pro:'they ', poss:' their '}), ({pro:'he ', poss:' his '}), ({pro:'she ', poss:' her '})];
        answerArray = ["Yes", "No"];
        shuffleArray(q1Array);
        shuffleArray(pronounArray);
        shuffleArray(answerArray);
        if (q1Array[0].verb == "eating" || q1Array[0].obj == " the dishes") {
            pronounArray[0].poss = '';
        }
        if (pronounArray[0].pro == "you " || pronounArray[0].pro == "they ") {
            document.getElementById("g0r0d0").innerHTML = "Are " + pronounArray[0].pro + q1Array[0].verb + pronounArray[0].poss + q1Array[0].obj + "?";
        } else {
            document.getElementById("g0r0d0").innerHTML = "Is " + pronounArray[0].pro + q1Array[0].verb + pronounArray[0].poss + q1Array[0].obj + "?";
        }
        if (answerArray[0] == "Yes") {
            document.getElementById("g0r0d5").innerHTML = q1Array[0].pic;
            if (pronounArray[0].pro == "you ") {
                sampleAnswer = "Yes, I am.";
            } else if (pronounArray[0].pro == "they ") {
                sampleAnswer = "Yes, they are.";
            } else {
                sampleAnswer = "Yes, " + pronounArray[0].pro + "is.";
            }
        } else {
            document.getElementById("g0r0d5").innerHTML = q1Array[1].pic;
            if (pronounArray[0].pro == "you ") {
                sampleAnswer = "No, I am not.";
            } else if (pronounArray[0].pro == "they ") {
                sampleAnswer = "No, they aren't.";
            } else {
                sampleAnswer = "No, " + pronounArray[0].pro + "isn't.";
            }
        }
        
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
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
        q1Array = ["museum", "post office", "restaurant", "movie theater", "bakery", "hospital", "library", "clinic", "gas station", "toy store"];
        NOUNArray = [{NN:"police station", pic:"Level 4/images/police station.png"}, {NN:"fire station", pic:"Level 4/images/fire station.png"}, {NN:"MRT station", pic:"Level 4/images/MRT station.png"}, {NN:"bus stop", pic:"Level 4/images/bus stop.png"}, {NN:"bank", pic:"Level 4/images/bank.png"}, {NN:"bookstore", pic:"Level 4/images/bookstore.png"}, {NN:"convenience store", pic:"Level 4/images/convenience store.png"}, {NN:"department store", pic:"Level 4/images/department store.png"}];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").src = NOUNArray[0].pic;
        if (randomG < 1) {
            sentence = "Is there a " + NOUNArray[0].NN + " near the " + NOUNArray[1].NN + "?";
            document.getElementById("grammarCheck").value = "Yes, there is a " + NOUNArray[0].NN + " near the " + NOUNArray[1].NN + ".";
            sentenceArray[0] = "Yes, there is a " + NOUNArray[0].NN + " near the " + NOUNArray[1].NN + ".";
            sentenceArray[1] = "Yes, there is a " + NOUNArray[1].NN + " near the " + NOUNArray[0].NN + ".";
            sentenceArray[2] = "Yes, there is a " + NOUNArray[2].NN + " near the " + NOUNArray[1].NN + ".";
            sentenceArray[3] = "Yes, there is a " + NOUNArray[3].NN + " near the " + NOUNArray[1].NN + ".";
        } else {
            sentence = "Is there a " + NOUNArray[1].NN + " near the " + NOUNArray[2].NN + "?";
            document.getElementById("grammarCheck").value = "No, there is not a " + NOUNArray[1].NN + " near the " + NOUNArray[2].NN + ".";
            sentenceArray[0] = "No, there is not a " + NOUNArray[0].NN + " near the " + NOUNArray[2].NN + ".";
            sentenceArray[1] = "No, there is not a " + NOUNArray[1].NN + " near the " + NOUNArray[2].NN + ".";
            sentenceArray[2] = "No, there is not a " + NOUNArray[2].NN + " near the " + NOUNArray[1].NN + ".";
            sentenceArray[3] = "No, there is not a " + NOUNArray[3].NN + " near the " + NOUNArray[2].NN + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = ['<a href="Level 4/images/city2.png" target="_newtab">City Buildings</a>'];
        grammarLesson = "";
    } else if (userInput == "Unit 9") {
        PRPArray = ["I", "we", "they", "he", "she"];
        shuffleArray(PRPArray);
        NOUNArray = ["police station", "fire station", "MRT station", "bus stop", "bank", "bookstore", "convenience store", "department store", "police station", "fire station", "MRT station", "bus stop", "bank", "bookstore", "convenience store", "department store"];
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