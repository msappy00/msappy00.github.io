function setGrammar(userInput){
     /* pos_tags */
    sentenceArray = [];
    sentence = "";
    PRPArray = [{PRP: "I", RESPONSE: "you"}, {PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"}, {PRP: "it", RESPONSE: "it"}, {PRP: "we", RESPONSE: "you"}]; // PRP: pronoun, personal
    PRPSArray = [{PRPS: "my", RESPONSE: "your"}, {PRPS: "your", RESPONSE: "my"}, {PRPS: "their", RESPONSE: "their"}, {PRPS: "his", RESPONSE: "his"}, {PRPS: "her", RESPONSE: "her"}, {PRPS: "its", RESPONSE: "its"}]; // PRPS: pronoun, possessive
    DETArray = ["a", "not", "this", "that", "an"]; // determiner
    NUMArray = [{TEXT: 'one', NUM:'1'}, {TEXT:'two', NUM:'2'}, {TEXT:'three', NUM:'3'}, {TEXT:'four', NUM:'4'}, {TEXT:'five', NUM:'5'}, {TEXT:'six', NUM:'6'}, {TEXT:'seven', NUM:'7'}, {TEXT:'eight', NUM:'8'}, {TEXT:'nine', NUM:'9'}, {TEXT:'ten', NUM:'10'}, {TEXT: 'eleven', NUM:'11'}, {TEXT:'twelve', NUM:'12'}, {TEXT:'thirteen', NUM:'13'}, {TEXT:'fourteen', NUM:'14'}, {TEXT:'fifteen', NUM:'15'}, {TEXT:'sixteen', NUM:'16'}, {TEXT:'seventeen', NUM:'17'}, {TEXT:'eighteen', NUM:'18'}, {TEXT:'nineteen', NUM:'19'}, {TEXT:'twenty', NUM:'20'}]; // NUM: numeral
    NOUNArray = []; // NN: noun, singular or mass; NNS: noun, plural; PROPN: proper noun
    UHArray = ["no", "yes"]; // interjection
    verbArray = []; // VB: verb, base form; VBP: verb, non-3rd person singular present; VBZ: verb, 3rd person singular present
    WPArray = ["who", "what"]; // wh-pronoun, personal
    WDTArray = ["what", "which"]; // wh-determiner

    // ADJECTIVES (ADJ)
    ADJArray = [];

    // IRREGULAR VERBS
    bakeVerb = {VB: "bake", VBZ: "bakes", VBD: "baked", PP: "baked"};
    beVerb = {VB: "be", VBPArray: ["am", "are"], VBZ: "is", VBDArray: ["was", "were"], PPArray: ["have been", "has been"]};
    blowVerb = {VB: "blow", VBZ: "blows", VBD: "blew", PP: "blown"};
    bringVerb = {VB: "bring", VBZ: "brings", VBD: "brought", PP: "brought"};
    buildVerb = {VB: "build", VBZ: "builds", VBD: "built", PP: "built"};
    buyVerb = {VB: "buy", VBZ: "buys", VBD: "bought", PP: "bought"};
    catchVerb = {VB: "catch", VBZ: "catches", VBD: "caught", PP: "caught"};
    chatVerb = {VB: "chat", VBZ: "chats", VBD: "chatted", PP: "chatted"};
    comeVerb = {VB: "come", VBZ: "comes", VBD: "came", PP: "come"};
    copyVerb = {VB: "copy", VBZ: "copies", VBD: "copied", PP: "copied"};
    cutVerb = {VB: "cut", VBZ: "cuts", VBD: "cut", PP: "cut"};
    doVerb = {VB: "do", VBZ: "does", VBD: "did", PP: "done"};
    drawVerb = {VB: "draw", VBZ: "draws", VBD: "drew", PP: "drawn"};
    driveVerb = {VB: "drive", VBZ: "drives", VBD: "drove", PP: "driven"};
    eatVerb = {VB: "eat", VBZ: "eats", VBD: "ate", PP: "eaten"};
    feedVerb = {VB: "feed", VBZ: "feeds", VBD: "fed", PP: "fed"};
    findVerb = {VB: "find", VBZ: "finds", VBD: "found", PP: "found"};
    fixVerb = {VB: "fix", VBZ: "fixes", VBD: "fixed", PP: "fixed"};
    fryVerb = {VB: "fry", VBZ: "fries", VBD: "fried", PP: "fried"};
    getVerb = {VB: "get", VBZ: "gets", VBD: "got", PP: "gotten"};
    goVerb = {VB: "go", VBZ: "goes", VBD: "went", PP: "gone"};
    giveVerb = {VB: "give", VBZ: "gives", VBD: "gave", PP: "given"};
    haveVerb = {VB: "have", VBZ: "has", VBD: "had", PP: "had"};
    leaveVerb = {VB: "leave", VBZ: "leaves", VBD: "left", PP: "left"};
    makeVerb = {VB: "make", VBZ: "makes", VBD: "made", PP: "made"};
    planVerb = {VB: "plan", VBZ: "plans", VBD: "planned", PP: "planned"};
    playVerb = {VB: "play", VBZ: "plays", VBD: "played", PP: "played"};
    putVerb = {VB: "put", VBZ: "puts", VBD: "put", PP: "put"};
    readVerb = {VB: "read", VBZ: "reads", VBD: "read", PP: "read"};
    rideVerb = {VB: "ride", VBZ: "rides", VBD: "rode", PP: "ridden"};
    ringVerb = {VB: "ring", VBZ: "rings", VBD: "rang", PP: "rang"};
    seeVerb = {VB: "see", VBZ: "sees", VBD: "saw", PP: "seen"};
    sendVerb = {VB: "send", VBZ: "sends", VBD: "sent", PP: "sent"};
    setVerb = {VB: "set", VBZ: "sets", VBD: "set", PP: "set"};
    shaveVerb = {VB: "shave", VBZ: "shaves", VBD: "shaved", PP: "shaved"};
    singVerb = {VB: "sing", VBZ: "sings", VBD: "sang", PP: "sang"};
    sitVerb = {VB: "sit", VBZ: "sit", VBD: "sat", PP: "sat"};
    stopVerb = {VB: "stop", VBZ: "stops", VBD: "stopped", PP: "stopped"};
    studyVerb = {VB: "study", VBZ: "studies", VBD: "studied", PP: "studied"};
    swimVerb = {VB: "swim", VBZ: "swims", VBD: "swam", PP: "swum"};
    takeVerb = {VB: "take", VBZ: "takes", VBD: "took", PP: "taken"};
    teachVerb = {VB: "teach", VBZ: "teaches", VBD: "taught", PP: "taught"};
    tryVerb = {VB: "try", VBZ: "tries", VBD: "tried", PP: "tried"};
    useVerb = {VB: "use", VBZ: "uses", VBD: "used", PP: "used"};
    wakeVerb = {VB: "wake", VBZ: "wakes", VBD: "woke", PP: "woken"};
    washVerb = {VB: "wash", VBZ: "washes", VBD: "washed", PP: "washed"};
    watchVerb = {VB: "watch", VBZ: "watches", VBD: "watched", PP: "watched"};
    writeVerb = {VB: "write", VBZ: "writes", VBD: "wrote", PP: "written"};

    // ADVERBS
    ADVArray = [];

    currentUnit = userInput;
    gLinks = [];    
    level_id = sessionStorage.getItem("sessionLevel");
    
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
    document.getElementById("altText").textContent = "";
    document.getElementById("gPic").src = "";
    
    if (level_id == "Starter") {
        g_starter(userInput);
    } else if (level_id == "Level 1") {
        g_01(userInput);
    } else if (level_id == "Level 2") {
        g_02(userInput);
    } else if (level_id == "Level 3") {
        g_03(userInput);
    } else if (level_id == "Level 4") {
        g_04(userInput);
    } else if (level_id == "Level 5") {
        g_05(userInput);
    } else if (level_id == "Level 6") {
        g_06(userInput);
    } else if (level_id == "Level 7") {
        g_07(userInput);
    } else {
        document.getElementById("gInstructions").innerHTML = "<h1>Work in Progress</h1>";
        document.getElementById("grammarCheck").value = "";
        document.getElementById("request").value = " ";
        gLinks = [''];
        grammarLesson = "";
    }
};
