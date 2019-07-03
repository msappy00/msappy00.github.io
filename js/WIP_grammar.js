if (level_id == "Level 5") {
    if (userInput == "Unit 1") {
        vocArray = [({voc:'first', pic:'<img src="Level 5/images/second.png" />'}), ({voc:'third', pic:'<img src="Level 5/images/third.png" />'}), ({voc:'fourth', pic:'<img src="Level 5/images/fourth.png" />'}), ({voc:'fifth', pic:'<img src="Level 5/images/fifth.png" />'}),({voc:'sixth', pic:'<img src="Level 5/images/sixth.png" />'}),({voc:'seventh', pic:'<img src="Level 5/images/seventh.png" />'}),({voc:'eighth', pic:'<img src="Level 5/images/eighth.png" />'}), ({voc:'ninth', pic:'<img src="Level 5/images/ninth.png" />'}), ({voc:'tenth', pic:'<img src="Level 5/images/tenth.png" />'}), ({voc:'eleventh', pic:'<img src="Level 5/images/eleventh.png" />'}), ({voc:'twelfth', pic:'<img src="Level 5/images/twelfth.png" />'})];
        shuffleArray(vocArray);
        document.getElementById("g0r0d5").innerHTML = vocArray[0].pic;
        pronounArray = ["I", "you", "he", "she"];
        shuffleArray(pronounArray);
        if (pronounArray[0] == "I") {
            var pronoun = "you";
        } else if (pronounArray[0] == "you") {
            var pronoun = "I";
        } else {
            var pronoun = pronounArray[0];
        }
        choiceArrayInt = 0;
        while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 3)};
        if (choiceArrayInt == 1){
            if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                document.getElementById("g0r0d0").innerHTML = "What grade is " + pronounArray[0] + " in?";
                sampleAnswer = pronoun.toUpperCase().charAt(0).toUpperCase() + pronoun.slice(1) + " is in the " + vocArray[0].voc + " grade.";
            } else if (pronounArray[0] == "I"){
                document.getElementById("g0r0d0").innerHTML = "What grade am " + pronounArray[0] + " in?";
                sampleAnswer = "You are in the " + vocArray[0].voc + " grade.";
            } else {
                document.getElementById("g0r0d0").innerHTML = "What grade are " + pronounArray[0] + " in?";
                sampleAnswer = "I am in the " + vocArray[0].voc + " grade.";
            }
        } else {
            if (pronounArray[0] == "I"){
                document.getElementById("g0r0d0").innerHTML = "Am I in the " + vocArray[0].voc + " grade?";
            }
            else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                document.getElementById("g0r0d0").innerHTML = "Is " + pronounArray[0] + " in the " + vocArray[0].voc + " grade?";
            } else {
                document.getElementById("g0r0d0").innerHTML = "Are you in the " + vocArray[0].voc + " grade?";
            }
            q2Array = [vocArray[0], vocArray[1]];
            shuffleArray(q2Array);
            if (q2Array[0] == vocArray[0]) {
                document.getElementById("g0r0d5").innerHTML = q2Array[0].pic;
                if (pronounArray[0] == "I"){
                    sampleAnswer = "Yes, you are.";
                } else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    sampleAnswer = "Yes, " + pronoun + " is.";
                } else {
                    sampleAnswer = "Yes, I am.";
                }
            } else {
                document.getElementById("g0r0d5").innerHTML = q2Array[0].pic;
                if (pronounArray[0] == "I"){
                    sampleAnswer = "No, you aren't.";
                } else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    sampleAnswer = "No, " + pronoun + " isn't.";
                } else {
                    sampleAnswer = "No, I am not.";
                }
            }
        }
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        grammarLesson = "";
    } else if (userInput == "Unit 2") {
        vocArray = [({voc:'a doctor', pic:'<img src="Level 5/images/doctor.png" />'}), ({voc:'a nurse', pic:'<img src="Level 5/images/nurse.png" />'}), ({voc:'a driver', pic:'<img src="Level 5/images/driver.png" />'}), ({voc:'a police officer', pic:'<img src="Level 5/images/police officer.png" />'}),({voc:'a firefighter', pic:'<img src="Level 5/images/firefighter.png" />'}),({voc:'a pilot', pic:'<img src="Level 5/images/pilot.png" />'}),({voc:'an office worker', pic:'<img src="Level 5/images/office worker.png" />'}), ({voc:'a housekeeper', pic:'<img src="Level 5/images/housekeeper.png" />'}), ({voc:'a mail carrier', pic:'<img src="Level 5/images/mail carrier.png" />'})];
        shuffleArray(vocArray);
        document.getElementById("g0r0d5").innerHTML = vocArray[0].pic;
        pronounArray = ["I", "you", "he", "she"];
        shuffleArray(pronounArray);
        if (pronounArray[0] == "I") {
            var pronoun = "you";
        } else if (pronounArray[0] == "you") {
            var pronoun = "I";
        } else {
            var pronoun = pronounArray[0];
        }
        choiceArrayInt = 0;
        while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 3)};
        if (choiceArrayInt == 1){
            if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                document.getElementById("g0r0d0").innerHTML = "What does " + pronounArray[0] + " do?";
                sampleAnswer = pronoun.toUpperCase().charAt(0).toUpperCase() + pronoun.slice(1) + " is " + vocArray[0].voc + ".";
            } else {
                document.getElementById("g0r0d0").innerHTML = "What do " + pronounArray[0] + " do?";
                if (pronounArray[0] == "I"){
                    sampleAnswer = "You are " + vocArray[0].voc + ".";
                } else {
                    sampleAnswer = "I am " + vocArray[0].voc + ".";
                }
            }
        } else {
            if (pronounArray[0] == "I"){
                document.getElementById("g0r0d0").innerHTML = "Am I " + vocArray[0].voc + "?";
            }
            else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                document.getElementById("g0r0d0").innerHTML = "Is " + pronounArray[0] + " " + vocArray[0].voc + "?";
            } else {
                document.getElementById("g0r0d0").innerHTML = "Are you " + vocArray[0].voc + "?";
            }
            q2Array = [vocArray[0], vocArray[1]];
            shuffleArray(q2Array);
            if (q2Array[0] == vocArray[0]) {
                document.getElementById("g0r0d5").innerHTML = q2Array[0].pic;
                if (pronounArray[0] == "I"){
                    sampleAnswer = "Yes, you are.";
                } else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    sampleAnswer = "Yes, " + pronoun + " is.";
                } else {
                    sampleAnswer = "Yes, I am.";
                }
            } else {
                document.getElementById("g0r0d5").innerHTML = q2Array[0].pic;
                if (pronounArray[0] == "I"){
                    sampleAnswer = "No, you aren't.";
                } else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    sampleAnswer = "No, " + pronoun + " isn't.";
                } else {
                    sampleAnswer = "No, I am not.";
                }
            }
        }
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 3") {
        vocArray = [({voc:'Chinese', pic:'<img src="Level 5/images/Chinese.png" />'}), ({voc:'English', pic:'<img src="Level 5/images/English.png" />'}), ({voc:'math', pic:'<img src="Level 5/images/math.png" />'}), ({voc:'science', pic:'<img src="Level 5/images/science.png" />'}), ({voc:'social studies', pic:'<img src="Level 5/images/social studies.png" />'}), ({voc:'music', pic:'<img src="Level 5/images/music.png" />'}), ({voc:'art', pic:'<img src="Level 5/images/art.png" />'}), ({voc:'P.E.', pic:'<img src="Level 5/images/PE.png" />'})];
        shuffleArray(vocArray);
        document.getElementById("g0r0d5").innerHTML = vocArray[0].pic;
        pronounArray = ["I", "you", "he", "she", "we", "they"];
        shuffleArray(pronounArray);
        if (pronounArray[0] == "I") {
            var pronoun = "you";
        } else if (pronounArray[0] == "you") {
            var pronoun = "I";
        } else {
            var pronoun = pronounArray[0];
        }
        if (pronounArray[0] == "he" || pronounArray[0] == "she") {
            document.getElementById("g0r0d0").innerHTML = "What subjects does " + pronounArray[0] + " have today?";
            sampleAnswer = pronoun.toUpperCase().charAt(0).toUpperCase() + pronoun.slice(1) + " has " + vocArray[0].voc + " class today.";
        } else {
            document.getElementById("g0r0d0").innerHTML = "What subjects do " + pronounArray[0] + " have today?";
            sampleAnswer = pronoun.toUpperCase().charAt(0).toUpperCase() + pronoun.slice(1) + " have " + vocArray[0].voc + " class today.";
        }
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 1") {
        q1Array = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 1";
    } else if (userInput == "Unit 4") {
        document.getElementById("gInstructions").innerHTML = "Make a sentence.";
        q1Array = [({value:'always', pic:'<img src="Level 5/images/100.png" />'}), ({value:'usually', pic:'<img src="Level 5/images/86.png" />'}), ({value:'often', pic:'<img src="Level 5/images/64.png" />'}), ({value:'sometimes', pic:'<img src="Level 5/images/36.png" />'}), ({value:'seldom', pic:'<img src="Level 5/images/14.png" />'}), ({value:'never', pic:'<img src="Level 5/images/0.png" />'})];
        shuffleArray(q1Array);
        document.getElementById("g0r0d5").innerHTML = q1Array[0].pic;
        pronounArray = ["I", "you", "he", "she", "we", "they"];
        shuffleArray(pronounArray);
        verbArray = [({verb:'be', object:''}), ({verb:'exercise',  object:''}), ({verb:'read', object:' the newspaper'}), ({verb:'take', object:' a nap'}), ({verb:'surf', object:' the Net'}), ({verb:'keep', object:' a diary'}), ({verb:'have', object:' a snack'}), ({verb:'cook', object:' dinner'}), ({verb:'laugh', object:''}), ({verb:'draw', object:''}), ({verb:'sweep', object:' the floor'}), ({verb:'study', object:''}), ({verb:'drive', object:' a car'}), ({verb:'make', object:' the bed'}), ({verb:'eat', object:' breakfast'}), ({verb:'eat', object:' lunch'}), ({verb:'eat', object:' dinner'}), ({verb:'wash', object:' the dishes'}), ({verb:'cry', object:''}), ({verb:'help', object:' anyone'})];
        shuffleArray(verbArray);
        switch(verbArray[0].verb){
            case "be":
                if (pronounArray[0] == "I"){
                    sampleAnswer = "I am " + q1Array[0].value + " busy.";
                } else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " is " + q1Array[0].value + " busy.";
                } else {
                    sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " are " + q1Array[0].value + " busy.";
                }
                break;
            case "have":
                if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " has a snack.";
                } else {
                    sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " have a snack.";
                }
                break;
            case "wash":
                if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " washes the dishes.";
                } else {
                    sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " wash the dishes.";
                }
                break;
            case "cry":
                if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " cries.";
                } else {
                    sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " cry.";
                }
                break;
            case "study":
                if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " studies.";
                } else {
                    sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " study.";
                }
                break;
            default:
                if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " " + verbArray[0].verb + "s" + verbArray[0].object + ".";
                } else {
                    sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " " + verbArray[0].verb + verbArray[0].object + ".";
                }
                break;
        }
        document.getElementById("g0r0d0").innerHTML = verbArray[0].verb + " " + verbArray[0].object;
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 5") {
        choiceArrayInt = 0;
        seasonArray = [({season: 'summer', weather: 'hot'}), ({season: 'fall', weather: 'cool'}), ({season: 'winter', weather: 'cold'}), ({season: 'spring', weather: 'warm'})];
        shuffleArray(seasonArray);
        frequencyArray = ['never', 'seldom', 'sometimes', 'often', 'usually', 'always'];
        shuffleArray(frequencyArray);
        while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 5)};
        var rArray = seasonArray;
        shuffleArray(rArray);
        document.getElementById("g0r0d0").innerHTML = choiceArrayInt;
        if (choiceArrayInt == 1 || choiceArrayInt == 2){
            document.getElementById("g0r0d0").innerHTML = "It's usually _____________ in the " + seasonArray[0].season + ".";
            sampleAnswer = "It's usually " + seasonArray[0].weather + " in the " + seasonArray[0].season + ".";
        } else {
            document.getElementById("g0r0d0").innerHTML = "Is it " + frequencyArray[0] + " " + rArray[0].weather + " in the " + seasonArray[0].season + "?";
            if (frequencyArray[0] == "always" || frequencyArray[0] == "usually" || frequencyArray[0] == "often"){
                if (seasonArray[0].weather == rArray[0].weather){
                    sampleAnswer = "Yes, " + "it's " + frequencyArray[0] + " " + rArray[0].weather + " in the " + seasonArray[0].season + ".";
                }
            } else {
                sampleAnswer = "No, " + "it's usually " + seasonArray[0].weather + " in the " + seasonArray[0].season + ".";
            }
        }
        document.getElementById("g0r1d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" />';
        document.getElementById("g0r1d1").align = "left";
        document.getElementById("g0r1d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 6") {
        pronounArray = ["I", "You", "We", "He", "She", "They"];
        shuffleArray(pronounArray);
        q3Array = [" in the morning", " in the afternoon", " in the evening", " in the garden", " in the park", " every day", " twice a week", " every Tuesday", " every Thursday"];
        shuffleArray(q3Array);
        if (pronounArray[0] == "He" || pronounArray[0] == "She") {
            document.getElementById("g0r0d0").innerHTML = "What does " + pronounArray[0].toLowerCase() + " usually do " + q3Array[0] + "?";
        } else {
            if (pronounArray[0] == "I") {
                document.getElementById("g0r0d0").innerHTML = "What do " + pronounArray[0] + " usually do " + q3Array[0] + "?";
            } else {
                document.getElementById("g0r0d0").innerHTML = "What do " + pronounArray[0].toLowerCase() + " usually do " + q3Array[0] + "?";
            }
        }
        verbArray = [({verb:'do', object:' the laundry', pic:'<img src="Level 5/images/do the laundry.png" />'}), ({verb:'sweep',  object:' the floor', pic:'<img src="Level 5/images/sweep the floor.png" />'}), ({verb:'mop', object:' the floor', pic:'<img src="Level 5/images/mop the floor.png" />'}), ({verb:'walk', object:' the dog', pic:'<img src="Level 5/images/walk the dog.png" />'}), ({verb:'go', object:' mountain climbing', pic:'<img src="Level 5/images/go mountain climbing.png" />'}), ({verb:'play', object:' chess', pic:'<img src="Level 5/images/play chess.png" />'}), ({verb:'water', object:' the plants', pic:'<img src="Level 5/images/water the plants.png" />'}), ({verb:'take', object:' a walk', pic:'<img src="Level 5/images/take a walk.png" />'})];
        shuffleArray(verbArray);
        document.getElementById("g0r0d5").innerHTML = verbArray[0].pic;
        switch(verbArray[0].verb){
            case "do":
                if (pronounArray[0] == "I") {
                    sampleAnswer = "You usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                } else if (pronounArray[0] == "You") {
                    sampleAnswer = "I usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                } else if (pronounArray[0] == "He" || pronounArray[0] == "She") {
                    sampleAnswer = pronounArray[0] + " usually does the laundry" + q3Array[0] + ".";
                } else {
                    sampleAnswer = pronounArray[0] + " usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                }
                break;
            case "go":
                if (pronounArray[0] == "I") {
                    sampleAnswer = "You usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                } else if (pronounArray[0] == "You") {
                    sampleAnswer = "I usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                } else if (pronounArray[0] == "He" || pronounArray[0] == "She") {
                    sampleAnswer = pronounArray[0] + " usually goes mountain climbing" + q3Array[0] + ".";
                } else {
                    sampleAnswer = pronounArray[0] + " usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                }
                break;
            default:
                if (pronounArray[0] == "I") {
                    sampleAnswer = "You usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                } else if (pronounArray[0] == "You") {
                    sampleAnswer = "I usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                } else if (pronounArray[0] == "He" || pronounArray[0] == "She") {
                    sampleAnswer = pronounArray[0] + " usually " + verbArray[0].verb + "s" + verbArray[0].object + q3Array[0] + ".";
                } else {
                    sampleAnswer = pronounArray[0] + " usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                }
                break;
        }
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        grammarLesson = "";
    } else if (userInput == "Review 2") {
        q1Array = ["Unit 4", "Unit 5", "Unit 6"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 2";
    } else if (userInput == "Unit 7") {
        freqArray = [" once ", " twice ", " three times "];
        shuffleArray(freqArray);
        timeArray = ["a week.", "a month.", "a year."];
        shuffleArray(timeArray);
        pronounArray = ["I", "you", "he", "she", "we", "they"];
        shuffleArray(pronounArray);
        verbArray = [({verb:'play', obj:' the piano'}), ({verb:'play', obj:' cards'}), ({verb:'go', obj:' to the movies'}), ({verb:'go', obj:' abroad'})];
        shuffleArray(verbArray);
        if (pronounArray[0] == "I") {
            var pronoun = "you";
        } else if (pronounArray[0] == "you") {
            var pronoun = "I";
        } else {
            var pronoun = pronounArray[0];
        }
        if (pronounArray[0] == "he" || pronounArray[0] == "she") {
            document.getElementById("g0r0d0").innerHTML = "How often does " + pronounArray[0] + " " + verbArray[0].verb + verbArray[0].obj + "?";
            if (verbArray[0].verb == "go"){
                sampleAnswer = pronoun.charAt(0).toUpperCase() + pronoun.slice(1) + " goes" + verbArray[0].obj + freqArray[0] + timeArray[0];
            } else {
                sampleAnswer = pronoun.charAt(0).toUpperCase() + pronoun.slice(1) + " " + verbArray[0].verb + "s" + verbArray[0].obj + freqArray[0] + timeArray[0];
            }
        } else {
            document.getElementById("g0r0d0").innerHTML = "How often do " + pronounArray[0] + " " + verbArray[0].verb + " " + verbArray[0].obj + "?";
            sampleAnswer = pronoun.toUpperCase().charAt(0).toUpperCase() + pronoun.slice(1) + " " + verbArray[0].verb + " " + verbArray[0].obj + freqArray[0] + timeArray[0];
        }
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 8") {
        vocArray = [({voc:'shoes', pic:'<img src="Level 5/images/shoes.png" />'}), ({voc:'socks', pic:'<img src="Level 5/images/socks.png" />'}), ({voc:'jeans', pic:'<img src="Level 5/images/jeans.png" />'}), ({voc:'pants', pic:'<img src="Level 5/images/pants.png" />'}), ({voc:'shorts', pic:'<img src="Level 5/images/shorts.png" />'}), ({voc:'glasses', pic:'<img src="Level 5/images/glasses.png" />'}), ({voc:'gloves', pic:'<img src="Level 5/images/gloves.png" />'}), ({voc:'earrings', pic:'<img src="Level 5/images/earrings.png" />'})];
        shuffleArray(vocArray);
        document.getElementById("g0r0d5").innerHTML = vocArray[0].pic;
        pronounArray = ["I", "you", "he", "she", "we", "they"];
        shuffleArray(pronounArray);
        if (pronounArray[0] == "I") {
            var pronoun = "you";
        } else if (pronounArray[0] == "you") {
            var pronoun = "I";
        } else {
            var pronoun = pronounArray[0];
        }
        choiceArrayInt = 0;
        while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 3)};
        if (choiceArrayInt == 1){
            if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                document.getElementById("g0r0d0").innerHTML = "What does " + pronounArray[0] + " want to buy?";
                sampleAnswer = pronoun.toUpperCase().charAt(0).toUpperCase() + pronoun.slice(1) + " wants to buy a pair of " + vocArray[0].voc + ".";
            } else {
                document.getElementById("g0r0d0").innerHTML = "What do " + pronounArray[0] + " want to buy?";
                sampleAnswer = pronoun.toUpperCase().charAt(0).toUpperCase() + pronoun.slice(1) + " want to buy a pair of " + vocArray[0].voc + ".";
            }
        } else {
            if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                document.getElementById("g0r0d0").innerHTML = "Does " + pronounArray[0] + " want to buy a pair of " + vocArray[0].voc + "?";
            } else {
                document.getElementById("g0r0d0").innerHTML = "Do " + pronounArray[0] + " want to buy a pair of " + vocArray[0].voc + "?";
            }
            q2Array = [vocArray[0], vocArray[1]];
            shuffleArray(q2Array);
            if (q2Array[0] == vocArray[0]) {
                document.getElementById("g0r0d5").innerHTML = q2Array[0].pic;
                if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    sampleAnswer = "Yes, " + pronoun + " does.";
                } else {
                    sampleAnswer = "Yes, " + pronoun + " do.";
                }
            } else {
                document.getElementById("g0r0d5").innerHTML = q2Array[0].pic;
                if (pronounArray[0] == "he" || pronoun == "she") {
                    sampleAnswer = "No, " + pronoun + " doesn't.";
                } else {
                    sampleAnswer = "No, " + pronoun + " don't.";
                }
            }
        }
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 9") {
        vocArray = ["ring", "belt", "backpack"];
        shuffleArray(vocArray);
        numberArray1 = [({text: 'one', num:'1'}), ({text:'two', num:'2'}), ({text:'three', num:'3'}), ({text:'four', num:'4'}), ({text:'five', num:'5'}), ({text:'six', num:'6'}), ({text:'seven', num:'7'}), ({text:'eight', num:'8'}), ({text:'nine', num:'9'})];
        shuffleArray(numberArray1);
        numberArray2 = [({text: 'twenty', num:'20'}), ({text:'thirty', num:'30'}), ({text:'forty', num:'40'}), ({text:'fifty', num:'50'}), ({text:'sixty', num:'60'}), ({text:'seventy', num:'70'}), ({text:'eighty', num:'80'}), ({text:'ninety', num:'90'})];
        shuffleArray(numberArray2);
        q3Array = [" hundred", " thousand", "dollars."];
        shuffleArray(q3Array);
        if (q3Array[0] == "dollars."){
            sampleAnswer = "The " + vocArray[0] + " is " + numberArray2[0].text + " " + numberArray1[0].text + " " + q3Array[0];
            document.getElementById("g0r0d5").innerHTML = "$" + numberArray2[0].num.charAt(0) + numberArray1[0].num;
        } else if (q3Array[0] == " hundred"){
            sampleAnswer = "The " + vocArray[0] + " is " + numberArray1[0].text + q3Array[0] + " and " + numberArray2[0].text + " " + numberArray1[1].text + " dollars.";
            document.getElementById("g0r0d5").innerHTML = "$" + numberArray1[0].num + numberArray2[0].num.charAt(0) + numberArray1[1].num;
        } else {
            sampleAnswer = "The " + vocArray[0] + " is " + numberArray1[0].text + q3Array[0] + ", " + numberArray1[1].text + " hundred and " + numberArray2[0].text + " " + numberArray1[2].text + " dollars.";
            document.getElementById("g0r0d5").innerHTML = "$" + numberArray1[0].num + "," + numberArray1[1].num + numberArray2[0].num.charAt(0) + numberArray1[2].num;
        }
        document.getElementById("g0r0d0").innerHTML = "How much is the " + vocArray[0] + "?";
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = ['<a href="http://scratch.mit.edu/projects/20076362/" target="_newtab">Scratch: B5U9 "How Much Is It?"</a>'];
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
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
        grammarLesson = "";
    }
}
else if (level_id == "Level 6") {
    if (userInput == "Unit 1") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = ['<a href="http://scratch.mit.edu/projects/20797437/" target="_newtab">Scratch: Date Game</a>'];
        grammarLesson = "";
    } else if (userInput == "Unit 2") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 3") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 1") {
        q1Array = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 1";
    } else if (userInput == "Unit 4") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 5") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 6") {
        pronounArray = ["you", "he", "she", "they"];
        shuffleArray(pronounArray);
        answerArray = ["Yes", "No"];
        shuffleArray(answerArray);
        timeArray1 = ["two", "five", "ten"];
        shuffleArray(timeArray1);
        timeArray2 = ["hours ago", "minutes ago", "seconds ago"];
        shuffleArray(timeArray2);
        placeArray = ["in the classroom", "on the field", "in the teacher's office", "in the nurse's office", "in the restroom", "at the snack bar", "in the gym", "in the hallway"];
        shuffleArray(placeArray);
        question = placeArray[0] + " " + timeArray1[0] + " " + timeArray2[0];
        if (pronounArray[0] == "you") {
            document.getElementById("g0r0d0").innerHTML = "Were you " + question + "?";
        } else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
            document.getElementById("g0r0d0").innerHTML = "Was " + pronounArray[0] + " " + question + "?";
        } else {
            document.getElementById("g0r0d0").innerHTML = "Were they " + question + "?";
        }
        if (answerArray[0] == "Yes") {
            document.getElementById("g0r0d5").innerHTML = '<h1 style="font-size:100px">&#x2705;</h1>';
            if (pronounArray[0] == "you") {
                sampleAnswer = "Yes, I was " + question + ".";
            } else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                sampleAnswer = "Yes, " + pronounArray[0] + " was " + question + ".";
            } else {
                sampleAnswer = "Yes, they were " + question + ".";
            }
        } else {
            document.getElementById("g0r0d5").innerHTML = '<h1 style="font-size:100px">&#x274C;</h1>';
            if (pronounArray[0] == "you") {
                sampleAnswer = "No, I was not " + question + ".";
            } else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                sampleAnswer = "No, " + pronounArray[0] + " was not " + question + ".";
            } else {
                sampleAnswer = "No, they were not " + question + ".";
            }
        }
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        grammarLesson = "";
    } else if (userInput == "Review 2") {
        q1Array = ["Unit 4", "Unit 5", "Unit 6"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 2";
    } else if (userInput == "Unit 7") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = ['<a href="http://www.turtlediary.com/grade-3-games/ela-games/simple-past-tense.html" target="_newtab">Turtle Diary: Simple Past Tense</a>'];
        grammarLesson = "";
    } else if (userInput == "Unit 8") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = ['<a href="http://www.eslgamesplus.com/irregular-past-tense-esl-grammar-jeopardy-quiz-game/" target="_newtab">ESL Games+: Irregular Past Tense Jeopardy</a></li><li><a href="http://www.turtlediary.com/grade-3-games/ela-games/simple-past-tense.html" target="_newtab">Turtle Diary: Simple Past Tense</a></li><li><a href="http://www.grammar.cl/Games/Past_Irregular_Verbs.htm" target="_newtab">Woodward English: Past Irregular Verbs</a></li><li><a href="http://www.perfect-english-grammar.com/past-simple-exercise-7.html" target="_newtab">Perfect English Grammar: Past Simple Forms</a>'];
        grammarLesson = "";
    } else if (userInput == "Unit 9") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = ['<a href="http://www.eslgamesplus.com/food-partitives-expressions-of-quantity-a-slice-of-a-piece-of-esl-grammar-activity/" target="_newtab">ESL Games+: Phrase Monkey</a></li><li><a href="http://www.eslgamesplus.com/food-partitives-esl-fun-game-food-quantities-game/" target="_newtab">ESL Games+: Moonshot</a>'];
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
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
        grammarLesson = "";
    }
}
else if (level_id == "Level 8") {
    if (userInput == "Unit 1") {
        picArray = [({value:'grandfather', pic:'<img src="Level 1/images/grandfather.png" />'}), ({value:'grandmother', pic:'<img src="Level 1/images/grandmother.png" />'}), ({value:'father', pic:'<img src="Level 1/images/father.png" />'}), ({value:'mother', pic:'<img src="Level 1/images/mother.png" />'}), ({value:'uncle', pic:'<img src="Level 1/images/uncle.png" />'}), ({value:'aunt', pic:'<img src="Level 1/images/aunt.png" />'}), ({value:'cousin', pic:'<img src="Level 1/images/cousin.png" />'}), ({value:'brother', pic:'<img src="Level 1/images/brother.png" />'}), ({value:'sister', pic:'<img src="Level 1/images/sister.png" />'})];
        shuffleArray(picArray);
        q2Array = ["cup of tea", "sandwich", "bar of chocolate", "biscuit"];
        shuffleArray(q2Array);
        document.getElementById("g0r1d2").style = "width:100px; height:100px";
        document.getElementById("g0r1d2").innerHTML = picArray[0].pic;
        tempArray = ["A", "B"];
        shuffleArray(tempArray);
        if (tempArray[0] == "A") {
            q1Array = ["Who brought the ", "Who gave the "];
            shuffleArray(q1Array);
            
            if (q1Array[0] == "Who brought the ") {
                q3Array[0] = " for you?";
                sampleAnswer = "My " + picArray[0].value + " brought the "+q2Array[0]+" for me.";
            } else {
                q3Array[0] = " to you?";
                sampleAnswer = "My " + picArray[0].value + " gave the "+q2Array[0]+" to me.";
            }
            document.getElementById("g0r1d0").style="width:300px";
            document.getElementById("g0r1d0").innerHTML = q1Array[0] + q2Array[0] + q3Array[0];
            
        } else {
            q1Array = ["Who gave you the ", "Who brought you the "];
            shuffleArray(q1Array);
            if (q1Array[0] == "Who gave you the ") {
                sampleAnswer = "My "+picArray[0].value+" gave me the "+q2Array[0]+".";
            } else {
                sampleAnswer = "My "+picArray[0].value+" brought me the "+q2Array[0]+".";
            }
            document.getElementById("g0r1d0").style= "width:300px";
            document.getElementById("g0r1d0").innerHTML = q1Array[0] + q2Array[0] + "?";
        }
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r2d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 2") {
        q1Array = ["Who is ", "Which is "];
        shuffleArray(q1Array);
        q2Array = ["faster", "slower", "fatter", "slimmer", "prettier", "uglier", "bigger", "smaller"];
        shuffleArray(q2Array);
        document.getElementById("g0r1d0").style= "width:300px";
        document.getElementById("g0r1d0").innerHTML = q1Array[0] + q2Array[0] + "?";
        if (q1Array[0] == "Which is ") {
            q3Array = [({value:'dog', pic:'<img src="Level 1/images/dog.png" />'}), ({value:'cat', pic:'<img src="Level 1/images/cat.png" />'}), ({value:'rat', pic:'<img src="Level 1/images/rat.png" />'}), ({value:'rabbit', pic:'<img src="Level 1/images/rabbit.png" />'}), ({value:'cow', pic:'<img src="Level 1/images/cow.png" />'}), ({value:'horse', pic:'<img src="Level 1/images/horse.png" />'}), ({value:'sheep', pic:'<img src="Level 1/images/sheep.png" />'}), ({value:'pig', pic:'<img src="Level 1/images/pig.png" />'}), ({value:'chicken', pic:'<img src="Level 1/images/chicken.png" />'}), ({value:'duck', pic:'<img src="Level 1/images/duck.png" />'}), ({value:'tiger', pic:'<img src="Level 2/images/tiger.png" />'}), ({value:'lion', pic:'<img src="Level 2/images/lion.png" />'}), ({value:'monkey', pic:'<img src="Level 2/images/monkey.png" />'}), ({value:'bear', pic:'<img src="Level 2/images/bear.png" />'}), ({value:'zebra', pic:'<img src="Level 2/images/zebra.png" />'}), ({value:'goat', pic:'<img src="Level 2/images/goat.png" />'}), ({value:'elephant', pic:'<img src="Level 2/images/elephant.png" />'}), ({value:'hippo', pic:'<img src="Level 2/images/hippo.png" />'}), ({value:'snake', pic:'<img src="Level 2/images/snake.png" />'}), ({value:'parrot', pic:'<img src="Level 2/images/parrot.png" />'})];
            shuffleArray(q3Array);
            sampleAnswer = "The "+q3Array[0].value+" is "+q2Array[0]+" than the "+q3Array[1].value+".";
        } else {
            q3Array = [({value:'grandfather', pic:'<img src="Level 1/images/grandfather.png" />'}), ({value:'grandmother', pic:'<img src="Level 1/images/grandmother.png" />'}), ({value:'father', pic:'<img src="Level 1/images/father.png" />'}), ({value:'mother', pic:'<img src="Level 1/images/mother.png" />'}), ({value:'uncle', pic:'<img src="Level 1/images/uncle.png" />'}), ({value:'aunt', pic:'<img src="Level 1/images/aunt.png" />'}), ({value:'cousin', pic:'<img src="Level 1/images/cousin.png" />'}), ({value:'brother', pic:'<img src="Level 1/images/brother.png" />'}), ({value:'sister', pic:'<img src="Level 1/images/sister.png" />'})];
            shuffleArray(q3Array);
            sampleAnswer = "My "+q3Array[0].value+" is "+q2Array[0]+" than my "+q3Array[1].value+".";
        }
        document.getElementById("g0r1d2").style = "width:50px; height:50px";
        document.getElementById("g0r1d2").innerHTML = q3Array[0].pic;
        document.getElementById("g0r1d3").style = "width:50px; height:50px";
        document.getElementById("g0r1d3").innerHTML = q3Array[1].pic;
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r2d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 3") {
        q1Array = ["Which is ", "Which are ", "Who is "];
        shuffleArray(q1Array);
        if (q1Array[0] == "Which is ") {
            q2Array = ["cheaper", "more difficult", "more expensive"];
            shuffleArray(q2Array);
            if (q2Array[0] == "more difficult") {
                q3Array = [({value:'Chinese', pic:'<img src="Level 5/images/Chinese.png" />'}), ({value:'English', pic:'<img src="Level 5/images/English.png" />'}), ({value:'math', pic:'<img src="Level 5/images/math.png" />'}), ({value:'science', pic:'<img src="Level 5/images/science.png" />'}), ({value:'social studies', pic:'<img src="Level 5/images/social studies.png" />'}), ({value:'music', pic:'<img src="Level 5/images/music.png" />'}), ({value:'art', pic:'<img src="Level 5/images/art.png" />'})];
                shuffleArray(q3Array);
                sampleAnswer = q3Array[0].value.slice(0,1).toUpperCase()+q3Array[0].value.slice(1)+" is "+q2Array[0]+" than "+q3Array[1].value+".";
            } else {
                q3Array = [({value:'hat', pic:'<img src="Level 1/images/hat.png" />'}), ({value:'cap', pic:'<img src="Level 1/images/cap.png" />'}), ({value:'coat', pic:'<img src="Level 1/images/coat.png" />'}), ({value:'jacket', pic:'<img src="Level 1/images/jacket.png" />'}), ({value:'dress', pic:'<img src="Level 1/images/dress.png" />'}), ({value:'skirt', pic:'<img src="Level 1/images/skirt.png" />'}), ({value:'shirt', pic:'<img src="Level 1/images/shirt.png" />'}), ({value:'T-shirt', pic:'<img src="Level 1/images/T-shirt.png" />'})];
                sampleAnswer = "The "+q3Array[0].value+" is "+q2Array[0]+" than the "+q3Array[1].value+".";
            }
        } else if (q1Array[0] == "Which are ") {
            q2Array = ["heavier", "lighter", "more modern", "more dangerous"];
            shuffleArray(q2Array);
            if (q2Array[0] == "more modern") {
                q3Array = [({value:'police station', pic:'<img src="Level 4/images/police station.png" />'}), ({value:'fire station', pic:'<img src="Level 4/images/fire station.png" />'}), ({value:'MRT station', pic:'<img src="Level 4/images/MRT station.png" />'}), ({value:'bus stop', pic:'<img src="Level 4/images/bus stop.png" />'}), ({value:'bank', pic:'<img src="Level 4/images/bank.png" />'}), ({value:'bookstore', pic:'<img src="Level 4/images/bookstore.png" />'}), ({value:'convenience store', pic:'<img src="Level 4/images/convenience store.png" />'}), ({value:'department store', pic:'<img src="Level 4/images/department store.png" />'}), ({value:'museum', pic:'<img src="Level 4/images/museum.png" />'}), ({value:'post office', pic:'<img src="Level 4/images/post office.png" />'}), ({value:'restaurant', pic:'<img src="Level 4/images/restaurant.png" />'}), ({value:'movie theater', pic:'<img src="Level 4/images/movie theater.png" />'}), ({value:'bakery', pic:'<img src="Level 4/images/bakery.png" />'}), ({value:'hospital', pic:'<img src="Level 4/images/hospital.png" />'}), ({value:'library', pic:'<img src="Level 4/images/library.png" />'}), ({value:'clinic', pic:'<img src="Level 4/images/clinic.png" />'}), ({value:'gas station', pic:'<img src="Level 4/images/gas station.png" />'}), ({value:'toy store', pic:'<img src="Level 4/images/toy store.png" />'})];
                shuffleArray(q3Array);
                sampleAnswer = q3Array[0].value.slice(0,1).toUpperCase()+q3Array[0].value.slice(1)+"s are "+q2Array[0]+" than "+q3Array[1].value+"s.";
            } else {
                q3Array = [({value:'dog', pic:'<img src="Level 1/images/dog.png" />'}), ({value:'cat', pic:'<img src="Level 1/images/cat.png" />'}), ({value:'rat', pic:'<img src="Level 1/images/rat.png" />'}), ({value:'rabbit', pic:'<img src="Level 1/images/rabbit.png" />'}), ({value:'cow', pic:'<img src="Level 1/images/cow.png" />'}), ({value:'horse', pic:'<img src="Level 1/images/horse.png" />'}), ({value:'pig', pic:'<img src="Level 1/images/pig.png" />'}), ({value:'chicken', pic:'<img src="Level 1/images/chicken.png" />'}), ({value:'duck', pic:'<img src="Level 1/images/duck.png" />'}), ({value:'tiger', pic:'<img src="Level 2/images/tiger.png" />'}), ({value:'lion', pic:'<img src="Level 2/images/lion.png" />'}), ({value:'monkey', pic:'<img src="Level 2/images/monkey.png" />'}), ({value:'bear', pic:'<img src="Level 2/images/bear.png" />'}), ({value:'zebra', pic:'<img src="Level 2/images/zebra.png" />'}), ({value:'goat', pic:'<img src="Level 2/images/goat.png" />'}), ({value:'elephant', pic:'<img src="Level 2/images/elephant.png" />'}), ({value:'hippo', pic:'<img src="Level 2/images/hippo.png" />'}), ({value:'snake', pic:'<img src="Level 2/images/snake.png" />'}), ({value:'parrot', pic:'<img src="Level 2/images/parrot.png" />'})];
                shuffleArray(q3Array);
                sampleAnswer = q3Array[0].value.slice(0,1).toUpperCase()+q3Array[0].value.slice(1)+"s are "+q2Array[0]+" than "+q3Array[1].value+"s.";
            }
        } else {
            q2Array = ["more handsome", "more beautiful"];
            shuffleArray(q2Array);
            if (q2Array[0] == "more handsome") {
                q3Array = [({value:'grandfather', pic:'<img src="Level 1/images/grandfather.png" />'}), ({value:'father', pic:'<img src="Level 1/images/father.png" />'}), ({value:'uncle', pic:'<img src="Level 1/images/uncle.png" />'}), ({value:'brother', pic:'<img src="Level 1/images/brother.png" />'})];
                shuffleArray(q3Array);
                sampleAnswer = "My "+q3Array[0].value+" is "+q2Array[0]+" than my "+q3Array[1].value+".";
            } else {
                q3Array = [({value:'grandmother', pic:'<img src="Level 1/images/grandmother.png" />'}), ({value:'mother', pic:'<img src="Level 1/images/mother.png" />'}), ({value:'aunt', pic:'<img src="Level 1/images/aunt.png" />'}), ({value:'sister', pic:'<img src="Level 1/images/sister.png" />'}), ({value:'cousin', pic:'<img src="Level 1/images/cousin.png" />'})];
                shuffleArray(q3Array);
                sampleAnswer = "My "+q3Array[0].value+" is "+q2Array[0]+" than my "+q3Array[1].value+".";
            }
        }
        document.getElementById("g0r1d0").style= "width:300px";
        document.getElementById("g0r1d0").innerHTML = q1Array[0] + q2Array[0] + "?";
        document.getElementById("g0r1d2").style = "width:50px; height:50px";
        document.getElementById("g0r1d2").innerHTML = q3Array[0].pic;
        document.getElementById("g0r1d3").style = "width:50px; height:50px";
        document.getElementById("g0r1d3").innerHTML = q3Array[1].pic;
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r2d2").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 1") {
        q1Array = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 1";
    } else if (userInput == "Unit 4") {
        q1Array = ["slim", "little", "tired", "good", "strong", "busy", "modern", "easy", "big", "bored", "bad", "lazy", "hard", "many", "weak", "fast"];
        shuffleArray(q1Array);
        q2Array = [""];
        q3Array = [""];
        document.getElementById("g0r0d0").innerHTML = '<p style="font-size:50px">'+q1Array[0]+'</p>';
        document.getElementById("g0r0d1").innerHTML = '<p style="font-size:50px">'+q1Array[1]+'</p>';
        document.getElementById("g0r0d2").innerHTML = '<p style="font-size:50px">'+q1Array[2]+'</p>';
        document.getElementById("g0r0d3").innerHTML = '<p style="font-size:50px">'+q1Array[3]+'</p>';
        
        document.getElementById("g0r1d0").innerHTML = '<p style="font-size:50px">'+q1Array[4]+'</p>';
        document.getElementById("g0r1d1").innerHTML = '<p style="font-size:50px">'+q1Array[5]+'</p>';
        document.getElementById("g0r1d2").innerHTML = '<p style="font-size:50px">'+q1Array[6]+'</p>';
        document.getElementById("g0r1d3").innerHTML = '<p style="font-size:50px">'+q1Array[7]+'</p>';
        
        document.getElementById("g0r2d0").innerHTML = '<p style="font-size:50px">'+q1Array[8]+'</p>';
        document.getElementById("g0r2d1").innerHTML = '<p style="font-size:50px">'+q1Array[9]+'</p>';
        document.getElementById("g0r2d2").innerHTML = '<p style="font-size:50px">'+q1Array[10]+'</p>';
        document.getElementById("g0r2d3").innerHTML = '<p style="font-size:50px">'+q1Array[11]+'</p>';
        
        document.getElementById("g0r3d0").innerHTML = '<p style="font-size:50px">'+q1Array[12]+'</p>';
        document.getElementById("g0r3d1").innerHTML = '<p style="font-size:50px">'+q1Array[13]+'</p>';
        document.getElementById("g0r3d2").innerHTML = '<p style="font-size:50px">'+q1Array[14]+'</p>';
        document.getElementById("g0r3d3").innerHTML = '<p style="font-size:50px">'+q1Array[15]+'</p>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 5") {
        q1Array = ["Which is ", "Which are ", "Who is "];
        shuffleArray(q1Array);
        if (q1Array[0] == "Which is ") {
            q2Array = ["the cleanest", "the dirtiest", "the easiest"];
            shuffleArray(q2Array);
            if (q2Array[0] == "the easiest") {
                q3Array = [({value:'Chinese', pic:'<img src="Level 5/images/Chinese.png" />'}), ({value:'English', pic:'<img src="Level 5/images/English.png" />'}), ({value:'math', pic:'<img src="Level 5/images/math.png" />'}), ({value:'science', pic:'<img src="Level 5/images/science.png" />'}), ({value:'social studies', pic:'<img src="Level 5/images/social studies.png" />'}), ({value:'music', pic:'<img src="Level 5/images/music.png" />'}), ({value:'art', pic:'<img src="Level 5/images/art.png" />'})];
                shuffleArray(q3Array);
                sampleAnswer = q3Array[0].value.slice(0,1).toUpperCase()+q3Array[0].value.slice(1)+" is "+q2Array[0]+".";
            } else {
                q3Array = [({value:'hat', pic:'<img src="Level 1/images/hat.png" />'}), ({value:'cap', pic:'<img src="Level 1/images/cap.png" />'}), ({value:'coat', pic:'<img src="Level 1/images/coat.png" />'}), ({value:'jacket', pic:'<img src="Level 1/images/jacket.png" />'}), ({value:'dress', pic:'<img src="Level 1/images/dress.png" />'}), ({value:'skirt', pic:'<img src="Level 1/images/skirt.png" />'}), ({value:'shirt', pic:'<img src="Level 1/images/shirt.png" />'}), ({value:'T-shirt', pic:'<img src="Level 1/images/T-shirt.png" />'})];
                sampleAnswer = "The "+q3Array[0].value+" is "+q2Array[0]+".";
            }
        } else if (q1Array[0] == "Which are ") {
            q2Array = ["the wettest", "the cleanest", "the dirtiest"];
            shuffleArray(q2Array);
            q3Array = [({value:'hats', pic:'<img src="Level 1/images/hat.png" />'}), ({value:'caps', pic:'<img src="Level 1/images/cap.png" />'}), ({value:'coats', pic:'<img src="Level 1/images/coat.png" />'}), ({value:'jackets', pic:'<img src="Level 1/images/jacket.png" />'}), ({value:'dresses', pic:'<img src="Level 1/images/dress.png" />'}), ({value:'skirts', pic:'<img src="Level 1/images/skirt.png" />'}), ({value:'shirts', pic:'<img src="Level 1/images/shirt.png" />'}), ({value:'T-shirts', pic:'<img src="Level 1/images/T-shirt.png" />'}), ({value:'dogs', pic:'<img src="Level 1/images/dog.png" />'}), ({value:'cats', pic:'<img src="Level 1/images/cat.png" />'}), ({value:'rats', pic:'<img src="Level 1/images/rat.png" />'}), ({value:'rabbits', pic:'<img src="Level 1/images/rabbit.png" />'}), ({value:'cows', pic:'<img src="Level 1/images/cow.png" />'}), ({value:'horses', pic:'<img src="Level 1/images/horse.png" />'}), ({value:'pigs', pic:'<img src="Level 1/images/pig.png" />'}), ({value:'chickens', pic:'<img src="Level 1/images/chicken.png" />'}), ({value:'ducks', pic:'<img src="Level 1/images/duck.png" />'}), ({value:'tigers', pic:'<img src="Level 2/images/tiger.png" />'}), ({value:'lions', pic:'<img src="Level 2/images/lion.png" />'}), ({value:'monkeys', pic:'<img src="Level 2/images/monkey.png" />'}), ({value:'bears', pic:'<img src="Level 2/images/bear.png" />'}), ({value:'zebras', pic:'<img src="Level 2/images/zebra.png" />'}), ({value:'goats', pic:'<img src="Level 2/images/goat.png" />'}), ({value:'elephants', pic:'<img src="Level 2/images/elephant.png" />'}), ({value:'hippos', pic:'<img src="Level 2/images/hippo.png" />'}), ({value:'snakes', pic:'<img src="Level 2/images/snake.png" />'}), ({value:'parrots', pic:'<img src="Level 2/images/parrot.png" />'})];
            shuffleArray(q3Array);
            sampleAnswer = q3Array[0].value.slice(0,1).toUpperCase()+q3Array[0].value.slice(1)+" are "+q2Array[0]+".";
            
        } else {
            q2Array = ["the youngest", "the oldest", "the cleanest", "the dirtiest"];
            shuffleArray(q2Array);
            q3Array = [({value:'grandfather', pic:'<img src="Level 1/images/grandfather.png" />'}), ({value:'father', pic:'<img src="Level 1/images/father.png" />'}), ({value:'uncle', pic:'<img src="Level 1/images/uncle.png" />'}), ({value:'brother', pic:'<img src="Level 1/images/brother.png" />'}), ({value:'grandmother', pic:'<img src="Level 1/images/grandmother.png" />'}), ({value:'mother', pic:'<img src="Level 1/images/mother.png" />'}), ({value:'aunt', pic:'<img src="Level 1/images/aunt.png" />'}), ({value:'sister', pic:'<img src="Level 1/images/sister.png" />'}), ({value:'cousin', pic:'<img src="Level 1/images/cousin.png" />'})];
            shuffleArray(q3Array);
            sampleAnswer = "My "+q3Array[0].value+" is "+q2Array[0]+".";
        }
        document.getElementById("g0r1d0").style= "width:300px";
        document.getElementById("g0r1d0").innerHTML = q1Array[0] + q2Array[0] + "?";
        document.getElementById("g0r1d2").style = "width:50px; height:50px";
        document.getElementById("g0r1d2").innerHTML = q3Array[0].pic;
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r2d2").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 6") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 2") {
        q1Array = ["Unit 4", "Unit 5", "Unit 6"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 2";
    } else if (userInput == "Unit 7") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 8") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 9") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
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
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
        grammarLesson = "";
    }
}    
else {
    sentenceArray[0] = "";
    sentenceArray[1] = "";
    sentenceArray[2] = "";
    sentenceArray[3] = "";
    gLinks = [''];
    grammarLesson = "";
}