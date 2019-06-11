function g_07(userInput){
    if (userInput == "Unit 1") {
        pronounArray = ["I", "you", "we", "they", "he", "she"];
        verbArray = [({verb:'made a card', pic:'<img src="Level 7/images/made.png" />'}), ({verb:'took a picture', pic:'<img src="Level 7/images/took.png" />'}), ({verb:'saw a turtle', pic:'<img src="Level 7/images/saw.png" />'}), ({verb:'got a gift', pic:'<img src="Level 7/images/got.png" />'}), ({verb:'sat on a chair', pic:'<img src="Level 7/images/sat.png" />'}),  ({verb:'sang a song', pic:'<img src="Level 7/images/sang.png" />'}), ({verb:'gave a gift', pic:'<img src="Level 7/images/gave.png" />'}), ({verb:'swam in the pool', pic:'<img src="Level 7/images/swam.png" />'})];
        destinationArray = ["park", "supermarket", "city", "countryside", "beach", "airport", "farm", "concert", "classroom", "amusement park", "playground", "port", "police station", "fire station", "MRT station", "bus stop", "bank", "bookstore", "convenience store", "department store", "museum", "post office", "restaurant", "movie theater", "bakery", "hospital", "library", "clinic", "gas station", "toy store"];
        q3Array = [" last week", " last weekend", " yesterday", " yesterday afternoon", " this morning", " last Sunday", " last Monday", " last Tuesday", " last Wednesday", " last Thursday", " last Friday", " last Saturday"];
        shuffleArray(pronounArray);
        shuffleArray(verbArray);
        shuffleArray(destinationArray);
        shuffleArray(q3Array);
        document.getElementById("g0r0d0").innerHTML = "Where did " + pronounArray[0] + " go " + q3Array[0] + "?";
        document.getElementById("g0r0d5").innerHTML = verbArray[0].pic;
        document.getElementById("g0r3d0").innerHTML = "What did " + pronounArray[0] + " do there?";
        if (pronounArray[0] == "you"){
            pronounArray[0] = "I";
        } else if (pronounArray[0] == "I" || pronounArray[0] == "we"){
            pronounArray[0] = "you";
        }
        var capitalized = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1);
        sampleAnswer1 = capitalized + " went to the " + destinationArray[0] + q3Array[0] + ".";
        sampleAnswer2 = capitalized + " " + verbArray[0].verb + ".";
        document.getElementById("g0r1d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" />';
        document.getElementById("g0r1d1").align = "left";
        document.getElementById("g0r1d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar1()">Example</button>';
        document.getElementById("g0r4d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput2" />';
        document.getElementById("g0r4d1").align = "left";
        document.getElementById("g0r4d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar2()">Example</button>';
        grammarLesson = "";
    } else if (userInput == "Unit 2") {
        pronounArray = ["I", "you", "we", "they", "he", "she"];
        verbArray = [({verb:'wrote a letter', pic:'<img src="Level 7/images/wrote.png" />'}), ({verb:'had a snack', pic:'<img src="Level 7/images/had.png" />'}), ({verb:'sent a postcard', pic:'<img src="Level 7/images/sent.png" />'}), ({verb:'bought a gift', pic:'<img src="Level 7/images/bought.png" />'}), ({verb:'taught a lesson', pic:'<img src="Level 7/images/taught.png" />'}),  ({verb:'brought a gift', pic:'<img src="Level 7/images/brought.png" />'}), ({verb:'caught a fish', pic:'<img src="Level 7/images/caught.png" />'}), ({verb:'found a shell', pic:'<img src="Level 7/images/found.png" />'})];
        destinationArray = ["park", "supermarket", "city", "countryside", "beach", "airport", "farm", "concert", "classroom", "amusement park", "playground", "port", "police station", "fire station", "MRT station", "bus stop", "bank", "bookstore", "convenience store", "department store", "museum", "post office", "restaurant", "movie theater", "bakery", "hospital", "library", "clinic", "gas station", "toy store"];
        q3Array = [" last week", " last weekend", " yesterday", " yesterday afternoon", " this morning", " last Sunday", " last Monday", " last Tuesday", " last Wednesday", " last Thursday", " last Friday", " last Saturday"];
        q4Array = ["rode a bike", "drove a car", "rode a scooter", "drove a truck", "rode a bus", "drove a van"];
        shuffleArray(pronounArray);
        shuffleArray(verbArray);
        shuffleArray(destinationArray);
        shuffleArray(q3Array);
        shuffleArray(q4Array);
        document.getElementById("g0r0d0").innerHTML = "When did " + pronounArray[0] + " go to the " + destinationArray[0] + "?";
        document.getElementById("g0r0d5").innerHTML = verbArray[0].pic;
        document.getElementById("g0r3d0").innerHTML = "How did " + pronounArray[0] + " get there?";
        if (pronounArray[0] == "you"){
            pronounArray[0] = "I";
        } else if (pronounArray[0] == "I" || pronounArray[0] == "we"){
            pronounArray[0] = "you";
        }
        var capitalized = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1);
        sampleAnswer1 = capitalized + " went to the " + destinationArray[0] + q3Array[0] + ".";
        sampleAnswer2 = capitalized + " " + q4Array[0] + " to the " + destinationArray[0] + ".";
        document.getElementById("g0r1d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" />';
        document.getElementById("g0r1d1").align = "left";
        document.getElementById("g0r1d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar1()">Example</button>';
        document.getElementById("g0r4d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput2" />';
        document.getElementById("g0r4d1").align = "left";
        document.getElementById("g0r4d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar2()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 3") {
        randomG = randG(3);
        verbArray = [{VBG:'baking a cake', VBD:'baked a cake', pic:"Level 7/images/bake a cake.png"}, {VBG:'cooking a meal', VBD:'cooked a meal', pic:"Level 7/images/cook a meal.png"}, {VBG:'making a sandwich', VBD:'made a sandwich', pic:"Level 7/images/make a sandwich.png"}, {VBG:'drawing a picture', VBD:'drew a picture', pic:"Level 7/images/draw a picture.png"}, {VBG:'vacuuming the floor', VBD:'vacuumed the floor', pic:"Level 7/images/vacuum the floor.png"},  {VBG:'making a call', VBD:'made a call', pic:"Level 7/images/make a call.png"}, {VBG:'answering the phone', VBD:'answered the phone', pic:"Level 7/images/answer the phone.png"}, {VBG:'trying on a shirt', VBD:'tried on a shirt', pic:"Level 7/images/try on a shirt.png"}];
        timeArray = [" at one o'clock", " at ten o'clock", " at six o'clock", " at twelve o'clock", " at two-thirty", " at nine forty-five", " at seven oh-five", " five minutes ago", " twenty minutes ago", " one hour ago"];
        shuffleArray(verbArray);
        shuffleArray(timeArray);
        document.getElementById("gPic").src = verbArray[0].pic;
        if (randomG == 0){
            sentence = "What were you doing" + timeArray[0] + "?";
            document.getElementById("grammarCheck").value = "I was " + verbArray[0].VBG + timeArray[0] + ".";
            sentenceArray[0] = "I was " + verbArray[0].VBG + timeArray[0] + ".";
            sentenceArray[1] = "I was " + verbArray[1].VBG + timeArray[0] + ".";
            sentenceArray[2] = "I was " + verbArray[2].VBG + timeArray[0] + ".";
            sentenceArray[3] = "I was " + verbArray[3].VBG + timeArray[0] + ".";
        } else if (randomG == 1){
            sentence = "What did Addison do while Hayden was " + verbArray[1].VBG + "?";
            document.getElementById("grammarCheck").value = "Addison " + verbArray[0].VBD + " while Hayden was "+ verbArray[1].VBG + ".";
            sentenceArray[0] = "Addison " + verbArray[0].VBD + " while Hayden was "+ verbArray[1].VBG + ".";
            sentenceArray[1] = "Addison " + verbArray[2].VBD + " while Hayden was "+ verbArray[1].VBG + ".";
            sentenceArray[2] = "Addison " + verbArray[3].VBD + " while Hayden was "+ verbArray[1].VBG + ".";
            sentenceArray[3] = "Addison " + verbArray[4].VBD + " while Hayden was "+ verbArray[1].VBG + ".";
        } else {
            sentence = "What did Addison do while Hayden was " + verbArray[1].VBG + "?";
            document.getElementById("grammarCheck").value = "While Hayden was "+ verbArray[1].VBG + ", Addison " + verbArray[0].VBD + ".";
            sentenceArray[0] = "While Hayden was "+ verbArray[1].VBG + ", Addison " + verbArray[0].VBD + ".";
            sentenceArray[1] = "While Hayden was "+ verbArray[1].VBG + ", Addison " + verbArray[2].VBD + ".";
            sentenceArray[2] = "While Hayden was "+ verbArray[1].VBG + ", Addison " + verbArray[3].VBD + ".";
            sentenceArray[3] = "While Hayden was "+ verbArray[1].VBG + ", Addison " + verbArray[4].VBD + ".";
        }
        shuffleArray(sentenceArray);
        document.getElementById("g0r1d0").textContent = sentenceArray[0];
        document.getElementById("g0r1d2").textContent = sentenceArray[1];
        document.getElementById("g0r2d0").textContent = sentenceArray[2];
        document.getElementById("g0r2d2").textContent = sentenceArray[3];
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 1") {
        q1Array = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 1";
        grammarLesson = "";
    } else if (userInput == "Unit 4") {
        verbArray = [({VBG:'watching the news', VBD:'watched the news', pic:'<img src="Level 7/images/watch the news.png" />'}), ({VBG:'reading a magazine', VBD:'read a magazine', pic:'<img src="Level 7/images/read a magazine.png" />'}), ({VBG:'listening to the radio', VBD:'listened to the radio', pic:'<img src="Level 7/images/listen to the radio.png" />'}), ({VBG:'building a model', VBD:'built a model', pic:'<img src="Level 7/images/build a model.png" />'}), ({VBG:'doing puzzles', VBD:'did puzzles', pic:'<img src="Level 7/images/do puzzles.png" />'}), ({VBG:'taking a message', VBD:'took a message', pic:'<img src="Level 7/images/take a message.png" />'}), ({VBG:'leaving a message', VBD:'left a message', pic:'<img src="Level 7/images/leave a message.png" />'})];
        timeArray = ["at one o'clock", "at ten o'clock", "at six o'clock", "at twelve o'clock", "at two-thirty", "at nine forty-five", "at seven oh-five", "five minutes ago", "twenty minutes ago", "one hour ago"];
        shuffleArray(verbArray);
        shuffleArray(timeArray);
        answerInt = Math.floor(Math.random() * 4);
        if (answerInt == 0){
            document.getElementById("g0r0d0").innerHTML = "What did you do " + timeArray[0] + "?";
        } else if (answerInt == 1){
            document.getElementById("g0r0d0").innerHTML = "What was Skyler doing when Dakota " + verbArray[1].VBD + "?";
        } else if (answerInt == 2){
            document.getElementById("g0r0d0").innerHTML = "What was Dakota doing when Skyler " + verbArray[1].VBD + "?";
        }else {
            document.getElementById("g0r0d0").innerHTML = "Make a past tense sentence using 'when'.";
        }
        document.getElementById("g0r0d5").innerHTML = verbArray[0].pic;
        if (answerInt == 0){
            sampleAnswer = "I " + verbArray[0].VBD + " " + timeArray[0] + ".";
        } else if (answerInt == 1){
            sampleAnswer = "Skyler was " + verbArray[0].VBG + " when Dakota " + verbArray[1].VBD + ".";
        } else if (answerInt == 2){
            sampleAnswer = "Dakota was " + verbArray[0].VBG + " when Skyler " + verbArray[1].VBD + ".";
        } else {
            sampleAnswer = "When Skyler " + verbArray[0].VBD + ", Dakota was " + verbArray[1].VBG + ".";
        }
        document.getElementById("g0r1d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" />';
        document.getElementById("g0r1d1").align = "left";
        document.getElementById("g0r1d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = ['<a href="http://scratch.mit.edu/projects/38942726/" target="_newtab">Scratch: B7U4 Grammar</a><br><a href="http://scratch.mit.edu/projects/37565016/" target="_newtab">Scratch: B7U4 Q&A</a>'];
        grammarLesson = "";
    } else if (userInput == "Unit 5") {
        q1Array = ["before", "after"];
        shuffleArray(q1Array);
        document.getElementById("gInstructions").innerHTML = "Make a sentence using '" + q1Array[0] + "'.";
        verbArray = [({firstVerb:'wake up', secondVerb:'take a shower', pic1:'<img src="Level 7/images/wake up.png" />', pic2:'<img src="Level 7/images/take a shower.png" />'}), ({firstVerb:'take a shower', secondVerb:'get dressed', pic1:'<img src="Level 7/images/take a shower.png" />', pic2:'<img src="Level 7/images/get dressed.png" />'}), ({firstVerb:'take a shower', secondVerb:'shave your face', pic1:'<img src="Level 7/images/take a shower.png" />', pic2:'<img src="Level 7/images/shave my face.png" />'}), ({firstVerb:'take a shower', secondVerb:'put on makeup', pic1:'<img src="Level 7/images/take a shower.png" />', pic2:'<img src="Level 7/images/put on makeup.png" />'}), ({firstVerb:'set the table', secondVerb:'eat dinner', pic1:'<img src="Level 7/images/set the table.png" />', pic2:'<img src="Level 4/images/eat dinner.png" />'}), ({firstVerb:'feed the dog', secondVerb:'go to school', pic1:'<img src="Level 7/images/feed the dog.png" />', pic2:'<img src="Level 4/images/go to school.png" />'})];
        shuffleArray(verbArray);
        if (q1Array[0] == "before"){
            document.getElementById("g0r0d5").innerHTML = verbArray[0].pic1;
            var capitalized = verbArray[0].firstVerb.charAt(0).toUpperCase() + verbArray[0].firstVerb.slice(1);
            sampleAnswer = capitalized + " before you " + verbArray[0].secondVerb + ".";
        } else {
            document.getElementById("g0r0d5").innerHTML = verbArray[0].pic2;
            var capitalized = verbArray[0].secondVerb.charAt(0).toUpperCase() + verbArray[0].secondVerb.slice(1);
            sampleAnswer = capitalized + " after you " + verbArray[0].firstVerb + ".";
        }
        document.getElementById("g0r1d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" />';
        document.getElementById("g0r1d1").align = "left";
        document.getElementById("g0r1d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 6") {
        q1Array = [""];
        q2Array = ["Put on your jacket,", "Be quiet,", "Bring an umbrella,", "Eat healthy food,", "Clean your bedroom,", "Get enough sleep,", "Be a good friend,", "Learn English,", "Listen to your teacher,", "Come to my party,", "Don't be late,", "Do your homework,", "Drink enough water,", "Put on your coat,", "Take a shower every day,", "Brush your teeth after meals,", "Wash your hands before you eat,", "Hurry up,", "Study hard,", "Be careful,"];
        gLinks = ['<a href="http://scratch.mit.edu/projects/41169968/" target="_newtab">Scratch: B7U6 Grammar</a>'];
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
        gLinks = ['<a href="http://scratch.mit.edu/projects/19966243/" target="_newtab">Scratch: "Spelling: Nations"</a>'];
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