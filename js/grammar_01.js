function g_01(userInput){
    if (userInput == "Unit 1") {
        randomG = randG(2);
        BaseArray = [
            {NN:'boy', A:"I am a boy.", B:"You are a boy.", pic:"Level 1/images/boy.png"}, 
            {NN:'girl', A: "I am a girl.", B:"You are a girl.", pic:"Level 1/images/girl.png"}, 
            {NN:'woman', A: "I am a woman.", B:"You are a woman.", pic:"Level 1/images/woman.png"}, 
            {NN:'man', A: "I am a man.", B:"You are a man.", pic:"Level 1/images/man.png"}, 
            {NN:'student', A: "I am a student.", B:"You are a student.", pic:"Level 1/images/student.png"}, 
            {NN:'teacher', A: "I am a teacher.", B:"You are a teacher.", pic:"Level 1/images/teacher.png"}];
        shuffleArray(BaseArray);
        document.getElementById("gPic").src = BaseArray[0].pic;
        if (randomG < 1){
            document.getElementById("gInstructions").innerHTML = "<h2>I ______ a " + BaseArray[0].NN + ".</h2>";
            document.getElementById("grammarCheck").value = "am";
            sentence = BaseArray[0].A;
        } else {
            document.getElementById("gInstructions").innerHTML = "<h2>You ______ a " + BaseArray[0].NN + ".</h2>";
            document.getElementById("grammarCheck").value = "are";
            sentence = BaseArray[0].B;
        }
        document.getElementById("request").value = sentence;
        sentenceArray = ["am", "are", "", ""];
        gLinks = [''];
        if (sentence){
            setTimeout(function(){speak(sentence)}, 2000);
        };   
    } else if (userInput == "Unit 2") {
        randomG = randG(2);
        if (randomG < 1){
            BaseArray = [{NN:'grandfather', A:"He is my grandfather.", pic:"Level 1/images/grandfather.png"}, 
            {NN:'father', A:"He is my father.", pic:"Level 1/images/father.png"}, 
            {NN:'uncle', A:"He is my uncle.", pic:"Level 1/images/uncle.png"}, 
            {NN:'brother', A:"He is my brother.", pic:"Level 1/images/brother.png"}];
            sentence = "Who is he?";
        } else {
            BaseArray = [{NN:'grandmother', A:"She is my grandmother.", pic:"Level 1/images/grandmother.png"}, 
            {NN:'mother', A:"She is my mother.", pic:"Level 1/images/mother.png"}, 
            {NN:'aunt', A:"She is my aunt.", pic:"Level 1/images/aunt.png"}, 
            {NN:'cousin', A:"She is my cousin.", pic:"Level 1/images/cousin.png"}, 
            {NN:'sister', A:"She is my sister.", pic:"Level 1/images/sister.png"}];
            sentence = "Who is she?";
        }
        shuffleArray(BaseArray);
        document.getElementById("request").value = sentence;
        document.getElementById("gPic").src = BaseArray[0].pic;
        document.getElementById("grammarCheck").value = BaseArray[0].A;
        sentenceArray = [BaseArray[0].A, BaseArray[1].A, BaseArray[2].A, BaseArray[3].A];
        gLinks = [''];
        if (sentence){
            setTimeout(function(){speak(sentence)}, 2000);
        }
    } else if (userInput == "Unit 3") {
        PRPArray = [{PRP: "I", RESPONSE: "you"}, {PRP: "you", RESPONSE: "I"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}];
        shuffleArray(PRPArray);
        NOUNArray = [{NN: "year", NNS: "years"}];
        picArray = ["", "Level 1/images/one.png", "Level 1/images/two.png", "Level 1/images/three.png", "Level 1/images/four.png", "Level 1/images/five.png", "Level 1/images/six.png", "Level 1/images/seven.png", "Level 1/images/eight.png", "Level 1/images/nine.png", "Level 1/images/ten.png"];
        NUMArray = [{TEXT: 'one', NUM:'1'}, {TEXT:'two', NUM:'2'}, {TEXT:'three', NUM:'3'}, {TEXT:'four', NUM:'4'}, {TEXT:'five', NUM:'5'}, {TEXT:'six', NUM:'6'}, {TEXT:'seven', NUM:'7'}, {TEXT:'eight', NUM:'8'}, {TEXT:'nine', NUM:'9'}, {TEXT:'ten', NUM:'10'}];
        shuffleArray(NUMArray);
        if (NUMArray[0].NUM == "1") {NOUN = NOUNArray[0].NN} 
        else {NOUN = NOUNArray[0].NNS}
        sentence = "How old " + conjugate_VB(PRPArray[0].PRP, "beVerb") + " " + PRPArray[0].PRP + "?";
        document.getElementById("request").value = sentence;
        verb = conjugate_VB(PRPArray[0].RESPONSE, "beVerb");
        document.getElementById("grammarCheck").value = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + NUMArray[0].TEXT + " " + NOUN + " old.";
        verb = conjugate_VB(PRPArray[0].RESPONSE, "beVerb");
        sentenceArray[0] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + NUMArray[0].TEXT + " " + NOUN + " old.";
        sentenceArray[1] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + NUMArray[1].TEXT + " " + NOUN + " old.";
        sentenceArray[2] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + NUMArray[2].TEXT + " " + NOUN + " old.";
        sentenceArray[3] = capitalize(PRPArray[0].RESPONSE) + " " + verb + " " + NUMArray[3].TEXT + " " + NOUN + " old.";
        document.getElementById("gPic").src = picArray[NUMArray[0].NUM];
        gLinks = [''];
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
        conjugate_VB(PRPArray[0].PRP, "beVerb");
        sentence = [capitalize(VERB), PRPArray[0].PRP, ADJArray[0].ADJ].join(" ") + "?";
        document.getElementById("request").value = sentence;
        shuffleArray(UHArray);
        UH = capitalize(UHArray[0]);
        if (UHArray[0] == "yes") {
            conjugate_VB(PRPArray[0].RESPONSE, "beVerb");
            document.getElementById("grammarCheck").value = UH + [",", PRPArray[0].RESPONSE, VERB].join(" ") + ".";
            document.getElementById("gPic").src = ADJArray[0].pic;
            sentenceArray[0] = UH + [",", PRPArray[0].RESPONSE, VERB].join(" ") + ".";
            conjugate_VB(PRPArray[1].RESPONSE, "beVerb");
            sentenceArray[1] = UH + [",", PRPArray[1].RESPONSE, VERB].join(" ") + ".";
            conjugate_VB(PRPArray[2].RESPONSE, "beVerb");
            sentenceArray[2] = UH + [",", PRPArray[2].RESPONSE, VERB].join(" ") + ".";
            conjugate_VB(PRPArray[3].RESPONSE, "beVerb");
            sentenceArray[3] = UH + [",", PRPArray[3].RESPONSE, VERB].join(" ") + ".";
        } else {
            conjugate_VB(PRPArray[0].RESPONSE, "beVerb");
            document.getElementById("grammarCheck").value = UH + [",", PRPArray[0].RESPONSE, VERB, ADV].join(" ") + ".";
            document.getElementById("gPic").src = ADJArray[1].pic;
            sentenceArray[0] = UH + [",", PRPArray[0].RESPONSE, VERB, ADV].join(" ") + ".";
            conjugate_VB(PRPArray[1].RESPONSE, "beVerb");
            sentenceArray[1] = UH + [",", PRPArray[1].RESPONSE, VERB, ADV].join(" ") + ".";
            conjugate_VB(PRPArray[2].RESPONSE, "beVerb");
            sentenceArray[2] = UH + [",", PRPArray[2].RESPONSE, VERB, ADV].join(" ") + ".";
            conjugate_VB(PRPArray[3].RESPONSE, "beVerb");
            sentenceArray[3] = UH + [",", PRPArray[3].RESPONSE, VERB, ADV].join(" ") + ".";
        }
        gLinks = [''];
        if (sentence){
            setTimeout(function(){speak(sentence)}, 2000);
        }
    } else if (userInput == "Unit 5") {
        randomG = randG(4);
        NOUNArray = [{NN:'pencil', pic:"Level 1/images/pencil.png"}, {NN:'eraser', pic:"Level 1/images/eraser.png"}, 
        {NN:'ruler', pic:"Level 1/images/ruler.png"}, {NN:'pen', pic:"Level 1/images/pen.png"}, 
        {NN:'desk', pic:"Level 1/images/desk.png"}, {NN:'chair', pic:"Level 1/images/chair.png"}, 
        {NN:'school bag', pic:"Level 1/images/school bag.png"}, {NN:'book', pic:"Level 1/images/book.png"}, 
        {NN:'pencil case', pic:"Level 1/images/pencil case.png"}];
        shuffleArray(NOUNArray);
        ADV = "not";
        PRP = PRPArray[5].RESPONSE;
        DET = setDET(NOUNArray[0].NN);
        if (randomG > 2) {
            document.getElementById("gPic").src = NOUNArray[0].pic;
            sentence =[WPArray[1], beVerb.VBZ, PRPArray[5].PRP].join(" ") + "?";
            document.getElementById("request").value = sentence;
            document.getElementById("grammarCheck").value = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, DET, NOUNArray[0].NN].join(" ") + ".";
            sentenceArray[0] = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, DET, NOUNArray[0].NN].join(" ") + ".";
            sentenceArray[1] = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, setDET(NOUNArray[1].NN), NOUNArray[1].NN].join(" ") + ".";
            sentenceArray[2] = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, setDET(NOUNArray[2].NN), NOUNArray[2].NN].join(" ") + ".";
            sentenceArray[3] = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, setDET(NOUNArray[3].NN), NOUNArray[3].NN].join(" ") + ".";
        } else {
            sentence = [capitalize(beVerb.VBZ), PRPArray[5].PRP, DET +  " " + NOUNArray[0].NN].join(" ") + "?";
            document.getElementById("request").value = sentence;
            shuffleArray(UHArray);
            UH = capitalize(UHArray[0]);
            if (UHArray[0] == "yes") {
                document.getElementById("gPic").src = NOUNArray[0].pic;
                document.getElementById("grammarCheck").value = UH + [",", PRP, beVerb.VBZ, DET, NOUNArray[0].NN].join(" ") + ".";
                 sentenceArray[0] = UH + [",", PRP, beVerb.VBZ, DET, NOUNArray[0].NN].join(" ") + ".";
                 sentenceArray[1] = UH + [",", PRP, beVerb.VBZ, setDET(NOUNArray[1].NN), NOUNArray[1].NN].join(" ") + ".";
                 sentenceArray[2] = UH + [",", PRP, beVerb.VBZ, setDET(NOUNArray[2].NN), NOUNArray[2].NN].join(" ") + ".";
                 sentenceArray[3] = UH + [",", PRP, beVerb.VBZ, setDET(NOUNArray[3].NN), NOUNArray[3].NN].join(" ") + ".";
            } else { // UHArray[0] == "no"
            document.getElementById("gPic").src = NOUNArray[1].pic;
                document.getElementById("grammarCheck").value = UH + [",", PRP, beVerb.VBZ, ADV , DET, NOUNArray[0].NN].join(" ") + ".";
                sentenceArray[0] = UH + [",", PRP, beVerb.VBZ, ADV, DET, NOUNArray[0].NN].join(" ") + ".";
                sentenceArray[1] = UH + [",", PRP, beVerb.VBZ, ADV, setDET(NOUNArray[1].NN), NOUNArray[1].NN].join(" ") + ".";
                sentenceArray[2] = UH + [",", PRP, beVerb.VBZ, ADV, setDET(NOUNArray[2].NN), NOUNArray[2].NN].join(" ") + ".";
                sentenceArray[3] = UH + [",", PRP, beVerb.VBZ, ADV, setDET(NOUNArray[3].NN), NOUNArray[3].NN].join(" ") + ".";
            }
        }
        gLinks = ['<a href="http://scratch.mit.edu/projects/14219598/" target="_newtab">Scratch: B1U5 Grammar</a>'];
        if (sentence){
            setTimeout(function(){speak(sentence)}, 2000);
        }
    } else if (userInput == "Unit 6") {
        randomG = randG(3);
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
        if (randomG == 0){
            sentence = [capitalize(WDTArray[0]), NOUN, beVerb.VBZ, PRPArray[5].PRP].join(" ") + "?";
            document.getElementById("request").value = sentence;
            document.getElementById("grammarCheck").value = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, ADJArray[0].color].join(" ") + ".";
            sentenceArray[0] = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, ADJArray[0].color].join(" ") + ".";
            sentenceArray[1] = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, ADJArray[1].color].join(" ") + ".";
            sentenceArray[2] = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, ADJArray[2].color].join(" ") + ".";
            sentenceArray[3] = [capitalize(PRPArray[5].RESPONSE), beVerb.VBZ, ADJArray[3].color].join(" ") + ".";
        } else if (randomG == 1){
            shuffleArray(UHArray);
            UH = capitalize(UHArray[0]);
            if (UHArray[0] == "yes") {
                sentence = [capitalize(beVerb.VBZ), PRPSArray[1].PRPS, NOUNArray[0], ADJArray[0].color].join(" ") + "?";
                document.getElementById("request").value = sentence;
                document.getElementById("grammarCheck").value = 
                [[UH + ","], PRP, [beVerb.VBZ + "."], capitalize(PRP), beVerb.VBZ, ADJArray[0].color].join(" ") + ".";
                sentenceArray[0] = [[UH + ","], PRP, [beVerb.VBZ + "."], capitalize(PRP), beVerb.VBZ, ADJArray[0].color].join(" ") + ".";
                sentenceArray[1] = [[UH + ","], PRP, [beVerb.VBZ + "."], capitalize(PRP), beVerb.VBZ, ADJArray[1].color].join(" ") + ".";
                sentenceArray[2] = [[UH + ","], PRP, [beVerb.VBZ + "."], capitalize(PRP), beVerb.VBZ, ADJArray[2].color].join(" ") + ".";
                sentenceArray[3] = [[UH + ","], PRP, [beVerb.VBZ + "."], capitalize(PRP), beVerb.VBZ, ADJArray[3].color].join(" ") + ".";
            } else {
                sentence = [capitalize(beVerb.VBZ), PRPSArray[1].PRPS, NOUNArray[0], ADJArray[1].color].join(" ") + "?";
                document.getElementById("request").value = sentence;
                document.getElementById("grammarCheck").value = 
                [[UH + ","], PRP, beVerb.VBZ, [ADV + "."], capitalize(PRP), beVerb.VBZ, ADJArray[0].color].join(" ") + ".";
                sentenceArray[0] = [[UH + ","], PRP, beVerb.VBZ, [ADV + "."], capitalize(PRP), beVerb.VBZ, ADJArray[0].color].join(" ") + ".";
                sentenceArray[1] = [[UH + ","], PRP, beVerb.VBZ, [ADV + "."], capitalize(PRP), beVerb.VBZ, ADJArray[1].color].join(" ") + ".";
                sentenceArray[2] = [[UH + ","], PRP, beVerb.VBZ, [ADV + "."], capitalize(PRP), beVerb.VBZ, ADJArray[2].color].join(" ") + ".";
                sentenceArray[3] = [[UH + ","], PRP, beVerb.VBZ, [ADV + "."], capitalize(PRP), beVerb.VBZ, ADJArray[3].color].join(" ") + ".";
            }
        } else {
            PRPS = PRPSArray[1].RESPONSE;
            sentence = [capitalize(WDTArray[0]), NOUN, beVerb.VBZ, PRPSArray[1].PRPS, NOUNArray[0]].join(" ") + "?";
            document.getElementById("request").value = sentence;
            document.getElementById("grammarCheck").value = [capitalize(PRPS), NOUNArray[0], beVerb.VBZ, ADJArray[0].color].join(" ") + ".";
            sentenceArray[0] = [capitalize(PRPS), NOUNArray[0], beVerb.VBZ, ADJArray[0].color].join(" ") + ".";
            sentenceArray[1] = [capitalize(PRPS), NOUNArray[0], beVerb.VBZ, ADJArray[1].color].join(" ") + ".";
            sentenceArray[2] = [capitalize(PRPS), NOUNArray[0], beVerb.VBZ, ADJArray[2].color].join(" ") + ".";
            sentenceArray[3] = [capitalize(PRPS), NOUNArray[0], beVerb.VBZ, ADJArray[3].color].join(" ") + ".";
        }
        gLinks = ['<a href="http://scratch.mit.edu/projects/14493429/" target="_newtab">Scratch: Guess Book Color</a>'];
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
        NOUNArray = [{NN:'hat', pic:"Level 1/images/hat.png"}, {NN:'cap', pic:"Level 1/images/cap.png"}, {NN:'coat', pic:"Level 1/images/coat.png"}, 
        {NN:'jacket', pic:"Level 1/images/jacket.png"}, {NN:'dress', pic:"Level 1/images/dress.png"}, {NN:'skirt', pic:"Level 1/images/skirt.png"}, 
        {NN:'shirt', pic:"Level 1/images/shirt.png"}, {NN:'shirt', pic:"Level 1/images/shirt.png"}, {NN:'T-shirt', pic:"Level 1/images/T-shirt.png"}];
        shuffleArray(NOUNArray);
        DETArray = ["a", "not", "this", "that"];
        ATTRArray = [PRPSArray[0].RESPONSE, PRPSArray[1].RESPONSE, PRPSArray[3].RESPONSE, PRPSArray[4].RESPONSE, DETArray[0]]; // attribute array
        shuffleArray(ATTRArray);
        if (randomG == 1) {
            document.getElementById("gPic").src = NOUNArray[0].pic;
            sentence = [capitalize(DETArray[2]), beVerb.VBZ, ATTRArray[0], NOUNArray[0].NN].join(" ") + ".";
        } else if (randomG == 2) {
            document.getElementById("gPic").src = NOUNArray[0].pic;
            sentence = [capitalize(DETArray[3]), beVerb.VBZ, ATTRArray[0], NOUNArray[0].NN].join(" ") + ".";
        } else if (randomG == 3) {
            document.getElementById("gPic").src = NOUNArray[1].pic;
            sentence = [capitalize(DETArray[2]), beVerb.VBZ, DETArray[1], ATTRArray[0], NOUNArray[0].NN].join(" ") + ".";
        } else {
            document.getElementById("gPic").src = NOUNArray[1].pic;
            sentence = [capitalize(DETArray[3]), beVerb.VBZ, DETArray[1], ATTRArray[0], NOUNArray[0].NN].join(" ") + ".";
        }
        sentenceArray[0] = [capitalize(DETArray[2]), beVerb.VBZ, DETArray[1], ATTRArray[0], NOUNArray[0].NN].join(" ") + ".";
        sentenceArray[1] = [capitalize(DETArray[3]), beVerb.VBZ, DETArray[1], ATTRArray[0], NOUNArray[0].NN].join(" ") + ".";
        sentenceArray[2] = [capitalize(DETArray[2]), beVerb.VBZ, ATTRArray[0], NOUNArray[0].NN].join(" ") + ".";
        sentenceArray[3] = [capitalize(DETArray[3]), beVerb.VBZ, ATTRArray[0], NOUNArray[0].NN].join(" ") + ".";
        document.getElementById("request").value = sentence;
        document.getElementById("grammarCheck").value = sentence;
        gLinks = [''];
        if (sentence){
            setTimeout(function(){speak(sentence)}, 2000);
        }
    } else if (userInput == "Unit 8") {
        randomG = randG(4);
        ADV = "not";
        NOUNArray = [{NN:'dog', pic:"Level 1/images/dog.png"}, {NN:'cat', pic:"Level 1/images/cat.png"}, {NN:'rat', pic:"Level 1/images/rat.png"}, 
        {NN:'rabbit', pic:"Level 1/images/rabbit.png"}, {NN:'cow', pic:"Level 1/images/cow.png"}, {NN:'horse', pic:"Level 1/images/horse.png"}, 
        {NN:'sheep', pic:"Level 1/images/sheep.png"}, {NN:'pig', pic:"Level 1/images/pig.png"}, {NN:'chicken', pic:"Level 1/images/chicken.png"}, 
        {NN:'duck', pic:"Level 1/images/duck.png"}];
        shuffleArray(NOUNArray);
        document.getElementById("gPic").src = NOUNArray[0].pic;
        DETArray = [DETArray[2], DETArray[3]];
        shuffleArray(DETArray);
        DETArray.push("a");
        if (randomG > 2) {
                sentence = [capitalize(WDTArray[0]), beVerb.VBZ, DETArray[0]].join(" ") + "?";
                document.getElementById("request").value = sentence;
                document.getElementById("grammarCheck").value = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[0].NN].join(" ") + ".";
                sentenceArray[0] = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[0].NN].join(" ") + ".";
                sentenceArray[1] = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[1].NN].join(" ") + ".";
                sentenceArray[2] = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[2].NN].join(" ") + ".";
                sentenceArray[3] = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[3].NN].join(" ") + ".";
        } else {
            ATTRArray = [DETArray[2], PRPSArray[1].PRPS];
            shuffleArray(ATTRArray);
            shuffleArray(UHArray);
            UH = capitalize(UHArray[0]);
            if (UHArray[0] == "yes") {
                sentence = [capitalize(beVerb.VBZ), DETArray[0], ATTRArray[0], NOUNArray[0].NN].join(" ") + "?";
                document.getElementById("request").value = sentence;
                document.getElementById("grammarCheck").value = 
                [[UH + ","], PRPArray[5].RESPONSE, beVerb.VBZ].join(" ") + ".";
                sentenceArray[0] = [[UH + ","], PRPArray[5].RESPONSE, beVerb.VBZ].join(" ") + ".";
                sentenceArray[1] = [[capitalize(UHArray[1]) + ","], PRPArray[5].RESPONSE, beVerb.VBZ, ADV].join(" ") + ".";
                sentenceArray[2] = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[1].NN].join(" ") + ".";
                sentenceArray[3] = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[2].NN].join(" ") + ".";
            } else {
                sentence = [capitalize(beVerb.VBZ), DETArray[0], ATTRArray[0], NOUNArray[1].NN].join(" ") + "?";
                document.getElementById("request").value = sentence;
                document.getElementById("grammarCheck").value = [[UH + ","], PRPArray[5].RESPONSE, beVerb.VBZ, ADV].join(" ") + ".";
                sentenceArray[0] = [[UH + ","], PRPArray[5].RESPONSE, beVerb.VBZ, ADV].join(" ") + ".";
                sentenceArray[1] = [[capitalize(UHArray[1]) + ","], PRPArray[5].RESPONSE, beVerb.VBZ].join(" ") + ".";
                sentenceArray[2] = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[1].NN].join(" ") + ".";
                sentenceArray[3] = [capitalize(PRPArray[5].PRP), beVerb.VBZ, DETArray[2], NOUNArray[2].NN].join(" ") + ".";
            }
        }
        gLinks = ['<a href="http://scratch.mit.edu/projects/15196988/" target="_newtab">Scratch: Animal Sounds</a>'];
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
            sentence = [capitalize(beVerb.VBPArray[1]), PRPArray[0].PRP, ADJArray[0].ADJ].join(" ") + "?";
            document.getElementById("grammarCheck").value = [[capitalize(UHArray[0]) + ","], PRPArray[0].RESPONSE, beVerb.VBPArray[1]].join(" ") + ".";
            sentenceArray[0] = [[capitalize(UHArray[0]) + ","], PRPArray[0].RESPONSE, beVerb.VBPArray[1]].join(" ") + ".";
            sentenceArray[1] = [[capitalize(UHArray[0]) + ","], PRPArray[1].RESPONSE, beVerb.VBPArray[1]].join(" ") + ".";
            sentenceArray[2] = [[capitalize(UHArray[0]) + ","], PRPArray[2].RESPONSE, beVerb.VBPArray[1]].join(" ") + ".";
            sentenceArray[3] = "              ";
        } else {
            sentence = [capitalize(beVerb.VBPArray[1]), PRPArray[0].PRP, ADJArray[1].ADJ].join(" ") + "?";
            document.getElementById("grammarCheck").value = [[capitalize(UHArray[0]) + ","], PRPArray[0].RESPONSE, beVerb.VBPArray[1], ADV].join(" ") + ".";
            sentenceArray[0] = [[capitalize(UHArray[0]) + ","], PRPArray[0].RESPONSE, beVerb.VBPArray[1], ADV].join(" ") + ".";
            sentenceArray[1] = [[capitalize(UHArray[0]) + ","], PRPArray[1].RESPONSE, beVerb.VBPArray[1], ADV].join(" ") + ".";
            sentenceArray[2] = [[capitalize(UHArray[0]) + ","], PRPArray[2].RESPONSE, beVerb.VBPArray[1], ADV].join(" ") + ".";
            sentenceArray[3] = "                 ";
        }
        gLinks = [''];
        if (sentence){
            setTimeout(function(){speak(sentence)}, 2000);
        }
    } else if (userInput == "Review 3") {
        unitArray = ["Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(unitArray);
        g_01(unitArray[0]);
        currentUnit = "Review 3";
        gLinks = ['<a href="http://scratch.mit.edu/projects/20142996/" target="_newtab">Scratch: B1 Chat Bot</a>'];
    } else if (userInput == "Final Review") {
        unitArray = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(unitArray);
        g_01(unitArray[0]);
        currentUnit = "Final Review";
        gLinks = ['<a href="http://scratch.mit.edu/projects/20142996/" target="_newtab">Scratch: B1 Chat Bot</a><br><a href="http://www.classtools.net/connect/201512_BdGEGi">Connect 4: B1 Vocab</a>'];
    } else {
        sentenceArray = [""];
        q2Array = [""];
        gLinks = [''];
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
    document.getElementById('g_request').textContent = sentence;
};