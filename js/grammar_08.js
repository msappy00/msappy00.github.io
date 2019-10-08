function g_08(userInput){
    if (userInput == "Unit 1") {
        randomG = randG(4);
        PRPArray = [{PRP: "I", RESPONSE: "me", OBJ: "you"}, {PRP: "you", RESPONSE: "you", OBJ: "me"}, {PRP: "you", RESPONSE: "us", OBJ: "us"}, {PRP: "they", RESPONSE: "them", OBJ: "them"}, {PRP: "he", RESPONSE: "him", OBJ: "him"}, {PRP: "she", RESPONSE: "her", OBJ: "her"}, {PRP: "we", RESPONSE: "you", OBJ: "you"}];
        shuffleArray(PRPArray);
        PERSONArray = ["My mom", " My dad", "Their son", "Their daughter", "His wife", "Her husband"];
        shuffleArray(PERSONArray);
        NOUNArray = [" the cake", " the pen", " the sandwich", " the chocolate", " the markers", " the toy", " the model car", " the doll", " the pencil", " the book", " the school bag", " the notebook", " the eraser", " the pencil case", " the hat", " the belt"];
        shuffleArray(NOUNArray);
        if (randomG == 0) {
            document.getElementById("gPic").src = "Level 8/images/give to.png";
            sentence = "Who gave" + NOUNArray[0] + " to " + PRPArray[0].OBJ + "?";
            document.getElementById("grammarCheck").value = PERSONArray[0] + " gave" + NOUNArray[0] + " to " + PRPArray[0].RESPONSE + ".";
            sentenceArray[0] = PERSONArray[0] + " gave" + NOUNArray[0] + " to " + PRPArray[0].RESPONSE + ".";
            sentenceArray[1] = PERSONArray[0] + " gave" + NOUNArray[1] + " to " + PRPArray[0].RESPONSE + ".";
            sentenceArray[2] = PERSONArray[0] + " gave" + NOUNArray[2] + " to " + PRPArray[0].RESPONSE + ".";
            sentenceArray[3] = PERSONArray[0] + " gave" + NOUNArray[3] + " to " + PRPArray[0].RESPONSE + ".";
        } else if (randomG == 1) {
            document.getElementById("gPic").src = "Level 8/images/bring for.png";
            sentence = "Who brought" + NOUNArray[0] + " for " + PRPArray[0].OBJ + "?";
            document.getElementById("grammarCheck").value = PERSONArray[0] + " brought" + NOUNArray[0] + " for " + PRPArray[0].RESPONSE + ".";
            sentenceArray[0] = PERSONArray[0] + " brought" + NOUNArray[0] + " for " + PRPArray[0].RESPONSE + ".";
            sentenceArray[1] = PERSONArray[0] + " brought" + NOUNArray[1] + " for " + PRPArray[0].RESPONSE + ".";
            sentenceArray[2] = PERSONArray[0] + " brought" + NOUNArray[2] + " for " + PRPArray[0].RESPONSE + ".";
            sentenceArray[3] = PERSONArray[0] + " brought" + NOUNArray[3] + " for " + PRPArray[0].RESPONSE + ".";
        } else if (randomG == 2) {
            document.getElementById("gPic").src = "Level 8/images/give to.png";
            sentence = "Who gave " + PRPArray[0].OBJ + " " + NOUNArray[0] + "?";
            document.getElementById("grammarCheck").value = PERSONArray[0] + " gave " + PRPArray[0].RESPONSE + NOUNArray[0] + ".";
            sentenceArray[0] = PERSONArray[0] + " gave " + PRPArray[0].RESPONSE + NOUNArray[0] + ".";
            sentenceArray[1] = PERSONArray[0] + " gave " + PRPArray[0].RESPONSE + NOUNArray[1] + ".";
            sentenceArray[2] = PERSONArray[0] + " gave " + PRPArray[0].RESPONSE + NOUNArray[2] + ".";
            sentenceArray[3] = PERSONArray[0] + " gave " + PRPArray[0].RESPONSE + NOUNArray[3] + ".";
        } else {
            document.getElementById("gPic").src = "Level 8/images/bring for.png";
            sentence = "Who brought " + PRPArray[0].OBJ + " " + NOUNArray[0] + "?";
            document.getElementById("grammarCheck").value = PERSONArray[0] + " brought " + PRPArray[0].RESPONSE + NOUNArray[0] + ".";
            sentenceArray[0] = PERSONArray[0] + " brought " + PRPArray[0].RESPONSE + NOUNArray[0] + ".";
            sentenceArray[1] = PERSONArray[0] + " brought " + PRPArray[0].RESPONSE + NOUNArray[1] + ".";
            sentenceArray[2] = PERSONArray[0] + " brought " + PRPArray[0].RESPONSE + NOUNArray[2] + ".";
            sentenceArray[3] = PERSONArray[0] + " brought " + PRPArray[0].RESPONSE + NOUNArray[3] + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 2") {
        randomG = randG(2);
        if (randomG < 1){
            ADJArray = [{NN: "Number 1 is ", COMP: "faster", pic:"Level 8/images/fast.png"}, {NN: "Number 4 ", COMP: "slower", pic:"Level 8/images/slow.png"}, {NN: "The orange cat ", COMP: "fatter", pic:"Level 8/images/fat.png"}, {NN: "The woman in the blue dress ", COMP: "slimmer", pic:"Level 8/images/slim.png"}];
            shuffleArray(ADJArray);
            sentence = "Who is " + ADJArray[0].COMP + "?";
        } else {
            ADJArray = [{NN: "The doll on the left ", COMP: "prettier", pic:"Level 8/images/pretty.png"}, {NN: "The duck on the right ", COMP: "uglier", pic:"Level 8/images/ugly.png"}, {NN: "The orange ball ", COMP: "bigger", pic:"Level 8/images/big.png"}, {NN: "The blue ball ", COMP: "smaller", pic:"Level 8/images/small.png"}];
            shuffleArray(ADJArray);
            sentence = "Which is " + ADJArray[0].COMP + "?";
        }
        document.getElementById("gPic").src = ADJArray[0].pic;
        document.getElementById("grammarCheck").value = ADJArray[0].NN + "is " + ADJArray[0].COMP + ".";
        sentenceArray[0] = ADJArray[0].NN + "is " + ADJArray[0].COMP + ".";
        sentenceArray[1] = ADJArray[0].NN + "is " + ADJArray[1].COMP + ".";
        sentenceArray[2] = ADJArray[0].NN + "is " + ADJArray[2].COMP + ".";
        sentenceArray[3] = ADJArray[0].NN + "is " + ADJArray[3].COMP + ".";
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 3") {
        randomG = randG(2);
        if (randomG < 1){
        ADJArray = [{NN1: "The boy on the right", NN2: "the boy on the left", COMP: "more handsome", pic: "Level 8/images/handsome.png"}, {NN1: "The girl on the right", NN2: "the girl on the left", COMP: "more beautiful", pic: "Level 8/images/beautiful.png"}];
        shuffleArray(ADJArray);
        sentence = "Who is " + ADJArray[0].COMP + "?";
        document.getElementById("gPic").src = ADJArray[0].pic;
        document.getElementById("grammarCheck").value = ADJArray[0].NN1 + " is " + ADJArray[0].COMP + " than " + ADJArray[0].NN2 + ".";
        sentenceArray[0] = ADJArray[0].NN1 + " is " + ADJArray[0].COMP + " than " + ADJArray[0].NN2 + ".";
        sentenceArray[1] = ADJArray[0].NN1 + " is " + ADJArray[1].COMP + " than " + ADJArray[0].NN2 + ".";
        sentenceArray[2] = "";
        sentenceArray[3] = "";
    } else {
        ADJArray = [{NN1: "The box on the right", NN2: "the box on the left", COMP: "heavier", pic: "Level 8/images/heavy.png"}, {NN1: "The tablet", NN2: "the laptop", COMP: "lighter", pic: "Level 8/images/light.png"}, {NN1: "The cookie", NN2: "the chocolate bar", COMP: "cheaper", pic: "Level 8/images/cheap.png"}, {NN1: "The movie theater", NN2: "the bookstore", COMP: "more modern", pic: "Level 8/images/modern.png"}, {NN1: "The problem on the right", NN2: "the problem on the left", COMP: "more difficult", pic: "Level 8/images/difficult.png"}, {NN1: "The red watch", NN2: "the blue watch", COMP: "more expensive", pic: "Level 8/images/expensive.png"}, {NN1: "The lion on the right", NN2: "the lion on the left", COMP: "more dangerous", pic: "Level 8/images/dangerous.png"}];
        shuffleArray(ADJArray);
        sentence = "Which is " + ADJArray[0].COMP + "?";
        document.getElementById("gPic").src = ADJArray[0].pic;
        document.getElementById("grammarCheck").value = ADJArray[0].NN1 + " is " + ADJArray[0].COMP + " than " + ADJArray[0].NN2 + ".";
        sentenceArray[0] = ADJArray[0].NN1 + " is " + ADJArray[0].COMP + " than " + ADJArray[0].NN2 + ".";
        sentenceArray[1] = ADJArray[0].NN1 + " is " + ADJArray[1].COMP + " than " + ADJArray[0].NN2 + ".";
        sentenceArray[2] = ADJArray[0].NN1 + " is " + ADJArray[2].COMP + " than " + ADJArray[0].NN2 + ".";
        sentenceArray[3] = ADJArray[0].NN1 + " is " + ADJArray[3].COMP + " than " + ADJArray[0].NN2 + ".";
    }   
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Review 1") {
        unitArray = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(unitArray);
        g_08(unitArray[0]);
        currentUnit = "Review 1";
    } else if (userInput == "Unit 4") {
        randomG = randG(2);
        if (randomG == 0) {
            VOCArray = [{NN1: "The boy on the right", NN2: "the boy on the left", COMP: "has less hair", pic: "Level 8/images/little.png"}, {NN1: "The boy on the right", NN2: "the boy on the left", COMP: "has more ice cream", pic: "Level 8/images/much.png"}, {NN1: "The man on the right", NN2: "the boy on the left", COMP: "is stronger", pic: "Level 8/images/strong.png"}, {NN1: "The boy on the right", NN2: "the boy on the left", COMP: "is weaker", pic: "Level 8/images/weak.png"}];
            shuffleArray(VOCArray);
            sentence = "Who " + VOCArray[0].COMP + "?";
            document.getElementById("gPic").src = VOCArray[0].pic;
            document.getElementById("grammarCheck").value = VOCArray[0].NN1 + " " + VOCArray[0].COMP + " than " + VOCArray[0].NN2 + ".";
            sentenceArray[0] = VOCArray[0].NN1 + " " + VOCArray[0].COMP + " than " + VOCArray[0].NN2 + ".";
            sentenceArray[1] = VOCArray[0].NN1 + " " + VOCArray[1].COMP + " than " + VOCArray[0].NN2 + ".";
            sentenceArray[2] = VOCArray[0].NN1 + " " + VOCArray[2].COMP + " than " + VOCArray[0].NN2 + ".";
            sentenceArray[3] = VOCArray[0].NN1 + " " + VOCArray[3].COMP + " than " + VOCArray[0].NN2 + ".";
        } else {    
            VOCArray = [{NN1: "The blue car", NN2: "the orange car", COMP: "better", pic: "Level 8/images/better.png"}, {NN1: "30", NN2: "50", COMP: "worse", pic: "Level 8/images/worse.png"}];
            shuffleArray(VOCArray);
            sentence = "Which is " + VOCArray[0].COMP + "?";
            document.getElementById("gPic").src = VOCArray[0].pic;
            document.getElementById("grammarCheck").value = VOCArray[0].NN1 + " is " + VOCArray[0].COMP + " than " + VOCArray[0].NN2 + ".";
            sentenceArray[0] = VOCArray[0].NN1 + " is " + VOCArray[0].COMP + " than " + VOCArray[0].NN2 + ".";
            sentenceArray[1] = VOCArray[0].NN1 + " is " + VOCArray[1].COMP + " than " + VOCArray[0].NN2 + ".";
            sentenceArray[2] = "";
            sentenceArray[3] = "";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 5") {
        randomG = randG(2);
        if (randomG == 0) {
            VOCArray = [{NN: "The baby", COMP: "the youngest", pic: "Level 8/images/young.png"}, {NN: "The man on the right", COMP: "the oldest", pic: "Level 8/images/old.png"}, {NN: "The boy on the left", COMP: "the wettest", pic: "Level 8/images/wet.png"}, {NN: "The boy on the right", COMP: "the dirtiest", pic: "Level 8/images/dirty.png"}];
            shuffleArray(VOCArray);
            sentence = "Who is " + VOCArray[0].COMP + "?";
            document.getElementById("gPic").src = VOCArray[0].pic;
            document.getElementById("grammarCheck").value = VOCArray[0].NN + " is " + VOCArray[0].COMP + ".";
            sentenceArray[0] = VOCArray[0].NN + " is " + VOCArray[0].COMP + ".";
            sentenceArray[1] = VOCArray[0].NN + " is " + VOCArray[1].COMP + ".";
            sentenceArray[2] = VOCArray[0].NN + " is " + VOCArray[2].COMP + ".";
            sentenceArray[3] = VOCArray[0].NN + " is " + VOCArray[3].COMP + ".";
        } else {    
            VOCArray = [{NN: "The glass in the middle", COMP: "the cleanest", pic: "Level 8/images/clean.png"}, {NN: "The problem on the right", COMP: "the easiest", pic: "Level 8/images/easy.png"}];
            shuffleArray(VOCArray);
            sentence = "Which is " + VOCArray[0].COMP + "?";
            document.getElementById("gPic").src = VOCArray[0].pic;
            document.getElementById("grammarCheck").value = VOCArray[0].NN + " is " + VOCArray[0].COMP + ".";
            sentenceArray[0] = VOCArray[0].NN + " is " + VOCArray[0].COMP + ".";
            sentenceArray[1] = VOCArray[0].NN + " is " + VOCArray[1].COMP + ".";
            sentenceArray[2] = "";
            sentenceArray[3] = "";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 6") {
        
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Review 2") {
        unitArray = ["Unit 4", "Unit 5", "Unit 6"];
        shuffleArray(unitArray);
        g_08(unitArray[0]);
        currentUnit = "Review 2";
    } else if (userInput == "Unit 7") {
        
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 8") {
        
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Unit 9") {
        
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
    } else if (userInput == "Review 3") {
        unitArray = ["Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(unitArray);
        g_08(unitArray[0]);
        currentUnit = "Review 3";
    } else if (userInput == "Final Review") {
        unitArray = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(unitArray);
        g_08(unitArray[0]);
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