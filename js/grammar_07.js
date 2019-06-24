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
        randomG = randG(2);
        PRPArray = [{PRP: "I", PRP$:"my"}, {PRP: "you", PRP$:"your"}, {PRP: "he", PRP$:"his"}, {PRP: "she", PRP$:"her"}];
        shuffleArray(PRPArray);
        verbArray = [{VB:"wake", VBD:"woke", RP:" up", pic:"Level 7/images/wake up.png"}, {VB:"take", VBD:"took", RP:" a shower", pic:"Level 7/images/take a shower.png"}, {VB:"get", VBD:"got", RP:" dressed", pic:"Level 7/images/get dressed.png"}, {VB:"shave", VBD:"shaved", RP:" face", pic:"Level 7/images/shave my face.png"},  {VB:"blow-dry", VBD:"blow-dried", RP:" hair", pic:"Level 7/images/blow-dry my hair.png"}, {VB:"put", VBD:"put", RP:" on makeup", pic:"Level 7/images/put on makeup.png"}, {VB:"set", VBD:"set", RP:" the table", pic:"Level 7/images/set the table.png"}, {VB:"feed", VBD:"fed", RP:" the dog", pic:"Level 7/images/feed the dog.png"}];
        shuffleArray(verbArray);
        document.getElementById("gPic").src = verbArray[0].pic;
        if (verbArray[0].VB == "shave" || verbArray[0].VB == "blow-dry"){verbArray[0].RP = " " + PRPArray[0].PRP$ + verbArray[0].RP;}
        if (verbArray[1].VB == "shave" || verbArray[1].VB == "blow-dry"){verbArray[1].RP = " " + PRPArray[0].PRP$ + verbArray[1].RP;}
        if (verbArray[2].VB == "shave" || verbArray[2].VB == "blow-dry"){verbArray[2].RP = " " + PRPArray[0].PRP$ + verbArray[2].RP;}
        if (verbArray[3].VB == "shave" || verbArray[3].VB == "blow-dry"){verbArray[3].RP = " " + PRPArray[0].PRP$ + verbArray[3].RP;}
        if (verbArray[4].VB == "shave" || verbArray[4].VB == "blow-dry"){verbArray[4].RP = " " + PRPArray[0].PRP$ + verbArray[4].RP;}
        if (randomG == 0){
            randomG = randG(2);
            if (randomG == 0){
                if (PRPArray[0].PRP == "you"){
                    sentence = capitalize(verbArray[0].VB) + verbArray[0].RP + " before " + PRPArray[0].PRP + " " + verbArray[1].VB + verbArray[1].RP + ".";
                    document.getElementById("grammarCheck").value = sentence;
                    sentenceArray[0] = capitalize(verbArray[0].VB) + verbArray[0].RP + " before " + PRPArray[0].PRP + " " + verbArray[1].VB + verbArray[1].RP + ".";
                    sentenceArray[1] = capitalize(verbArray[2].VB) + verbArray[2].RP + " before " + PRPArray[0].PRP + " " + verbArray[1].VB + verbArray[1].RP + ".";
                    sentenceArray[2] = capitalize(verbArray[3].VB) + verbArray[3].RP + " before " + PRPArray[0].PRP + " " + verbArray[1].VB + verbArray[1].RP + ".";
                    sentenceArray[3] = capitalize(verbArray[4].VB) + verbArray[4].RP + " before " + PRPArray[0].PRP + " " + verbArray[1].VB + verbArray[1].RP + ".";
                } else {
                    temp1 = verbArray[0].VB + "Verb";
                    verb1 = conjugate_VB(PRPArray[0].PRP, temp1);
                    temp2 = verbArray[1].VB + "Verb";
                    verb2 = conjugate_VB(PRPArray[0].PRP, temp2);
                    sentence = capitalize(PRPArray[0].PRP) + " " + verb1 + " " + verbArray[0].RP + " before " + PRPArray[0].PRP + " " + verb2 + verbArray[1].RP + ".";
                    document.getElementById("grammarCheck").value = sentence;
                    sentenceArray[0] = capitalize(PRPArray[0].PRP) + " " + verb1 + " " + verbArray[0].RP + " before " + PRPArray[0].PRP + " " + verb2 + verbArray[1].RP + ".";
                    temp = verbArray[2].VB + "Verb";
                    verb = conjugate_VB(PRPArray[0].PRP, temp);
                    sentenceArray[1] = capitalize(PRPArray[0].PRP) + " " + verb + " " + verbArray[2].RP + " before " + PRPArray[0].PRP + " " + verb2 + verbArray[1].RP + ".";
                    temp = verbArray[3].VB + "Verb";
                    verb = conjugate_VB(PRPArray[0].PRP, temp);
                    sentenceArray[2] = capitalize(PRPArray[0].PRP) + " " + verb + " " + verbArray[3].RP + " before " + PRPArray[0].PRP + " " + verb2 + verbArray[1].RP + ".";
                    temp = verbArray[4].VB + "Verb";
                    verb = conjugate_VB(PRPArray[0].PRP, temp);
                    sentenceArray[3] = capitalize(PRPArray[0].PRP) + " " + verb + " " + verbArray[4].RP + " before " + PRPArray[0].PRP + " " + verb2 + verbArray[1].RP + ".";
                }
            } else {
                if (PRPArray[0].PRP == "you"){
                    sentence = "Before " + PRPArray[0].PRP + " " + verbArray[0].VB + verbArray[0].RP + ", " + verbArray[1].VB + verbArray[1].RP + ".";
                    document.getElementById("grammarCheck").value = sentence;
                    sentenceArray[0] = "Before " + PRPArray[0].PRP + " " + verbArray[0].VB + verbArray[0].RP + ", " + verbArray[1].VB + verbArray[1].RP + ".";
                    sentenceArray[1] = "Before " + PRPArray[0].PRP + " " + verbArray[1].VB + verbArray[1].RP + ", " + verbArray[1].VB + verbArray[1].RP + ".";
                    sentenceArray[2] = "Before " + PRPArray[0].PRP + " " + verbArray[2].VB + verbArray[2].RP + ", " + verbArray[1].VB + verbArray[1].RP + ".";
                    sentenceArray[3] = "Before " + PRPArray[0].PRP + " " + verbArray[3].VB + verbArray[3].RP + ", " + verbArray[1].VB + verbArray[1].RP + ".";
                } else {
                    temp1 = verbArray[0].VB + "Verb";
                    verb1 = conjugate_VB(PRPArray[0].PRP, temp1);
                    temp2 = verbArray[1].VB + "Verb";
                    verb2 = conjugate_VB(PRPArray[0].PRP, temp2);
                    sentence = "Before " + PRPArray[0].PRP + " " + verb1 + verbArray[0].RP + ", " + PRPArray[0].PRP + " " + verb2 + verbArray[1].RP + ".";
                    document.getElementById("grammarCheck").value = sentence;
                    sentenceArray[0] = "Before " + PRPArray[0].PRP + " " + verb1 + verbArray[0].RP + ", " + PRPArray[0].PRP + " " + verb2 + verbArray[1].RP + ".";
                    temp = verbArray[2].VB + "Verb";
                    verb = conjugate_VB(PRPArray[0].PRP, temp);
                    sentenceArray[1] = "Before " + PRPArray[0].PRP + " " + verb + " " + verbArray[2].RP + ", " + PRPArray[0].PRP + " " + verb2 + verbArray[1].RP + ".";
                    temp = verbArray[3].VB + "Verb";
                    verb = conjugate_VB(PRPArray[0].PRP, temp);
                    sentenceArray[2] = "Before " + PRPArray[0].PRP + " " + verb + " " + verbArray[3].RP + ", " + PRPArray[0].PRP + " " + verb2 + verbArray[1].RP + ".";
                    temp = verbArray[4].VB + "Verb";
                    verb = conjugate_VB(PRPArray[0].PRP, temp);
                    sentenceArray[3] = "Before " + PRPArray[0].PRP + " " + verb + " " + verbArray[4].RP + ", " + PRPArray[0].PRP + " " + verb2 + verbArray[1].RP + ".";
                }
            }
        } else {
            randomG = randG(2);
            if (randomG == 0){
                sentence = capitalize(PRPArray[0].PRP) + " " + verbArray[0].VBD + " " + verbArray[0].RP + " after " + PRPArray[0].PRP + " " + verbArray[1].VBD + verbArray[1].RP + ".";
                document.getElementById("grammarCheck").value = sentence;
                sentenceArray[0] = capitalize(PRPArray[0].PRP) + " " + verbArray[0].VBD + " " + verbArray[0].RP + " after " + PRPArray[0].PRP + " " + verbArray[1].VBD + verbArray[1].RP + ".";
                sentenceArray[1] = capitalize(PRPArray[0].PRP) + " " + verbArray[2].VBD + " " + verbArray[2].RP + " after " + PRPArray[0].PRP + " " + verbArray[1].VBD + verbArray[1].RP + ".";
                sentenceArray[2] = capitalize(PRPArray[0].PRP) + " " + verbArray[3].VBD + " " + verbArray[3].RP + " after " + PRPArray[0].PRP + " " + verbArray[1].VBD + verbArray[1].RP + ".";
                sentenceArray[3] = capitalize(PRPArray[0].PRP) + " " + verbArray[4].VBD + " " + verbArray[4].RP + " after " + PRPArray[0].PRP + " " + verbArray[1].VBD + verbArray[1].RP + ".";
            } else {
                sentence =  "After " + PRPArray[0].PRP + " " + verbArray[0].VBD + verbArray[0].RP + ", " + PRPArray[0].PRP + " " + verbArray[1].VBD + " " + verbArray[1].RP + ".";
                document.getElementById("grammarCheck").value = sentence;
                sentenceArray[0] = "After " + PRPArray[0].PRP + " " + verbArray[0].VBD + verbArray[0].RP + ", " + PRPArray[0].PRP + " " + verbArray[1].VBD + " " + verbArray[1].RP + ".";
                sentenceArray[1] = "After " + PRPArray[0].PRP + " " + verbArray[2].VBD + verbArray[2].RP + ", " + PRPArray[0].PRP + " " + verbArray[1].VBD + " " + verbArray[1].RP + ".";
                sentenceArray[2] = "After " + PRPArray[0].PRP + " " + verbArray[3].VBD + verbArray[3].RP + ", " + PRPArray[0].PRP + " " + verbArray[1].VBD + " " + verbArray[1].RP + ".";
                sentenceArray[3] = "After " + PRPArray[0].PRP + " " + verbArray[4].VBD + verbArray[4].RP + ", " + PRPArray[0].PRP + " " + verbArray[1].VBD + " " + verbArray[1].RP + ".";
            }
        }
            
            
        setTimeout(function(){speak(sentence)}, 2000);
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