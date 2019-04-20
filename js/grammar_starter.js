function g_starter(userInput) {
    
    document.getElementById("gPic").innerHTML = "";
    sentenceArray = ["Hi, my name is Jack.", "Hello, my name is Annie.", "Nice to meet you.", "Raise your hand.", "Take out your book.", "Open your book.", "Put away your book.", 
        "Good morning.", "Good afternoon.", "Good evening.", "Good night.", "Goodbye.", "How are you?", "Come here.", "Go back.", "Turn around.", "Look at me.", 
        "What is your name?", "My name is Annie.", "Who is he?", "Who is she?", "Listen to me.", "Repeat after me.", "Point and say.", "Hold up your book.", 
        "What is it?", "May I borrow your pencil?", "May I drink some water?", "May I ask a question?", "May I go?", "Thank you.", "I know.", "I am done.", 
        "Sorry, I am late.", "Please help me.", "I am a boy.", "I am a girl.", "Let’s dance.", "Let’s sing.", "Let’s clap.", "Let’s go.", "Let’s line up.", "It’s my turn.", 
        "One more time.", "Teacher, choose me!", "Is this right?", "How do you feel today?", "I can do it.", "I don’t understand.", "Please say it again.", "I forgot my book."];
    if (userInput == "Unit 1") {
        sentenceArray = sentenceArray.slice(0,7);
    } else if (userInput == "Unit 2") {
        sentenceArray = sentenceArray.slice(7,17);
    } else if (userInput == "Unit 3") {
        sentenceArray = sentenceArray.slice(17,25);
    } else if (userInput == "Review 1") {
        sentenceArray = sentenceArray.slice(0,25);
    } else if (userInput == "Unit 4") {
        sentenceArray = sentenceArray.slice(25,30);
    } else if (userInput == "Unit 5") {
        sentenceArray = sentenceArray.slice(30,35);
    } else if (userInput == "Unit 6") {
        sentenceArray = sentenceArray.slice(35,46);
    } else if (userInput == "Review 2") {
        sentenceArray = sentenceArray.slice(25,46);
    } else if (userInput == "Unit 7") {
        sentenceArray = sentenceArray.slice(-5);
    } else if (userInput == "Unit 8") {
        sentenceArray = [""];
    } else if (userInput == "Unit 9") {
        sentenceArray = [""];
    } else if (userInput == "Review 3") {
        sentenceArray = [""];
    } else if (userInput == "Final Review") {
        sentenceArray = sentenceArray;
    } else {
        sentenceArray = [];
    }
    shuffleArray(sentenceArray);
    document.getElementById("g0r1d0").textContent = sentenceArray[0];
    document.getElementById("g0r1d2").textContent = sentenceArray[1];
    document.getElementById("g0r2d0").textContent = sentenceArray[2];
    document.getElementById("g0r2d2").textContent = sentenceArray[3];
    sentence = sentenceArray[randG()];
    document.getElementById("grammarCheck").value = sentence
    document.getElementById("grammar_links").innerHTML = ['<a href="http://www.eslgamesplus.com/verb-to-be-auxiliary-verb-am-is-are-esl-grammar-activity/" target="_newtab">ESL Games+: Be Verbs</a>'];
    document.getElementById("grammar_lesson").innerHTML = "";
    if (sentence){
        setTimeout(function(){speak(sentence)}, 2000);
    }
}