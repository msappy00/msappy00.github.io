function setGrammar(userInput){
     /* pos_tags */
    sentenceArray = [];
    sentence = "";
    PRPArray = [{PRP: "I", RESPONSE: "you"}, {PRP: "you", RESPONSE: "I"}, {PRP: "they", RESPONSE: "they"}, {PRP: "he", RESPONSE: "he"}, {PRP: "she", RESPONSE: "she"},
        {PRP: "it", RESPONSE: "it"}, {PRP: "we", RESPONSE: "you"}]; // PRP: pronoun, personal
    PRPSArray = [{PRPS: "my", RESPONSE: "your"}, {PRPS: "your", RESPONSE: "my"}, {PRPS: "their", RESPONSE: "their"}, {PRPS: "his", RESPONSE: "his"}, 
    {PRPS: "her", RESPONSE: "her"}, {PRPS: "its", RESPONSE: "its"}]; // PRPS: pronoun, possessive
    DETArray = ["a", "not", "this", "that", "an"]; // determiner
    NUMArray = [{NUM: "1", TEXT: "one"}, {NUM: "2", TEXT: "two"}, {NUM: "3", TEXT: "three"}, {NUM: "4", TEXT: "four"}, {NUM: "5", TEXT: "five"}, 
    {NUM: "6", TEXT: "six"}, {NUM: "7", TEXT: "seven"}, {NUM: "8", TEXT: "eight"}, {NUM: "9", TEXT: "nine"}, {NUM: "10", TEXT: "ten"}]; // NUM: numeral
    NOUNArray = []; // NN: noun, singular or mass; NNS: noun, plural; PROPN: proper noun
    UHArray = ["no", "yes"]; // interjection
    verbArray = []; // VB: verb, base form; VBP: verb, non-3rd person singular present; VBZ: verb, 3rd person singular present
    WPArray = ["who", "what"]; // wh-pronoun, personal
    WDTArray = ["what", "which"]; // wh-determiner
    PUNCTArray = [".", "?", ","];

    // ADJECTIVES (ADJ)
    ADJArray = [];

    // VERBS
    beVerb = {VB: "be", VBPArray: ["am", "are"], VBZ: "is"};

    // ADVERBS
    ADVArray = [];

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
    
    if (level_id == "Starter") {
        g_starter(userInput);
}
    else if (level_id == "Level 1") {
        g_01(userInput);
    }
    // else if (level_id == "Level 2") {
    else {
        //g_02(userInput);
        document.getElementById("gInstructions").innerHTML = "<h1>Work in Progress</h1>";
        document.getElementById("grammarCheck").value = "";
        document.getElementById("request").value = " ";
        gLinks = [''];
        grammarLesson = "";
    }
};
