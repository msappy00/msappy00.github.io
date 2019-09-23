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
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
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
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];   
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
            document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verb + " some " + NOUNArray[0].NN + ".";
            sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " some " + NOUNArray[0].NN + ".";
            sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " some " + NOUNArray[1].NN + ".";
            sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " some " + NOUNArray[2].NN + ".";
            sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " some " + NOUNArray[3].NN + ".";
        } else {
            randomG = randG(2);
            if (randomG < 1) {
                sentence = capitalize(verb) + " " + PRPArray[0].PRP + " want some " + NOUNArray[0].NN + "?";
                verb = conjugate_VB(PRPArray[0].RESPONSE, "wantVerb");
                document.getElementById("grammarCheck").value = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " some " + NOUNArray[0].NN + ".";
                sentenceArray[0] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " some " + NOUNArray[0].NN + ".";
                sentenceArray[1] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " some " + NOUNArray[1].NN + ".";
                sentenceArray[2] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " some " + NOUNArray[2].NN + ".";
                sentenceArray[3] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " some " + NOUNArray[3].NN + ".";
            } else {
                sentence = capitalize(verb) + " " + PRPArray[0].PRP + " want some " + NOUNArray[1].NN + "?";
                verb = conjugate_VB(PRPArray[0].RESPONSE, "doVerb");
                document.getElementById("grammarCheck").value = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't want any " + NOUNArray[1].NN + ".";
                sentenceArray[0] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't want any " + NOUNArray[1].NN + ".";
                sentenceArray[1] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't want any " + NOUNArray[2].NN + ".";
                sentenceArray[2] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't want any " + NOUNArray[3].NN + ".";
                sentenceArray[3] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't want any " + NOUNArray[4].NN + ".";
            }
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Review 1") {
        unitArray = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(unitArray);
        g_03(unitArray[0]);
        currentUnit = "Review 1";
    } else if (userInput == "Unit 4") {
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "we", RESPONSE: "you"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        NOUNArray = [{NN: "kite", pic: "Level 3/images/kite.png"}, {NN: "puzzle", pic: "Level 3/images/puzzle.png"}, {NN: "jump rope", pic: "Level 3/images/jump rope.png"}, {NN: "model car", pic: "Level 3/images/model car.png"}, {NN: "bicycle", pic: "Level 3/images/bicycle.png"}, {NN: "CD player", pic: "Level 3/images/CD player.png"}, {NN: "computer", pic: "Level 3/images/computer.png"}, {NN: "computer game", pic: "Level 3/images/computer game.png"}, {NN: "stuffed animal", pic: "Level 3/images/stuffed animal.png"}, {NN: "action figure", pic: "Level 3/images/action figure.png"}];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").src = NOUNArray[0].pic;
        verb = conjugate_VB(PRPArray[0].RESPONSE, "doVerb");
        sentence = "What " + verb + " " + PRPArray[0].PRP + " want?";
        verb = conjugate_VB(PRPArray[0].RESPONSE, "wantVerb");
        document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + setDET(NOUNArray[0].NN) + " " + NOUNArray[0].NN + ".";
        sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + setDET(NOUNArray[0].NN) + " " + NOUNArray[0].NN + ".";
        sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + setDET(NOUNArray[1].NN) + " " + NOUNArray[1].NN + ".";
        sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + setDET(NOUNArray[2].NN) + " " + NOUNArray[2].NN + ".";
        sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + setDET(NOUNArray[3].NN) + " " + NOUNArray[3].NN + ".";
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = ['<a href="http://scratch.mit.edu/projects/49847728/" target="_newtab">B3U4 Grammar</a>'];
    } else if (userInput == "Unit 5") {
        randomG = randG(2);
        PRPArray = [{PRP: "I", RESPONSE: "you"}, {PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}, {PRP: "we", RESPONSE: "you"}];
        shuffleArray(PRPArray);
        ADJArray = [" big ", " small "];
        shuffleArray(ADJArray);
        verb = conjugate_VB(PRPArray[0].RESPONSE, "haveVerb");
        if (randomG < 1){
            NOUNArray = [{NN:"nose", pic: "Level 3/images/nose.png"}, {NN:"mouth", pic: "Level 3/images/mouth.png"}, {NN:"head", pic: "Level 3/images/head.png"}, {NN:"face", pic: "Level 3/images/face.png"}];
            shuffleArray(NOUNArray);
            document.getElementById("gPic").src = NOUNArray[0].pic;
            sentence = "Who has a " + ADJArray[0] + NOUNArray[0].NN + "?";
            document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verb + " a " + ADJArray[0] + NOUNArray[0].NN + ".";
            sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " a " + ADJArray[0] + NOUNArray[0].NN + ".";
            sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " a " + ADJArray[0] + NOUNArray[1].NN + ".";
            sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " a " + ADJArray[0] + NOUNArray[2].NN + ".";
            sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " a " + ADJArray[0] + NOUNArray[3].NN + ".";
        } else {
            NOUNArray = [{NN:"eyes", pic: "Level 3/images/eyes.png"}, {NN:"ears", pic: "Level 3/images/ears.png"}, {NN:"teeth", pic: "Level 3/images/teeth.png"}, {NN:"hands", pic: "Level 3/images/hands.png"}, {NN:"feet", pic: "Level 3/images/feet.png"}, {NN:"arms", pic: "Level 3/images/arms.png"}, {NN:"legs", pic: "Level 3/images/legs.png"}];
            shuffleArray(NOUNArray);
            document.getElementById("gPic").src = NOUNArray[0].pic;
            sentence = "Who has " + ADJArray[0] + NOUNArray[0].NN + "?";
            document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + ADJArray[0] + NOUNArray[0].NN + ".";
            sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + ADJArray[0] + NOUNArray[0].NN + ".";
            sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + ADJArray[0] + NOUNArray[1].NN + ".";
            sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + ADJArray[0] + NOUNArray[2].NN + ".";
            sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + ADJArray[0] + NOUNArray[3].NN + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 6") {
        randomG = randG(2);
        ADJArray = [{ADJ:"long", pic: "Level 3/images/long.png"}, {ADJ:"short", pic: "Level 3/images/short.png"}, {ADJ:"curly", pic: "Level 3/images/curly.png"}, {ADJ:"straight", pic: "Level 3/images/straight.png"}, {ADJ:"braided", pic: "Level 3/images/braided.png"}, {ADJ:"blond", pic: "Level 3/images/blond.png"}, {ADJ:"dark", pic: "Level 3/images/dark.png"}, {ADJ:"red", pic: "Level 3/images/red hair.png"}, {ADJ:"brown", pic: "Level 3/images/brown hair.png"}, {ADJ:"black", pic: "Level 3/images/black hair.png"}];
        shuffleArray(ADJArray);
        PRPArray = [{PRP: "I", RESPONSE: "you"}, {PRP: "you", RESPONSE: "I"}, , {PRP: "you", RESPONSE: "we"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}, {PRP: "we", RESPONSE: "you"}];
        shuffleArray(PRPArray);
        verb = conjugate_VB(PRPArray[0].RESPONSE, "doVerb");
        sentence = capitalize(verb) + " " + PRPArray[0].PRP + " have " + ADJArray[0].ADJ + " hair?";
        if (randomG < 1){
            document.getElementById("gPic").src = ADJArray[0].pic;
            verb = conjugate_VB(PRPArray[0].RESPONSE, "haveVerb");
            document.getElementById("grammarCheck").value = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " " + ADJArray[0].ADJ + " hair.";
            sentenceArray[0] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " " + ADJArray[0].ADJ + " hair.";
            sentenceArray[1] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " " + ADJArray[1].ADJ + " hair.";
            sentenceArray[2] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " " + ADJArray[2].ADJ + " hair.";
            sentenceArray[3] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " " + ADJArray[3].ADJ + " hair.";
        } else {
            document.getElementById("gPic").src = ADJArray[1].pic;
            verb = conjugate_VB(PRPArray[0].RESPONSE, "doVerb");
            document.getElementById("grammarCheck").value = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't have " + ADJArray[0].ADJ + " hair.";
            sentenceArray[0] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't have " + ADJArray[0].ADJ + " hair.";
            sentenceArray[1] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't have " + ADJArray[1].ADJ + " hair.";
            sentenceArray[2] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't have " + ADJArray[2].ADJ + " hair.";
            sentenceArray[3] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't have " + ADJArray[3].ADJ + " hair.";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Review 2") {
        unitArray = ["Unit 4", "Unit 5", "Unit 6"];
        shuffleArray(unitArray);
        g_03(unitArray[0]);
        currentUnit = "Review 2";
    } else if (userInput == "Unit 7") {
        randomG = randG(2);
        NOUNArray = [{NN:"baseball", pic:"Level 3/images/baseball.png"}, {NN:"basketball", pic:"Level 3/images/basketball.png"}, {NN:"soccer", pic:"Level 3/images/soccer.png"}, {NN:"badminton", pic:"Level 3/images/badminton.png"}, {NN:"ping-pong", pic:"Level 3/images/ping-pong.png"}, {NN:"dodgeball", pic:"Level 3/images/dodgeball.png"}, {NN:"volleyball", pic:"Level 3/images/volleyball.png"}, {NN:"tennis", pic:"Level 3/images/tennis.png"}, {NN:"golf", pic:"Level 3/images/golf.png"}, {NN:"football", pic:"Level 3/images/football.png"}];
        shuffleArray(NOUNArray);
        PRPArray = [{PRP: "I", RESPONSE: "you"}, {PRP: "you", RESPONSE: "I"}, , {PRP: "you", RESPONSE: "we"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        verb = conjugate_VB(PRPArray[0].RESPONSE, "doVerb");
        sentence = capitalize(verb) + " " + PRPArray[0].PRP + " like to play " + NOUNArray[0].NN + "?";
        if (randomG < 1){
            document.getElementById("gPic").src = NOUNArray[0].pic;
            verb = conjugate_VB(PRPArray[0].RESPONSE, "likeVerb");
            document.getElementById("grammarCheck").value = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " to play " + NOUNArray[0].NN + ".";
            sentenceArray[0] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " to play " + NOUNArray[0].NN + ".";
            sentenceArray[1] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " to play " + NOUNArray[1].NN + ".";
            sentenceArray[2] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " to play " + NOUNArray[2].NN + ".";
            sentenceArray[3] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " to play " + NOUNArray[3].NN + ".";
        } else {
            document.getElementById("gPic").src = NOUNArray[1].pic;
            verb = conjugate_VB(PRPArray[0].RESPONSE, "doVerb");
            document.getElementById("grammarCheck").value = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't like to play " + NOUNArray[0].NN + ".";
            sentenceArray[0] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't like to play " + NOUNArray[0].NN + ".";
            sentenceArray[1] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't like to play " + NOUNArray[1].NN + ".";
            sentenceArray[2] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't like to play " + NOUNArray[2].NN + ".";
            sentenceArray[3] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't like to play " + NOUNArray[3].NN + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 8") {
        randomG = randG(2);
        verbArray = [{verb:"fly a kite", pic:"Level 3/images/fly a kite.png"}, {verb:"read a book", pic:"Level 3/images/read a book.png"}, {verb:"listen to music", pic:"Level 3/images/listen to music.png"}, {verb:"watch TV", pic:"Level 3/images/watch TV.png"}, {verb:"ride a bike", pic:"Level 3/images/ride a bike.png"}];
        shuffleArray(verbArray);
        PRPArray = [{PRP: "I", RESPONSE: "you"}, {PRP: "you", RESPONSE: "I"}, , {PRP: "you", RESPONSE: "we"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        NNPArray = ["Sundays", "Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays"];
        shuffleArray(NNPArray);
        verb = conjugate_VB(PRPArray[0].RESPONSE, "doVerb");
        sentence = capitalize(verb) + " " + PRPArray[0].PRP + " like to " + verbArray[0].verb + " on " + NNPArray[0] + "?";
        if (randomG < 1){
            document.getElementById("gPic").src = verbArray[0].pic;
            verb = conjugate_VB(PRPArray[0].RESPONSE, "likeVerb");
            document.getElementById("grammarCheck").value = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " to " + verbArray[0].verb + " on " + NNPArray[0] + ".";
            sentenceArray[0] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " to " + verbArray[0].verb + " on " + NNPArray[0] + ".";
            sentenceArray[1] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " to " + verbArray[1].verb + " on " + NNPArray[0] + ".";
            sentenceArray[2] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " to " + verbArray[2].verb + " on " + NNPArray[0] + ".";
            sentenceArray[3] = "Yes, " + PRPArray[0].RESPONSE + " " + verb + " to " + verbArray[3].verb + " on " + NNPArray[0] + ".";
        } else {
            document.getElementById("gPic").src = verbArray[1].pic;
            verb = conjugate_VB(PRPArray[0].RESPONSE, "doVerb");
            document.getElementById("grammarCheck").value = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't like to " + verbArray[0].verb + " on " + NNPArray[0] + ".";
            sentenceArray[0] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't like to " + verbArray[0].verb + " on " + NNPArray[0] + ".";
            sentenceArray[1] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't like to " + verbArray[1].verb + " on " + NNPArray[0] + ".";
            sentenceArray[2] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't like to " + verbArray[2].verb + " on " + NNPArray[0] + ".";
            sentenceArray[3] = "No, " + PRPArray[0].RESPONSE + " " + verb + "n't like to " + verbArray[3].verb + " on " + NNPArray[0] + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 9") {
        randomG = randG(2);
        PRPArray = [{PRP: "you", RESPONSE: "I"}, {PRP: "you", RESPONSE: "we"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        ADJArray = [{ADJ:'sunny', pic:"Level 3/images/sunny.png"}, {ADJ:'rainy', pic:"Level 3/images/rainy.png"}, {ADJ:'cloudy', pic:"Level 3/images/cloudy.png"}, {ADJ:'windy', pic:"Level 3/images/windy.png"}, {ADJ:'snowy', pic:"Level 3/images/snowy.png"}];
        shuffleArray(ADJArray);
        verbArray = [{verb:'go shopping', pic:"Level 3/images/go shopping.png"}, {verb:'go swimming', pic:"Level 3/images/go swimming.png"}, {verb:'go hiking', pic:"Level 3/images/go hiking.png"}, {verb:'go fishing', pic:"Level 3/images/go fishing.png"}, {verb:'go skateboarding', pic:"Level 3/images/go skateboarding.png"}, {verb:'go jogging', pic:"Level 3/images/go jogging.png"}];
        shuffleArray(verbArray);
        if (randomG < 1){
            document.getElementById("gPic").src = ADJArray[0].pic;
            sentence = "How's the weather today?"
            document.getElementById("grammarCheck").value = "It's " + ADJArray[0].ADJ + ".";
            sentenceArray[0] = "It's " + ADJArray[0].ADJ + ".";
            sentenceArray[1] = "It's " + ADJArray[1].ADJ + ".";
            sentenceArray[2] = "It's " + ADJArray[2].ADJ + ".";
            sentenceArray[3] = "It's " + ADJArray[3].ADJ + ".";
        } else {
            document.getElementById("gPic").src = verbArray[0].pic;
            verb = conjugate_VB(PRPArray[0].RESPONSE, "doVerb");
            sentence = "What " + verb + " " + PRPArray[0].PRP +  " like to do on " + ADJArray[0].ADJ + " days?";
            verb = conjugate_VB(PRPArray[0].RESPONSE, "likeVerb");
            document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verb + " to " + verbArray[0].verb + " on " + ADJArray[0].ADJ + " days.";
                sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " to " + verbArray[0].verb + " on " + ADJArray[0].ADJ + " days.";
                sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " to " + verbArray[1].verb + " on " + ADJArray[0].ADJ + " days.";
                sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " to " + verbArray[2].verb + " on " + ADJArray[0].ADJ + " days.";
                sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " to " + verbArray[3].verb + " on " + ADJArray[0].ADJ + " days.";
            }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Review 3") {
        unitArray = ["Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(unitArray);
        g_03(unitArray[0]);
        currentUnit = "Review 3";
    } else if (userInput == "Final Review") {
        unitArray = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(unitArray);
        g_03(unitArray[0]);
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