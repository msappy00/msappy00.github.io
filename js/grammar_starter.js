function g_starter(userInput) {
    q1Array = ["Hi, my name is Jack.", "Hello, my name is Annie.", "Nice to meet you.", "Raise your hand.", "Take out your book.", "Open your book.", "Put away your book.", "Good morning.", "Good afternoon.", "Good evening.", "Good night.", "Goodbye.", "How are you?", "Come here.", "Go back.", "Turn around.", "Look at me.", "What is your name?", "My name is Annie.", "Who is he?", "Who is she?", "Listen to me.", "Repeat after me.", "Point and say.", "Hold up your book.", "What is it?", "May I borrow your pencil?", "May I drink some water?", "May I ask a question?", "May I go?", "Thank you.", "I know.", "I am done.", "Sorry, I am late.", "Please help me.", "I am a boy.", "I am a girl.", "Let’s dance.", "Let’s sing.", "Let’s clap.", "Let’s go.", "Let’s line up.", "It’s my turn.", "One more time.", "Teacher, choose me!", "Is this right?", "How do you feel today?", "I can do it.", "I don’t understand.", "Please say it again.", "I forgot my book."];
    gLinks = [];
    grammarLesson = "";
    if (userInput == "Unit 1") {
        q1Array = q1Array.slice(0,7);
    } else if (userInput == "Unit 2") {
        q1Array = q1Array.slice(7,17);
    } else if (userInput == "Unit 3") {
        q1Array = q1Array.slice(17,25);
    } else if (userInput == "Review 1") {
        q1Array = q1Array.slice(0,25);
    } else if (userInput == "Unit 4") {
        q1Array = q1Array.slice(25,30);
    } else if (userInput == "Unit 5") {
        q1Array = q1Array.slice(30,35);
    } else if (userInput == "Unit 6") {
        q1Array = q1Array.slice(35,46);
    } else if (userInput == "Review 2") {
        q1Array = q1Array.slice(25,46);
    } else if (userInput == "Unit 7") {
        q1Array = q1Array.slice(-5);
    } else if (userInput == "Unit 8") {
        q1Array = [""];
    } else if (userInput == "Unit 9") {
        q1Array = [""];
    } else if (userInput == "Review 3") {
        q1Array = [""];
    } else if (userInput == "Final Review") {
        q1Array = q1Array;
    } else {
        q1Array = [];
    }
    shuffleArray(q1Array);
    document.getElementById("g0r1d0").textContent = q1Array[0];
    document.getElementById("g0r1d2").textContent = q1Array[1];
    document.getElementById("g0r2d0").textContent = q1Array[2];
    document.getElementById("g0r2d2").textContent = q1Array[3];
    document.getElementById("grammarCheck").value = q1Array[randomG];
    document.getElementById("grammar_links").innerHTML = ['<a href="http://www.eslgamesplus.com/verb-to-be-auxiliary-verb-am-is-are-esl-grammar-activity/" target="_newtab">ESL Games+: Be Verbs</a>'];
    document.getElementById("grammar_lesson").innerHTML = grammarLesson;
    if (q1Array[randomG]){
        setTimeout(function(){speak(q1Array[randomG])}, 2000);
    }
}