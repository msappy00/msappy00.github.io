function g_07(userInput){
    if (userInput == "Unit 1") {
        randomG = randG(2);
        PRPArray = [{PRP: "I", RESPONSE: "you"}, {PRP: "you", RESPONSE: "I"}, {PRP: "you", RESPONSE: "we"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}, {PRP: "we", RESPONSE: "you"}];
        shuffleArray(PRPArray);
        verbArray = [{VBD:'made a card', pic:"Level 7/images/made.png"}, {VBD:'took a picture', pic:"Level 7/images/took.png"}, {VBD:'saw a turtle', pic:"Level 7/images/saw.png"}, {VBD:'got a gift', pic:"Level 7/images/got.png"}, {VBD:'sat on a chair', pic:"Level 7/images/sat.png"},  {VBD:'sang a song', pic:"Level 7/images/sang.png"}, {VBD:'gave a gift', pic:"Level 7/images/gave.png"}, {VBD:'swam in the pool', pic:"Level 7/images/swam.png"}];
        shuffleArray(verbArray);
        NOUNArray = [{NN:"park", pic:"Level 4/images/park.png"}, {NN:"supermarket", pic:"Level 4/images/supermarket.png"}, {NN:"city", pic:"Level 4/images/city.png"}, {NN:"countryside", pic:"Level 4/images/countryside.png"}, {NN:"beach", pic:"Level 6/images/beach.png"}, {NN:"airport", pic:"Level 6/images/airport.png"}, {NN:"farm", pic:"Level 6/images/farm.png"}, {NN:"concert", pic:"Level 6/images/concert.png"}, {NN:"classroom", pic:"Level 6/images/classroom.png"}, {NN:"amusement park", pic:"Level 6/images/amusement park.png"}, {NN:"playground", pic:"Level 6/images/playground.png"}, {NN:"port", pic:"Level 6/images/port.png"}, {NN:"bus stop", pic:"Level 4/images/bus stop.png"}, {NN:"bank", pic:"Level 4/images/bank.png"}, {NN:"bookstore", pic:"Level 4/images/bookstore.png"}, {NN:"convenience store", pic:"Level 4/images/convenience store.png"}, {NN:"department store", pic:"Level 4/images/department store.png"}, {NN:"museum", pic:"Level 4/images/museum.png"}, {NN:"post office", pic:"Level 4/images/post office.png"}, {NN:"restaurant", pic:"Level 4/images/.png"}, {NN:"movie theater", pic:"Level 4/images/.png"}, {NN:"bakery", pic:"Level 4/images/.png"}, {NN:"hospital", pic:"Level 4/images/hospital.png"}, {NN:"library", pic:"Level 4/images/library.png"}, {NN:"clinic", pic:"Level 4/images/clinic.png"}, {NN:"gas station", pic:"Level 4/images/gas station.png"}, {NN:"toy store", pic:"Level 4/images/toy store.png"}];
        shuffleArray(NOUNArray);
        if (randomG < 1){
            document.getElementById("gPic").src = NOUNArray[0].pic;
            sentence = "Where did " + PRPArray[0].PRP + " go?";
            document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " went to the " + NOUNArray[0].NN + ".";
            sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " went to the " + NOUNArray[0].NN + ".";
            sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " went to the " + NOUNArray[1].NN + ".";
            sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " went to the " + NOUNArray[2].NN + ".";
            sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " went to the " + NOUNArray[3].NN + ".";    
        } else {
            document.getElementById("gPic").src = verbArray[0].pic;
            sentence = "What did " + PRPArray[0].PRP + " do there?";
            document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verbArray[0].VBD + ".";
            sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verbArray[0].VBD + ".";
            sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + verbArray[1].VBD + ".";
            sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + verbArray[2].VBD + ".";
            sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + verbArray[3].VBD + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 2") {
        randomG = randG(2);
        PRPArray = [{PRP: "I", RESPONSE: "you"}, {PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}, {PRP: "we", RESPONSE: "you"}];
        shuffleArray(PRPArray);
        verbArray = [{VBD:'wrote a letter', pic:"Level 7/images/wrote.png"}, {VBD:'had a snack', pic:"Level 7/images/had.png"}, {VBD:'sent a postcard', pic:"Level 7/images/sent.png"}, {VBD:'bought a gift', pic:"Level 7/images/bought.png"}, {VBD:'taught a lesson', pic:"Level 7/images/taught.png"},  {VBD:'brought a gift', pic:"Level 7/images/brought.png"}, {VBD:'caught a fish', pic:"Level 7/images/caught.png"}, {VBD:'found a shell', pic:"Level 7/images/found.png"}];
        shuffleArray(verbArray);
        NOUNArray = [{NN:"park", pic:"Level 4/images/park.png"}, {NN:"supermarket", pic:"Level 4/images/supermarket.png"}, {NN:"city", pic:"Level 4/images/city.png"}, {NN:"countryside", pic:"Level 4/images/countryside.png"}, {NN:"beach", pic:"Level 6/images/beach.png"}, {NN:"airport", pic:"Level 6/images/airport.png"}, {NN:"farm", pic:"Level 6/images/farm.png"}, {NN:"concert", pic:"Level 6/images/concert.png"}, {NN:"classroom", pic:"Level 6/images/classroom.png"}, {NN:"amusement park", pic:"Level 6/images/amusement park.png"}, {NN:"playground", pic:"Level 6/images/playground.png"}, {NN:"port", pic:"Level 6/images/port.png"}, {NN:"bus stop", pic:"Level 4/images/bus stop.png"}, {NN:"bank", pic:"Level 4/images/bank.png"}, {NN:"bookstore", pic:"Level 4/images/bookstore.png"}, {NN:"convenience store", pic:"Level 4/images/convenience store.png"}, {NN:"department store", pic:"Level 4/images/department store.png"}, {NN:"museum", pic:"Level 4/images/museum.png"}, {NN:"post office", pic:"Level 4/images/post office.png"}, {NN:"restaurant", pic:"Level 4/images/.png"}, {NN:"movie theater", pic:"Level 4/images/.png"}, {NN:"bakery", pic:"Level 4/images/.png"}, {NN:"hospital", pic:"Level 4/images/hospital.png"}, {NN:"library", pic:"Level 4/images/library.png"}, {NN:"clinic", pic:"Level 4/images/clinic.png"}, {NN:"gas station", pic:"Level 4/images/gas station.png"}, {NN:"toy store", pic:"Level 4/images/toy store.png"}];
        shuffleArray(NOUNArray);
        timeArray = [" last week", " last weekend", " yesterday", " yesterday afternoon", " this morning", " last Sunday", " last Monday", " last Tuesday", " last Wednesday", " last Thursday", " last Friday", " last Saturday"];
        shuffleArray(timeArray);
        transArray = [{trans:"rode a bike", pic:"Level 4/images/bicycle.png"}, {trans:"drove a car", pic:"Level 4/images/car.png"}, {trans:"rode a scooter", pic:"Level 4/images/scooter.png"}, {trans:"walked", pic:"Level 4/images/walk.png"}, {trans:"rode a bus", pic:"Level 4/images/bus.png"}, {trans:"drove a van", pic:"Level 4/images/van.png"}];
        shuffleArray(transArray);
        if (randomG < 1){
            document.getElementById("gPic").src = NOUNArray[0].pic;
            sentence = "When did " + PRPArray[0].PRP + " go to the " + NOUNArray[0].NN + "?";
            document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " went to the " + NOUNArray[0].NN + timeArray[0] + ".";
            sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " went to the " + NOUNArray[0].NN + timeArray[0] + ".";
            sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " went to the " + NOUNArray[1].NN + timeArray[0] + ".";
            sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " went to the " + NOUNArray[2].NN + timeArray[0] + ".";
            sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " went to the " + NOUNArray[3].NN + timeArray[0] + ".";
        } else {
            document.getElementById("gPic").src = transArray[0].pic;
            sentence = "How did " + PRPArray[0].PRP + " go to the " + NOUNArray[0].NN + "?";
            document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + transArray[0].trans + " to the " + NOUNArray[0].NN + ".";
            sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + transArray[0].trans + " to the " + NOUNArray[0].NN + ".";
            sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + transArray[1].trans + " to the " + NOUNArray[0].NN + ".";
            sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + transArray[2].trans + " to the " + NOUNArray[0].NN + ".";
            sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + transArray[3].trans + " to the " + NOUNArray[0].NN + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 3") {
        randomG = randG(3);
        verbArray = [{VBG:'baking a cake', VBD:'baked a cake', pic:"Level 7/images/bake a cake.png"}, {VBG:'cooking a meal', VBD:'cooked a meal', pic:"Level 7/images/cook a meal.png"}, {VBG:'making a sandwich', VBD:'made a sandwich', pic:"Level 7/images/make a sandwich.png"}, {VBG:'drawing a picture', VBD:'drew a picture', pic:"Level 7/images/draw a picture.png"}, {VBG:'vacuuming the floor', VBD:'vacuumed the floor', pic:"Level 7/images/vacuum the floor.png"},  {VBG:'making a call', VBD:'made a call', pic:"Level 7/images/make a call.png"}, {VBG:'answering the phone', VBD:'answered the phone', pic:"Level 7/images/answer the phone.png"}, {VBG:'trying on a shirt', VBD:'tried on a shirt', pic:"Level 7/images/try on a shirt.png"}];
        shuffleArray(verbArray);
        timeArray = [" at one o'clock", " at ten o'clock", " at six o'clock", " at twelve o'clock", " at two-thirty", " at nine forty-five", " at seven oh-five", " five minutes ago", " twenty minutes ago", " one hour ago"];
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
            document.getElementById("grammarCheck").value = "Addison " + verbArray[0].VBD + " while Hayden was " + verbArray[1].VBG + ".";
            sentenceArray[0] = "Addison " + verbArray[0].VBD + " while Hayden was " + verbArray[1].VBG + ".";
            sentenceArray[1] = "Addison " + verbArray[2].VBD + " while Hayden was " + verbArray[1].VBG + ".";
            sentenceArray[2] = "Addison " + verbArray[3].VBD + " while Hayden was " + verbArray[1].VBG + ".";
            sentenceArray[3] = "Addison " + verbArray[4].VBD + " while Hayden was " + verbArray[1].VBG + ".";
        } else {
            sentence = "What did Addison do while Hayden was " + verbArray[1].VBG + "?";
            document.getElementById("grammarCheck").value = "While Hayden was "+ verbArray[1].VBG + ", Addison " + verbArray[0].VBD + ".";
            sentenceArray[0] = "While Hayden was "+ verbArray[1].VBG + ", Addison " + verbArray[0].VBD + ".";
            sentenceArray[1] = "While Hayden was "+ verbArray[1].VBG + ", Addison " + verbArray[2].VBD + ".";
            sentenceArray[2] = "While Hayden was "+ verbArray[1].VBG + ", Addison " + verbArray[3].VBD + ".";
            sentenceArray[3] = "While Hayden was "+ verbArray[1].VBG + ", Addison " + verbArray[4].VBD + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 1") {
        unitArray = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(unitArray);
        g_07(unitArray[0]);
        currentUnit = "Review 1";
        grammarLesson = "";
    } else if (userInput == "Unit 4") {
        randomG = randG(3);
        verbArray = [{VBG:'watching the news', VBD:'watched the news', pic:"Level 7/images/watch the news.png"}, {VBG:'reading a magazine', VBD:'read a magazine', pic:"Level 7/images/read a magazine.png"}, {VBG:'listening to the radio', VBD:'listened to the radio', pic:"Level 7/images/listen to the radio.png"}, {VBG:'building a model', VBD:'built a model', pic:"Level 7/images/build a model.png"}, {VBG:'doing puzzles', VBD:'did puzzles', pic:"Level 7/images/do puzzles.png"}, {VBG:'taking a message', VBD:'took a message', pic:"Level 7/images/take a message.png"}, {VBG:'leaving a message', VBD:'left a message', pic:"Level 7/images/leave a message.png"}];
        shuffleArray(verbArray);
        document.getElementById("gPic").src = verbArray[0].pic;
        if (randomG == 0){
            sentence = "What was Skyler doing when Dakota " + verbArray[1].VBD + "?";
            document.getElementById("grammarCheck").value = "Skyler was " + verbArray[0].VBG + " when Dakota " + verbArray[1].VBD + ".";
            sentenceArray[0] = "Skyler was " + verbArray[0].VBG + " when Dakota " + verbArray[1].VBD + ".";
            sentenceArray[1] = "Skyler was " + verbArray[1].VBG + " when Dakota " + verbArray[1].VBD + ".";
            sentenceArray[2] = "Skyler was " + verbArray[2].VBG + " when Dakota " + verbArray[1].VBD + ".";
            sentenceArray[3] = "Skyler was " + verbArray[3].VBG + " when Dakota " + verbArray[1].VBD + ".";
        } else if (randomG == 1){
            sentence = "What was Skyler doing when Dakota " + verbArray[1].VBD + "?";
            document.getElementById("grammarCheck").value = "When Dakota " + verbArray[1].VBD + ", Skyler was " + verbArray[0].VBG + ".";
            sentenceArray[0] = "When Dakota " + verbArray[1].VBD + ", Skyler was " + verbArray[0].VBG + ".";
            sentenceArray[1] = "When Dakota " + verbArray[1].VBD + ", Skyler was " + verbArray[1].VBG + ".";
            sentenceArray[2] = "When Dakota " + verbArray[1].VBD + ", Skyler was " + verbArray[2].VBG + ".";
            sentenceArray[3] = "When Dakota " + verbArray[1].VBD + ", Skyler was " + verbArray[3].VBG + ".";
        } else if (randomG == 2){
            sentence = "What did Dakota do while Skyler was " + verbArray[1].VBG + "?";
            document.getElementById("grammarCheck").value = "Dakota " + verbArray[0].VBD + " while Skyler was " + verbArray[1].VBG + ".";
            sentenceArray[0] = "Dakota " + verbArray[0].VBD + " while Skyler was " + verbArray[1].VBG + ".";
            sentenceArray[1] = "Dakota " + verbArray[2].VBD + " while Skyler was " + verbArray[1].VBG + ".";
            sentenceArray[2] = "Dakota " + verbArray[3].VBD + " while Skyler was " + verbArray[1].VBG + ".";
            sentenceArray[3] = "Dakota " + verbArray[4].VBD + " while Skyler was " + verbArray[1].VBG + ".";
        } else {
            sentence = "What did Dakota do while Skyler was " + verbArray[1].VBG + "?";
            document.getElementById("grammarCheck").value = "While Skyler was " + verbArray[1].VBG + ", Dakota " + verbArray[0].VBD + ".";
            sentenceArray[0] = "While Skyler was " + verbArray[1].VBG + ", Dakota " + verbArray[0].VBD + ".";
            sentenceArray[1] = "While Skyler was " + verbArray[1].VBG + ", Dakota " + verbArray[2].VBD + ".";
            sentenceArray[2] = "While Skyler was " + verbArray[1].VBG + ", Dakota " + verbArray[3].VBD + ".";
            sentenceArray[3] = "While Skyler was " + verbArray[1].VBG + ", Dakota " + verbArray[4].VBD + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = ['<a href="http://scratch.mit.edu/projects/38942726/" target="_newtab">Scratch: B7U4 Grammar</a><br><a href="http://scratch.mit.edu/projects/37565016/" target="_newtab">Scratch: B7U4 Q&A</a>'];
        grammarLesson = "";
    } else if (userInput == "Unit 5") {
        q1Array = ["before", "after"];
        shuffleArray(q1Array);
        document.getElementById("gInstructions").innerHTML = "Make a sentence using '" + q1Array[0] + "'.";
        verbArray = [({firstVerb:'wake up', secondVerb:'take a shower', pic1:"Level 7/images/wake up.png", pic2:"Level 7/images/take a shower.png"}), ({firstVerb:'take a shower', secondVerb:'get dressed', pic1:"Level 7/images/take a shower.png", pic2:"Level 7/images/get dressed.png"}), ({firstVerb:'take a shower', secondVerb:'shave your face', pic1:"Level 7/images/take a shower.png", pic2:"Level 7/images/shave my face.png"}), ({firstVerb:'take a shower', secondVerb:'put on makeup', pic1:"Level 7/images/take a shower.png", pic2:"Level 7/images/put on makeup.png"}), ({firstVerb:'set the table', secondVerb:'eat dinner', pic1:"Level 7/images/set the table.png", pic2:"Level 4/images/eat dinner.png"}), ({firstVerb:'feed the dog', secondVerb:'go to school', pic1:"Level 7/images/feed the dog.png", pic2:"Level 4/images/go to school.png"})];
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
        unitArray = ["Unit 4", "Unit 5", "Unit 6"];
        shuffleArray(unitArray);
        g_07(unitArray[0]);
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