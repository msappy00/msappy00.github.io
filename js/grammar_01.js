function g_01(userInput){
    if (userInput == "Unit 1") {
            pronounArray = ([{value: "I", verb: "am"}, {value: "You", verb: "are"}]);
            shuffleArray(pronounArray);
            q1Array = [({value:'boy.', pic:'<img src="Level 1/images/boy.png" />'}), ({value:'girl.', pic:'<img src="Level 1/images/girl.png" />'}), ({value:'woman.', pic:'<img src="Level 1/images/woman.png" />'}), ({value:'man.', pic:'<img src="Level 1/images/man.png" />'}), ({value:'student.', pic:'<img src="Level 1/images/student.png" />'}), ({value:'teacher.', pic:'<img src="Level 1/images/teacher.png" />'})];
            shuffleArray(q1Array);
            answerArray = (["am", "are", "", ""]);
            shuffleArray(answerArray);
            document.getElementById("gPic").innerHTML = q1Array[0].pic;
            var sentence = pronounArray[0].value + " ______ a " + q1Array[0].value;
            document.getElementById("gInstructions").textContent = sentence;
            document.getElementById("grammarCheck").value = pronounArray[0].verb;
            document.getElementById("g0r1d0").textContent = answerArray[0];
            document.getElementById("g0r1d2").textContent = answerArray[1];
            document.getElementById("g0r2d0").textContent = answerArray[2];
            document.getElementById("g0r2d2").textContent = answerArray[3];
            if (sentence){
                sentence2 = pronounArray[0].value + " " + document.getElementById("grammarCheck").value + " a " + q1Array[0].value;
                setTimeout(function(){speak(sentence2)}, 2000);
            }
            gLinks = [''];
            grammarLesson = "";
    } else if (userInput == "Unit 2") {
        q1Array = ["Who is he?", "Who is she?"];
        heArray = [({value:'grandfather', pic:'<img src="Level 1/images/grandfather.png" />'}), ({value:'father', pic:'<img src="Level 1/images/father.png" />'}), ({value:'uncle', pic:'<img src="Level 1/images/uncle.png" />'}), ({value:'brother', pic:'<img src="Level 1/images/brother.png" />'})];
        sheArray = [({value:'grandmother', pic:'<img src="Level 1/images/grandmother.png" />'}), ({value:'mother', pic:'<img src="Level 1/images/mother.png" />'}), ({value:'aunt', pic:'<img src="Level 1/images/aunt.png" />'}), ({value:'cousin', pic:'<img src="Level 1/images/cousin.png" />'}), ({value:'sister', pic:'<img src="Level 1/images/sister.png" />'})];
        shuffleArray(q1Array);
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
        pronounArray = ([{value: "I", verb: "am", qp: "you", qv: "are"}, {value: "you", verb: "are", qp: "I", qv: "am"}, {value: "they", verb: "are", qp: "they", qv: "are"}, {value: "he", verb: "is", qp: "he", qv: "is"}, {value: "she", verb: "is", qp: "she", qv: "is"}]);
        shuffleArray(pronounArray);
        pronounArray.pop();
        var sentence = "How old " + pronounArray[randomG].qv + " " + pronounArray[randomG].qp + "?";
        q2Array[0] = pronounArray[0].value.charAt(0).toUpperCase() + pronounArray[0].value.slice(1) + " " + pronounArray[0].verb + " " + q1Array[0].spelling + age;
        q2Array[1] = pronounArray[1].value.charAt(0).toUpperCase() + pronounArray[1].value.slice(1) + " " + pronounArray[1].verb + " " + q1Array[0].spelling + age;
        q2Array[2] = pronounArray[2].value.charAt(0).toUpperCase() + pronounArray[2].value.slice(1) + " " + pronounArray[2].verb + " " + q1Array[0].spelling + age;
        q2Array[3] = pronounArray[3].value.charAt(0).toUpperCase() + pronounArray[3].value.slice(1) + " " + pronounArray[3].verb + " " + q1Array[0].spelling + age;
        document.getElementById("grammarCheck").value = q2Array[randomG];
        document.getElementById("gPic").innerHTML = '';
        document.getElementById("g0r1d0").textContent = q2Array[0];
        document.getElementById("g0r1d2").textContent = q2Array[1];
        document.getElementById("g0r2d0").textContent = q2Array[2];
        document.getElementById("g0r2d2").textContent = q2Array[3];
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 1") {
        q1Array = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 1";
    } else if (userInput == "Unit 4") {
        pronounArray = ([{value: "I", verb: "am", qp: "you", qv: "are"}, {value: "you", verb: "are", qp: "I", qv: "am"}, {value: "he", verb: "is", qp: "he", qv: "is"}, {value: "she", verb: "is", qp: "she", qv: "is"}]);
        shuffleArray(pronounArray);
        answerArray = ["Yes, ", "No, "];
        shuffleArray(answerArray);
        feelingArray = [{value: "happy", pic:'<img src = "Level 1/images/happy.png" />'}, {value: "sad", pic:'<img src = "Level 1/images/sad.png" />'}, {value: "chubby", pic:'<img src = "Level 1/images/chubby.png" />'}, {value: "thin", pic:'<img src = "Level 1/images/thin.png" />'}, {value: "tall", pic:'<img src = "Level 1/images/tall.png" />'}, {value: "short", pic:'<img src = "Level 1/images/short.png" />'}, {value: "cute", pic:'<img src = "Level 1/images/cute.png" />'}, {value: "old", pic:'<img src = "Level 1/images/old.png" />'}, {value: "young", pic:'<img src = "Level 1/images/young.png" />'}];
        shuffleArray(feelingArray);
        var sentence = pronounArray[randomG].qv.charAt(0).toUpperCase() + pronounArray[randomG].qv.slice(1) + " " + pronounArray[randomG].qp + " " + feelingArray[0].value + "?";
        if (answerArray[0] == "Yes, ") {
            document.getElementById("grammarCheck").value = answerArray[0] + pronounArray[randomG].value + " " + pronounArray[randomG].verb + ".";
            document.getElementById("gPic").innerHTML = feelingArray[0].pic;
            document.getElementById("g0r1d0").textContent = answerArray[0] + pronounArray[0].value + " " + pronounArray[0].verb + ".";
            document.getElementById("g0r1d2").textContent = answerArray[0] + pronounArray[1].value + " " + pronounArray[1].verb + ".";
            document.getElementById("g0r2d0").textContent = answerArray[0] + pronounArray[2].value + " " + pronounArray[2].verb + ".";
            document.getElementById("g0r2d2").textContent = answerArray[0] + pronounArray[3].value + " " + pronounArray[3].verb + ".";
        } else {
            document.getElementById("grammarCheck").value = answerArray[0] + pronounArray[randomG].value + " " + pronounArray[randomG].verb + " not.";
            document.getElementById("gPic").innerHTML = feelingArray[1].pic;
            document.getElementById("g0r1d0").textContent = answerArray[0] + pronounArray[0].value + " " + pronounArray[0].verb + " not.";
            document.getElementById("g0r1d2").textContent = answerArray[0] + pronounArray[1].value + " " + pronounArray[1].verb + " not.";
            document.getElementById("g0r2d0").textContent = answerArray[0] + pronounArray[2].value + " " + pronounArray[2].verb + " not.";
            document.getElementById("g0r2d2").textContent = answerArray[0] + pronounArray[3].value + " " + pronounArray[3].verb + " not.";
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 5") {
        vocArray = [({voc:'pencil', article:'a', pic:'<img src = "Level 1/images/pencil.png" />'}), ({voc:'eraser', article:'an', pic:'<img src = "Level 1/images/eraser.png" />'}), ({voc:'ruler', article:'a', pic:'<img src = "Level 1/images/ruler.png" />'}), ({voc:'pen', article:'a', pic:'<img src = "Level 1/images/pen.png" />'}), ({voc:'desk', article:'a', pic:'<img src = "Level 1/images/desk.png" />'}), ({voc:'chair', article:'a', pic:'<img src = "Level 1/images/chair.png" />'}), ({voc:'school bag', article:'a', pic:'<img src = "Level 1/images/school bag.png" />'}), ({voc:'book', article:'a', pic:'<img src = "Level 1/images/book.png" />'}), ({voc:'pencil case', article:'a', pic:'<img src = "Level 1/images/pencil case.png" />'})];
        shuffleArray(vocArray);
        if (randomG >= 2){
            sentence = "What is it?";
            document.getElementById("grammarCheck").value = "It is " + vocArray[randomG].article + " " + vocArray[randomG].voc + ".";
            document.getElementById("gPic").innerHTML = vocArray[randomG].pic;
            document.getElementById("g0r1d0").textContent = "It is " + vocArray[0].article + " " + vocArray[0].voc + ".";
            document.getElementById("g0r1d2").textContent = "It is " + vocArray[1].article + " " + vocArray[1].voc + ".";
            document.getElementById("g0r2d0").textContent = "It is " + vocArray[2].article + " " + vocArray[2].voc + ".";
            document.getElementById("g0r2d2").textContent = "It is " + vocArray[3].article + " " + vocArray[3].voc + ".";
        } else {
            answerArray = ["Yes, ", "No, "];
            shuffleArray(answerArray);
            if (answerArray[0] == "Yes, ") {
                sentence = "Is it " + vocArray[randomG].article + " " + vocArray[randomG].voc + "?";
                document.getElementById("grammarCheck").value = answerArray[0] + "it is " + vocArray[randomG].article + " " + vocArray[randomG].voc + ".";
                document.getElementById("gPic").innerHTML = vocArray[randomG].pic;
                document.getElementById("g0r1d0").textContent = answerArray[0] + "it is " + vocArray[0].article + " " + vocArray[0].voc + ".";
                document.getElementById("g0r1d2").textContent = answerArray[0] + "it is " + vocArray[1].article + " " + vocArray[1].voc + ".";
                document.getElementById("g0r2d0").textContent = answerArray[0] + "it is " + vocArray[2].article + " " + vocArray[2].voc + ".";
                document.getElementById("g0r2d2").textContent = answerArray[0] + "it is " + vocArray[3].article + " " + vocArray[3].voc + ".";
            } else {
                sentence = "Is it " + vocArray[0].article + " " + vocArray[0].voc + "?";
                document.getElementById("grammarCheck").value = answerArray[0] + "it is not " + vocArray[0].article + " " + vocArray[0].voc + ".";
                document.getElementById("gPic").innerHTML = vocArray[1].pic;
                q2Array = [vocArray[0], vocArray[1], vocArray[2], vocArray[3]];
                shuffleArray(q2Array);
                document.getElementById("g0r1d0").textContent = answerArray[0] + "it is not " + q2Array[0].article + " " + q2Array[0].voc + ".";
                document.getElementById("g0r1d2").textContent = answerArray[0] + "it is not " + q2Array[1].article + " " + q2Array[1].voc + ".";
                document.getElementById("g0r2d0").textContent = answerArray[0] + "it is not " + q2Array[2].article + " " + q2Array[2].voc + ".";
                document.getElementById("g0r2d2").textContent = answerArray[0] + "it is not " + q2Array[3].article + " " + q2Array[3].voc + ".";
            }
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = ['<a href="http://scratch.mit.edu/projects/14219598/" target="_newtab">Scratch: B1U5 Grammar</a>'];
        grammarLesson = "";
    } else if (userInput == "Unit 6") {
        colorArray = [({voc:'red', pic:'<img src = "Level 1/images/red.png" />'}), ({voc:'yellow', pic:'<img src = "Level 1/images/yellow.png" />'}), ({voc:'green', pic:'<img src = "Level 1/images/green.png" />'}), ({voc:'blue', pic:'<img src = "Level 1/images/blue.png" />'}), ({voc:'pink', pic:'<img src = "Level 1/images/pink.png" />'}), ({voc:'black', pic:'<img src = "Level 1/images/black.png" />'}), ({voc:'white', pic:'<img src = "Level 1/images/white.png" />'}), ({voc:'brown', pic:'<img src = "Level 1/images/brown.png" />'}), ({voc:'orange', pic:'<img src = "Level 1/images/orange.png" />'}), ({voc:'purple', pic:'<img src = "Level 1/images/purple.png" />'})];
        shuffleArray(colorArray);
        vocArray = ["pencil", "eraser", "ruler", "pen", "desk", "chair", "school bag", "book", "pencil case"];
        shuffleArray(vocArray);
        if (randomG > 3){
            sentence = "What color is it?";
            document.getElementById("grammarCheck").value = "It is " + colorArray[randomG].voc + ".";
            document.getElementById("gPic").innerHTML = colorArray[randomG].pic;
            document.getElementById("g0r1d0").textContent = "It is " + colorArray[0].voc + ".";
            document.getElementById("g0r1d2").textContent = "It is " + colorArray[1].voc + ".";
            document.getElementById("g0r2d0").textContent = "It is " + colorArray[2].voc + ".";
            document.getElementById("g0r2d2").textContent = "It is " + colorArray[3].voc + ".";
        } else if (randomG < 2){
            answerArray = ["Yes, ", "No, "];
            shuffleArray(answerArray);
            if (answerArray[0] == "Yes, ") {
                sentence = "Is your " + vocArray[randomG] + " " + colorArray[randomG].voc + "?";
                document.getElementById("grammarCheck").value = answerArray[0] + "it is. It is " + colorArray[randomG].voc + ".";
                document.getElementById("gPic").innerHTML = colorArray[randomG].pic;
                document.getElementById("g0r1d0").textContent = answerArray[0] + "it is. It is " + colorArray[0].voc + ".";
                document.getElementById("g0r1d2").textContent = answerArray[0] + "it is. It is " + colorArray[1].voc + ".";
                document.getElementById("g0r2d0").textContent = answerArray[0] + "it is. It is " + colorArray[2].voc + ".";
                document.getElementById("g0r2d2").textContent = answerArray[0] + "it is. It is " + colorArray[3].voc + ".";
            } else {
                sentence = "Is your " + vocArray[randomG] + " " + colorArray[0].voc + "?";
                document.getElementById("grammarCheck").value = answerArray[0] + "it is not. It is " + colorArray[1].voc + ".";
                document.getElementById("gPic").innerHTML = colorArray[1].pic;
                q2Array = [vocArray[0], vocArray[1], vocArray[2], vocArray[3]];
                colorArray2 = [colorArray[0], colorArray[1], colorArray[2], colorArray[3]];
                shuffleArray(colorArray2);
                shuffleArray(q2Array);
                document.getElementById("g0r1d0").textContent = answerArray[0] + "it is not. It is " + colorArray2[0].voc + ".";
                document.getElementById("g0r1d2").textContent = answerArray[0] + "it is not. It is " + colorArray2[1].voc + ".";
                document.getElementById("g0r2d0").textContent = answerArray[0] + "it is not. It is " + colorArray2[2].voc + ".";
                document.getElementById("g0r2d2").textContent = answerArray[0] + "it is not. It is " + colorArray2[3].voc + ".";
            }
        } else {
            sentence = "What color is your " + vocArray[randomG] + "?";
            document.getElementById("grammarCheck").value = "My " + vocArray[randomG] + " is " + colorArray[randomG].voc + ".";
            document.getElementById("gPic").innerHTML = colorArray[randomG].pic;
            document.getElementById("g0r1d0").textContent = "My " + vocArray[randomG] + " is " + colorArray[0].voc + ".";
            document.getElementById("g0r1d2").textContent = "My " + vocArray[randomG] + " is " + colorArray[1].voc + ".";
            document.getElementById("g0r2d0").textContent = "My " + vocArray[randomG] + " is " + colorArray[2].voc + ".";
            document.getElementById("g0r2d2").textContent = "My " + vocArray[randomG] + " is " + colorArray[3].voc + ".";
        }
        setTimeout(function(){speak(sentence)}, 2000);
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
        q2Array = ["my ", "your ", "his ", "her ", "a "];
        shuffleArray(q2Array);
        if (q1Array[0] == "This is not " || q1Array[0] == "That is not "){
            sentence = q1Array[0] + q2Array[0] + vocArray[1].voc + ".";
            document.getElementById("g0r1d0").textContent = "This is not " + q2Array[0] + vocArray[1].voc + ".";
            document.getElementById("g0r1d2").textContent = "That is not " + q2Array[0] + vocArray[1].voc + ".";
            document.getElementById("g0r2d0").textContent = "This is " + q2Array[0] + vocArray[0].voc + ".";
            document.getElementById("g0r2d2").textContent = "That is " + q2Array[0] + vocArray[0].voc + ".";
        } else {
            sentence = q1Array[0] + q2Array[0] + vocArray[0].voc + ".";
            document.getElementById("g0r1d0").textContent = "This is not " + q2Array[0] + vocArray[1].voc + ".";
            document.getElementById("g0r1d2").textContent = "That is not " + q2Array[0] + vocArray[1].voc + ".";
            document.getElementById("g0r2d0").textContent = "This is " + q2Array[0] + vocArray[0].voc + ".";
            document.getElementById("g0r2d2").textContent = "That is " + q2Array[0] + vocArray[0].voc + ".";
        }
        document.getElementById("grammarCheck").value = sentence;
        document.getElementById("gPic").innerHTML = vocArray[0].pic;
        setTimeout(function(){speak(sentence)}, 2000);
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
            document.getElementById("g0r1d0").textContent = "It is a " + vocArray[0].voc + ".";
            document.getElementById("g0r1d2").textContent = "It is a " + vocArray[1].voc + ".";
            document.getElementById("g0r2d0").textContent = "It is a " + vocArray[2].voc + ".";
            document.getElementById("g0r2d2").textContent = "It is a " + vocArray[3].voc + ".";
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
                document.getElementById("g0r1d0").textContent = answerArray[0] + "it is. It is a " + vocArray[0].voc + ".";
                document.getElementById("g0r1d2").textContent = answerArray[0] + "it is. It is a " + vocArray[1].voc + ".";
                document.getElementById("g0r2d0").textContent = answerArray[0] + "it is. It is a " + vocArray[2].voc + ".";
                document.getElementById("g0r2d2").textContent = answerArray[0] + "it is. It is a " + vocArray[3].voc + ".";
            } else {
                if (randomG == 2)  {
                    sentence = "Is this a " + vocArray[4].voc + "?";
                } else {
                    sentence = "Is that a " + vocArray[4].voc + "?";
                }
                document.getElementById("grammarCheck").value = "No, it is not. It is a " + vocArray[randomG].voc + ".";
                document.getElementById("g0r1d0").textContent = answerArray[0] + "it is not. It is a " + vocArray[0].voc + ".";
                document.getElementById("g0r1d2").textContent = answerArray[0] + "it is not. It is a " + vocArray[1].voc + ".";
                document.getElementById("g0r2d0").textContent = answerArray[0] + "it is not. It is a " + vocArray[2].voc + ".";
                document.getElementById("g0r2d2").textContent = answerArray[0] + "it is not. It is a " + vocArray[3].voc + ".";
            }
        }
        setTimeout(function(){speak(sentence)}, 2000);
        gLinks = ['<a href="http://scratch.mit.edu/projects/15196988/" target="_newtab">Scratch: Animal Sounds</a>'];
        grammarLesson = "";
    } else if (userInput == "Unit 9") {
        vocArray = [({voc:'hungry', pic:'<img src="Level 1/images/hungry.png" />'}), ({voc:'thirsty', pic:'<img src="Level 1/images/thirsty.png" />'}), ({voc:'angry', pic:'<img src="Level 1/images/angry.png" />'}), ({voc:'lazy', pic:'<img src="Level 1/images/lazy.png" />'}), ({voc:'noisy', pic:'<img src="Level 1/images/noisy.png" />'}), ({voc:'quiet', pic:'<img src="Level 1/images/quiet.png" />'}), ({voc:'sleepy', pic:'<img src="Level 1/images/sleepy.png" />'}), ({voc:'tired', pic:'<img src="Level 1/images/tired.png" />'})];
        shuffleArray(vocArray);
        pronounArray = ([{qp: "you", ap: "we"}, {qp: "we", ap: "you"}, {qp: "they", ap: "they"}]);
        shuffleArray(pronounArray);
        document.getElementById("gPic").innerHTML = vocArray[randomG].pic;
        choiceArrayInt = 0;
        while(choiceArrayInt == 0) {choiceArrayInt = Math.floor(Math.random() * 3)};
        answerArray = ["Yes, ", "No, "];
        shuffleArray(answerArray);
        if (answerArray[0] == "Yes, ") {
            sentence = "Are " + pronounArray[choiceArrayInt].qp + " " + vocArray[randomG].voc + "?";
            document.getElementById("grammarCheck").value = answerArray[0] + pronounArray[choiceArrayInt].ap + " are.";
            document.getElementById("g0r1d0").textContent = answerArray[0] + pronounArray[0].ap + " are.";
            document.getElementById("g0r1d2").textContent = answerArray[0] + pronounArray[1].ap + " are.";
            document.getElementById("g0r2d0").textContent = answerArray[0] + pronounArray[2].ap + " are.";
            document.getElementById("g0r2d2").textContent = "              ";
        } else {
            sentence = "Are " + pronounArray[choiceArrayInt].qp + " " + vocArray[4].voc + "?";
            document.getElementById("grammarCheck").value = answerArray[0] + pronounArray[choiceArrayInt].ap + " are not.";
            document.getElementById("g0r1d0").textContent = answerArray[0] + pronounArray[0].ap + " are not.";
            document.getElementById("g0r1d2").textContent = answerArray[0] + pronounArray[1].ap + " are not.";
            document.getElementById("g0r2d0").textContent = answerArray[0] + pronounArray[2].ap + " are not.";
            document.getElementById("g0r2d2").textContent = "                 ";
        }
        setTimeout(function(){speak(sentence)}, 2000);
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
    document.getElementById("grammar_links").innerHTML = gLinks;
    document.getElementById("grammar_lesson").innerHTML = grammarLesson;
}