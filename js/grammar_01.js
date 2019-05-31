function g_01(userInput){
    if (userInput == "Unit 1") {
        randomG = randG(2);
        BaseArray = [
            {NOUN:'boy', A:"I am a boy.", B:"You are a boy.", pic:"Level 1/images/boy.png"}, 
            {NOUN:'girl', A: "I am a girl.", B:"You are a girl.", pic:"Level 1/images/girl.png"}, 
            {NOUN:'woman', A: "I am a woman.", B:"You are a woman.", pic:"Level 1/images/woman.png"}, 
            {NOUN:'man', A: "I am a man.", B:"You are a man.", pic:"Level 1/images/man.png"}, 
            {NOUN:'student', A: "I am a student.", B:"You are a student.", pic:"Level 1/images/student.png"}, 
            {NOUN:'teacher', A: "I am a teacher.", B:"You are a teacher.", pic:"Level 1/images/teacher.png"}];
        shuffleArray(BaseArray);
        document.getElementById("gPic").src = BaseArray[0].pic;
        if (randomG < 1){
            document.getElementById("gInstructions").innerHTML = "<h2>I ______ a " + BaseArray[0].NOUN + ".</h2>";
            document.getElementById("grammarCheck").value = "am";
            sentence = BaseArray[0].A;
        } else {
            document.getElementById("gInstructions").innerHTML = "<h2>You ______ a " + BaseArray[0].NOUN + ".</h2>";
            document.getElementById("grammarCheck").value = "are";
            sentence = BaseArray[0].B;
        }
        document.getElementById("request").value = sentence;
        sentenceArray = ["am", "are", "", ""];
        gLinks = [''];
        grammarLesson = "";
        if (sentence){
            setTimeout(function(){speak(sentence)}, 2000);
        };   
    } else if (userInput == "Unit 2") {
        randomG = randG(2);
        if (randomG < 1){
            BaseArray = [{NOUN:'grandfather', A:"He is my grandfather.", pic:"Level 1/images/grandfather.png"}, 
            {NOUN:'father', A:"He is my father.", pic:"Level 1/images/father.png"}, 
            {NOUN:'uncle', A:"He is my uncle.", pic:"Level 1/images/uncle.png"}, 
            {NOUN:'brother', A:"He is my brother.", pic:"Level 1/images/brother.png"}];
            sentence = "Who is he?";
        } else {
            BaseArray = [{NOUN:'grandmother', A:"She is my grandmother.", pic:"Level 1/images/grandmother.png"}, 
            {NOUN:'mother', A:"She is my mother.", pic:"Level 1/images/mother.png"}, 
            {NOUN:'aunt', A:"She is my aunt.", pic:"Level 1/images/aunt.png"}, 
            {NOUN:'cousin', A:"She is my cousin.", pic:"Level 1/images/cousin.png"}, 
            {NOUN:'sister', A:"She is my sister.", pic:"Level 1/images/sister.png"}];
            sentence = "Who is she?";
        }
        shuffleArray(BaseArray);
        document.getElementById("request").value = sentence;
        document.getElementById("gPic").src = BaseArray[0].pic;
        document.getElementById("grammarCheck").value = BaseArray[0].A;
        sentenceArray = [BaseArray[0].A, BaseArray[1].A, BaseArray[2].A, BaseArray[3].A];
        gLinks = [''];
        grammarLesson = "";
        if (sentence){
            setTimeout(function(){speak(sentence)}, 2000);
        }
    } else if (userInput == "Unit 3") {
        PRPArray = [PRPArray[0], PRPArray[1], PRPArray[3], PRPArray[4]];
        shuffleArray(PRPArray);
        WRB = "how";
        ADJ = "old";
        NOUNArray = [{NN: "year", NNS: "years"}];
        picArray = ["", "Level 1/images/one.png", "Level 1/images/two.png", "Level 1/images/three.png", "Level 1/images/four.png", "Level 1/images/five.png", 
        "Level 1/images/six.png", "Level 1/images/seven.png", "Level 1/images/eight.png", "Level 1/images/nine.png", "Level 1/images/ten.png"];
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
        document.getElementById("gPic").src = picArray[NUMArray[0].NUM];
        gLinks = [''];
        grammarLesson = "";
        if (sentence){
            setTimeout(function(){speak(sentence)}, 2000);
        }
    } else if (userInput == "Review 1") {
        unitArray = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(unitArray);
        g_01(unitArray[0]);
        currentUnit = "Review 1";
    } else if (userInput == "Unit 4") {
        PRPArray = [PRPArray[0], PRPArray[1], PRPArray[3], PRPArray[4]];
        shuffleArray(PRPArray);
        ADV = "not";
        ADJArray = [{ADJ: "happy", pic:"Level 1/images/happy.png"}, {ADJ: "sad", pic:"Level 1/images/sad.png"}, 
            {ADJ: "chubby", pic:"Level 1/images/chubby.png"}, {ADJ: "thin", pic:"Level 1/images/thin.png"}, 
            {ADJ: "tall", pic:"Level 1/images/tall.png"}, {ADJ: "short", pic:"Level 1/images/short.png"}, 
            {ADJ: "cute", pic:"Level 1/images/cute.png"}, {ADJ: "old", pic:"Level 1/images/old.png"}, 
            {ADJ: "young", pic:"Level 1/images/young.png"}];
        shuffleArray(ADJArray);
        conjugate_verb(PRPArray[0].PRP, beVerb);
        sentence = [capitalize(VERB), PRPArray[0].PRP, ADJArray[0].ADJ].join(" ") + PUNCTArray[1];
        document.getElementById("request").value = sentence;
        shuffleArray(UHArray);
        UH = capitalize(UHArray[0]);
        if (UHArray[0] == "yes") {
            conjugate_verb(PRPArray[0].RESPONSE, beVerb);
            document.getElementById("grammarCheck").value = UH + [PUNCTArray[2], PRPArray[0].RESPONSE, VERB].join(" ") + PUNCTArray[0];
            document.getElementById("gPic").src = ADJArray[0].pic;
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
            document.getElementById("gPic").src = ADJArray[1].pic;
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
        if (sentence){
            setTimeout(function(){speak(sentence)}, 2000);
        }
    } else if (userInput == "Unit 5") {
        randomG = randG(4);
        NOUNArray = [{NOUN:'pencil', pic:"Level 1/images/pencil.png"}, {NOUN:'eraser', pic:"Level 1/images/eraser.png"}, 
        {NOUN:'ruler', pic:"Level 1/images/ruler.png"}, {NOUN:'pen', pic:"Level 1/images/pen.png"}, 
        {NOUN:'desk', pic:"Level 1/images/desk.png"}, {NOUN:'chair', pic:"Level 1/images/chair.png"}, 
        {NOUN:'school bag', pic:"Level 1/images/school bag.png"}, {NOUN:'book', pic:"Level 1/images/book.png"}, 
        {NOUN:'pencil case', pic:"Level 1/images/pencil case.png"}];
        shuffleArray(NOUNArray);
        ADV = "not";
        PRP = PRPArray[5].RESPONSE;
        DET = setDET(NOUNArray[0].NOUN);
        if (randomG > 2) {
            document.getElementById("gPic").src = NOUNArray[0].pic;
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
                document.getElementById("gPic").src = NOUNArray[0].pic;
                document.getElementById("grammarCheck").value = UH + [PUNCTArray[2], PRP, beVerb.VBZ, DET, NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
                 sentenceArray[0] = UH + [PUNCTArray[2], PRP, beVerb.VBZ, DET, NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
                 sentenceArray[1] = UH + [PUNCTArray[2], PRP, beVerb.VBZ, setDET(NOUNArray[1].NOUN), NOUNArray[1].NOUN].join(" ") + PUNCTArray[0];
                 sentenceArray[2] = UH + [PUNCTArray[2], PRP, beVerb.VBZ, setDET(NOUNArray[2].NOUN), NOUNArray[2].NOUN].join(" ") + PUNCTArray[0];
                 sentenceArray[3] = UH + [PUNCTArray[2], PRP, beVerb.VBZ, setDET(NOUNArray[3].NOUN), NOUNArray[3].NOUN].join(" ") + PUNCTArray[0];
            } else { // UHArray[0] == "no"
            document.getElementById("gPic").src = NOUNArray[1].pic;
                document.getElementById("grammarCheck").value = UH + [PUNCTArray[2], PRP, beVerb.VBZ, ADV , DET, NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
                sentenceArray[0] = UH + [PUNCTArray[2], PRP, beVerb.VBZ, ADV, DET, NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
                sentenceArray[1] = UH + [PUNCTArray[2], PRP, beVerb.VBZ, ADV, setDET(NOUNArray[1].NOUN), NOUNArray[1].NOUN].join(" ") + PUNCTArray[0];
                sentenceArray[2] = UH + [PUNCTArray[2], PRP, beVerb.VBZ, ADV, setDET(NOUNArray[2].NOUN), NOUNArray[2].NOUN].join(" ") + PUNCTArray[0];
                sentenceArray[3] = UH + [PUNCTArray[2], PRP, beVerb.VBZ, ADV, setDET(NOUNArray[3].NOUN), NOUNArray[3].NOUN].join(" ") + PUNCTArray[0];
            }
        }
        gLinks = ['<a href="http://scratch.mit.edu/projects/14219598/" target="_newtab">Scratch: B1U5 Grammar</a>'];
        grammarLesson = "";
        if (sentence){
            setTimeout(function(){speak(sentence)}, 2000);
        }
    } else if (userInput == "Unit 6") {
        randomG = randG(4);
        NOUN = "color";
        ADJArray = [{color:'red', pic:"Level 1/images/red.png"}, {color:'yellow', pic:"Level 1/images/yellow.png"}, 
        {color:'green', pic:"Level 1/images/green.png"}, {color:'blue', pic:"Level 1/images/blue.png"}, 
        {color:'pink', pic:"Level 1/images/pink.png"}, {color:'black', pic:"Level 1/images/black.png"}, 
        {color:'white', pic:"Level 1/images/white.png"}, {color:'brown', pic:"Level 1/images/brown.png"}, 
        {color:'orange', pic:"Level 1/images/orange.png"}, {color:'purple', pic:"Level 1/images/purple.png"}];
        shuffleArray(ADJArray);
        document.getElementById("gPic").src = ADJArray[0].pic;
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
        if (sentence){
            setTimeout(function(){speak(sentence)}, 2000);
        }
    } else if (userInput == "Review 2") {
        unitArray = ["Unit 4", "Unit 5", "Unit 6"];
        shuffleArray(unitArray);
        g_01(unitArray[0]);
        currentUnit = "Review 2";
    } else if (userInput == "Unit 7") {
        randomG = randG(4);
        NOUNArray = [{NOUN:'hat', pic:"Level 1/images/hat.png"}, {NOUN:'cap', pic:"Level 1/images/cap.png"}, {NOUN:'coat', pic:"Level 1/images/coat.png"}, 
        {NOUN:'jacket', pic:"Level 1/images/jacket.png"}, {NOUN:'dress', pic:"Level 1/images/dress.png"}, {NOUN:'skirt', pic:"Level 1/images/skirt.png"}, 
        {NOUN:'shirt', pic:"Level 1/images/shirt.png"}, {NOUN:'shirt', pic:"Level 1/images/shirt.png"}, {NOUN:'T-shirt', pic:"Level 1/images/T-shirt.png"}];
        shuffleArray(NOUNArray);
        DETArray = ["a", "not", "this", "that"];
        ATTRArray = [PRPSArray[0].RESPONSE, PRPSArray[1].RESPONSE, PRPSArray[3].RESPONSE, PRPSArray[4].RESPONSE, DETArray[0]]; // attribute array
        shuffleArray(ATTRArray);
        if (randomG == 1) {
            document.getElementById("gPic").src = NOUNArray[0].pic;
            sentence = [capitalize(DETArray[2]), beVerb.VBZ, ATTRArray[0], NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
        } else if (randomG == 2) {
            document.getElementById("gPic").src = NOUNArray[0].pic;
            sentence = [capitalize(DETArray[3]), beVerb.VBZ, ATTRArray[0], NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
        } else if (randomG == 3) {
            document.getElementById("gPic").src = NOUNArray[1].pic;
            sentence = [capitalize(DETArray[2]), beVerb.VBZ, DETArray[1], ATTRArray[0], NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
        } else {
            document.getElementById("gPic").src = NOUNArray[1].pic;
            sentence = [capitalize(DETArray[2]), beVerb.VBZ, DETArray[1], ATTRArray[0], NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
        }
        sentenceArray[0] = [capitalize(DETArray[2]), beVerb.VBZ, DETArray[1], ATTRArray[0], NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
        sentenceArray[1] = [capitalize(DETArray[3]), beVerb.VBZ, DETArray[1], ATTRArray[0], NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
        sentenceArray[2] = [capitalize(DETArray[2]), beVerb.VBZ, ATTRArray[0], NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
        sentenceArray[3] = [capitalize(DETArray[3]), beVerb.VBZ, ATTRArray[0], NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
        document.getElementById("request").value = sentence;
        document.getElementById("grammarCheck").value = sentence;
        gLinks = [''];
        grammarLesson = "";
        if (sentence){
            setTimeout(function(){speak(sentence)}, 2000);
        }
    } else if (userInput == "Unit 8") {
        randomG = randG(4);
        ADV = "not";
        NOUNArray = [{NOUN:'dog', pic:"Level 1/images/dog.png"}, {NOUN:'cat', pic:"Level 1/images/cat.png"}, {NOUN:'rat', pic:"Level 1/images/rat.png"}, 
        {NOUN:'rabbit', pic:"Level 1/images/rabbit.png"}, {NOUN:'cow', pic:"Level 1/images/cow.png"}, {NOUN:'horse', pic:"Level 1/images/horse.png"}, 
        {NOUN:'sheep', pic:"Level 1/images/sheep.png"}, {NOUN:'pig', pic:"Level 1/images/pig.png"}, {NOUN:'chicken', pic:"Level 1/images/chicken.png"}, 
        {NOUN:'duck', pic:"Level 1/images/duck.png"}];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").src = NOUNArray[0].pic;
        DETArray = [DETArray[2], DETArray[3]];
        shuffleArray(DETArray);
        DETArray.push("a");
        if (randomG > 2) {
                sentence = [capitalize(WDTArray[0]), beVerb.VBZ, DETArray[0]].join(" ") + PUNCTArray[1];
                document.getElementById("request").value = sentence;
                document.getElementById("grammarCheck").value = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
                sentenceArray[0] = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[0].NOUN].join(" ") + PUNCTArray[0];
                sentenceArray[1] = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[1].NOUN].join(" ") + PUNCTArray[0];
                sentenceArray[2] = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[2].NOUN].join(" ") + PUNCTArray[0];
                sentenceArray[3] = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[3].NOUN].join(" ") + PUNCTArray[0];
        } else {
            ATTRArray = [DETArray[2], PRPSArray[1].PRPS];
            shuffleArray(ATTRArray);
            shuffleArray(UHArray);
            UH = capitalize(UHArray[0]);
            if (UHArray[0] == "yes") {
                sentence = [capitalize(beVerb.VBZ), DETArray[0], ATTRArray[0], NOUNArray[0].NOUN].join(" ") + PUNCTArray[1];
                document.getElementById("request").value = sentence;
                document.getElementById("grammarCheck").value = 
                [[UH + PUNCTArray[2]], PRPArray[5].RESPONSE, beVerb.VBZ].join(" ") + PUNCTArray[0];
                sentenceArray[0] = [[UH + PUNCTArray[2]], PRPArray[5].RESPONSE, beVerb.VBZ].join(" ") + PUNCTArray[0];
                sentenceArray[1] = [[capitalize(UHArray[1]) + PUNCTArray[2]], PRPArray[5].RESPONSE, beVerb.VBZ, ADV].join(" ") + PUNCTArray[0];
                sentenceArray[2] = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[1].NOUN].join(" ") + PUNCTArray[0];
                sentenceArray[3] = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[2].NOUN].join(" ") + PUNCTArray[0];
            } else {
                sentence = [capitalize(beVerb.VBZ), DETArray[0], ATTRArray[0], NOUNArray[1].NOUN].join(" ") + PUNCTArray[1];
                document.getElementById("request").value = sentence;
                document.getElementById("grammarCheck").value = [[UH + PUNCTArray[2]], PRPArray[5].RESPONSE, beVerb.VBZ, ADV].join(" ") + PUNCTArray[0];
                sentenceArray[0] = [[UH + PUNCTArray[2]], PRPArray[5].RESPONSE, beVerb.VBZ, ADV].join(" ") + PUNCTArray[0];
                sentenceArray[1] = [[capitalize(UHArray[1]) + PUNCTArray[2]], PRPArray[5].RESPONSE, beVerb.VBZ].join(" ") + PUNCTArray[0];
                sentenceArray[2] = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[1].NOUN].join(" ") + PUNCTArray[0];
                sentenceArray[3] = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[2].NOUN].join(" ") + PUNCTArray[0];
            }
        }
        gLinks = ['<a href="http://scratch.mit.edu/projects/15196988/" target="_newtab">Scratch: Animal Sounds</a>'];
        grammarLesson = "";
        if (sentence){
            setTimeout(function(){speak(sentence)}, 2000);
        }
    } else if (userInput == "Unit 9") {
        ADJArray = [{ADJ:'hungry', pic:"Level 1/images/hungry.png"}, {ADJ:'thirsty', pic:"Level 1/images/thirsty.png"}, {ADJ:'angry', pic:"Level 1/images/angry.png"}, 
        {ADJ:'lazy', pic:"Level 1/images/lazy.png"}, {ADJ:'noisy', pic:"Level 1/images/noisy.png"}, {ADJ:'quiet', pic:"Level 1/images/quiet.png"}, 
        {ADJ:'sleepy', pic:"Level 1/images/sleepy.png"}, {ADJ:'tired', pic:"Level 1/images/tired.png"}];
        shuffleArray(ADJArray);
        document.getElementById("gPic").src = ADJArray[0].pic;
        PRPArray = [{PRP: "you", RESPONSE: "we"}, {PRP: "they", RESPONSE: "they"}, {PRP: "we", RESPONSE: "you"}];
        shuffleArray(PRPArray);
        shuffleArray(UHArray);
        ADV = "not";
        if (UHArray[0] == "yes") {
            sentence = [capitalize(beVerb.VBPArray[1]), PRPArray[0].PRP, ADJArray[0].ADJ].join(" ") + PUNCTArray[1];
            document.getElementById("grammarCheck").value = [[capitalize(UHArray[0]) + PUNCTArray[2]], PRPArray[0].RESPONSE, beVerb.VBPArray[1]].join(" ") + PUNCTArray[0];
            sentenceArray[0] = [[capitalize(UHArray[0]) + PUNCTArray[2]], PRPArray[0].RESPONSE, beVerb.VBPArray[1]].join(" ") + PUNCTArray[0];
            sentenceArray[1] = [[capitalize(UHArray[0]) + PUNCTArray[2]], PRPArray[1].RESPONSE, beVerb.VBPArray[1]].join(" ") + PUNCTArray[0];
            sentenceArray[2] = [[capitalize(UHArray[0]) + PUNCTArray[2]], PRPArray[2].RESPONSE, beVerb.VBPArray[1]].join(" ") + PUNCTArray[0];
            sentenceArray[3] = "              ";
        } else {
            sentence = [capitalize(beVerb.VBPArray[1]), PRPArray[0].PRP, ADJArray[1].ADJ].join(" ") + PUNCTArray[1];
            document.getElementById("grammarCheck").value = [[capitalize(UHArray[0]) + PUNCTArray[2]], PRPArray[0].RESPONSE, beVerb.VBPArray[1], ADV].join(" ") + PUNCTArray[0];
            sentenceArray[0] = [[capitalize(UHArray[0]) + PUNCTArray[2]], PRPArray[0].RESPONSE, beVerb.VBPArray[1], ADV].join(" ") + PUNCTArray[0];
            sentenceArray[1] = [[capitalize(UHArray[0]) + PUNCTArray[2]], PRPArray[1].RESPONSE, beVerb.VBPArray[1], ADV].join(" ") + PUNCTArray[0];
            sentenceArray[2] = [[capitalize(UHArray[0]) + PUNCTArray[2]], PRPArray[2].RESPONSE, beVerb.VBPArray[1], ADV].join(" ") + PUNCTArray[0];
            sentenceArray[3] = "                 ";
        }
        gLinks = [''];
        grammarLesson = "";
        if (sentence){
            setTimeout(function(){speak(sentence)}, 2000);
        }
    } else if (userInput == "Review 3") {
        unitArray = ["Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(unitArray);
        g_01(unitArray[0]);
        currentUnit = "Review 3";
        gLinks = ['<a href="http://scratch.mit.edu/projects/20142996/" target="_newtab">Scratch: B1 Chat Bot</a>'];
        grammarLesson = "";
    } else if (userInput == "Final Review") {
        unitArray = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(unitArray);
        g_01(unitArray[0]);
        currentUnit = "Final Review";
        gLinks = ['<a href="http://scratch.mit.edu/projects/20142996/" target="_newtab">Scratch: B1 Chat Bot</a><br><a href="http://www.classtools.net/connect/201512_BdGEGi">Connect 4: B1 Vocab</a>'];
        grammarLesson = "";
    } else {
        sentenceArray = [""];
        q2Array = [""];
        gLinks = [''];
        grammarLesson = "";
    }
    document.getElementById("gPic").class = "responsive";
    shuffleArray(sentenceArray);
    document.getElementById("g0r1d0").textContent = sentenceArray[0];
    document.getElementById("g0r1d2").textContent = sentenceArray[1];
    document.getElementById("g0r2d0").textContent = sentenceArray[2];
    document.getElementById("g0r2d2").textContent = sentenceArray[3];
    document.getElementById("gm0").textContent = sentenceArray[0];
    document.getElementById("gm1").textContent = sentenceArray[1];
    document.getElementById("gm2").textContent = sentenceArray[2];
    document.getElementById("gm3").textContent = sentenceArray[3];

    document.getElementById("grammar_links").innerHTML = [''];
    document.getElementById("grammar_lesson").innerHTML = "";
};