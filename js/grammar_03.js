function g_03(userInput){
    if (userInput == "Unit 1") {
        randomG = randG(2);
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "you", RESPONSE: "we"}];
        shuffleArray(PRPArray);
        NOUNArray = [{NNS:'birds', pic:"Level 3/images/bird.png"}, {NNS:'kittens', pic:"Level 3/images/kitten.png"}, {NNS:'puppies', pic:"Level 3/images/puppy.png"}, {NNS:'bunnies', pic:"Level 3/images/bunny.png"}, {NNS:'turtles', pic:"Level 3/images/turtle.png"}, {NNS:'spiders', pic:"Level 3/images/spider.png"}, {NNS:'frogs', pic:"Level 3/images/frog.png"}, {NNS:'fish', pic:"Level 3/images/fish.png"}, {NNS:'hamsters', pic:"Level 3/images/hamster.png"}, {NNS:'beetles', pic:"Level 3/images/beetle.png"}];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").src = NOUNArray[0].pic;
        if (randomG < 1) {
            sentence = "What do " + PRPArray[0].PRP + " like?";
            document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " like " + NOUNArray[0].NNS + ".";
            sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " like " + NOUNArray[0].NNS + ".";
            sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " like " + NOUNArray[1].NNS + ".";
            sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " like " + NOUNArray[2].NNS + ".";
            sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " like " + NOUNArray[3].NNS + ".";
        } else {
            randomG = randG(2);
            if (randomG < 1) {
                sentence = "Do " + PRPArray[0].PRP + " like " + NOUNArray[0].NNS + "?";
                document.getElementById("grammarCheck").value = "Yes, " + PRPArray[0].RESPONSE + " like " + NOUNArray[0].NNS + ".";
                sentenceArray[0] = "Yes, " + PRPArray[0].RESPONSE + " like " + NOUNArray[0].NNS + ".";
                sentenceArray[1] = "Yes, " + PRPArray[0].RESPONSE + " like " + NOUNArray[1].NNS + ".";
                sentenceArray[2] = "Yes, " + PRPArray[0].RESPONSE + " like " + NOUNArray[2].NNS + ".";
                sentenceArray[3] = "Yes, " + PRPArray[0].RESPONSE + " like " + NOUNArray[3].NNS + ".";
            } else {
                sentence = "Do " + PRPArray[0].PRP + " like " + NOUNArray[1].NNS + "?";
                document.getElementById("grammarCheck").value = "No, " + PRPArray[0].RESPONSE + " don't like " + NOUNArray[1].NNS + ".";
                sentenceArray[0] = "No, " + PRPArray[0].RESPONSE + " don't like " + NOUNArray[1].NNS + ".";
                sentenceArray[1] = "No, " + PRPArray[0].RESPONSE + " don't like " + NOUNArray[2].NNS + ".";
                sentenceArray[2] = "No, " + PRPArray[0].RESPONSE + " don't like " + NOUNArray[3].NNS + ".";
                sentenceArray[3] = "No, " + PRPArray[0].RESPONSE + " don't like " + NOUNArray[4].NNS + ".";
            }
        }
        shuffleArray(sentenceArray);
        document.getElementById("g0r1d0").textContent = sentenceArray[0];
        document.getElementById("g0r1d2").textContent = sentenceArray[1];
        document.getElementById("g0r2d0").textContent = sentenceArray[2];
        document.getElementById("g0r2d2").textContent = sentenceArray[3];
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 2") {
        randomG = randG(2);
        PRPArray = [{PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        NOUNArray = [{NNS:'hamburgers', pic:"Level 3/images/hamburger.png"}, {NNS:'pizza', pic:"Level 3/images/pizza.png"}, {NNS:'hot dogs', pic:"Level 3/images/hot dog.png"}, {NNS:'French fries', pic:"Level 3/images/French fries.png"}, {NNS:'onion rings', pic:"Level 3/images/onion rings.png"}, {NNS:'chicken nuggets', pic:"Level 3/images/chicken nuggets.png"}, {NNS:'cola', pic:"Level 3/images/cola.png"}, {NNS:'soda', pic:"Level 3/images/soda.png"}, {NNS:'salad', pic:"Level 3/images/salad.png"}, {NNS:'fried chicken', pic:"Level 3/images/fried chicken.png"}];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").src = NOUNArray[0].pic;
        if (randomG < 1) {
            sentence = "What does " + PRPArray[0].PRP + " like?";
            document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " likes " + NOUNArray[0].NNS + ".";
            sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " likes " + NOUNArray[0].NNS + ".";
            sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " likes " + NOUNArray[1].NNS + ".";
            sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " likes " + NOUNArray[2].NNS + ".";
            sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " likes " + NOUNArray[3].NNS + ".";
        } else {
            randomG = randG(2);
            if (randomG < 1) {
                sentence = "Does " + PRPArray[0].PRP + " like " + NOUNArray[0].NNS + "?";
                document.getElementById("grammarCheck").value = "Yes, " + PRPArray[0].RESPONSE + " likes " + NOUNArray[0].NNS + ".";
                sentenceArray[0] = "Yes, " + PRPArray[0].RESPONSE + " likes " + NOUNArray[0].NNS + ".";
                sentenceArray[1] = "Yes, " + PRPArray[0].RESPONSE + " likes " + NOUNArray[1].NNS + ".";
                sentenceArray[2] = "Yes, " + PRPArray[0].RESPONSE + " likes " + NOUNArray[2].NNS + ".";
                sentenceArray[3] = "Yes, " + PRPArray[0].RESPONSE + " likes " + NOUNArray[3].NNS + ".";
            } else {
                sentence = "Does " + PRPArray[0].PRP + " like " + NOUNArray[1].NNS + "?";
                document.getElementById("grammarCheck").value = "No, " + PRPArray[0].RESPONSE + " doesn't like " + NOUNArray[1].NNS + ".";
                sentenceArray[0] = "No, " + PRPArray[0].RESPONSE + " doesn't like " + NOUNArray[1].NNS + ".";
                sentenceArray[1] = "No, " + PRPArray[0].RESPONSE + " doesn't like " + NOUNArray[2].NNS + ".";
                sentenceArray[2] = "No, " + PRPArray[0].RESPONSE + " doesn't like " + NOUNArray[3].NNS + ".";
                sentenceArray[3] = "No, " + PRPArray[0].RESPONSE + " doesn't like " + NOUNArray[4].NNS + ".";
            }
        }
        shuffleArray(sentenceArray);
        document.getElementById("g0r1d0").textContent = sentenceArray[0];
        document.getElementById("g0r1d2").textContent = sentenceArray[1];
        document.getElementById("g0r2d0").textContent = sentenceArray[2];
        document.getElementById("g0r2d2").textContent = sentenceArray[3];
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";    
    } else if (userInput == "Unit 3") {
        randomG = randG(2);
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "we", RESPONSE: "you"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        verb = conjugate_VB(PRPArray[0].PRP, "doVerb");
        NOUNArray = [{NN:'milk', pic:"Level 3/images/milk.png"}, {NN:'juice', pic:"Level 3/images/juice.png"}, {NN:'tea', pic:"Level 3/images/tea.png"}, {NN:'coffee', pic:"Level 3/images/coffee.png"}, {NN:'ice cream', pic:"Level 3/images/ice cream.png"}, {NN:'cake', pic:"Level 3/images/cake.png"}, {NN:'bread', pic:"Level 3/images/bread.png"}, {NN:'cookies', pic:"Level 3/images/cookies.png"}, {NN:'potato chips', pic:"Level 3/images/potato chips.png"}, {NN:'popcorn', pic:"Level 3/images/popcorn.png"}];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").src = NOUNArray[0].pic;
        if (randomG < 1) {
            sentence = "What " + verb + " " + PRPArray[0].PRP + " want?";
            verb = conjugate_VB(PRPArray[0].RESPONSE, "wantVerb");
            document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + NOUNArray[0].NN + ".";
            sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + NOUNArray[0].NN + ".";
            sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + NOUNArray[1].NN + ".";
            sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + NOUNArray[2].NN + ".";
            sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + NOUNArray[3].NN + ".";
        } else {
            randomG = randG(2);
            if (randomG < 1) {
                sentence = capitalize(verb) + " " + PRPArray[0].PRP + " want " + NOUNArray[0].NN + "?";
                verb = conjugate_VB(PRPArray[0].RESPONSE, "wantVerb");
                document.getElementById("grammarCheck").value = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " " + NOUNArray[0].NN + ".";
                sentenceArray[0] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " " + NOUNArray[0].NN + ".";
                sentenceArray[1] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " " + NOUNArray[1].NN + ".";
                sentenceArray[2] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " " + NOUNArray[2].NN + ".";
                sentenceArray[3] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " " + NOUNArray[3].NN + ".";
            } else {
                sentence = capitalize(verb) + " " + PRPArray[0].PRP + " want " + NOUNArray[1].NN + "?";
                verb = conjugate_VB(PRPArray[0].RESPONSE, "doVerb");
                document.getElementById("grammarCheck").value = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't want " + NOUNArray[1].NN + ".";
                sentenceArray[0] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't want " + NOUNArray[1].NN + ".";
                sentenceArray[1] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't want " + NOUNArray[2].NN + ".";
                sentenceArray[2] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't want " + NOUNArray[3].NN + ".";
                sentenceArray[3] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't want " + NOUNArray[4].NN + ".";
            }
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