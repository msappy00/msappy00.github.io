function g_01(userInput){

    if (userInput == "Unit 1") {
        PRPArray = [PRPArray[0], PRPArray[1]];
        shuffleArray(PRPArray);
        NOUNArray = [{NOUN:'boy', pic:'<img src="Level 1/images/boy.png" />'}, {NOUN:'girl', pic:'<img src="Level 1/images/girl.png" />'}, 
            {NOUN:'woman', pic:'<img src="Level 1/images/woman.png" />'}, {NOUN:'man', pic:'<img src="Level 1/images/man.png" />'}, 
            {NOUN:'student', pic:'<img src="Level 1/images/student.png" />'}, {NOUN:'teacher', pic:'<img src="Level 1/images/teacher.png" />'}];
        DET = DETArray[0];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").innerHTML = NOUNArray[0].pic;
        sentence = [capitalize(PRPArray[0].PRP) + " ______ " + DET, NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
        document.getElementById("gInstructions").innerHTML = "<h1>" + sentence + "</h1>";
        document.getElementById("grammarCheck").value = conjugate_verb(PRPArray[0].PRP, beVerb);
        document.getElementById("request").value = VERB;
        sentence = [PRPArray[0].PRP, VERB, DET, NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];            
        sentenceArray = [beVerb.VBPArray[0].RESPONSE, beVerb.VBPArray[1].RESPONSE, "", ""];
        gLinks = [''];
        grammarLesson = "";   
    } else if (userInput == "Unit 2") {
        PRPArray = [PRPArray[3], PRPArray[4]];
        shuffleArray(PRPArray);
        sentence = [WPArray[0], conjugate_verb(PRPArray[0].PRP, beVerb), PRPArray[0].PRP].join(" ") + PUNCTArray[1];
        document.getElementById("request").value = sentence;
        NOUNArray = [{NOUN:'grandfather', pic:'<img src="Level 1/images/grandfather.png" />'}, {NOUN:'father', pic:'<img src="Level 1/images/father.png" />'}, 
            {NOUN:'uncle', pic:'<img src="Level 1/images/uncle.png" />'}, {NOUN:'brother', pic:'<img src="Level 1/images/brother.png" />'}, 
                {NOUN:'grandmother', pic:'<img src="Level 1/images/grandmother.png" />'}, {NOUN:'mother', pic:'<img src="Level 1/images/mother.png" />'}, 
                {NOUN:'aunt', pic:'<img src="Level 1/images/aunt.png" />'}, {NOUN:'cousin', pic:'<img src="Level 1/images/cousin.png" />'}, 
                {NOUN:'sister', pic:'<img src="Level 1/images/sister.png" />'}];
        if (PRPArray[0].PRP == "he") {NOUNArray = NOUNArray.slice(0, 4)}
        else {NOUNArray = NOUNArray.slice(4)};
        shuffleArray(NOUNArray);
        document.getElementById("gPic").innerHTML = NOUNArray[0].pic;
        document.getElementById("grammarCheck").value = [capitalize(PRPArray[0].PRP), conjugate_verb(PRPArray[0].PRP, beVerb), PRPSArray[0].PRPS, NOUNArray[0].NOUN].join(" ")
         + PUNCTArray[0];
        sentenceArray[0] = [capitalize(PRPArray[0].PRP), VERB, PRPSArray[0].PRPS, NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
        sentenceArray[1] = [capitalize(PRPArray[0].PRP), VERB, PRPSArray[0].PRPS, NOUNArray[1].NOUN].join(" ") + PUNCTArray[0];
        sentenceArray[2] = [capitalize(PRPArray[0].PRP), VERB, PRPSArray[0].PRPS, NOUNArray[2].NOUN].join(" ") + PUNCTArray[0];
        sentenceArray[3] = [capitalize(PRPArray[0].PRP), VERB, PRPSArray[0].PRPS, NOUNArray[3].NOUN].join(" ") + PUNCTArray[0];
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 3") {
        PRPArray = [PRPArray[0], PRPArray[1], PRPArray[3], PRPArray[4]];
        shuffleArray(PRPArray);
        WRB = "how";
        ADJ = "old";
        NOUNArray = [{NN: "year", NNS: "years"}];
        shuffleArray(NUMArray);
        if (NUMArray[0].NUM == "1") {NOUN = NOUNArray[0].NN} 
        else {NOUN = NOUNArray[0].NNS}
        sentence = [capitalize(WRB), ADJ, conjugate_verb(PRPArray[0].PRP, beVerb), PRPArray[0].PRP].join(" ") + PUNCTArray[1];
        document.getElementById("request").value = sentence;
        document.getElementById("grammarCheck").value = [capitalize(PRPArray[0].RESPONSE), conjugate_verb(PRPArray[0].RESPONSE, beVerb), NUMArray[0].TEXT 
           , NOUN, ADJ].join(" ") + PUNCTArray[0];
        conjugate_verb(PRPArray[0].RESPONSE, beVerb);
        sentenceArray[0] = [capitalize(PRPArray[0].RESPONSE), VERB, NUMArray[0].TEXT, NOUN, ADJ].join(" ") + PUNCTArray[0];
        sentenceArray[1] = [capitalize(PRPArray[0].RESPONSE), VERB, NUMArray[1].TEXT, NOUN, ADJ].join(" ") + PUNCTArray[0];
        sentenceArray[2] = [capitalize(PRPArray[0].RESPONSE), VERB, NUMArray[2].TEXT, NOUN, ADJ].join(" ") + PUNCTArray[0];
        sentenceArray[3] = [capitalize(PRPArray[0].RESPONSE), VERB, NUMArray[3].TEXT, NOUN, ADJ].join(" ") + PUNCTArray[0];
        document.getElementById("gPic").innerHTML = '<div style="font-size:200px">' + NUMArray[0].NUM + '</div>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 1") {
        unitArray = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(unitArray);
        setGrammar(unitArray[0]);
        currentUnit = "Review 1";
    } else if (userInput == "Unit 4") {
        PRPArray = [PRPArray[0], PRPArray[1], PRPArray[3], PRPArray[4]];
        shuffleArray(PRPArray);
        ADV = "not";
        ADJArray = [{ADJ: "happy", pic:'<img src = "Level 1/images/happy.png" />'}, {ADJ: "sad", pic:'<img src = "Level 1/images/sad.png" />'}, 
            {ADJ: "chubby", pic:'<img src = "Level 1/images/chubby.png" />'}, {ADJ: "thin", pic:'<img src = "Level 1/images/thin.png" />'}, 
            {ADJ: "tall", pic:'<img src = "Level 1/images/tall.png" />'}, {ADJ: "short", pic:'<img src = "Level 1/images/short.png" />'}, 
            {ADJ: "cute", pic:'<img src = "Level 1/images/cute.png" />'}, {ADJ: "old", pic:'<img src = "Level 1/images/old.png" />'}, 
            {ADJ: "young", pic:'<img src = "Level 1/images/young.png" />'}];
        shuffleArray(ADJArray);
        conjugate_verb(PRPArray[0].PRP, beVerb);
        sentence = [capitalize(VERB), PRPArray[0].PRP, ADJArray[0].ADJ].join(" ") + PUNCTArray[1];
        document.getElementById("request").value = sentence;
        shuffleArray(UHArray);
        UH = capitalize(UHArray[0]);
        if (UHArray[0] == "yes") {
            conjugate_verb(PRPArray[0].RESPONSE, beVerb);
            document.getElementById("grammarCheck").value = UH + [PUNCTArray[2], PRPArray[0].RESPONSE, VERB].join(" ") + PUNCTArray[0];
            document.getElementById("gPic").innerHTML = ADJArray[0].pic;
            sentenceArray[0] = UH + [PUNCTArray[2], PRPArray[0].RESPONSE, VERB].join(" ") + PUNCTArray[0];
            conjugate_verb(PRPArray[1].RESPONSE, beVerb);
            sentenceArray[1] = UH + [PUNCTArray[2], PRPArray[1].RESPONSE, VERB].join(" ") + PUNCTArray[0];
            conjugate_verb(PRPArray[2].RESPONSE, beVerb);
            sentenceArray[2] = UH + [PUNCTArray[2], PRPArray[2].RESPONSE, VERB].join(" ") + PUNCTArray[0];
            conjugate_verb(PRPArray[3].RESPONSE, beVerb);
            sentenceArray[3] = UH + [PUNCTArray[2], PRPArray[3].RESPONSE, VERB].join(" ") + PUNCTArray[0];
        } else {
            conjugate_verb(PRPArray[0].RESPONSE, beVerb);
            document.getElementById("grammarCheck").value = UH + [PUNCTArray[2], PRPArray[0].RESPONSE, VERB, ADV].join(" ") + PUNCTArray[0];
            document.getElementById("gPic").innerHTML = ADJArray[1].pic;
            sentenceArray[0] = UH + [PUNCTArray[2], PRPArray[0].RESPONSE, VERB, ADV].join(" ") + PUNCTArray[0];
            conjugate_verb(PRPArray[1].RESPONSE, beVerb);
            sentenceArray[1] = UH + [PUNCTArray[2], PRPArray[1].RESPONSE, VERB, ADV].join(" ") + PUNCTArray[0];
            conjugate_verb(PRPArray[2].RESPONSE, beVerb);
            sentenceArray[2] = UH + [PUNCTArray[2], PRPArray[2].RESPONSE, VERB, ADV].join(" ") + PUNCTArray[0];
            conjugate_verb(PRPArray[3].RESPONSE, beVerb);
            sentenceArray[3] = UH + [PUNCTArray[2], PRPArray[3].RESPONSE, VERB, ADV].join(" ") + PUNCTArray[0];
        }
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 5") {
        randomG = randG();
        NOUNArray = [{NOUN:'pencil', pic:'<img src = "Level 1/images/pencil.png" />'}, {NOUN:'eraser', pic:'<img src = "Level 1/images/eraser.png" />'}, 
        {NOUN:'ruler', pic:'<img src = "Level 1/images/ruler.png" />'}, {NOUN:'pen', pic:'<img src = "Level 1/images/pen.png" />'}, 
        {NOUN:'desk', pic:'<img src = "Level 1/images/desk.png" />'}, {NOUN:'chair', pic:'<img src = "Level 1/images/chair.png" />'}, 
        {NOUN:'school bag', pic:'<img src = "Level 1/images/school bag.png" />'}, {NOUN:'book', pic:'<img src = "Level 1/images/book.png" />'}, 
        {NOUN:'pencil case', pic:'<img src = "Level 1/images/pencil case.png" />'}];
        shuffleArray(NOUNArray);
        ADV = "not";
        PRP = PRPArray[5].RESPONSE;
        DET = setDET(NOUNArray[0].NOUN);
        if (randomG > 2) {
            document.getElementById("gPic").innerHTML = NOUNArray[0].pic;
            sentence =[WPArray[1], beVerb.VBZ, PRPArray[5].PRP].join(" ") + PUNCTArray[1];
            document.getElementById("request").value = sentence;
            document.getElementById("grammarCheck").value = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, DET, NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
            sentenceArray[0] = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, DET, NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
            sentenceArray[1] = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, setDET(NOUNArray[1].NOUN), NOUNArray[1].NOUN].join(" ") + PUNCTArray[0];
            sentenceArray[2] = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, setDET(NOUNArray[2].NOUN), NOUNArray[2].NOUN].join(" ") + PUNCTArray[0];
            sentenceArray[3] = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, setDET(NOUNArray[3].NOUN), NOUNArray[3].NOUN].join(" ") + PUNCTArray[0];
        } else {
            sentence = [capitalize(beVerb.VBZ), PRPArray[5].PRP, DET +  " " + NOUNArray[0].NOUN].join(" ") + PUNCTArray[1];
            document.getElementById("request").value = sentence;
            shuffleArray(UHArray);
            UH = capitalize(UHArray[0]);
            if (UHArray[0] == "yes") {
                document.getElementById("gPic").innerHTML = NOUNArray[0].pic;
                document.getElementById("grammarCheck").value = UH + [PUNCTArray[2], PRP, beVerb.VBZ, DET, NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
                 sentenceArray[0] = UH + [PUNCTArray[2], PRP, beVerb.VBZ, DET, NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
                 sentenceArray[1] = UH + [PUNCTArray[2], PRP, beVerb.VBZ, setDET(NOUNArray[1].NOUN), NOUNArray[1].NOUN].join(" ") + PUNCTArray[0];
                 sentenceArray[2] = UH + [PUNCTArray[2], PRP, beVerb.VBZ, setDET(NOUNArray[2].NOUN), NOUNArray[2].NOUN].join(" ") + PUNCTArray[0];
                 sentenceArray[3] = UH + [PUNCTArray[2], PRP, beVerb.VBZ, setDET(NOUNArray[3].NOUN), NOUNArray[3].NOUN].join(" ") + PUNCTArray[0];
            } else { // UHArray[0] == "no"
            document.getElementById("gPic").innerHTML = NOUNArray[1].pic;
                document.getElementById("grammarCheck").value = UH + [PUNCTArray[2], PRP, beVerb.VBZ, ADV , DET, NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
                sentenceArray[0] = UH + [PUNCTArray[2], PRP, beVerb.VBZ, ADV, DET, NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
                sentenceArray[1] = UH + [PUNCTArray[2], PRP, beVerb.VBZ, ADV, setDET(NOUNArray[1].NOUN), NOUNArray[1].NOUN].join(" ") + PUNCTArray[0];
                sentenceArray[2] = UH + [PUNCTArray[2], PRP, beVerb.VBZ, ADV, setDET(NOUNArray[2].NOUN), NOUNArray[2].NOUN].join(" ") + PUNCTArray[0];
                sentenceArray[3] = UH + [PUNCTArray[2], PRP, beVerb.VBZ, ADV, setDET(NOUNArray[3].NOUN), NOUNArray[3].NOUN].join(" ") + PUNCTArray[0];
            }
        }
        gLinks = ['<a href="http://scratch.mit.edu/projects/14219598/" target="_newtab">Scratch: B1U5 Grammar</a>'];
        grammarLesson = "";
    } else if (userInput == "Unit 6") {
        randomG = randG();
        NOUN = "color";
        ADJArray = [{color:'red', pic:'<img src = "Level 1/images/red.png" />'}, {color:'yellow', pic:'<img src = "Level 1/images/yellow.png" />'}, 
        {color:'green', pic:'<img src = "Level 1/images/green.png" />'}, {color:'blue', pic:'<img src = "Level 1/images/blue.png" />'}, 
        {color:'pink', pic:'<img src = "Level 1/images/pink.png" />'}, {color:'black', pic:'<img src = "Level 1/images/black.png" />'}, 
        {color:'white', pic:'<img src = "Level 1/images/white.png" />'}, {color:'brown', pic:'<img src = "Level 1/images/brown.png" />'}, 
        {color:'orange', pic:'<img src = "Level 1/images/orange.png" />'}, {color:'purple', pic:'<img src = "Level 1/images/purple.png" />'}];
        shuffleArray(ADJArray);
        document.getElementById("gPic").innerHTML = ADJArray[0].pic;
        NOUNArray = ["pencil", "eraser", "ruler", "pen", "desk", "chair", "school bag", "book", "pencil case"];
        shuffleArray(NOUNArray);
        ADV = "not";
        PRP = PRPArray[5].RESPONSE;
        if (randomG > 3){
            sentence = [capitalize(WDTArray[0]), NOUN, beVerb.VBZ, PRPArray[5].PRP].join(" ") + PUNCTArray[1];
            document.getElementById("request").value = sentence;
            document.getElementById("grammarCheck").value = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, ADJArray[0].color].join(" ") + PUNCTArray[0];
            sentenceArray[0] = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, ADJArray[0].color].join(" ") + PUNCTArray[0];
            sentenceArray[1] = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, ADJArray[1].color].join(" ") + PUNCTArray[0];
            sentenceArray[2] = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, ADJArray[2].color].join(" ") + PUNCTArray[0];
            sentenceArray[3] = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, ADJArray[3].color].join(" ") + PUNCTArray[0];
        } else if (randomG < 2){
            shuffleArray(UHArray);
            UH = capitalize(UHArray[0]);
            if (UHArray[0] == "yes") {
                sentence = [capitalize(beVerb.VBZ), PRPSArray[1].PRPS, NOUNArray[0], ADJArray[0].color].join(" ") + PUNCTArray[1];
                document.getElementById("request").value = sentence;
                document.getElementById("grammarCheck").value = 
                [[UH + PUNCTArray[2]], PRP, [beVerb.VBZ + PUNCTArray[0]], capitalize(PRP), beVerb.VBZ, ADJArray[0].color].join(" ") + PUNCTArray[0];
                sentenceArray[0] = [[UH + PUNCTArray[2]], PRP, [beVerb.VBZ + PUNCTArray[0]], capitalize(PRP), beVerb.VBZ, ADJArray[0].color].join(" ") + PUNCTArray[0];
                sentenceArray[1] = [[UH + PUNCTArray[2]], PRP, [beVerb.VBZ + PUNCTArray[0]], capitalize(PRP), beVerb.VBZ, ADJArray[1].color].join(" ") + PUNCTArray[0];
                sentenceArray[2] = [[UH + PUNCTArray[2]], PRP, [beVerb.VBZ + PUNCTArray[0]], capitalize(PRP), beVerb.VBZ, ADJArray[2].color].join(" ") + PUNCTArray[0];
                sentenceArray[3] = [[UH + PUNCTArray[2]], PRP, [beVerb.VBZ + PUNCTArray[0]], capitalize(PRP), beVerb.VBZ, ADJArray[3].color].join(" ") + PUNCTArray[0];
            } else {
                sentence = [capitalize(beVerb.VBZ), PRPSArray[1].PRPS, NOUNArray[0], ADJArray[1].color].join(" ") + PUNCTArray[1];
                document.getElementById("request").value = sentence;
                document.getElementById("grammarCheck").value = 
                [[UH + PUNCTArray[2]], PRP, beVerb.VBZ, [ADV + PUNCTArray[0]], capitalize(PRP), beVerb.VBZ, ADJArray[0].color].join(" ") + PUNCTArray[0];
                sentenceArray[0] = [[UH + PUNCTArray[2]], PRP, beVerb.VBZ, [ADV + PUNCTArray[0]], capitalize(PRP), beVerb.VBZ, ADJArray[0].color].join(" ") + PUNCTArray[0];
                sentenceArray[1] = [[UH + PUNCTArray[2]], PRP, beVerb.VBZ, [ADV + PUNCTArray[0]], capitalize(PRP), beVerb.VBZ, ADJArray[1].color].join(" ") + PUNCTArray[0];
                sentenceArray[2] = [[UH + PUNCTArray[2]], PRP, beVerb.VBZ, [ADV + PUNCTArray[0]], capitalize(PRP), beVerb.VBZ, ADJArray[2].color].join(" ") + PUNCTArray[0];
                sentenceArray[3] = [[UH + PUNCTArray[2]], PRP, beVerb.VBZ, [ADV + PUNCTArray[0]], capitalize(PRP), beVerb.VBZ, ADJArray[3].color].join(" ") + PUNCTArray[0];
            }
        } else {
            PRPS = PRPSArray[1].RESPONSE;
            sentence = [capitalize(WDTArray[0]), NOUN, beVerb.VBZ, PRPSArray[1].PRPS, NOUNArray[0]].join(" ") + PUNCTArray[1];
            document.getElementById("request").value = sentence;
            document.getElementById("grammarCheck").value = [capitalize(PRPS), NOUNArray[0], beVerb.VBZ, ADJArray[0].color].join(" ") + PUNCTArray[0];
            sentenceArray[0] = [capitalize(PRPS), NOUNArray[0], beVerb.VBZ, ADJArray[0].color].join(" ") + PUNCTArray[0];
            sentenceArray[1] = [capitalize(PRPS), NOUNArray[0], beVerb.VBZ, ADJArray[1].color].join(" ") + PUNCTArray[0];
            sentenceArray[2] = [capitalize(PRPS), NOUNArray[0], beVerb.VBZ, ADJArray[2].color].join(" ") + PUNCTArray[0];
            sentenceArray[3] = [capitalize(PRPS), NOUNArray[0], beVerb.VBZ, ADJArray[3].color].join(" ") + PUNCTArray[0];
        }
        gLinks = ['<a href="http://scratch.mit.edu/projects/14493429/" target="_newtab">Scratch: Guess Book Color</a>'];
        grammarLesson = "";
    } else if (userInput == "Review 2") {
        unitArray = ["Unit 4", "Unit 5", "Unit 6"];
        shuffleArray(unitArray);
        setGrammar(unitArray[0]);
        currentUnit = "Review 2";
    } else if (userInput == "Unit 7") {
        vocArray = [({voc:'hat', pic:'<img src = "Level 1/images/hat.png" />'}), ({voc:'cap', pic:'<img src = "Level 1/images/cap.png" />'}), ({voc:'coat', pic:'<img src = "Level 1/images/coat.png" />'}), ({voc:'jacket', pic:'<img src = "Level 1/images/jacket.png" />'}), ({voc:'dress', pic:'<img src = "Level 1/images/dress.png" />'}), ({voc:'skirt', pic:'<img src = "Level 1/images/skirt.png" />'}), ({voc:'shirt', pic:'<img src = "Level 1/images/shirt.png" />'}), ({voc:'shirt', pic:'<img src = "Level 1/images/shirt.png" />'}), ({voc:'T-shirt', pic:'<img src = "Level 1/images/T-shirt.png" />'})];
        shuffleArray(vocArray);
        sentenceArray = ["This is ", "That is ", "This is not ", "That is not "];
        shuffleArray(sentenceArray);
        q2Array = ["my ", "your ", "his ", "her ", "a "];
        shuffleArray(q2Array);
        if (sentenceArray[0] == "This is not " || sentenceArray[0] == "That is not "){
            sentence = sentenceArray[0] + q2Array[0] + vocArray[1].voc + ".";
            sentenceArray[0] = "This is not " + q2Array[0] + vocArray[1].voc + ".";
            sentenceArray[0] = "That is not " + q2Array[0] + vocArray[1].voc + ".";
            sentenceArray[0] = "This is " + q2Array[0] + vocArray[0].voc + ".";
            sentenceArray[0] = "That is " + q2Array[0] + vocArray[0].voc + ".";
        } else {
            sentence = sentenceArray[0] + q2Array[0] + vocArray[0].voc + ".";
            sentenceArray[0] = "This is not " + q2Array[0] + vocArray[1].voc + ".";
            sentenceArray[0] = "That is not " + q2Array[0] + vocArray[1].voc + ".";
            sentenceArray[0] = "This is " + q2Array[0] + vocArray[0].voc + ".";
            sentenceArray[0] = "That is " + q2Array[0] + vocArray[0].voc + ".";
        }
        document.getElementById("grammarCheck").value = sentence;
        document.getElementById("gPic").innerHTML = vocArray[0].pic;
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 8") {
        vocArray = [({voc:'dog', pic:'<img src = "Level 1/images/dog.png" />'}), ({voc:'cat', pic:'<img src = "Level 1/images/cat.png" />'}), ({voc:'rat', pic:'<img src = "Level 1/images/rat.png" />'}), ({voc:'rabbit', pic:'<img src = "Level 1/images/rabbit.png" />'}), ({voc:'cow', pic:'<img src = "Level 1/images/cow.png" />'}), ({voc:'horse', pic:'<img src = "Level 1/images/horse.png" />'}), ({voc:'sheep', pic:'<img src = "Level 1/images/sheep.png" />'}), ({voc:'pig', pic:'<img src = "Level 1/images/pig.png" />'}), ({voc:'chicken', pic:'<img src = "Level 1/images/chicken.png" />'}), ({voc:'duck', pic:'<img src = "Level 1/images/duck.png" />'})];
        shuffleArray(vocArray);
        document.getElementById("gPic").innerHTML = vocArray[randomG].pic;
        if (randomG < 2){
            if (randomG == 0) {
                sentence = "What is this?";
            } else {
                sentence = "What is that?";
            }
            document.getElementById("grammarCheck").value = "It is a " + vocArray[randomG].voc + ".";
            sentenceArray[0] = "It is a " + vocArray[0].voc + ".";
            sentenceArray[0] = "It is a " + vocArray[1].voc + ".";
            sentenceArray[0] = "It is a " + vocArray[2].voc + ".";
            sentenceArray[0] = "It is a " + vocArray[3].voc + ".";
        } else if (randomG > 1){
            answerArray = ["Yes, ", "No, "];
            shuffleArray(answerArray);
            if (answerArray[0] == "Yes, ") {
                if (randomG == 2)  {
                    sentence = "Is this a " + vocArray[randomG].voc + "?";
                } else {
                    sentence = "Is that a " + vocArray[randomG].voc + "?";
                }
                document.getElementById("grammarCheck").value = "Yes, it is. It is a " + vocArray[randomG].voc + ".";
                sentenceArray[0] = answerArray[0] + "it is. It is a " + vocArray[0].voc + ".";
                sentenceArray[0] = answerArray[0] + "it is. It is a " + vocArray[1].voc + ".";
                sentenceArray[0] = answerArray[0] + "it is. It is a " + vocArray[2].voc + ".";
                sentenceArray[0] = answerArray[0] + "it is. It is a " + vocArray[3].voc + ".";
            } else {
                if (randomG == 2)  {
                    sentence = "Is this a " + vocArray[4].voc + "?";
                } else {
                    sentence = "Is that a " + vocArray[4].voc + "?";
                }
                document.getElementById("grammarCheck").value = "No, it is not. It is a " + vocArray[randomG].voc + ".";
                sentenceArray[0] = answerArray[0] + "it is not. It is a " + vocArray[0].voc + ".";
                sentenceArray[0] = answerArray[0] + "it is not. It is a " + vocArray[1].voc + ".";
                sentenceArray[0] = answerArray[0] + "it is not. It is a " + vocArray[2].voc + ".";
                sentenceArray[0] = answerArray[0] + "it is not. It is a " + vocArray[3].voc + ".";
            }
        }
        gLinks = ['<a href="http://scratch.mit.edu/projects/15196988/" target="_newtab">Scratch: Animal Sounds</a>'];
        grammarLesson = "";
    } else if (userInput == "Unit 9") {
        vocArray = [({voc:'hungry', pic:'<img src="Level 1/images/hungry.png" />'}), ({voc:'thirsty', pic:'<img src="Level 1/images/thirsty.png" />'}), ({voc:'angry', pic:'<img src="Level 1/images/angry.png" />'}), ({voc:'lazy', pic:'<img src="Level 1/images/lazy.png" />'}), ({voc:'noisy', pic:'<img src="Level 1/images/noisy.png" />'}), ({voc:'quiet', pic:'<img src="Level 1/images/quiet.png" />'}), ({voc:'sleepy', pic:'<img src="Level 1/images/sleepy.png" />'}), ({voc:'tired', pic:'<img src="Level 1/images/tired.png" />'})];
        shuffleArray(vocArray);
        PRPArray = ([{qp: "you", ap: "we"}, {qp: "we", ap: "you"}, {qp: "they", ap: "they"}]);
        shuffleArray(PRPArray);
        document.getElementById("gPic").innerHTML = vocArray[randomG].pic;
        choiceArrayInt = 0;
        while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 3)};
        answerArray = ["Yes, ", "No, "];
        shuffleArray(answerArray);
        if (answerArray[0] == "Yes, ") {
            sentence = "Are " + PRPArray[choiceArrayInt].qp + " " + vocArray[randomG].voc + "?";
            document.getElementById("grammarCheck").value = answerArray[0] + PRPArray[choiceArrayInt].ap + " are.";
            sentenceArray[0] = answerArray[0] + PRPArray[0].ap + " are.";
            sentenceArray[0] = answerArray[0] + PRPArray[1].ap + " are.";
            sentenceArray[0] = answerArray[0] + PRPArray[2].ap + " are.";
            sentenceArray[0] = "              ";
        } else {
            sentence = "Are " + PRPArray[choiceArrayInt].qp + " " + vocArray[4].voc + "?";
            document.getElementById("grammarCheck").value = answerArray[0] + PRPArray[choiceArrayInt].ap + " are not.";
            sentenceArray[0] = answerArray[0] + PRPArray[0].ap + " are not.";
            sentenceArray[0] = answerArray[0] + PRPArray[1].ap + " are not.";
            sentenceArray[0] = answerArray[0] + PRPArray[2].ap + " are not.";
            sentenceArray[0] = "                 ";
        }
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 3") {
        unitArray = ["Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(unitArray);
        setGrammar(unitArray[0]);
        currentUnit = "Review 3";
        gLinks = ['<a href="http://scratch.mit.edu/projects/20142996/" target="_newtab">Scratch: B1 Chat Bot</a>'];
        grammarLesson = "";
    } else if (userInput == "Final Review") {
        sentenceArray = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(unitArray);
        setGrammar(unitArray[0]);
        currentUnit = "Final Review";
        gLinks = ['<a href="http://scratch.mit.edu/projects/20142996/" target="_newtab">Scratch: B1 Chat Bot</a><br><a href="http://www.classtools.net/connect/201512_BdGEGi">Connect 4: B1 Vocab</a>'];
        grammarLesson = "";
    } else {
        sentenceArray = [""];
        q2Array = [""];
        gLinks = [''];
        grammarLesson = "";
    }
    shuffleArray(sentenceArray);
    document.getElementById("g0r1d0").textContent = sentenceArray[0];
    document.getElementById("g0r1d2").textContent = sentenceArray[1];
    document.getElementById("g0r2d0").textContent = sentenceArray[2];
    document.getElementById("g0r2d2").textContent = sentenceArray[3];
    if (sentence) {setTimeout(function(){speak(sentence)}, 2000)};
}