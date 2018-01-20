function setGrammar(userInput){
    
    currentUnit = userInput;
    gLinks = [];
    
    level_id = sessionStorage.getItem("sessionLevel");
    document.getElementById("levelId").innerHTML = level_id + " " + userInput;
    
    //clears the grammar table on the page
    document.getElementById("gInstructions").innerHTML = "";
    document.getElementById("g0r1d0").innerHTML = "";
    document.getElementById("g0r1d1").innerHTML = "";
    document.getElementById("g0r1d2").innerHTML = "";
    document.getElementById("g0r1d3").innerHTML = "";
    document.getElementById("g0r1d4").innerHTML = "";
    document.getElementById("g0r2d0").innerHTML = "";
    document.getElementById("g0r2d1").innerHTML = "";
    document.getElementById("g0r2d2").innerHTML = "";
    document.getElementById("g0r2d3").innerHTML = "";
    document.getElementById("g0r2d4").innerHTML = "";
    
    var q1Array = [""];
    var q2Array = [""];
    var q3Array = [""];
    var answerArray = [""];
    
    if (level_id == "Starter") {
        q1Array = ["Hi, my name is Jack.", "Hello, my name is Annie.", "Nice to meet you.", "Raise your hand.", "Take out your book.", "Open your book.", "Put away your book.", "Good morning.", "Good afternoon.", "Good evening.", "Good night.", "Goodbye.", "How are you?", "Come here.", "Go back.", "Turn around.", "Look at me.", "What is your name?", "My name is Annie.", "Who is he?", "Who is she?", "Listen to me.", "Repeat after me.", "Point and say.", "Hold up your book.", "What is it?", "May I borrow your pencil?", "May I drink some water?", "May I ask a question?", "May I go?", "Thank you.", "I know.", "I am done.", "Sorry, I am late.", "Please help me.", "I am a boy.", "I am a girl.", "Let’s dance.", "Let’s sing.", "Let’s clap.", "Let’s go.", "Let’s line up.", "It’s my turn.", "One more time.", "Teacher, choose me!", "Is this right?", "How do you feel today?", "I can do it.", "I don’t understand.", "Please say it again.", "I forgot my book."];
        q2Array = [""];
        q3Array = [""];
        answerArray = [""];
        if (userInput == "Unit 1") {
            q1Array = q1Array.slice(0,7);
            gLinks = ['<a href="http://www.eslgamesplus.com/verb-to-be-auxiliary-verb-am-is-are-esl-grammar-activity/" target="_newtab">ESL Games+: Be Verbs</a>'];
            grammarLesson = "";
        } else if (userInput == "Unit 2") {
            q1Array = q1Array.slice(7,17);
            gLinks = ['<a href="http://www.eslgamesplus.com/verb-to-be-auxiliary-verb-am-is-are-esl-grammar-activity/" target="_newtab">ESL Games+: Be Verbs</a>'];
            grammarLesson = "";
        } else if (userInput == "Unit 3") {
            q1Array = q1Array.slice(17,25);
            q2Array = [""];
            gLinks = ['<a href="http://www.eslgamesplus.com/verb-to-be-auxiliary-verb-am-is-are-esl-grammar-activity/" target="_newtab">ESL Games+: Be Verbs</a>'];
            grammarLesson = "";
        } else if (userInput == "Review 1") {
            q1Array = q1Array.slice(0,25);
            gLinks = ['<a href="http://www.eslgamesplus.com/verb-to-be-auxiliary-verb-am-is-are-esl-grammar-activity/" target="_newtab">ESL Games+: Be Verbs</a>'];
            grammarLesson = "";
        } else if (userInput == "Unit 4") {
            q1Array = q1Array.slice(25,30);
            gLinks = ['<a href="http://www.eslgamesplus.com/verb-to-be-auxiliary-verb-am-is-are-esl-grammar-activity/" target="_newtab">ESL Games+: Be Verbs</a>'];
            grammarLesson = "";
        } else if (userInput == "Unit 5") {
            q1Array = q1Array.slice(30,35);
            gLinks = ['<a href="http://www.eslgamesplus.com/verb-to-be-auxiliary-verb-am-is-are-esl-grammar-activity/" target="_newtab">ESL Games+: Be Verbs</a>'];
            grammarLesson = "";
        } else if (userInput == "Unit 6") {
            q1Array = q1Array.slice(35,46);
            gLinks = ['<a href="http://www.eslgamesplus.com/verb-to-be-auxiliary-verb-am-is-are-esl-grammar-activity/" target="_newtab">ESL Games+: Be Verbs</a>'];
            grammarLesson = "";
        } else if (userInput == "Review 2") {
            q1Array = q1Array.slice(25,46);
            gLinks = ['<a href="http://www.eslgamesplus.com/verb-to-be-auxiliary-verb-am-is-are-esl-grammar-activity/" target="_newtab">ESL Games+: Be Verbs</a>'];
            grammarLesson = "";
        } else if (userInput == "Unit 7") {
            q1Array = q1Array.slice(-5);
            gLinks = ['<a href="http://www.eslgamesplus.com/verb-to-be-auxiliary-verb-am-is-are-esl-grammar-activity/" target="_newtab">ESL Games+: Be Verbs</a>'];
            grammarLesson = "";
        } else if (userInput == "Unit 8") {
            q1Array = [""];
            gLinks = ['<a href="http://www.eslgamesplus.com/verb-to-be-auxiliary-verb-am-is-are-esl-grammar-activity/" target="_newtab">ESL Games+: Be Verbs</a>'];
            grammarLesson = "";
        } else if (userInput == "Unit 9") {
            q1Array = [""];
            gLinks = ['<a href="http://www.eslgamesplus.com/verb-to-be-auxiliary-verb-am-is-are-esl-grammar-activity/" target="_newtab">ESL Games+: Be Verbs</a>'];
            grammarLesson = "";
        } else if (userInput == "Review 3") {
            q1Array = [""];
            gLinks = ['<a href="http://www.eslgamesplus.com/verb-to-be-auxiliary-verb-am-is-are-esl-grammar-activity/" target="_newtab">ESL Games+: Be Verbs</a>'];
            grammarLesson = "";
        } else if (userInput == "Final Review") {
            q1Array = q1Array;
            gLinks = ['<a href="http://www.eslgamesplus.com/verb-to-be-auxiliary-verb-am-is-are-esl-grammar-activity/" target="_newtab">ESL Games+: Be Verbs</a>'];
            grammarLesson = "";
        } else {
            q1Array = [""];
            q1Array = [""];
            q3Array = [""];
            gLinks = [''];
            grammarLesson = "";
        }
        shuffleArray(q1Array);
        document.getElementById("g0r1d0").textContent = q1Array[0];
        document.getElementById("g0r1d2").textContent = q1Array[1];
        document.getElementById("g0r2d0").textContent = q1Array[2];
        document.getElementById("g0r2d2").textContent = q1Array[3];
        var randomG = Math.floor(Math.random() * 4);
        document.getElementById("grammarCheck").value = q1Array[randomG];
        if (q1Array[randomG]){
            setTimeout(function(){speak(q1Array[randomG])}, 2000);
        }
    }
    else if (level_id == "Level 1") {
        if (userInput == "Unit 1") {
            pronounArray = (["I", "You"]);
            shuffleArray(pronounArray);
            q1Array = [({value:'boy.', pic:'<img src="Level 1/images/boy.png" />'}), ({value:'girl.', pic:'<img src="Level 1/images/girl.png" />'}), ({value:'woman.', pic:'<img src="Level 1/images/woman.png" />'}), ({value:'man.', pic:'<img src="Level 1/images/man.png" />'}), ({value:'student.', pic:'<img src="Level 1/images/student.png" />'}), ({value:'teacher.', pic:'<img src="Level 1/images/teacher.png" />'})];
            shuffleArray(q1Array);
            answerArray = (["am", "are"]);
            shuffleArray(answerArray);
            document.getElementById("gPic").innerHTML = q1Array[0].pic;
            var sentence = pronounArray[0] + " ______ a " + q1Array[0].value;
            document.getElementById("gInstructions").textContent = sentence;
            if(pronounArray[0] == "I") {
                document.getElementById("grammarCheck").value = "am";
            } else {
                document.getElementById("grammarCheck").value = "are";
            }
            var randomG = Math.floor(Math.random() * 2);
            document.getElementById("g0r1d0").textContent = answerArray[0];
            document.getElementById("g0r1d2").textContent = answerArray[1];
            document.getElementById("g0r2d0").textContent = "";
            document.getElementById("g0r2d2").textContent = "";
            if (sentence){
                sentence2 = pronounArray[0] + " " + document.getElementById("grammarCheck").value + " a " + q1Array[0].value;
                setTimeout(function(){speak(sentence2)}, 2000);
            }
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 2") {
            q1Array = ["Who is he?", "Who is she?"];
            heArray = [({value:'grandfather', pic:'<img src="Level 1/images/grandfather.png" />'}), ({value:'father', pic:'<img src="Level 1/images/father.png" />'}), ({value:'uncle', pic:'<img src="Level 1/images/uncle.png" />'}), ({value:'brother', pic:'<img src="Level 1/images/brother.png" />'})];
            sheArray = [({value:'grandmother', pic:'<img src="Level 1/images/grandmother.png" />'}), ({value:'mother', pic:'<img src="Level 1/images/mother.png" />'}), ({value:'aunt', pic:'<img src="Level 1/images/aunt.png" />'}), ({value:'cousin', pic:'<img src="Level 1/images/cousin.png" />'}), ({value:'sister', pic:'<img src="Level 1/images/sister.png" />'})];
            shuffleArray(q1Array);
            var randomG = Math.floor(Math.random() * 4);
            if (q1Array[0] == "Who is he?") {
                q2Array = heArray;
                shuffleArray(heArray);
                document.getElementById("grammarCheck").value = "He is my " + heArray[randomG].value + ".";
                document.getElementById("gPic").innerHTML = heArray[randomG].pic;
                document.getElementById("g0r1d0").textContent = "He is my " + heArray[0].value + ".";
                document.getElementById("g0r1d2").textContent = "He is my " + heArray[1].value + ".";
                document.getElementById("g0r2d0").textContent = "He is my " + heArray[2].value + ".";
                document.getElementById("g0r2d2").textContent = "He is my " + heArray[3].value + ".";
            } else {
                shuffleArray(sheArray);
                document.getElementById("grammarCheck").value = "She is my " + sheArray[randomG].value + ".";
                document.getElementById("gPic").innerHTML = sheArray[randomG].pic;
                document.getElementById("g0r1d0").textContent = "She is my " + sheArray[0].value + ".";
                document.getElementById("g0r1d2").textContent = "She is my " + sheArray[1].value + ".";
                document.getElementById("g0r2d0").textContent = "She is my " + sheArray[2].value + ".";
                document.getElementById("g0r2d2").textContent = "She is my " + sheArray[3].value + ".";
            }
            setTimeout(function(){speak(q1Array[0])}, 2000);
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 3") {
            q1Array = [({number: "1", spelling: "one"}), ({number: "2", spelling: "two"}), ({number: "3", spelling: "three"}), ({number: "4", spelling: "four"}), ({number: "5", spelling: "five"}), ({number: "6", spelling: "six"}), ({number: "7", spelling: "seven"}), ({number: "8", spelling: "eight"}), ({number: "9", spelling: "nine"}), ({number: "10", spelling: "ten"})];
            shuffleArray(q1Array);
            if (q1Array[0].number == "1") {
                var age = " year old.";
            } else {
                var age = " years old.";
            }
            pronounArray = (["I", "you", "they", "he", "she"]);
            shuffleArray(pronounArray);
            if (pronounArray[0] == "I") {
                document.getElementById("g0r0d0").innerHTML = "How old am I?";
                sampleAnswer = "You are " + q1Array[0].spelling + age;
            } else if (pronounArray[0] == "you") {
                document.getElementById("g0r0d0").innerHTML = "How old are you?";
                sampleAnswer = "I am " + q1Array[0].spelling + age;
            } else if (pronounArray[0] == "they") {
                document.getElementById("g0r0d0").innerHTML = "How old are they?";
                sampleAnswer = "They are " + q1Array[0].spelling + age;
            }
            else {
                document.getElementById("g0r0d0").innerHTML = "How old is " + pronounArray[0] + "?";
                sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " is " + q1Array[0].spelling + age;
            }
            document.getElementById("g0r1d0").innerHTML = q1Array[0].number;
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Review 1") {
            q1Array = ["Unit 1", "Unit 2", "Unit 3"];
            shuffleArray(q1Array);
            setGrammar(q1Array[0]);
            currentUnit = "Review 1";
        } else if (userInput == "Unit 4") {
            pronounArray = ["you", "he", "she"];
            shuffleArray(pronounArray);
            answerArray = ["Yes", "No"];
            shuffleArray(answerArray);
            feelingArray = ["happy", "sad", "chubby", "thin", "tall", "short", "cute", "old", "young"];
            shuffleArray(feelingArray);
            if (pronounArray[0] == "you") {
                document.getElementById("g0r0d0").innerHTML = "Are you " + feelingArray[0] + "?";
            } else if (pronounArray[0] == "he") {
                document.getElementById("g0r0d0").innerHTML = "Is he " + feelingArray[0] + "?";
            } else {
                document.getElementById("g0r0d0").innerHTML = "Is she " + feelingArray[0] + "?";
            }
            if (answerArray[0] == "Yes") {
                document.getElementById("g0r0d5").innerHTML = '<h1 style="font-size:100px">&#x2705;</h1>';
                if (pronounArray[0] == "you") {
                    sampleAnswer = "Yes, I am."
                } else {
                    sampleAnswer = "Yes, " + pronounArray[0] + " is.";
                }
            } else {
                document.getElementById("g0r0d5").innerHTML = '<h1 style="font-size:100px">&#x274C;</h1>';
                if (pronounArray[0] == "you") {
                    sampleAnswer = "No, I am not."
                } else {
                    sampleAnswer = "No, " + pronounArray[0] + " is not.";
                }
            }
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
            
        } else if (userInput == "Unit 5") {
            vocArray = [({voc:'pencil', article:'a', pic:'<img src = "Level 1/images/pencil.png" />'}), ({voc:'eraser', article:'an', pic:'<img src = "Level 1/images/eraser.png" />'}), ({voc:'ruler', article:'a', pic:'<img src = "Level 1/images/ruler.png" />'}), ({voc:'pen', article:'a', pic:'<img src = "Level 1/images/pen.png" />'}), ({voc:'desk', article:'a', pic:'<img src = "Level 1/images/desk.png" />'}), ({voc:'chair', article:'a', pic:'<img src = "Level 1/images/chair.png" />'}), ({voc:'school bag', article:'a', pic:'<img src = "Level 1/images/school bag.png" />'}), ({voc:'book', article:'a', pic:'<img src = "Level 1/images/book.png" />'}), ({voc:'pencil case', article:'a', pic:'<img src = "Level 1/images/pencil case.png" />'})];
            shuffleArray(vocArray);
            choiceArrayInt = 0;
            while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 3)};
            if (choiceArrayInt == 1){
                document.getElementById("g0r0d0").innerHTML = "What is it?";
                sampleAnswer = "It is " + vocArray[0].article + " " + vocArray[0].voc + ".";
            } else {
                q2Array = [vocArray[0], vocArray[1]];
                shuffleArray(q2Array);
                document.getElementById("g0r0d0").innerHTML = "Is it " + q2Array[0].article + " " + q2Array[0].voc + "?";
                if (q2Array[0].voc == vocArray[0].voc) {
                    sampleAnswer = "Yes, it is.";
                } else {
                    sampleAnswer = "No, it is not.";
                }
            }
            document.getElementById("g0r0d5").innerHTML = vocArray[0].pic;
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = ['<a href="http://scratch.mit.edu/projects/14219598/" target="_newtab">Scratch: B1U5 Grammar</a>'];
            grammarLesson = "";
        } else if (userInput == "Unit 6") {
            colorArray = ["red", "yellow", "green", "blue", "pink", "black", "white", "brown", "orange", "purple"];
            shuffleArray(colorArray);
            vocArray = ["pencil", "eraser", "ruler", "pen", "desk", "chair", "school bag", "book", "pencil case"];
            shuffleArray(vocArray);
            choiceArrayInt = 0;
            while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 3)};
            if (choiceArrayInt == 1){
                document.getElementById("g0r0d0").innerHTML = "What color is it?";
                sampleAnswer = "It is " + colorArray[0] + ".";
            } else {
                q2Array = [vocArray[0], vocArray[1]];
                shuffleArray(q2Array);
                document.getElementById("g0r0d0").innerHTML = "What color is your " + vocArray[0] + "?";
                sampleAnswer = "My " + vocArray[0] + " is " + colorArray[0] + ".";
            }
            document.getElementById("g0r0d5").innerHTML = '<div style="border-style: solid; border-width:2px; width:300px; height:200px; background-color: ' + colorArray[0] + '"></div>';
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = ['<a href="http://scratch.mit.edu/projects/14493429/" target="_newtab">Scratch: Guess Book Color</a>'];
            grammarLesson = "";
        } else if (userInput == "Review 2") {
            q1Array = ["Unit 4", "Unit 5", "Unit 6"];
            shuffleArray(q1Array);
            setGrammar(q1Array[0]);
            currentUnit = "Review 2";
        } else if (userInput == "Unit 7") {
            vocArray = [({voc:'hat', pic:'<img src = "Level 1/images/hat.png" />'}), ({voc:'cap', pic:'<img src = "Level 1/images/cap.png" />'}), ({voc:'coat', pic:'<img src = "Level 1/images/coat.png" />'}), ({voc:'jacket', pic:'<img src = "Level 1/images/jacket.png" />'}), ({voc:'dress', pic:'<img src = "Level 1/images/dress.png" />'}), ({voc:'skirt', pic:'<img src = "Level 1/images/skirt.png" />'}), ({voc:'shirt', pic:'<img src = "Level 1/images/shirt.png" />'}), ({voc:'shirt', pic:'<img src = "Level 1/images/shirt.png" />'}), ({voc:'T-shirt', pic:'<img src = "Level 1/images/T-shirt.png" />'})];
            shuffleArray(vocArray);
            q1Array = ["This is ", "That is ", "This is not ", "That is not "];
            shuffleArray(q1Array);
            q2Array = ["my ", "your ", "his ", "her ", "Lumi's ", "Ludi's ", "a "];
            shuffleArray(q2Array);
            document.getElementById("g0r0d0").innerHTML = q1Array[0] + q2Array[0] + vocArray[0].voc + ".";
            document.getElementById("g0r0d5").innerHTML = vocArray[0].pic;
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 8") {
            vocArray = [({voc:'dog', pic:'<img src = "Level 1/images/dog.png" />'}), ({voc:'cat', pic:'<img src = "Level 1/images/cat.png" />'}), ({voc:'rat', pic:'<img src = "Level 1/images/rat.png" />'}), ({voc:'rabbit', pic:'<img src = "Level 1/images/rabbit.png" />'}), ({voc:'cow', pic:'<img src = "Level 1/images/cow.png" />'}), ({voc:'horse', pic:'<img src = "Level 1/images/horse.png" />'}), ({voc:'sheep', pic:'<img src = "Level 1/images/sheep.png" />'}), ({voc:'pig', pic:'<img src = "Level 1/images/pig.png" />'}), ({voc:'chicken', pic:'<img src = "Level 1/images/chicken.png" />'}), ({voc:'duck', pic:'<img src = "Level 1/images/duck.png" />'})];
            shuffleArray(vocArray);
            document.getElementById("g0r0d5").innerHTML = vocArray[0].pic;
            q2Array = [vocArray[0], vocArray[1]];
            shuffleArray(q2Array);
            if (q2Array[0].voc == vocArray[0].voc) {
                sampleAnswer1 = "Yes, it is.";
            } else {
                sampleAnswer1 = "No, it is not. It is a " + vocArray[0].voc + ".";
            }
            choiceArrayInt = 0;
            while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 5)};
            switch(choiceArrayInt) {
                case 1:
                    document.getElementById("g0r0d0").innerHTML = "What is this?";
                    sampleAnswer = "It is a " + vocArray[0].voc + ".";
                    break;
                case 2:
                    document.getElementById("g0r0d0").innerHTML = "What is that?";
                    sampleAnswer = "It is a " + vocArray[0].voc + ".";
                    break;
                case 3:
                    document.getElementById("g0r0d0").innerHTML = "Is this a " + q2Array[0].voc + "?";
                    sampleAnswer = sampleAnswer1;
                    break;
                case 4:
                    document.getElementById("g0r0d0").innerHTML = "Is that a " + q2Array[0].voc + "?";
                    sampleAnswer = sampleAnswer1;
                    break;
                default:
                    document.getElementById("g0r0d0").innerHTML = "What is this?";
                    sampleAnswer = "It is a " + vocArray[0].voc + ".";
                    break;
            }
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = ['<a href="http://scratch.mit.edu/projects/15196988/" target="_newtab">Scratch: Animal Sounds</a>'];
            grammarLesson = "";
        } else if (userInput == "Unit 9") {
            document.getElementById("gInstructions").innerHTML = "Answer using the sentence pattern: Yes, we / they are. No, we / they are not.";
            choiceArrayInt = 0;
            pronounArray = [" you ", " we ", " they "];
            var pronoun;
            q1Array = [({value:'hungry', pic:'<img src="Level 1/images/hungry.png" />'}), ({value:'thirsty', pic:'<img src="Level 1/images/thirsty.png" />'}), ({value:'angry', pic:'<img src="Level 1/images/angry.png" />'}), ({value:'lazy', pic:'<img src="Level 1/images/lazy.png" />'}), ({value:'noisy', pic:'<img src="Level 1/images/noisy.png" />'}), ({value:'quiet', pic:'<img src="Level 1/images/quiet.png" />'}), ({value:'sleepy', pic:'<img src="Level 1/images/sleepy.png" />'}), ({value:'tired', pic:'<img src="Level 1/images/tired.png" />'})];
            shuffleArray(q1Array);
            while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 7)};
            choiceArray = [q1Array[0].value, q1Array[choiceArrayInt].value];
            shuffleArray(choiceArray);
            document.getElementById("g0r0d5").innerHTML = q1Array[0].pic;
            shuffleArray(pronounArray);
            document.getElementById("g0r1d0").align = "center";
            document.getElementById("g0r1d0").innerHTML =  '<h2>Are'+pronounArray[0]+choiceArray[0]+'?</h2>';
            document.getElementById("g0r2d0").align = "center";
            document.getElementById("g0r2d0").innerHTML = '<input type="text" id="grammarInput" class="form-control" autocomplete="off" autofocus placeholder="____________." /><button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            if (pronounArray[0] == " you ") {
                pronoun = " we ";
            } else {
                pronoun = pronounArray[0];
            }
            if (q1Array[0].value == choiceArray[0]) {
                sampleAnswer = 'Yes,'+pronoun+'are'+'.';
            } else {
                sampleAnswer = 'No,'+pronoun+'are not'+'.';
            }
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Review 3") {
            q1Array = ["Unit 7", "Unit 8", "Unit 9"];
            shuffleArray(q1Array);
            setGrammar(q1Array[0]);
            currentUnit = "Review 3";
            gLinks = ['<a href="http://scratch.mit.edu/projects/20142996/" target="_newtab">Scratch: B1 Chat Bot</a>'];
            grammarLesson = "";
        } else if (userInput == "Final Review") {
            q1Array = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9"];
            shuffleArray(q1Array);
            setGrammar(q1Array[0]);
            currentUnit = "Final Review";
            gLinks = ['<a href="http://scratch.mit.edu/projects/20142996/" target="_newtab">Scratch: B1 Chat Bot</a><br><a href="http://www.classtools.net/connect/201512_BdGEGi">Connect 4: B1 Vocab</a>'];
            grammarLesson = "";
        } else {
            q1Array = [""];
            q2Array = [""];
            q3Array = [""];
            gLinks = [''];
            grammarLesson = "";
        }
    }
    else if (level_id == "Level 2") {
        if (userInput == "Unit 1") {
            q1Array = [({value:'blackboard', pic:'<img src="Level 2/images/no_blackboard.png" />'}), ({value:'DVD player', pic:'<img src="Level 2/images/no_dvd player.png" />'}), ({value:'door', pic:'<img src="Level 2/images/no_door.png" />'}), ({value:'fan', pic:'<img src="Level 2/images/no_fan.png" />'}), ({value:'television', pic:'<img src="Level 2/images/no_television.png" />'}), ({value:'table', pic:'<img src="Level 2/images/no_table.png" />'}), ({value:'trash can', pic:'<img src="Level 2/images/no_trash can.png" />'}), ({value:'window', pic:'<img src="Level 2/images/no_window.png" />'}), ({value:'telephone', pic:'<img src="Level 2/images/no_telephone.png" />'})];
            shuffleArray(q1Array);
            document.getElementById("g0r0d0").innerHTML = q1Array[0].pic;
            document.getElementById("g0r0d1").innerHTML = '<div style = "font-size:30px">&nbsp;&nbsp;&nbsp;'+q1Array[1].value+'<br>&nbsp;&nbsp;&nbsp;'+q1Array[0].value+'</div>';
            sampleAnswer1 = 'There is a '+q1Array[1].value+'.';
            document.getElementById("g0r1d0").innerHTML = '&nbsp;&nbsp;&nbsp;<input type="text" style="width:300px" id="grammarInput" autocomplete="off" autofocus placeholder="There is a ___." />&nbsp;&nbsp;&nbsp;<button class="w3-button w3-blue w3-round" onclick="showGrammar1()">Example</button>';
            sampleAnswer2 = 'There is not a '+q1Array[0].value+'.';
            document.getElementById("g0r4d0").innerHTML = '&nbsp;&nbsp;&nbsp;<input type="text" style="width:300px" id="grammarInput" autocomplete="off" placeholder="There is not a ___." />&nbsp;&nbsp;&nbsp;<button class="w3-button w3-blue w3-round" onclick="showGrammar2()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 2") {
            numberArray = [({text: 'eleven', num:'11'}), ({text:'twelve', num:'12'}), ({text:'thirteen', num:'13'}), ({text:'fourteen', num:'14'}), ({text:'fifteen', num:'15'}), ({text:'sixteen', num:'16'}), ({text:'seventeen', num:'17'}), ({text:'eighteen', num:'18'}), ({text:'nineteen', num:'19'}), ({text:'twenty', num:'20'})];
            shuffleArray(numberArray);
            vocArray = [({voc:'pencil', article:'a', pic:'<img src = "Level 1/images/pencil.png" />'}), ({voc:'eraser', article:'an', pic:'<img src = "Level 1/images/eraser.png" />'}), ({voc:'ruler', article:'a', pic:'<img src = "Level 1/images/ruler.png" />'}), ({voc:'pen', article:'a', pic:'<img src = "Level 1/images/pen.png" />'}), ({voc:'desk', article:'a', pic:'<img src = "Level 1/images/desk.png" />'}), ({voc:'jacket', pic:'<img src = "Level 1/images/jacket.png" />'}), ({voc:'skirt', pic:'<img src = "Level 1/images/skirt.png" />'}), ({voc:'shirt', pic:'<img src = "Level 1/images/shirt.png" />'}), ({voc:'shirt', pic:'<img src = "Level 1/images/shirt.png" />'}), ({voc:'T-shirt', pic:'<img src = "Level 1/images/T-shirt.png" />'}), ({voc:'dog', pic:'<img src = "Level 1/images/dog.png" />'}), ({voc:'cat', pic:'<img src = "Level 1/images/cat.png" />'}), ({voc:'rat', pic:'<img src = "Level 1/images/rat.png" />'}), ({voc:'rabbit', pic:'<img src = "Level 1/images/rabbit.png" />'})];
            shuffleArray(vocArray);
            q3Array = [numberArray[0], numberArray[1]];
            shuffleArray(q3Array);
            choiceArrayInt = 0;
            while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 3)};
            if (choiceArrayInt == 1){
                document.getElementById("g0r0d0").innerHTML = "How many " + vocArray[0].voc + "s are there?";
                document.getElementById("g0r0d5").innerHTML = numberArray[0].num;
                sampleAnswer = "There are " + numberArray[0].text + " " + vocArray[0].voc + "s.";
            } else {
                q2Array = [vocArray[0], vocArray[1]];
                shuffleArray(q2Array);
                document.getElementById("g0r0d0").innerHTML = "Are there " + q3Array[0].text + " " + vocArray[0].voc + "s?";
                if (q3Array[0] == numberArray[0]) {
                    document.getElementById("g0r0d5").innerHTML = '<h1 style="font-size:100px">&#x2705;</h1>';
                    sampleAnswer = "Yes, there are.";
                } else {
                    document.getElementById("g0r0d5").innerHTML = '<h1 style="font-size:100px">&#x274C;</h1>';
                    sampleAnswer = "No, there are not.";
                }
            }
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            grammarLesson = "";
        } else if (userInput == "Unit 3") {
            vocArray = [({sing:'yo-yo', plur:'yo-yos'}), ({sing:'robot', plur:'robots'}), ({sing:'doll', plur:'dolls'}), ({sing:'teddy bear', plur:'teddy bears'}), ({sing:'ball', plur:'balls'}), ({sing:'block', plur:'blocks'}), ({sing:'video game', plur:'video games'}), ({sing:'board game', plur:'board games'})];
            shuffleArray(vocArray);
            numberArray = [({text: 'one', num:'1'}), ({text:'two', num:'2'}), ({text:'three', num:'3'}), ({text:'four', num:'4'}), ({text:'five', num:'5'}), ({text:'six', num:'6'}), ({text:'seven', num:'7'}), ({text:'eight', num:'8'}), ({text:'nine', num:'9'}), ({text:'ten', num:'10'}), ({text: 'eleven', num:'11'}), ({text:'twelve', num:'12'}), ({text:'thirteen', num:'13'}), ({text:'fourteen', num:'14'}), ({text:'fifteen', num:'15'}), ({text:'sixteen', num:'16'}), ({text:'seventeen', num:'17'}), ({text:'eighteen', num:'18'}), ({text:'nineteen', num:'19'}), ({text:'twenty', num:'20'})];
            shuffleArray(numberArray);
            choiceArrayInt = Math.floor(Math.random() * 3);
            q3Array = [numberArray[0], ({text: 'one', num:'1'})];
            shuffleArray(q3Array);
            document.getElementById("g0r0d0").innerHTML = "How many " + vocArray[0].plur + " are there?";
            document.getElementById("g0r0d5").innerHTML = q3Array[0].num;
            if (q3Array[0].num == '1') {
                sampleAnswer = "There is one " + vocArray[0].sing + ".";
            } else {
                sampleAnswer = "There are " + q3Array[0].text + " " + vocArray[0].plur + ".";
            }
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            grammarLesson = "";
        } else if (userInput == "Review 1") {
            q1Array = ["Unit 1", "Unit 2", "Unit 3"];
            shuffleArray(q1Array);
            setGrammar(q1Array[0]);
            currentUnit = "Review 1";
            grammarLesson = "";
        } else if (userInput == "Unit 4") {
            vocArray = [({voc:'bananas', pic:'<img src="Level 2/images/bananas.png" />'}), ({voc:'lemons', pic:'<img src="Level 2/images/lemons.png" />'}), ({voc:'wax apples', pic:'<img src="Level 2/images/wax apples.png" />'}), ({voc:'pears', pic:'<img src="Level 2/images/pears.png" />'}), ({voc:'papayas', pic:'<img src="Level 2/images/papayas.png" />'}), ({voc:'watermelons', pic:'<img src="Level 2/images/watermelons.png" />'}), ({voc:'guavas', pic:'<img src="Level 2/images/guavas.png" />'}), ({voc:'grapes', pic:'<img src="Level 2/images/grapes.png" />'})];
            shuffleArray(vocArray);
            document.getElementById("g0r0d5").innerHTML = vocArray[0].pic;
            choiceArrayInt = Math.floor(Math.random() * 2);
            if (choiceArrayInt == 1) {
                document.getElementById("g0r0d0").innerHTML = "What are these?";
                sampleAnswer1 = 'These are ' + vocArray[0].voc + '.';
                document.getElementById("g0r1d0").innerHTML = '&nbsp;&nbsp;&nbsp;<input type="text" style="width:300px" id="grammarInput" autocomplete="off" autofocus placeholder="These are ___." />&nbsp;&nbsp;&nbsp;<button class="w3-button w3-blue w3-round" onclick="showGrammar1()">Example</button>';
                sampleAnswer2 = 'These are not ' + vocArray[1].voc +'.';
                document.getElementById("g0r4d0").innerHTML = '&nbsp;&nbsp;&nbsp;<input type="text" style="width:300px" id="grammarInput" autocomplete="off" placeholder="These are not ___." />&nbsp;&nbsp;&nbsp;<button class="w3-button w3-blue w3-round" onclick="showGrammar2()">Example</button>';
            } else {
                document.getElementById("g0r0d0").innerHTML = "What are those?";
                sampleAnswer1 = 'Those are ' + vocArray[0].voc + '.';
                document.getElementById("g0r1d0").innerHTML = '&nbsp;&nbsp;&nbsp;<input type="text" style="width:300px" id="grammarInput" autocomplete="off" autofocus placeholder="Those are ___." />&nbsp;&nbsp;&nbsp;<button class="w3-button w3-blue w3-round" onclick="showGrammar1()">Example</button>';
                sampleAnswer2 = 'Those are not ' + vocArray[1].voc +'.';
                document.getElementById("g0r4d0").innerHTML = '&nbsp;&nbsp;&nbsp;<input type="text" style="width:300px" id="grammarInput" autocomplete="off" placeholder="Those are not ___." />&nbsp;&nbsp;&nbsp;<button class="w3-button w3-blue w3-round" onclick="showGrammar2()">Example</button>';
            }
            grammarLesson = "";
        } else if (userInput == "Unit 5") {
            vocArray = [({voc:'tomatoes', pic:'<img src="Level 2/images/tomatoes.png" />'}), ({voc:'mangoes', pic:'<img src="Level 2/images/mangoes.png" />'}), ({voc:'strawberries', pic:'<img src="Level 2/images/strawberries.png" />'}), ({voc:'cherries', pic:'<img src="Level 2/images/cherries.png" />'}), ({voc:'peaches', pic:'<img src="Level 2/images/peaches.png" />'}), ({voc:'oranges', pic:'<img src="Level 2/images/oranges.png" />'}), ({voc:'kiwis', pic:'<img src="Level 2/images/kiwis.png" />'}), ({voc:'coconuts', pic:'<img src="Level 2/images/coconuts.png" />'})];
            shuffleArray(vocArray);
            q3Array = [vocArray[0], vocArray[1]];
            shuffleArray(q3Array);
            choiceArrayInt = 0;
            while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 5)};
            if (choiceArrayInt == 1) {
                document.getElementById("g0r0d0").innerHTML = "What are these?";
                sampleAnswer = 'These are ' + vocArray[0].voc + '.';
                document.getElementById("g0r0d5").innerHTML = vocArray[0].pic;
            } else if (choiceArrayInt == 2) {
                document.getElementById("g0r0d0").innerHTML = "What are those?";
                sampleAnswer = 'Those are ' + vocArray[0].voc + '.';
                document.getElementById("g0r0d5").innerHTML = q1Array[0].pic;
            } else if (choiceArrayInt == 3) {
                document.getElementById("g0r0d0").innerHTML = "Are these " + q3Array[0].voc + "?";
                if (q3Array[0] == vocArray[0]) {
                    document.getElementById("g0r0d5").innerHTML = '<h1 style="font-size:100px">&#x2705;</h1>';
                    sampleAnswer = "Yes, they are.";
                } else {
                    document.getElementById("g0r0d5").innerHTML = '<h1 style="font-size:100px">&#x274C;</h1>';
                    sampleAnswer = "No, they are not.";
                }
            } else {
                document.getElementById("g0r0d0").innerHTML = "Are those " + q3Array[0].voc + "?";
                if (q3Array[0] == vocArray[0]) {
                    document.getElementById("g0r0d5").innerHTML = '<h1 style="font-size:100px">&#x2705;</h1>';
                    sampleAnswer = "Yes, they are.";
                } else {
                    document.getElementById("g0r0d5").innerHTML = '<h1 style="font-size:100px">&#x274C;</h1>';
                    sampleAnswer = "No, they are not.";
                }
            }
            document.getElementById("g0r0d5").innerHTML = vocArray[0].pic;
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 6") {
            verbArray = ["sing", "dance", "run", "swim", "read", "write", "type", "jump", "draw"];
            pronounArray = [({q:'I', a:'you'}), ({q:'you', a:'I'}), ({q:'they', a:'they'}), ({q:'he', a:'he'}), ({q:'she', a:'she'}), ({q:'we', a:'we'})];
            shuffleArray(verbArray);
            shuffleArray(pronounArray);
            document.getElementById("g0r0d0").innerHTML = "Can " + pronounArray[0].q + " " + verbArray[0] + "?";
            choiceArrayInt = 0;
            while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 3)};
            if (choiceArrayInt == 1) {
                document.getElementById("g0r0d5").innerHTML = '<h1 style="font-size:100px">&#x2705;</h1>';
                sampleAnswer = "Yes, " + pronounArray[0].a + " can.";
            } else {
                document.getElementById("g0r0d5").innerHTML = '<h1 style="font-size:100px">&#x274C;</h1>';
                sampleAnswer = "No, " + pronounArray[0].a + " can't.";
            }
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = ['<a href="http://scratch.mit.edu/projects/36595088/" target="_newtab">Scratch: Can he ___?</a>'];
            grammarLesson = "";
        } else if (userInput == "Review 2") {
            q1Array = ["Unit 4", "Unit 5", "Unit 6"];
            shuffleArray(q1Array);
            setGrammar(q1Array[0]);
            currentUnit = "Review 2";
        } else if (userInput == "Unit 7") {
            vocArray = ['television', 'DVD player', 'fan', 'trash can', 'robot', 'doll', 'teddy bear', 'ball', 'board game'];
            locArray = [({voc:' in the box', pic:'<img src="Starter/images/box.png" />'}), ({voc:' behind the door', pic:'<img src="Level 2/images/door.png" />'}), ({voc:' near the window', pic:'<img src="Level 2/images/window.png" />'}), ({voc:' on the table', pic:'<img src="Level 2/images/table.png" />'}), ({voc:' in front of the blackboard', pic:'<img src="Level 2/images/blackboard.png" />'}), ({voc:' under the whiteboard', pic:'<img src="Level 2/images/whiteboard.png" />'})];
            shuffleArray(vocArray);
            shuffleArray(locArray);
            choiceArrayInt = 0;
            while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 3)};
            if (choiceArrayInt == 1) {
                document.getElementById("g0r0d0").innerHTML = "Where is the " + vocArray[0] + "?";
                sampleAnswer = 'It is ' + locArray[0].voc + '.';
                document.getElementById("g0r0d5").innerHTML = vocArray[0];
            } else if (choiceArrayInt == 2) {
                document.getElementById("g0r0d0").innerHTML = "Where is my " + vocArray[0] + "?";
                sampleAnswer = 'It is ' + locArray[0].voc + '.';
                document.getElementById("g0r0d5").innerHTML = vocArray[0];
            } else {
                document.getElementById("g0r0d0").innerHTML = "Is the " + vocArray[0] + locArray[0].voc + "?";
                answerInt = Math.floor(Math.random() * 2);
                if (answerInt == 0) {
                    document.getElementById("g0r0d5").innerHTML = '<h1 style="font-size:100px">&#x2705;</h1>';
                    sampleAnswer = "Yes, it is.";
                } else {
                    document.getElementById("g0r0d5").innerHTML = '<h1 style="font-size:100px">&#x274C;</h1>';
                    sampleAnswer = "No, it is not.";
                }
            }
            document.getElementById("g0r0d5").innerHTML = locArray[0].pic;
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = ['<a href="http://www.eslgamesplus.com/prepositions-of-place-esl-fun-game-online-grammar-practice/" target="_newtab">ESL Games+: Prepositions of Place</a>'];
            grammarLesson = "";
        } else if (userInput == "Unit 8") {
            pronounArray = ['you', 'they', 'he', 'she'];
            locArray = [({voc:'living room', pic:'<img src="Level 2/images/living room.png" />'}), ({voc:'dining room', pic:'<img src="Level 2/images/dining room.png" />'}), ({voc:'bedroom', pic:'<img src="Level 2/images/bedroom.png" />'}), ({voc:'bathroom', pic:'<img src="Level 2/images/bathroom.png" />'}), ({voc:'kitchen', pic:'<img src="Level 2/images/kitchen.png" />'}), ({voc:'backyard', pic:'<img src="Level 2/images/backyard.png" />'}), ({voc:'garden', pic:'<img src="Level 2/images/garden.png" />'}), ({voc:'basement', pic:'<img src="Level 2/images/basement.png" />'})];
            shuffleArray(pronounArray);
            shuffleArray(locArray);
            choiceArrayInt = Math.floor(Math.random() * 2);
            if (choiceArrayInt == 1) {
                if (pronounArray[0] == "he" || pronounArray[0] == "she"){
                    document.getElementById("g0r0d0").innerHTML = "Where is " + pronounArray[0] + "?";
                } else {
                    document.getElementById("g0r0d0").innerHTML = "Where are " + pronounArray[0] + "?";
                }
                var capitalized = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1);
                if (pronounArray[0] == "he" || pronounArray[0] == "she"){
                    sampleAnswer = capitalized + " is in the " + locArray[0].voc + ".";
                } else {
                    if (capitalized == "You"){
                        sampleAnswer = "I am in the " + locArray[0].voc + ".";
                    } else {
                        sampleAnswer = "They are in the " + locArray[0].voc + ".";
                    }
                }
            } else {
                answerInt = Math.floor(Math.random() * 2);
                if (pronounArray[0] == "he" || pronounArray[0] == "she"){
                    if (answerInt == 0) {
                        document.getElementById("g0r0d0").innerHTML = "Is " + pronounArray[0] + " in the " + locArray[1].voc + "?";
                        sampleAnswer = "No, " + pronounArray[0] + " is not.";
                    } else {
                        document.getElementById("g0r0d0").innerHTML = "Is " + pronounArray[0] + " in the " + locArray[0].voc + "?";
                        sampleAnswer = "Yes, " + pronounArray[0] + " is.";
                    }
                } else if (pronounArray[0] = "you"){
                    if (answerInt == 0) {
                        document.getElementById("g0r0d0").innerHTML = "Are you in the " + locArray[1].voc + "?";
                        sampleAnswer = "No, I am not.";
                    } else {
                        document.getElementById("g0r0d0").innerHTML = "Are you in the " + locArray[0].voc + "?";
                        sampleAnswer = "Yes, I am.";
                    }
                } else {
                    if (answerInt == 0) {
                        document.getElementById("g0r0d0").innerHTML = "Are they in the " + locArray[1].voc + "?";
                        sampleAnswer = "No, they are not.";
                    } else {
                        document.getElementById("g0r0d0").innerHTML = "Are they in the " + locArray[0].voc + "?";
                        sampleAnswer = "Yes, they are.";
                    }
                }
            }
            document.getElementById("g0r0d5").innerHTML = locArray[0].pic;
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 9") {
            pronounArray = ['you', 'they', 'he', 'she'];
            animalArray = [({voc:'tigers', pic:'<img src="Level 2/images/tiger.png" />'}), ({voc:'lions', pic:'<img src="Level 2/images/lion.png" />'}), ({voc:'monkeys', pic:'<img src="Level 2/images/monkey.png" />'}), ({voc:'bears', pic:'<img src="Level 2/images/bear.png" />'}), ({voc:'zebras', pic:'<img src="Level 2/images/zebra.png" />'}), ({voc:'goats', pic:'<img src="Level 2/images/goat.png" />'}), ({voc:'elephants', pic:'<img src="Level 2/images/elephant.png" />'}), ({voc:'hippos', pic:'<img src="Level 2/images/hippo.png" />'}), ({voc:'snakes', pic:'<img src="Level 2/images/snake.png" />'}), ({voc:'parrots', pic:'<img src="Level 2/images/parrot.png" />'})];
            shuffleArray(pronounArray);
            shuffleArray(animalArray);
            choiceArrayInt = Math.floor(Math.random() * 2);
            if (choiceArrayInt == 1) {
                if (pronounArray[0] == "he" || pronounArray[0] == "she"){
                    document.getElementById("g0r0d0").innerHTML = "What does " + pronounArray[0] + " like?";
                } else {
                    document.getElementById("g0r0d0").innerHTML = "What do " + pronounArray[0] + " like?";
                }
                var capitalized = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1);
                if (pronounArray[0] == "he" || pronounArray[0] == "she"){
                    sampleAnswer = capitalized + " likes " + animalArray[0].voc + ".";
                } else {
                    if (capitalized == "You"){
                        sampleAnswer = "I like " + animalArray[0].voc + ".";
                    } else {
                        sampleAnswer = "They like " + animalArray[0].voc + ".";
                    }
                }
            } else {
                answerInt = Math.floor(Math.random() * 2);
                if (pronounArray[0] == "he" || pronounArray[0] == "she"){
                    if (answerInt == 0) {
                        document.getElementById("g0r0d0").innerHTML = "Does " + pronounArray[0] + " like " + animalArray[1].voc + "?";
                        sampleAnswer = "No, " + pronounArray[0] + " doesn't.";
                    } else {
                        document.getElementById("g0r0d0").innerHTML = "Does " + pronounArray[0] + " like " + animalArray[0].voc + "?";
                        sampleAnswer = "Yes, " + pronounArray[0] + " does.";
                    }
                } else if (pronounArray[0] = "you"){
                    if (answerInt == 0) {
                        document.getElementById("g0r0d0").innerHTML = "Do you like " + animalArray[1].voc + "?";
                        sampleAnswer = "No, I don't.";
                    } else {
                        document.getElementById("g0r0d0").innerHTML = "Do you like " + animalArray[0].voc + "?";
                        sampleAnswer = "Yes, I do.";
                    }
                } else {
                    if (answerInt == 0) {
                        document.getElementById("g0r0d0").innerHTML = "Do they like " + animalArray[1].voc + "?";
                        sampleAnswer = "No, they don't.";
                    } else {
                        document.getElementById("g0r0d0").innerHTML = "Do they like " + animalArray[0].voc + "?";
                        sampleAnswer = "Yes, they do.";
                    }
                }
            }
            document.getElementById("g0r0d5").innerHTML = animalArray[0].pic;
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Review 3") {
            q1Array = ["Unit 7", "Unit 8", "Unit 9"];
            shuffleArray(q1Array);
            setGrammar(q1Array[0]);
            currentUnit = "Review 3";
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Final Review") {
            q1Array = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9"];
            shuffleArray(q1Array);
            setGrammar(q1Array[0]);
            currentUnit = "Final Review";
            gLinks = ['<a href="http://scratch.mit.edu/projects/64838632/" target="_newtab">B2 Chat Bot</a>'];
            grammarLesson = "";
        } else {
            q1Array = [""];
            q2Array = [""];
            q3Array = [""];
            gLinks = [''];
            grammarLesson = "";
        }
    }
    else if (level_id == "Level 3") {
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
    }
    else if (level_id == "Level 4") {
        if (userInput == "Unit 1") {
            q1Array = ["get up?", "go to school?", "go home?", "do homework?", "take a bath?", "go to bed?", "have English class?"];
            q2Array = ["What time do you "];
            shuffleArray(q1Array);
            shuffleArray(q2Array);
            answerArray = ["1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00", "5:30", "6:00", "6:30", "7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"];
            shuffleArray(answerArray);
            document.getElementById("g0r1d0").innerHTML = q2Array[0] + q1Array[0];
            document.getElementById("g0r1d4").innerHTML = answerArray[0];
            gLinks = ['<a href="http://scratch.mit.edu/projects/64711462/" target="_newtab">Scratch: What Time Is It?</a>'];
            grammarLesson = "";
        } else if (userInput == "Unit 2") {
            q1Array = ["How do you go to school?", "How does she go to work?", "How do they go to school?", "How does he go to work?", "How does she go to school?", "How do they go to work?", "How does he go to school?"];
            q2Array = ['<img src="Level 4/images/on foot.png" />', '<img src="Level 4/images/scooter.png" />', '<img src="Level 4/images/motorcycle.png" />', '<img src="Level 4/images/car.png" />', '<img src="Level 4/images/bus.png" />', '<img src="Level 4/images/bicycle.png" />', '<img src="Level 4/images/MRT.png" />', '<img src="Level 4/images/train.png" />', '<img src="Level 4/images/taxi.png" />', '<img src="Level 4/images/high-speed rail.png" />'];
            shuffleArray(q1Array);
            shuffleArray(q2Array);
            document.getElementById("g0r1d0").innerHTML = q1Array[0];
            document.getElementById("g0r0d5").innerHTML = q2Array[0];
            document.getElementById("g0r1d4").innerHTML = answerArray[0];
            gLinks = ['<a href="http://www.classtools.net/QR/teacher.php?fold=7&fname=kfNhe">QR Challenge</a><br><a href="http://scratch.mit.edu/projects/66810966/" target="_newtab">Scratch: B4U2 Vocab</a>'];
            grammarLesson = "";
        } else if (userInput == "Unit 3") {
            pronounArray = ["you", "they", "he", "she"];
            verbArray = ["take", "drive", "walk"];
            destinationArray = ["to the park", "to the supermarket", "to the city", "to the countryside"];
            shuffleArray(pronounArray);
            shuffleArray(verbArray);
            if (verbArray[0] == "take") {
                vehicleArray = ["a boat", "a ship", "an airplane", "a helicopter"];
            } else if (verbArray[0] == "drive") {
                vehicleArray = ["a van"];
            } else {
                vehicleArray = [""];
            }
            shuffleArray(vehicleArray);
            shuffleArray(destinationArray);
            answerArray = ["&#x2705;", "&#x274C;"]; // YES or NO
            shuffleArray(answerArray);
            document.getElementById("g0r0d1").innerHTML = answerArray[0];
            if (pronounArray[0] == "you" || pronounArray[0] == "they") {
                document.getElementById("g0r0d0").innerHTML = "Do " + pronounArray[0] + " " + verbArray[0] + " " + vehicleArray[0] + " " + destinationArray[0] + "?";
            } else {
                document.getElementById("g0r0d0").innerHTML = "Does " + pronounArray[0] + " " + verbArray[0] + " " + vehicleArray[0] + " " + destinationArray[0] + "?";
            }
            if (answerArray[0] == "&#x274C;") { // if NO
                vehicleAnswer = ["on foot", "scooter", "motorcycle", "car" , "bus", "bicycle", "MRT", "train", "taxi", "high-speed rail"];
                shuffleArray(vehicleAnswer);
                switch(vehicleAnswer[0]){
                    case "on foot":
                        vehicleAnswerText1 = "walk";
                        vehicleAnswerText2 = "";
                        break;
                    case "scooter":
                        vehicleAnswerText1 = "ride";
                        vehicleAnswerText2 = "a scooter";
                        break;
                    case "motorcycle":
                        vehicleAnswerText1 = "ride";
                        vehicleAnswerText2 = "a motorcycle";
                        break;
                    case "car":
                        vehicleAnswerText1 = "drive";
                        vehicleAnswerText2 = "a car";
                        break;
                    case "bus":
                        vehicleAnswerText1 = "take";
                        vehicleAnswerText2 = "a bus";
                        break;
                    case "bicycle":
                        vehicleAnswerText1 = "ride";
                        vehicleAnswerText2 = "a bicycle";
                        break;
                    case "MRT":
                        vehicleAnswerText1 = "take";
                        vehicleAnswerText2 = "the MRT";
                        break;
                    case "train":
                        vehicleAnswerText1 = "take";
                        vehicleAnswerText2 = "a train";
                        break;
                    case "taxi":
                        vehicleAnswerText1 = "take";
                        vehicleAnswerText2 = "a taxi";
                        break;
                    case "high-speed rail":
                        vehicleAnswerText1 = "take";
                        vehicleAnswerText2 = "the high-speed rail";
                        
                        break;
                    default:
                        vehicleAnswerText1 = "";
                        vehicleAnswerText2 = "";
                        break;
                }
                document.getElementById("g0r0d5").innerHTML = '<img src="Level 4/images/'+vehicleAnswer[0]+'.png" />';
                switch(pronounArray[0]) {
                    case "you":
                        sampleAnswer1 = "No, we don't.";
                        document.getElementById("g0r3d0").innerHTML = "How do you get " + destinationArray[0] + "?";
                        sampleAnswer2 = "We" + " " + vehicleAnswerText1 + " " + vehicleAnswerText2 + " " + destinationArray[0] + ".";
                        break;
                    case "they":
                        sampleAnswer1 = "No, they don't.";
                        document.getElementById("g0r3d0").innerHTML = "How do they get " + destinationArray[0] + "?";
                        sampleAnswer2 = "They" + " " + vehicleAnswerText1 + " " + vehicleAnswerText2 + " " + destinationArray[0] + ".";
                        break;
                    default:
                        sampleAnswer1 = "No, " + pronounArray[0] + " doesn't.";
                        document.getElementById("g0r3d0").innerHTML = "How does " + pronounArray[0] + " get " + destinationArray[0] + "?";
                        var capitalized = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1);
                        sampleAnswer2 = capitalized + " " + vehicleAnswerText1 + "s " + vehicleAnswerText2 + " " + destinationArray[0] + ".";
                        break;
                }
            } else { // if YES
                document.getElementById("g0r0d5").innerHTML = "";
                switch(pronounArray[0]) {
                    case "you":
                        sampleAnswer1 = "Yes, we do.";
                        document.getElementById("g0r3d0").innerHTML = "How do you get " + destinationArray[0] + "?";
                        sampleAnswer2 = "We" + " " + verbArray[0] + " " + vehicleArray[0]+ " " + destinationArray[0] + ".";
                        break;
                    case "they":
                        sampleAnswer1 = "Yes, they do.";
                        document.getElementById("g0r3d0").innerHTML = "How do you get " + destinationArray[0] + "?";
                        sampleAnswer2 = "They" + " " + verbArray[0] + " " + vehicleArray[0]+ " " + destinationArray[0] + ".";
                        break;
                    default:
                        sampleAnswer1 = "Yes, " + pronounArray[0] + " does.";
                        document.getElementById("g0r3d0").innerHTML = "How does " + pronounArray[0] + " get " + destinationArray[0] + "?";
                        var capitalized = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1);
                        sampleAnswer2 = capitalized + " " + verbArray[0] + "s " + vehicleArray[0] + " " + destinationArray[0] + ".";
                        break;
                }
            }
            document.getElementById("g0r1d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" />';
            document.getElementById("g0r1d1").align = "left";
            document.getElementById("g0r1d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar1()">Example</button>';
            document.getElementById("g0r4d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput2" />';
            document.getElementById("g0r4d1").align = "left";
            document.getElementById("g0r4d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar2()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Review 1") {
            q1Array = ["Unit 1", "Unit 2", "Unit 3"];
            shuffleArray(q1Array);
            setGrammar(q1Array[0]);
            currentUnit = "Review 1";
        } else if (userInput == "Unit 4") {
            q1Array = [({verb:'exercise', object:'', pic:'<img src="Level 4/images/exercise.png" />'}), ({verb:'read', object:'the newspaper', pic:'<img src="Level 4/images/read the newspaper.png" />'}), ({verb:'take', object:'a nap', pic:'<img src="Level 4/images/take a nap.png" />'}), ({verb:'surf', object:'the Net', pic:'<img src="Level 4/images/surf the Net.png" />'}), ({verb:'keep', object:'a diary', pic:'<img src="Level 4/images/keep my diary.png" />'}), ({verb:'have', object:'a snack', pic:'<img src="Level 4/images/have a snack.png" />'}), ({verb:'play', object:'the piano', pic:'<img src="Level 4/images/play the piano.png" />'}), ({verb:'play', object:'the violin', pic:'<img src="Level 4/images/play the violin.png" />'}), ({verb:'walk', object:'the dog', pic:'<img src="Level 4/images/walk the dog.png" />'})];
            pronounArray = ["you", "they", "he", "she"];
            timeArray = ["morning", "afternoon", "evening"];
            shuffleArray(q1Array);
            shuffleArray(pronounArray);
            shuffleArray(timeArray);
            if (pronounArray[0] == "you" || pronounArray[0] == "they") {
                document.getElementById("g0r0d0").innerHTML = "What do " + pronounArray[0] + " do every " + timeArray[0] + "?";
                if (pronounArray[0] == "you") {
                    sampleAnswer = "I " + q1Array[0].verb + " " + q1Array[0].object + " every " + timeArray[0] + ".";
                } else {
                    sampleAnswer = "They " + q1Array[0].verb + " " + q1Array[0].object + " every " + timeArray[0] + ".";
                }
            } else {
                document.getElementById("g0r0d0").innerHTML = "What does " + pronounArray[0] + " do every " + timeArray[0] + "?";
                if (q1Array[0].verb == "have") {
                    answerVerb = "has";
                } else {
                    answerVerb = q1Array[0].verb + "s";
                }
                var capitalized = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1);
                sampleAnswer = capitalized + " " + answerVerb + " " + q1Array[0].object + " every " + timeArray[0] + ".";
            }
            document.getElementById("g0r0d5").innerHTML = q1Array[0].pic;
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 5") {
            q1Array = [({verb:'eating', pic:'<img src="Level 4/images/eat.png" />'}), ({verb:'drinking', pic:'<img src="Level 4/images/drink.png" />'}), ({verb:'cooking', pic:'<img src="Level 4/images/cook.png" />'}), ({verb:'laughing', pic:'<img src="Level 4/images/laugh.png" />'}), ({verb:'drawing', pic:'<img src="Level 4/images/draw.png" />'}), ({verb:'sweeping', pic:'<img src="Level 4/images/sweep.png" />'}), ({verb:'studying', pic:'<img src="Level 4/images/study.png" />'}), ({verb:'driving', pic:'<img src="Level 4/images/drive.png" />'}), ({verb:'writing', pic:'<img src="Level 4/images/write.png" />'}), ({verb:'sleeping', pic:'<img src="Level 4/images/sleep.png" />'}), ({verb:'playing', pic:'<img src="Level 4/images/play.png" />'})];
            pronounArray = ["you", "they", "he", "she"];
            shuffleArray(q1Array);
            shuffleArray(pronounArray);
            if (pronounArray[0] == "you" || pronounArray[0] == "they") {
                document.getElementById("g0r0d0").innerHTML = "What are " + pronounArray[0] + " doing?";
                if (pronounArray[0] == "you") {
                    sampleAnswer = "I am " + q1Array[0].verb + ".";
                } else {
                    sampleAnswer = "They are " + q1Array[0].verb + ".";
                }
            } else {
                document.getElementById("g0r0d0").innerHTML = "What is " + pronounArray[0] + " doing?";
                var capitalized = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1);
                sampleAnswer = capitalized + " is " + q1Array[0].verb + ".";
            }
            document.getElementById("g0r0d5").innerHTML = q1Array[0].pic;
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 6") {
            q1Array = [({verb:'washing', obj:'face', pic:'<img src="Level 4/images/wash my face.png" />'}), ({verb:'brushing', obj:'teeth', pic:'<img src="Level 4/images/brush my teeth.png" />'}), ({verb:'combing', obj:'hair', pic:'<img src="Level 4/images/comb my hair.png" />'}), ({verb:'making', obj:'bed', pic:'<img src="Level 4/images/make my bed.png" />'}), ({verb:'eating', obj:' breakfast', pic:'<img src="Level 4/images/eat breakfast.png" />'}), ({verb:'eating', obj:' lunch', pic:'<img src="Level 4/images/eat lunch.png" />'}), ({verb:'eating', obj:' dinner', pic:'<img src="Level 4/images/eat dinner.png" />'}), ({verb:'washing', obj:' the dishes', pic:'<img src="Level 4/images/wash the dishes.png" />'})];
            pronounArray = [({pro:'you ', poss:' your '}), ({pro:'they ', poss:' their '}), ({pro:'he ', poss:' his '}), ({pro:'she ', poss:' her '})];
            answerArray = ["Yes", "No"];
            shuffleArray(q1Array);
            shuffleArray(pronounArray);
            shuffleArray(answerArray);
            if (q1Array[0].verb == "eating" || q1Array[0].obj == " the dishes") {
                pronounArray[0].poss = '';
            }
            if (pronounArray[0].pro == "you " || pronounArray[0].pro == "they ") {
                document.getElementById("g0r0d0").innerHTML = "Are " + pronounArray[0].pro + q1Array[0].verb + pronounArray[0].poss + q1Array[0].obj + "?";
            } else {
                document.getElementById("g0r0d0").innerHTML = "Is " + pronounArray[0].pro + q1Array[0].verb + pronounArray[0].poss + q1Array[0].obj + "?";
            }
            if (answerArray[0] == "Yes") {
                document.getElementById("g0r0d5").innerHTML = q1Array[0].pic;
                if (pronounArray[0].pro == "you ") {
                    sampleAnswer = "Yes, I am.";
                } else if (pronounArray[0].pro == "they ") {
                    sampleAnswer = "Yes, they are.";
                } else {
                    sampleAnswer = "Yes, " + pronounArray[0].pro + "is.";
                }
            } else {
                document.getElementById("g0r0d5").innerHTML = q1Array[1].pic;
                if (pronounArray[0].pro == "you ") {
                    sampleAnswer = "No, I am not.";
                } else if (pronounArray[0].pro == "they ") {
                    sampleAnswer = "No, they aren't.";
                } else {
                    sampleAnswer = "No, " + pronounArray[0].pro + "isn't.";
                }
            }
            
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Review 2") {
            q1Array = ["Unit 4", "Unit 5", "Unit 6"];
            shuffleArray(q1Array);
            setGrammar(q1Array[0]);
            currentUnit = "Review 2";
        } else if (userInput == "Unit 7") {
            q1Array = ["police station", "fire station", "MRT station", "bus stop", "bank", "bookstore", "convenience store", "department store"];
            q2Array = ["Where are you going?"];
            gLinks = [''];
            grammarLesson = "<img src='Level 4/images/city_buildings.png' />";
        } else if (userInput == "Unit 8") {
            q1Array = ["museum", "post office", "restaurant", "movie theater", "bakery", "hospital", "library", "clinic", "gas station", "toy store"];
            q2Array = ["Is there a ... near the ...?"];
            gLinks = [''];
            grammarLesson = "<img src='Level 4/images/city2.png' />";
        } else if (userInput == "Unit 9") {
            q1Array = [""];
            q2Array = [""];
            q3Array = [""];
            gLinks = [''];
            grammarLesson = "<img src='Level 4/images/city3.png' />";
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
    else if (level_id == "Level 5") {
        if (userInput == "Unit 1") {
            vocArray = [({voc:'first', pic:'<img src="Level 5/images/second.png" />'}), ({voc:'third', pic:'<img src="Level 5/images/third.png" />'}), ({voc:'fourth', pic:'<img src="Level 5/images/fourth.png" />'}), ({voc:'fifth', pic:'<img src="Level 5/images/fifth.png" />'}),({voc:'sixth', pic:'<img src="Level 5/images/sixth.png" />'}),({voc:'seventh', pic:'<img src="Level 5/images/seventh.png" />'}),({voc:'eighth', pic:'<img src="Level 5/images/eighth.png" />'}), ({voc:'ninth', pic:'<img src="Level 5/images/ninth.png" />'}), ({voc:'tenth', pic:'<img src="Level 5/images/tenth.png" />'}), ({voc:'eleventh', pic:'<img src="Level 5/images/eleventh.png" />'}), ({voc:'twelfth', pic:'<img src="Level 5/images/twelfth.png" />'})];
            shuffleArray(vocArray);
            document.getElementById("g0r0d5").innerHTML = vocArray[0].pic;
            pronounArray = ["I", "you", "he", "she"];
            shuffleArray(pronounArray);
            if (pronounArray[0] == "I") {
                var pronoun = "you";
            } else if (pronounArray[0] == "you") {
                var pronoun = "I";
            } else {
                var pronoun = pronounArray[0];
            }
            choiceArrayInt = 0;
            while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 3)};
            if (choiceArrayInt == 1){
                if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    document.getElementById("g0r0d0").innerHTML = "What grade is " + pronounArray[0] + " in?";
                    sampleAnswer = pronoun.toUpperCase().charAt(0).toUpperCase() + pronoun.slice(1) + " is in the " + vocArray[0].voc + " grade.";
                } else if (pronounArray[0] == "I"){
                    document.getElementById("g0r0d0").innerHTML = "What grade am " + pronounArray[0] + " in?";
                    sampleAnswer = "You are in the " + vocArray[0].voc + " grade.";
                } else {
                    document.getElementById("g0r0d0").innerHTML = "What grade are " + pronounArray[0] + " in?";
                    sampleAnswer = "I am in the " + vocArray[0].voc + " grade.";
                }
            } else {
                if (pronounArray[0] == "I"){
                    document.getElementById("g0r0d0").innerHTML = "Am I in the " + vocArray[0].voc + " grade?";
                }
                else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    document.getElementById("g0r0d0").innerHTML = "Is " + pronounArray[0] + " in the " + vocArray[0].voc + " grade?";
                } else {
                    document.getElementById("g0r0d0").innerHTML = "Are you in the " + vocArray[0].voc + " grade?";
                }
                q2Array = [vocArray[0], vocArray[1]];
                shuffleArray(q2Array);
                if (q2Array[0] == vocArray[0]) {
                    document.getElementById("g0r0d5").innerHTML = q2Array[0].pic;
                    if (pronounArray[0] == "I"){
                        sampleAnswer = "Yes, you are.";
                    } else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                        sampleAnswer = "Yes, " + pronoun + " is.";
                    } else {
                        sampleAnswer = "Yes, I am.";
                    }
                } else {
                    document.getElementById("g0r0d5").innerHTML = q2Array[0].pic;
                    if (pronounArray[0] == "I"){
                        sampleAnswer = "No, you aren't.";
                    } else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                        sampleAnswer = "No, " + pronoun + " isn't.";
                    } else {
                        sampleAnswer = "No, I am not.";
                    }
                }
            }
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            grammarLesson = "";
        } else if (userInput == "Unit 2") {
            vocArray = [({voc:'a doctor', pic:'<img src="Level 5/images/doctor.png" />'}), ({voc:'a nurse', pic:'<img src="Level 5/images/nurse.png" />'}), ({voc:'a driver', pic:'<img src="Level 5/images/driver.png" />'}), ({voc:'a police officer', pic:'<img src="Level 5/images/police officer.png" />'}),({voc:'a firefighter', pic:'<img src="Level 5/images/firefighter.png" />'}),({voc:'a pilot', pic:'<img src="Level 5/images/pilot.png" />'}),({voc:'an office worker', pic:'<img src="Level 5/images/office worker.png" />'}), ({voc:'a housekeeper', pic:'<img src="Level 5/images/housekeeper.png" />'}), ({voc:'a mail carrier', pic:'<img src="Level 5/images/mail carrier.png" />'})];
            shuffleArray(vocArray);
            document.getElementById("g0r0d5").innerHTML = vocArray[0].pic;
            pronounArray = ["I", "you", "he", "she"];
            shuffleArray(pronounArray);
            if (pronounArray[0] == "I") {
                var pronoun = "you";
            } else if (pronounArray[0] == "you") {
                var pronoun = "I";
            } else {
                var pronoun = pronounArray[0];
            }
            choiceArrayInt = 0;
            while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 3)};
            if (choiceArrayInt == 1){
                if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    document.getElementById("g0r0d0").innerHTML = "What does " + pronounArray[0] + " do?";
                    sampleAnswer = pronoun.toUpperCase().charAt(0).toUpperCase() + pronoun.slice(1) + " is " + vocArray[0].voc + ".";
                } else {
                    document.getElementById("g0r0d0").innerHTML = "What do " + pronounArray[0] + " do?";
                    if (pronounArray[0] == "I"){
                        sampleAnswer = "You are " + vocArray[0].voc + ".";
                    } else {
                        sampleAnswer = "I am " + vocArray[0].voc + ".";
                    }
                }
            } else {
                if (pronounArray[0] == "I"){
                    document.getElementById("g0r0d0").innerHTML = "Am I " + vocArray[0].voc + "?";
                }
                else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    document.getElementById("g0r0d0").innerHTML = "Is " + pronounArray[0] + " " + vocArray[0].voc + "?";
                } else {
                    document.getElementById("g0r0d0").innerHTML = "Are you " + vocArray[0].voc + "?";
                }
                q2Array = [vocArray[0], vocArray[1]];
                shuffleArray(q2Array);
                if (q2Array[0] == vocArray[0]) {
                    document.getElementById("g0r0d5").innerHTML = q2Array[0].pic;
                    if (pronounArray[0] == "I"){
                        sampleAnswer = "Yes, you are.";
                    } else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                        sampleAnswer = "Yes, " + pronoun + " is.";
                    } else {
                        sampleAnswer = "Yes, I am.";
                    }
                } else {
                    document.getElementById("g0r0d5").innerHTML = q2Array[0].pic;
                    if (pronounArray[0] == "I"){
                        sampleAnswer = "No, you aren't.";
                    } else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                        sampleAnswer = "No, " + pronoun + " isn't.";
                    } else {
                        sampleAnswer = "No, I am not.";
                    }
                }
            }
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 3") {
            vocArray = [({voc:'Chinese', pic:'<img src="Level 5/images/Chinese.png" />'}), ({voc:'English', pic:'<img src="Level 5/images/English.png" />'}), ({voc:'math', pic:'<img src="Level 5/images/math.png" />'}), ({voc:'science', pic:'<img src="Level 5/images/science.png" />'}), ({voc:'social studies', pic:'<img src="Level 5/images/social studies.png" />'}), ({voc:'music', pic:'<img src="Level 5/images/music.png" />'}), ({voc:'art', pic:'<img src="Level 5/images/art.png" />'}), ({voc:'P.E.', pic:'<img src="Level 5/images/PE.png" />'})];
            shuffleArray(vocArray);
            document.getElementById("g0r0d5").innerHTML = vocArray[0].pic;
            pronounArray = ["I", "you", "he", "she", "we", "they"];
            shuffleArray(pronounArray);
            if (pronounArray[0] == "I") {
                var pronoun = "you";
            } else if (pronounArray[0] == "you") {
                var pronoun = "I";
            } else {
                var pronoun = pronounArray[0];
            }
            if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                document.getElementById("g0r0d0").innerHTML = "What subjects does " + pronounArray[0] + " have today?";
                sampleAnswer = pronoun.toUpperCase().charAt(0).toUpperCase() + pronoun.slice(1) + " has " + vocArray[0].voc + " class today.";
            } else {
                document.getElementById("g0r0d0").innerHTML = "What subjects do " + pronounArray[0] + " have today?";
                sampleAnswer = pronoun.toUpperCase().charAt(0).toUpperCase() + pronoun.slice(1) + " have " + vocArray[0].voc + " class today.";
            }
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Review 1") {
            q1Array = ["Unit 1", "Unit 2", "Unit 3"];
            shuffleArray(q1Array);
            setGrammar(q1Array[0]);
            currentUnit = "Review 1";
        } else if (userInput == "Unit 4") {
            document.getElementById("gInstructions").innerHTML = "Make a sentence.";
            q1Array = [({value:'always', pic:'<img src="Level 5/images/100.png" />'}), ({value:'usually', pic:'<img src="Level 5/images/86.png" />'}), ({value:'often', pic:'<img src="Level 5/images/64.png" />'}), ({value:'sometimes', pic:'<img src="Level 5/images/36.png" />'}), ({value:'seldom', pic:'<img src="Level 5/images/14.png" />'}), ({value:'never', pic:'<img src="Level 5/images/0.png" />'})];
            shuffleArray(q1Array);
            document.getElementById("g0r0d5").innerHTML = q1Array[0].pic;
            pronounArray = ["I", "you", "he", "she", "we", "they"];
            shuffleArray(pronounArray);
            verbArray = [({verb:'be', object:''}), ({verb:'exercise',  object:''}), ({verb:'read', object:' the newspaper'}), ({verb:'take', object:' a nap'}), ({verb:'surf', object:' the Net'}), ({verb:'keep', object:' a diary'}), ({verb:'have', object:' a snack'}), ({verb:'cook', object:' dinner'}), ({verb:'laugh', object:''}), ({verb:'draw', object:''}), ({verb:'sweep', object:' the floor'}), ({verb:'study', object:''}), ({verb:'drive', object:' a car'}), ({verb:'make', object:' the bed'}), ({verb:'eat', object:' breakfast'}), ({verb:'eat', object:' lunch'}), ({verb:'eat', object:' dinner'}), ({verb:'wash', object:' the dishes'}), ({verb:'cry', object:''}), ({verb:'help', object:' anyone'})];
            shuffleArray(verbArray);
            switch(verbArray[0].verb){
                case "be":
                    if (pronounArray[0] == "I"){
                        sampleAnswer = "I am " + q1Array[0].value + " busy.";
                    } else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                        sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " is " + q1Array[0].value + " busy.";
                    } else {
                        sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " are " + q1Array[0].value + " busy.";
                    }
                    break;
                case "have":
                    if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                        sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " has a snack.";
                    } else {
                        sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " have a snack.";
                    }
                    break;
                case "wash":
                    if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                        sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " washes the dishes.";
                    } else {
                        sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " wash the dishes.";
                    }
                    break;
                case "cry":
                    if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                        sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " cries.";
                    } else {
                        sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " cry.";
                    }
                    break;
                case "study":
                    if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                        sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " studies.";
                    } else {
                        sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " study.";
                    }
                    break;
                default:
                    if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                        sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " " + verbArray[0].verb + "s" + verbArray[0].object + ".";
                    } else {
                        sampleAnswer = pronounArray[0].charAt(0).toUpperCase() + pronounArray[0].slice(1) + " " + q1Array[0].value + " " + verbArray[0].verb + verbArray[0].object + ".";
                    }
                    break;
            }
            document.getElementById("g0r0d0").innerHTML = verbArray[0].verb + " " + verbArray[0].object;
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 5") {
            choiceArrayInt = 0;
            seasonArray = [({season: 'summer', weather: 'hot'}), ({season: 'fall', weather: 'cool'}), ({season: 'winter', weather: 'cold'}), ({season: 'spring', weather: 'warm'})];
            shuffleArray(seasonArray);
            frequencyArray = ['never', 'seldom', 'sometimes', 'often', 'usually', 'always'];
            shuffleArray(frequencyArray);
            while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 5)};
            var rArray = seasonArray;
            shuffleArray(rArray);
            document.getElementById("g0r0d0").innerHTML = choiceArrayInt;
            if (choiceArrayInt == 1 || choiceArrayInt == 2){
                document.getElementById("g0r0d0").innerHTML = "It's usually _____________ in the " + seasonArray[0].season + ".";
                sampleAnswer = "It's usually " + seasonArray[0].weather + " in the " + seasonArray[0].season + ".";
            } else {
                document.getElementById("g0r0d0").innerHTML = "Is it " + frequencyArray[0] + " " + rArray[0].weather + " in the " + seasonArray[0].season + "?";
                if (frequencyArray[0] == "always" || frequencyArray[0] == "usually" || frequencyArray[0] == "often"){
                    if (seasonArray[0].weather == rArray[0].weather){
                        sampleAnswer = "Yes, " + "it's " + frequencyArray[0] + " " + rArray[0].weather + " in the " + seasonArray[0].season + ".";
                    }
                } else {
                    sampleAnswer = "No, " + "it's usually " + seasonArray[0].weather + " in the " + seasonArray[0].season + ".";
                }
            }
            document.getElementById("g0r1d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" />';
            document.getElementById("g0r1d1").align = "left";
            document.getElementById("g0r1d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 6") {
            pronounArray = ["I", "You", "We", "He", "She", "They"];
            shuffleArray(pronounArray);
            q3Array = [" in the morning", " in the afternoon", " in the evening", " in the garden", " in the park", " every day", " twice a week", " every Tuesday", " every Thursday"];
            shuffleArray(q3Array);
            if (pronounArray[0] == "He" || pronounArray[0] == "She") {
                document.getElementById("g0r0d0").innerHTML = "What does " + pronounArray[0].toLowerCase() + " usually do " + q3Array[0] + "?";
            } else {
                if (pronounArray[0] == "I") {
                    document.getElementById("g0r0d0").innerHTML = "What do " + pronounArray[0] + " usually do " + q3Array[0] + "?";
                } else {
                    document.getElementById("g0r0d0").innerHTML = "What do " + pronounArray[0].toLowerCase() + " usually do " + q3Array[0] + "?";
                }
            }
            verbArray = [({verb:'do', object:' the laundry', pic:'<img src="Level 5/images/do the laundry.png" />'}), ({verb:'sweep',  object:' the floor', pic:'<img src="Level 5/images/sweep the floor.png" />'}), ({verb:'mop', object:' the floor', pic:'<img src="Level 5/images/mop the floor.png" />'}), ({verb:'walk', object:' the dog', pic:'<img src="Level 5/images/walk the dog.png" />'}), ({verb:'go', object:' mountain climbing', pic:'<img src="Level 5/images/go mountain climbing.png" />'}), ({verb:'play', object:' chess', pic:'<img src="Level 5/images/play chess.png" />'}), ({verb:'water', object:' the plants', pic:'<img src="Level 5/images/water the plants.png" />'}), ({verb:'take', object:' a walk', pic:'<img src="Level 5/images/take a walk.png" />'})];
            shuffleArray(verbArray);
            document.getElementById("g0r0d5").innerHTML = verbArray[0].pic;
            switch(verbArray[0].verb){
                case "do":
                    if (pronounArray[0] == "I") {
                        sampleAnswer = "You usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                    } else if (pronounArray[0] == "You") {
                        sampleAnswer = "I usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                    } else if (pronounArray[0] == "He" || pronounArray[0] == "She") {
                        sampleAnswer = pronounArray[0] + " usually does the laundry" + q3Array[0] + ".";
                    } else {
                        sampleAnswer = pronounArray[0] + " usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                    }
                    break;
                case "go":
                    if (pronounArray[0] == "I") {
                        sampleAnswer = "You usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                    } else if (pronounArray[0] == "You") {
                        sampleAnswer = "I usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                    } else if (pronounArray[0] == "He" || pronounArray[0] == "She") {
                        sampleAnswer = pronounArray[0] + " usually goes mountain climbing" + q3Array[0] + ".";
                    } else {
                        sampleAnswer = pronounArray[0] + " usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                    }
                    break;
                default:
                    if (pronounArray[0] == "I") {
                        sampleAnswer = "You usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                    } else if (pronounArray[0] == "You") {
                        sampleAnswer = "I usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                    } else if (pronounArray[0] == "He" || pronounArray[0] == "She") {
                        sampleAnswer = pronounArray[0] + " usually " + verbArray[0].verb + "s" + verbArray[0].object + q3Array[0] + ".";
                    } else {
                        sampleAnswer = pronounArray[0] + " usually " + verbArray[0].verb + verbArray[0].object + q3Array[0] + ".";
                    }
                    break;
            }
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            grammarLesson = "";
        } else if (userInput == "Review 2") {
            q1Array = ["Unit 4", "Unit 5", "Unit 6"];
            shuffleArray(q1Array);
            setGrammar(q1Array[0]);
            currentUnit = "Review 2";
        } else if (userInput == "Unit 7") {
            freqArray = [" once ", " twice ", " three times "];
            shuffleArray(freqArray);
            timeArray = ["a week.", "a month.", "a year."];
            shuffleArray(timeArray);
            pronounArray = ["I", "you", "he", "she", "we", "they"];
            shuffleArray(pronounArray);
            verbArray = [({verb:'play', obj:' the piano'}), ({verb:'play', obj:' cards'}), ({verb:'go', obj:' to the movies'}), ({verb:'go', obj:' abroad'})];
            shuffleArray(verbArray);
            if (pronounArray[0] == "I") {
                var pronoun = "you";
            } else if (pronounArray[0] == "you") {
                var pronoun = "I";
            } else {
                var pronoun = pronounArray[0];
            }
            if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                document.getElementById("g0r0d0").innerHTML = "How often does " + pronounArray[0] + " " + verbArray[0].verb + verbArray[0].obj + "?";
                if (verbArray[0].verb == "go"){
                    sampleAnswer = pronoun.charAt(0).toUpperCase() + pronoun.slice(1) + " goes" + verbArray[0].obj + freqArray[0] + timeArray[0];
                } else {
                    sampleAnswer = pronoun.charAt(0).toUpperCase() + pronoun.slice(1) + " " + verbArray[0].verb + "s" + verbArray[0].obj + freqArray[0] + timeArray[0];
                }
            } else {
                document.getElementById("g0r0d0").innerHTML = "How often do " + pronounArray[0] + " " + verbArray[0].verb + " " + verbArray[0].obj + "?";
                sampleAnswer = pronoun.toUpperCase().charAt(0).toUpperCase() + pronoun.slice(1) + " " + verbArray[0].verb + " " + verbArray[0].obj + freqArray[0] + timeArray[0];
            }
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 8") {
            vocArray = [({voc:'shoes', pic:'<img src="Level 5/images/shoes.png" />'}), ({voc:'socks', pic:'<img src="Level 5/images/socks.png" />'}), ({voc:'jeans', pic:'<img src="Level 5/images/jeans.png" />'}), ({voc:'pants', pic:'<img src="Level 5/images/pants.png" />'}), ({voc:'shorts', pic:'<img src="Level 5/images/shorts.png" />'}), ({voc:'glasses', pic:'<img src="Level 5/images/glasses.png" />'}), ({voc:'gloves', pic:'<img src="Level 5/images/gloves.png" />'}), ({voc:'earrings', pic:'<img src="Level 5/images/earrings.png" />'})];
            shuffleArray(vocArray);
            document.getElementById("g0r0d5").innerHTML = vocArray[0].pic;
            pronounArray = ["I", "you", "he", "she", "we", "they"];
            shuffleArray(pronounArray);
            if (pronounArray[0] == "I") {
                var pronoun = "you";
            } else if (pronounArray[0] == "you") {
                var pronoun = "I";
            } else {
                var pronoun = pronounArray[0];
            }
            choiceArrayInt = 0;
            while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 3)};
            if (choiceArrayInt == 1){
                if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    document.getElementById("g0r0d0").innerHTML = "What does " + pronounArray[0] + " want to buy?";
                    sampleAnswer = pronoun.toUpperCase().charAt(0).toUpperCase() + pronoun.slice(1) + " wants to buy a pair of " + vocArray[0].voc + ".";
                } else {
                    document.getElementById("g0r0d0").innerHTML = "What do " + pronounArray[0] + " want to buy?";
                    sampleAnswer = pronoun.toUpperCase().charAt(0).toUpperCase() + pronoun.slice(1) + " want to buy a pair of " + vocArray[0].voc + ".";
                }
            } else {
                if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    document.getElementById("g0r0d0").innerHTML = "Does " + pronounArray[0] + " want to buy a pair of " + vocArray[0].voc + "?";
                } else {
                    document.getElementById("g0r0d0").innerHTML = "Do " + pronounArray[0] + " want to buy a pair of " + vocArray[0].voc + "?";
                }
                q2Array = [vocArray[0], vocArray[1]];
                shuffleArray(q2Array);
                if (q2Array[0] == vocArray[0]) {
                    document.getElementById("g0r0d5").innerHTML = q2Array[0].pic;
                    if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                        sampleAnswer = "Yes, " + pronoun + " does.";
                    } else {
                        sampleAnswer = "Yes, " + pronoun + " do.";
                    }
                } else {
                    document.getElementById("g0r0d5").innerHTML = q2Array[0].pic;
                    if (pronounArray[0] == "he" || pronoun == "she") {
                        sampleAnswer = "No, " + pronoun + " doesn't.";
                    } else {
                        sampleAnswer = "No, " + pronoun + " don't.";
                    }
                }
            }
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 9") {
            vocArray = ["ring", "belt", "backpack"];
            shuffleArray(vocArray);
            numberArray1 = [({text: 'one', num:'1'}), ({text:'two', num:'2'}), ({text:'three', num:'3'}), ({text:'four', num:'4'}), ({text:'five', num:'5'}), ({text:'six', num:'6'}), ({text:'seven', num:'7'}), ({text:'eight', num:'8'}), ({text:'nine', num:'9'})];
            shuffleArray(numberArray1);
            numberArray2 = [({text: 'twenty', num:'20'}), ({text:'thirty', num:'30'}), ({text:'forty', num:'40'}), ({text:'fifty', num:'50'}), ({text:'sixty', num:'60'}), ({text:'seventy', num:'70'}), ({text:'eighty', num:'80'}), ({text:'ninety', num:'90'})];
            shuffleArray(numberArray2);
            q3Array = [" hundred", " thousand", "dollars."];
            shuffleArray(q3Array);
            if (q3Array[0] == "dollars."){
                sampleAnswer = "The " + vocArray[0] + " is " + numberArray2[0].text + " " + numberArray1[0].text + " " + q3Array[0];
                document.getElementById("g0r0d5").innerHTML = "$" + numberArray2[0].num.charAt(0) + numberArray1[0].num;
            } else if (q3Array[0] == " hundred"){
                sampleAnswer = "The " + vocArray[0] + " is " + numberArray1[0].text + q3Array[0] + " and " + numberArray2[0].text + " " + numberArray1[1].text + " dollars.";
                document.getElementById("g0r0d5").innerHTML = "$" + numberArray1[0].num + numberArray2[0].num.charAt(0) + numberArray1[1].num;
            } else {
                sampleAnswer = "The " + vocArray[0] + " is " + numberArray1[0].text + q3Array[0] + ", " + numberArray1[1].text + " hundred and " + numberArray2[0].text + " " + numberArray1[2].text + " dollars.";
                document.getElementById("g0r0d5").innerHTML = "$" + numberArray1[0].num + "," + numberArray1[1].num + numberArray2[0].num.charAt(0) + numberArray1[2].num;
            }
            document.getElementById("g0r0d0").innerHTML = "How much is the " + vocArray[0] + "?";
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = ['<a href="http://scratch.mit.edu/projects/20076362/" target="_newtab">Scratch: B5U9 "How Much Is It?"</a>'];
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
    else if (level_id == "Level 6") {
        if (userInput == "Unit 1") {
            q1Array = [""];
            q2Array = [""];
            q3Array = [""];
            gLinks = ['<a href="http://scratch.mit.edu/projects/20797437/" target="_newtab">Scratch: Date Game</a>'];
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
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 5") {
            q1Array = [""];
            q2Array = [""];
            q3Array = [""];
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 6") {
            pronounArray = ["you", "he", "she", "they"];
            shuffleArray(pronounArray);
            answerArray = ["Yes", "No"];
            shuffleArray(answerArray);
            timeArray1 = ["two", "five", "ten"];
            shuffleArray(timeArray1);
            timeArray2 = ["hours ago", "minutes ago", "seconds ago"];
            shuffleArray(timeArray2);
            placeArray = ["in the classroom", "on the field", "in the teacher's office", "in the nurse's office", "in the restroom", "at the snack bar", "in the gym", "in the hallway"];
            shuffleArray(placeArray);
            question = placeArray[0] + " " + timeArray1[0] + " " + timeArray2[0];
            if (pronounArray[0] == "you") {
                document.getElementById("g0r0d0").innerHTML = "Were you " + question + "?";
            } else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                document.getElementById("g0r0d0").innerHTML = "Was " + pronounArray[0] + " " + question + "?";
            } else {
                document.getElementById("g0r0d0").innerHTML = "Were they " + question + "?";
            }
            if (answerArray[0] == "Yes") {
                document.getElementById("g0r0d5").innerHTML = '<h1 style="font-size:100px">&#x2705;</h1>';
                if (pronounArray[0] == "you") {
                    sampleAnswer = "Yes, I was " + question + ".";
                } else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    sampleAnswer = "Yes, " + pronounArray[0] + " was " + question + ".";
                } else {
                    sampleAnswer = "Yes, they were " + question + ".";
                }
            } else {
                document.getElementById("g0r0d5").innerHTML = '<h1 style="font-size:100px">&#x274C;</h1>';
                if (pronounArray[0] == "you") {
                    sampleAnswer = "No, I was not " + question + ".";
                } else if (pronounArray[0] == "he" || pronounArray[0] == "she") {
                    sampleAnswer = "No, " + pronounArray[0] + " was not " + question + ".";
                } else {
                    sampleAnswer = "No, they were not " + question + ".";
                }
            }
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r3d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
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
            gLinks = ['<a href="http://www.turtlediary.com/grade-3-games/ela-games/simple-past-tense.html" target="_newtab">Turtle Diary: Simple Past Tense</a>'];
            grammarLesson = "";
        } else if (userInput == "Unit 8") {
            q1Array = [""];
            q2Array = [""];
            q3Array = [""];
            gLinks = ['<a href="http://www.eslgamesplus.com/irregular-past-tense-esl-grammar-jeopardy-quiz-game/" target="_newtab">ESL Games+: Irregular Past Tense Jeopardy</a></li><li><a href="http://www.turtlediary.com/grade-3-games/ela-games/simple-past-tense.html" target="_newtab">Turtle Diary: Simple Past Tense</a></li><li><a href="http://www.grammar.cl/Games/Past_Irregular_Verbs.htm" target="_newtab">Woodward English: Past Irregular Verbs</a></li><li><a href="http://www.perfect-english-grammar.com/past-simple-exercise-7.html" target="_newtab">Perfect English Grammar: Past Simple Forms</a>'];
            grammarLesson = "";
        } else if (userInput == "Unit 9") {
            q1Array = [""];
            q2Array = [""];
            q3Array = [""];
            gLinks = ['<a href="http://www.eslgamesplus.com/food-partitives-expressions-of-quantity-a-slice-of-a-piece-of-esl-grammar-activity/" target="_newtab">ESL Games+: Phrase Monkey</a></li><li><a href="http://www.eslgamesplus.com/food-partitives-esl-fun-game-food-quantities-game/" target="_newtab">ESL Games+: Moonshot</a>'];
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
    else if (level_id == "Level 7") {
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
            verbArray = [({contVerb:'baking a cake', pastVerb:'baked a cake', pic:'<img src="Level 7/images/bake a cake.png" />'}), ({contVerb:'cooking a meal', pastVerb:'cooked a meal', pic:'<img src="Level 7/images/cook a meal.png" />'}), ({contVerb:'making a sandwich', pastVerb:'made a sandwich', pic:'<img src="Level 7/images/make a sandwich.png" />'}), ({contVerb:'drawing a picture', pastVerb:'drew a picture', pic:'<img src="Level 7/images/draw a picture.png" />'}), ({contVerb:'vacuuming the floor', pastVerb:'vacuumed the floor', pic:'<img src="Level 7/images/vacuum the floor.png" />'}),  ({contVerb:'making a call', pastVerb:'made a call', pic:'<img src="Level 7/images/make a call.png" />'}), ({contVerb:'answering the phone', pastVerb:'answered the phone', pic:'<img src="Level 7/images/answer the phone.png" />'}), ({contVerb:'trying on a shirt', pastVerb:'tried on a shirt', pic:'<img src="Level 7/images/try on a shirt.png" />'})];
            timeArray = ["at one o'clock", "at ten o'clock", "at six o'clock", "at twelve o'clock", "at two-thirty", "at nine forty-five", "at seven oh-five", "five minutes ago", "twenty minutes ago", "one hour ago"];
            shuffleArray(verbArray);
            shuffleArray(timeArray);
            answerInt = Math.floor(Math.random() * 4);
            if (answerInt == 0){
                document.getElementById("g0r0d0").innerHTML = "What were you doing " + timeArray[0] + "?";
            } else if (answerInt == 1){
                document.getElementById("g0r0d0").innerHTML = "What did Addison do while Hayden was " + verbArray[1].contVerb + "?";
            } else if (answerInt == 2){
                document.getElementById("g0r0d0").innerHTML = "What did Hayden do while Allison was " + verbArray[1].contVerb + "?";
            }else {
                document.getElementById("g0r0d0").innerHTML = "Make a past tense sentence using 'while'.";
            }
            document.getElementById("g0r0d5").innerHTML = verbArray[0].pic;
            if (answerInt == 0){
                sampleAnswer = "I was " + verbArray[0].contVerb + " " + timeArray[0] + ".";
            } else if (answerInt == 1){
                sampleAnswer = "Addison " + verbArray[0].pastVerb + " while Hayden was "+ verbArray[1].contVerb + ".";
            } else if (answerInt == 2){
                sampleAnswer = "Hayden " + verbArray[0].pastVerb + " while Addison was " + verbArray[1].contVerb +".";
            } else {
                sampleAnswer = "While Hayden was " + verbArray[1].contVerb + ", Addison " + verbArray[0].pastVerb +".";
            }
            document.getElementById("g0r1d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" />';
            document.getElementById("g0r1d1").align = "left";
            document.getElementById("g0r1d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Review 1") {
            q1Array = ["Unit 1", "Unit 2", "Unit 3"];
            shuffleArray(q1Array);
            setGrammar(q1Array[0]);
            currentUnit = "Review 1";
            grammarLesson = "";
        } else if (userInput == "Unit 4") {
            verbArray = [({contVerb:'watching the news', pastVerb:'watched the news', pic:'<img src="Level 7/images/watch the news.png" />'}), ({contVerb:'reading a magazine', pastVerb:'read a magazine', pic:'<img src="Level 7/images/read a magazine.png" />'}), ({contVerb:'listening to the radio', pastVerb:'listened to the radio', pic:'<img src="Level 7/images/listen to the radio.png" />'}), ({contVerb:'building a model', pastVerb:'built a model', pic:'<img src="Level 7/images/build a model.png" />'}), ({contVerb:'doing puzzles', pastVerb:'did puzzles', pic:'<img src="Level 7/images/do puzzles.png" />'}), ({contVerb:'taking a message', pastVerb:'took a message', pic:'<img src="Level 7/images/take a message.png" />'}), ({contVerb:'leaving a message', pastVerb:'left a message', pic:'<img src="Level 7/images/leave a message.png" />'})];
            timeArray = ["at one o'clock", "at ten o'clock", "at six o'clock", "at twelve o'clock", "at two-thirty", "at nine forty-five", "at seven oh-five", "five minutes ago", "twenty minutes ago", "one hour ago"];
            shuffleArray(verbArray);
            shuffleArray(timeArray);
            answerInt = Math.floor(Math.random() * 4);
            if (answerInt == 0){
                document.getElementById("g0r0d0").innerHTML = "What did you do " + timeArray[0] + "?";
            } else if (answerInt == 1){
                document.getElementById("g0r0d0").innerHTML = "What was Skyler doing when Dakota " + verbArray[1].pastVerb + "?";
            } else if (answerInt == 2){
                document.getElementById("g0r0d0").innerHTML = "What was Dakota doing when Skyler " + verbArray[1].pastVerb + "?";
            }else {
                document.getElementById("g0r0d0").innerHTML = "Make a past tense sentence using 'when'.";
            }
            document.getElementById("g0r0d5").innerHTML = verbArray[0].pic;
            if (answerInt == 0){
                sampleAnswer = "I " + verbArray[0].pastVerb + " " + timeArray[0] + ".";
            } else if (answerInt == 1){
                sampleAnswer = "Skyler was " + verbArray[0].contVerb + " when Dakota " + verbArray[1].pastVerb + ".";
            } else if (answerInt == 2){
                sampleAnswer = "Dakota was " + verbArray[0].contVerb + " when Skyler " + verbArray[1].pastVerb + ".";
            } else {
                sampleAnswer = "When Skyler " + verbArray[0].pastVerb + ", Dakota was " + verbArray[1].contVerb + ".";
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
    else if (level_id == "Level 8") {
        if (userInput == "Unit 1") {
            picArray = [({value:'grandfather', pic:'<img src="Level 1/images/grandfather.png" />'}), ({value:'grandmother', pic:'<img src="Level 1/images/grandmother.png" />'}), ({value:'father', pic:'<img src="Level 1/images/father.png" />'}), ({value:'mother', pic:'<img src="Level 1/images/mother.png" />'}), ({value:'uncle', pic:'<img src="Level 1/images/uncle.png" />'}), ({value:'aunt', pic:'<img src="Level 1/images/aunt.png" />'}), ({value:'cousin', pic:'<img src="Level 1/images/cousin.png" />'}), ({value:'brother', pic:'<img src="Level 1/images/brother.png" />'}), ({value:'sister', pic:'<img src="Level 1/images/sister.png" />'})];
            shuffleArray(picArray);
            q2Array = ["cup of tea", "sandwich", "bar of chocolate", "biscuit"];
            shuffleArray(q2Array);
            document.getElementById("g0r1d2").style = "width:100px; height:100px";
            document.getElementById("g0r1d2").innerHTML = picArray[0].pic;
            tempArray = ["A", "B"];
            shuffleArray(tempArray);
            if (tempArray[0] == "A") {
                q1Array = ["Who brought the ", "Who gave the "];
                shuffleArray(q1Array);
                
                if (q1Array[0] == "Who brought the ") {
                    q3Array[0] = " for you?";
                    sampleAnswer = "My " + picArray[0].value + " brought the "+q2Array[0]+" for me.";
                } else {
                    q3Array[0] = " to you?";
                    sampleAnswer = "My " + picArray[0].value + " gave the "+q2Array[0]+" to me.";
                }
                document.getElementById("g0r1d0").style="width:300px";
                document.getElementById("g0r1d0").innerHTML = q1Array[0] + q2Array[0] + q3Array[0];
                
            } else {
                q1Array = ["Who gave you the ", "Who brought you the "];
                shuffleArray(q1Array);
                if (q1Array[0] == "Who gave you the ") {
                    sampleAnswer = "My "+picArray[0].value+" gave me the "+q2Array[0]+".";
                } else {
                    sampleAnswer = "My "+picArray[0].value+" brought me the "+q2Array[0]+".";
                }
                document.getElementById("g0r1d0").style= "width:300px";
                document.getElementById("g0r1d0").innerHTML = q1Array[0] + q2Array[0] + "?";
            }
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r2d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 2") {
            q1Array = ["Who is ", "Which is "];
            shuffleArray(q1Array);
            q2Array = ["faster", "slower", "fatter", "slimmer", "prettier", "uglier", "bigger", "smaller"];
            shuffleArray(q2Array);
            document.getElementById("g0r1d0").style= "width:300px";
            document.getElementById("g0r1d0").innerHTML = q1Array[0] + q2Array[0] + "?";
            if (q1Array[0] == "Which is ") {
                q3Array = [({value:'dog', pic:'<img src="Level 1/images/dog.png" />'}), ({value:'cat', pic:'<img src="Level 1/images/cat.png" />'}), ({value:'rat', pic:'<img src="Level 1/images/rat.png" />'}), ({value:'rabbit', pic:'<img src="Level 1/images/rabbit.png" />'}), ({value:'cow', pic:'<img src="Level 1/images/cow.png" />'}), ({value:'horse', pic:'<img src="Level 1/images/horse.png" />'}), ({value:'sheep', pic:'<img src="Level 1/images/sheep.png" />'}), ({value:'pig', pic:'<img src="Level 1/images/pig.png" />'}), ({value:'chicken', pic:'<img src="Level 1/images/chicken.png" />'}), ({value:'duck', pic:'<img src="Level 1/images/duck.png" />'}), ({value:'tiger', pic:'<img src="Level 2/images/tiger.png" />'}), ({value:'lion', pic:'<img src="Level 2/images/lion.png" />'}), ({value:'monkey', pic:'<img src="Level 2/images/monkey.png" />'}), ({value:'bear', pic:'<img src="Level 2/images/bear.png" />'}), ({value:'zebra', pic:'<img src="Level 2/images/zebra.png" />'}), ({value:'goat', pic:'<img src="Level 2/images/goat.png" />'}), ({value:'elephant', pic:'<img src="Level 2/images/elephant.png" />'}), ({value:'hippo', pic:'<img src="Level 2/images/hippo.png" />'}), ({value:'snake', pic:'<img src="Level 2/images/snake.png" />'}), ({value:'parrot', pic:'<img src="Level 2/images/parrot.png" />'})];
                shuffleArray(q3Array);
                sampleAnswer = "The "+q3Array[0].value+" is "+q2Array[0]+" than the "+q3Array[1].value+".";
            } else {
                q3Array = [({value:'grandfather', pic:'<img src="Level 1/images/grandfather.png" />'}), ({value:'grandmother', pic:'<img src="Level 1/images/grandmother.png" />'}), ({value:'father', pic:'<img src="Level 1/images/father.png" />'}), ({value:'mother', pic:'<img src="Level 1/images/mother.png" />'}), ({value:'uncle', pic:'<img src="Level 1/images/uncle.png" />'}), ({value:'aunt', pic:'<img src="Level 1/images/aunt.png" />'}), ({value:'cousin', pic:'<img src="Level 1/images/cousin.png" />'}), ({value:'brother', pic:'<img src="Level 1/images/brother.png" />'}), ({value:'sister', pic:'<img src="Level 1/images/sister.png" />'})];
                shuffleArray(q3Array);
                sampleAnswer = "My "+q3Array[0].value+" is "+q2Array[0]+" than my "+q3Array[1].value+".";
            }
            document.getElementById("g0r1d2").style = "width:50px; height:50px";
            document.getElementById("g0r1d2").innerHTML = q3Array[0].pic;
            document.getElementById("g0r1d3").style = "width:50px; height:50px";
            document.getElementById("g0r1d3").innerHTML = q3Array[1].pic;
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r2d1").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 3") {
            q1Array = ["Which is ", "Which are ", "Who is "];
            shuffleArray(q1Array);
            if (q1Array[0] == "Which is ") {
                q2Array = ["cheaper", "more difficult", "more expensive"];
                shuffleArray(q2Array);
                if (q2Array[0] == "more difficult") {
                    q3Array = [({value:'Chinese', pic:'<img src="Level 5/images/Chinese.png" />'}), ({value:'English', pic:'<img src="Level 5/images/English.png" />'}), ({value:'math', pic:'<img src="Level 5/images/math.png" />'}), ({value:'science', pic:'<img src="Level 5/images/science.png" />'}), ({value:'social studies', pic:'<img src="Level 5/images/social studies.png" />'}), ({value:'music', pic:'<img src="Level 5/images/music.png" />'}), ({value:'art', pic:'<img src="Level 5/images/art.png" />'})];
                    shuffleArray(q3Array);
                    sampleAnswer = q3Array[0].value.slice(0,1).toUpperCase()+q3Array[0].value.slice(1)+" is "+q2Array[0]+" than "+q3Array[1].value+".";
                } else {
                    q3Array = [({value:'hat', pic:'<img src="Level 1/images/hat.png" />'}), ({value:'cap', pic:'<img src="Level 1/images/cap.png" />'}), ({value:'coat', pic:'<img src="Level 1/images/coat.png" />'}), ({value:'jacket', pic:'<img src="Level 1/images/jacket.png" />'}), ({value:'dress', pic:'<img src="Level 1/images/dress.png" />'}), ({value:'skirt', pic:'<img src="Level 1/images/skirt.png" />'}), ({value:'shirt', pic:'<img src="Level 1/images/shirt.png" />'}), ({value:'T-shirt', pic:'<img src="Level 1/images/T-shirt.png" />'})];
                    sampleAnswer = "The "+q3Array[0].value+" is "+q2Array[0]+" than the "+q3Array[1].value+".";
                }
            } else if (q1Array[0] == "Which are ") {
                q2Array = ["heavier", "lighter", "more modern", "more dangerous"];
                shuffleArray(q2Array);
                if (q2Array[0] == "more modern") {
                    q3Array = [({value:'police station', pic:'<img src="Level 4/images/police station.png" />'}), ({value:'fire station', pic:'<img src="Level 4/images/fire station.png" />'}), ({value:'MRT station', pic:'<img src="Level 4/images/MRT station.png" />'}), ({value:'bus stop', pic:'<img src="Level 4/images/bus stop.png" />'}), ({value:'bank', pic:'<img src="Level 4/images/bank.png" />'}), ({value:'bookstore', pic:'<img src="Level 4/images/bookstore.png" />'}), ({value:'convenience store', pic:'<img src="Level 4/images/convenience store.png" />'}), ({value:'department store', pic:'<img src="Level 4/images/department store.png" />'}), ({value:'museum', pic:'<img src="Level 4/images/museum.png" />'}), ({value:'post office', pic:'<img src="Level 4/images/post office.png" />'}), ({value:'restaurant', pic:'<img src="Level 4/images/restaurant.png" />'}), ({value:'movie theater', pic:'<img src="Level 4/images/movie theater.png" />'}), ({value:'bakery', pic:'<img src="Level 4/images/bakery.png" />'}), ({value:'hospital', pic:'<img src="Level 4/images/hospital.png" />'}), ({value:'library', pic:'<img src="Level 4/images/library.png" />'}), ({value:'clinic', pic:'<img src="Level 4/images/clinic.png" />'}), ({value:'gas station', pic:'<img src="Level 4/images/gas station.png" />'}), ({value:'toy store', pic:'<img src="Level 4/images/toy store.png" />'})];
                    shuffleArray(q3Array);
                    sampleAnswer = q3Array[0].value.slice(0,1).toUpperCase()+q3Array[0].value.slice(1)+"s are "+q2Array[0]+" than "+q3Array[1].value+"s.";
                } else {
                    q3Array = [({value:'dog', pic:'<img src="Level 1/images/dog.png" />'}), ({value:'cat', pic:'<img src="Level 1/images/cat.png" />'}), ({value:'rat', pic:'<img src="Level 1/images/rat.png" />'}), ({value:'rabbit', pic:'<img src="Level 1/images/rabbit.png" />'}), ({value:'cow', pic:'<img src="Level 1/images/cow.png" />'}), ({value:'horse', pic:'<img src="Level 1/images/horse.png" />'}), ({value:'pig', pic:'<img src="Level 1/images/pig.png" />'}), ({value:'chicken', pic:'<img src="Level 1/images/chicken.png" />'}), ({value:'duck', pic:'<img src="Level 1/images/duck.png" />'}), ({value:'tiger', pic:'<img src="Level 2/images/tiger.png" />'}), ({value:'lion', pic:'<img src="Level 2/images/lion.png" />'}), ({value:'monkey', pic:'<img src="Level 2/images/monkey.png" />'}), ({value:'bear', pic:'<img src="Level 2/images/bear.png" />'}), ({value:'zebra', pic:'<img src="Level 2/images/zebra.png" />'}), ({value:'goat', pic:'<img src="Level 2/images/goat.png" />'}), ({value:'elephant', pic:'<img src="Level 2/images/elephant.png" />'}), ({value:'hippo', pic:'<img src="Level 2/images/hippo.png" />'}), ({value:'snake', pic:'<img src="Level 2/images/snake.png" />'}), ({value:'parrot', pic:'<img src="Level 2/images/parrot.png" />'})];
                    shuffleArray(q3Array);
                    sampleAnswer = q3Array[0].value.slice(0,1).toUpperCase()+q3Array[0].value.slice(1)+"s are "+q2Array[0]+" than "+q3Array[1].value+"s.";
                }
            } else {
                q2Array = ["more handsome", "more beautiful"];
                shuffleArray(q2Array);
                if (q2Array[0] == "more handsome") {
                    q3Array = [({value:'grandfather', pic:'<img src="Level 1/images/grandfather.png" />'}), ({value:'father', pic:'<img src="Level 1/images/father.png" />'}), ({value:'uncle', pic:'<img src="Level 1/images/uncle.png" />'}), ({value:'brother', pic:'<img src="Level 1/images/brother.png" />'})];
                    shuffleArray(q3Array);
                    sampleAnswer = "My "+q3Array[0].value+" is "+q2Array[0]+" than my "+q3Array[1].value+".";
                } else {
                    q3Array = [({value:'grandmother', pic:'<img src="Level 1/images/grandmother.png" />'}), ({value:'mother', pic:'<img src="Level 1/images/mother.png" />'}), ({value:'aunt', pic:'<img src="Level 1/images/aunt.png" />'}), ({value:'sister', pic:'<img src="Level 1/images/sister.png" />'}), ({value:'cousin', pic:'<img src="Level 1/images/cousin.png" />'})];
                    shuffleArray(q3Array);
                    sampleAnswer = "My "+q3Array[0].value+" is "+q2Array[0]+" than my "+q3Array[1].value+".";
                }
            }
            document.getElementById("g0r1d0").style= "width:300px";
            document.getElementById("g0r1d0").innerHTML = q1Array[0] + q2Array[0] + "?";
            document.getElementById("g0r1d2").style = "width:50px; height:50px";
            document.getElementById("g0r1d2").innerHTML = q3Array[0].pic;
            document.getElementById("g0r1d3").style = "width:50px; height:50px";
            document.getElementById("g0r1d3").innerHTML = q3Array[1].pic;
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r2d2").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Review 1") {
            q1Array = ["Unit 1", "Unit 2", "Unit 3"];
            shuffleArray(q1Array);
            setGrammar(q1Array[0]);
            currentUnit = "Review 1";
        } else if (userInput == "Unit 4") {
            q1Array = ["slim", "little", "tired", "good", "strong", "busy", "modern", "easy", "big", "bored", "bad", "lazy", "hard", "many", "weak", "fast"];
            shuffleArray(q1Array);
            q2Array = [""];
            q3Array = [""];
            document.getElementById("g0r0d0").innerHTML = '<p style="font-size:50px">'+q1Array[0]+'</p>';
            document.getElementById("g0r0d1").innerHTML = '<p style="font-size:50px">'+q1Array[1]+'</p>';
            document.getElementById("g0r0d2").innerHTML = '<p style="font-size:50px">'+q1Array[2]+'</p>';
            document.getElementById("g0r0d3").innerHTML = '<p style="font-size:50px">'+q1Array[3]+'</p>';
            
            document.getElementById("g0r1d0").innerHTML = '<p style="font-size:50px">'+q1Array[4]+'</p>';
            document.getElementById("g0r1d1").innerHTML = '<p style="font-size:50px">'+q1Array[5]+'</p>';
            document.getElementById("g0r1d2").innerHTML = '<p style="font-size:50px">'+q1Array[6]+'</p>';
            document.getElementById("g0r1d3").innerHTML = '<p style="font-size:50px">'+q1Array[7]+'</p>';
            
            document.getElementById("g0r2d0").innerHTML = '<p style="font-size:50px">'+q1Array[8]+'</p>';
            document.getElementById("g0r2d1").innerHTML = '<p style="font-size:50px">'+q1Array[9]+'</p>';
            document.getElementById("g0r2d2").innerHTML = '<p style="font-size:50px">'+q1Array[10]+'</p>';
            document.getElementById("g0r2d3").innerHTML = '<p style="font-size:50px">'+q1Array[11]+'</p>';
            
            document.getElementById("g0r3d0").innerHTML = '<p style="font-size:50px">'+q1Array[12]+'</p>';
            document.getElementById("g0r3d1").innerHTML = '<p style="font-size:50px">'+q1Array[13]+'</p>';
            document.getElementById("g0r3d2").innerHTML = '<p style="font-size:50px">'+q1Array[14]+'</p>';
            document.getElementById("g0r3d3").innerHTML = '<p style="font-size:50px">'+q1Array[15]+'</p>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 5") {
            q1Array = ["Which is ", "Which are ", "Who is "];
            shuffleArray(q1Array);
            if (q1Array[0] == "Which is ") {
                q2Array = ["the cleanest", "the dirtiest", "the easiest"];
                shuffleArray(q2Array);
                if (q2Array[0] == "the easiest") {
                    q3Array = [({value:'Chinese', pic:'<img src="Level 5/images/Chinese.png" />'}), ({value:'English', pic:'<img src="Level 5/images/English.png" />'}), ({value:'math', pic:'<img src="Level 5/images/math.png" />'}), ({value:'science', pic:'<img src="Level 5/images/science.png" />'}), ({value:'social studies', pic:'<img src="Level 5/images/social studies.png" />'}), ({value:'music', pic:'<img src="Level 5/images/music.png" />'}), ({value:'art', pic:'<img src="Level 5/images/art.png" />'})];
                    shuffleArray(q3Array);
                    sampleAnswer = q3Array[0].value.slice(0,1).toUpperCase()+q3Array[0].value.slice(1)+" is "+q2Array[0]+".";
                } else {
                    q3Array = [({value:'hat', pic:'<img src="Level 1/images/hat.png" />'}), ({value:'cap', pic:'<img src="Level 1/images/cap.png" />'}), ({value:'coat', pic:'<img src="Level 1/images/coat.png" />'}), ({value:'jacket', pic:'<img src="Level 1/images/jacket.png" />'}), ({value:'dress', pic:'<img src="Level 1/images/dress.png" />'}), ({value:'skirt', pic:'<img src="Level 1/images/skirt.png" />'}), ({value:'shirt', pic:'<img src="Level 1/images/shirt.png" />'}), ({value:'T-shirt', pic:'<img src="Level 1/images/T-shirt.png" />'})];
                    sampleAnswer = "The "+q3Array[0].value+" is "+q2Array[0]+".";
                }
            } else if (q1Array[0] == "Which are ") {
                q2Array = ["the wettest", "the cleanest", "the dirtiest"];
                shuffleArray(q2Array);
                q3Array = [({value:'hats', pic:'<img src="Level 1/images/hat.png" />'}), ({value:'caps', pic:'<img src="Level 1/images/cap.png" />'}), ({value:'coats', pic:'<img src="Level 1/images/coat.png" />'}), ({value:'jackets', pic:'<img src="Level 1/images/jacket.png" />'}), ({value:'dresses', pic:'<img src="Level 1/images/dress.png" />'}), ({value:'skirts', pic:'<img src="Level 1/images/skirt.png" />'}), ({value:'shirts', pic:'<img src="Level 1/images/shirt.png" />'}), ({value:'T-shirts', pic:'<img src="Level 1/images/T-shirt.png" />'}), ({value:'dogs', pic:'<img src="Level 1/images/dog.png" />'}), ({value:'cats', pic:'<img src="Level 1/images/cat.png" />'}), ({value:'rats', pic:'<img src="Level 1/images/rat.png" />'}), ({value:'rabbits', pic:'<img src="Level 1/images/rabbit.png" />'}), ({value:'cows', pic:'<img src="Level 1/images/cow.png" />'}), ({value:'horses', pic:'<img src="Level 1/images/horse.png" />'}), ({value:'pigs', pic:'<img src="Level 1/images/pig.png" />'}), ({value:'chickens', pic:'<img src="Level 1/images/chicken.png" />'}), ({value:'ducks', pic:'<img src="Level 1/images/duck.png" />'}), ({value:'tigers', pic:'<img src="Level 2/images/tiger.png" />'}), ({value:'lions', pic:'<img src="Level 2/images/lion.png" />'}), ({value:'monkeys', pic:'<img src="Level 2/images/monkey.png" />'}), ({value:'bears', pic:'<img src="Level 2/images/bear.png" />'}), ({value:'zebras', pic:'<img src="Level 2/images/zebra.png" />'}), ({value:'goats', pic:'<img src="Level 2/images/goat.png" />'}), ({value:'elephants', pic:'<img src="Level 2/images/elephant.png" />'}), ({value:'hippos', pic:'<img src="Level 2/images/hippo.png" />'}), ({value:'snakes', pic:'<img src="Level 2/images/snake.png" />'}), ({value:'parrots', pic:'<img src="Level 2/images/parrot.png" />'})];
                shuffleArray(q3Array);
                sampleAnswer = q3Array[0].value.slice(0,1).toUpperCase()+q3Array[0].value.slice(1)+" are "+q2Array[0]+".";
                
            } else {
                q2Array = ["the youngest", "the oldest", "the cleanest", "the dirtiest"];
                shuffleArray(q2Array);
                q3Array = [({value:'grandfather', pic:'<img src="Level 1/images/grandfather.png" />'}), ({value:'father', pic:'<img src="Level 1/images/father.png" />'}), ({value:'uncle', pic:'<img src="Level 1/images/uncle.png" />'}), ({value:'brother', pic:'<img src="Level 1/images/brother.png" />'}), ({value:'grandmother', pic:'<img src="Level 1/images/grandmother.png" />'}), ({value:'mother', pic:'<img src="Level 1/images/mother.png" />'}), ({value:'aunt', pic:'<img src="Level 1/images/aunt.png" />'}), ({value:'sister', pic:'<img src="Level 1/images/sister.png" />'}), ({value:'cousin', pic:'<img src="Level 1/images/cousin.png" />'})];
                shuffleArray(q3Array);
                sampleAnswer = "My "+q3Array[0].value+" is "+q2Array[0]+".";
            }
            document.getElementById("g0r1d0").style= "width:300px";
            document.getElementById("g0r1d0").innerHTML = q1Array[0] + q2Array[0] + "?";
            document.getElementById("g0r1d2").style = "width:50px; height:50px";
            document.getElementById("g0r1d2").innerHTML = q3Array[0].pic;
            document.getElementById("g0r2d0").colspan = "3";
            document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
            document.getElementById("g0r3d0").colspan = "3";
            document.getElementById("g0r2d2").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
            gLinks = [''];
            grammarLesson = "";
        } else if (userInput == "Unit 6") {
            q1Array = [""];
            q2Array = [""];
            q3Array = [""];
            gLinks = [''];
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
            gLinks = [''];
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
    else {
        q1Array = ["", ""];
        q2Array = [""];
        q3Array = [""];
        answerArray = [""];
        gLinks = [''];
        grammarLesson = "";
    }
    document.getElementById("grammar_links").innerHTML = gLinks;
    document.getElementById("grammar_lesson").innerHTML = grammarLesson;
};
