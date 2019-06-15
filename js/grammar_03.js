function g_03(userInput){
    if (userInput == "Unit 1") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
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
        gLinks = ['<a href="http://scratch.mit.edu/projects/49847728/" target="_newtab">B3U4 Grammar</a>'];
        grammarLesson = "";
    } else if (userInput == "Unit 5") {
        q1Array = ["I", "you", "he", "she", "it", "we", "they"];
        q2Array = ["Who has small eyes?", "Who has small ears?", "Who has a small nose?", "Who has a small mouth?", "Who has small teeth?", "Who has small hands?", "Who has small feet?", "Who has small arms?", "Who has small legs?", "Who has a small head?", "Who has a small face?", "Who has a small neck?", "Who has small fingers?", "Who has small toes?"];
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 6") {
        q1Array = ["yes", "yes", "yes", "yes", "yes", "no", "no", "no", "no", "no"];
        q2Array = ["Do you have long hair?", "Do you have short hair?", "Do you have curly hair?", "Do you have braided hair?", "Do you have straight hair?", "Do you have dark hair?", "Do you have red hair?", "Do you have black hair?", "Do you have brown hair?"];
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 2") {
        q1Array = ["Unit 4", "Unit 5", "Unit 6"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 2";
    } else if (userInput == "Unit 7") {
        q1Array = ["yes", "yes", "yes", "yes", "yes", "no", "no", "no", "no", "no"];
        q2Array = ["Do you like to play baseball?", "Do they like to play basketball?", "Does he like to play soccer?", "Does she like to play badminton?", "Do you like to play ping-pong?", "Do they like to play dodgeball?", "Does he like to play volleyball?", "Does she like to play tennis?", "Do you like to play golf?", "Does he like to play football?"];
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 8") {
        q1Array = ["fly a kite", "read a book", "listen to music", "watch TV", "ride a bike"];
        q2Array = ["What do you like to do on Mondays?", "What does she like to do on Tuesdays?", "What does he like to do on Wednesdays?", "What do they like to do on Thursdays?", "What do you like to do on Fridays?", "What does she like to do on Saturdays?", "What does he like to do on Sundays?"];
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 9") {
        pronounArray = ["I", "you", "we", "they", "he", "she"];
        weatherArray = [({weather:'sunny', pic:'<img src="Level 3/images/sunny.png" />'}), ({weather:'rainy', pic:'<img src="Level 3/images/rainy.png" />'}), ({weather:'cloudy', pic:'<img src="Level 3/images/cloudy.png" />'}), ({weather:'windy', pic:'<img src="Level 3/images/windy.png" />'}), ({weather:'snowy', pic:'<img src="Level 3/images/snowy.png" />'})];
        verbArray = [({verb:'shopping', pic:'<img src="Level 3/images/go shopping.png" />'}), ({verb:'swimming', pic:'<img src="Level 3/images/go swimming.png" />'}), ({verb:'hiking', pic:'<img src="Level 3/images/go hiking.png" />'}), ({verb:'fishing', pic:'<img src="Level 3/images/go fishing.png" />'}), ({verb:'skateboarding', pic:'<img src="Level 3/images/go skateboarding.png" />'}), ({verb:'jogging', pic:'<img src="Level 3/images/go jogging.png" />'})];
        shuffleArray(pronounArray);
        shuffleArray(weatherArray);
        shuffleArray(verbArray);
        document.getElementById("g0r0d0").innerHTML = "How's the weather?";
        document.getElementById("g0r0d5").innerHTML = weatherArray[0].pic;
        sampleAnswer1 = "It's " + weatherArray[0].weather + ".";
        if (pronounArray[0] == "he" || pronounArray[0] == "she"){
            document.getElementById("g0r3d0").innerHTML = "What does " + pronounArray[0] + " like to do on " + weatherArray[0].weather + " days?";
        } else {
            document.getElementById("g0r3d0").innerHTML = "What do " + pronounArray[0] + " like to do on " + weatherArray[0].weather + " days?";
        }
        var capitalized = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1);
        if (pronounArray[0] == "he" || pronounArray[0] == "she"){
            sampleAnswer2 = capitalized + " likes to go " + verbArray[0].verb + " on " + weatherArray[0].weather + " days.";
        } else {
            if (capitalized == "You"){
                capitalized = "I";
            } else if (capitalized == "I" || capitalized == "We"){
                capitalized = "You";
            }
            sampleAnswer2 = capitalized + " like to go " + verbArray[0].verb + " on " + weatherArray[0].weather + " days.";
        }
        
        document.getElementById("g0r1d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" />';
        document.getElementById("g0r1d1").align = "left";
        document.getElementById("g0r1d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar1()">Example</button>';
        document.getElementById("g0r4d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput2" />';
        document.getElementById("g0r4d1").align = "left";
        document.getElementById("g0r4d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar2()">Example</button>';
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
    document.getElementById("grammar_links").innerHTML = gLinks;
    document.getElementById("grammar_lesson").innerHTML = grammarLesson;
    document.getElementById('g_request').textContent = sentence;
}