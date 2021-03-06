var level_id = "";
var currentUnit = "";
var array_i = 0;
var pArray_i = 0;
var qArray_i = 0;
var success = new Audio('/audio/success.mp3');
var fail = new Audio('/audio/fail.mp3');

// Randomize array element order in-place
// Using Durstenfeld Shuffle algorithm:
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

// a random number used extensively in grammar_**.js
function randG(max) { return Math.floor(Math.random() * max) };

// sessionLevel are levels starter - 12
function checkSessionStorage() {
    if (sessionStorage.getItem("sessionLevel") === null) {
        document.title = "Teacher Matthew"
    }
    else {
        level = sessionStorage.getItem("sessionLevel");
        setLevel(level);
    }
};

function setLevel(level) {
    sessionStorage.setItem("sessionLevel", level);
    level_id = level;
    if (level_id != null) {
      document.title = level_id;  
    }
};

function clearLevel() {
    document.title = "Teacher Matthew";
    sessionStorage.setItem("sessionLevel", "");
    sessionStorage.setItem("sessionUnit", "");
    level_id = " ";
    currentUnit = "";
    setVocab(currentUnit);
    setGrammar(currentUnit);
    setPhonics(currentUnit);
    setCss('home', '');
};

// sets unit from dropdown menu
function setCss(tabName, userInput) {
    var i;
    var x = document.getElementsByClassName("tab-pane");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    switch (tabName) {
        case 'vocab_tab':
            setVocab(userInput);
            break;
        case 'grammar_tab':
            setGrammar(userInput);
            break;
        case 'phonics_tab':
            setPhonics(userInput);
            break;
        default:
            break;
    }
};

// opens a new tab for quiz page
function setVQ(userInput) {
    sessionStorage.setItem("sessionUnit", userInput);
    window.open("vocab_quiz.html", "_blank");
};

// plays the audio for vobab, grammar or phonics
function playVoc(voc){
    var file = new Audio(level_id+'/audio/'+voc+'.mp3');
    file.play();
}

function playPhonics(voc){
    var file = new Audio('phonics/'+voc+'.mp3');
    file.play();
}

// speaks vocab, grammar or phonics
function speak(text, callback) {
    var u = new SpeechSynthesisUtterance();
    u.text = text;
    u.rate = 0.6;
    u.lang = 'en-US';

    u.onend = function () {
        if (callback) {
            callback();
        }
    };

    u.onerror = function (e) {
        if (callback) {
            callback(e);
        }
    };

    speechSynthesis.speak(u);
};

// checks vocab input from user
function vArraySlide() {
    document.getElementById("vNext").setAttribute("disabled", "disabled");
    if (spellCheck.value == spellCheck.pattern || mSpellCheck.value == mSpellCheck.pattern) {
        success.play();
        document.getElementById("spellCheck").style.backgroundColor = "lightgreen";
        document.getElementById("mSpellCheck").style.backgroundColor = "lightgreen";
        document.getElementById("spellCheck").placeholder = "Correct!";
        document.getElementById("mSpellCheck").placeholder = "Correct!";
        document.getElementById("currentWord").innerHTML = "";
        mSpellCheck.value = "";
        spellCheck.value = "";
        array_i++;
        if (array_i == (array.length - 1)) {
            document.getElementById("vNext").textContent = "AGAIN";
            if (level_id == "Starter") {
                document.getElementById("spellCheck").value = "f";
                document.getElementById("mSpellCheck").value = "f";
            } else {
                document.getElementById("spellCheck").value = "finished";
                document.getElementById("mSpellCheck").value = "finished";
            }
        } else if (array_i > (array.length - 1)) {
            document.getElementById("vNext").textContent = "NEXT";
            document.getElementById("spellCheck").value = "";
            document.getElementById("mSpellCheck").value = "";
            array_i = 0;
            shuffleArray(array);
        } else {
            document.getElementById("vNext").textContent = "NEXT";
            document.getElementById("spellCheck").value = "";
            document.getElementById("mSpellCheck").value = "";
        }
        if (array_i == (array.length - 1)) {
            document.getElementById("vocProg").value = 100;
        } else {
            document.getElementById("vocProg").value = array_i / array.length * 100;
        }
        if (level_id == "Level 9" || level_id == "Level 10" || level_id == "Level 11" || level_id == "Level 12") {
            document.getElementById("current_vocab").src = 'images/blank.png';
        }
        else document.getElementById("current_vocab").src = level_id + '/images/' + array[array_i] + '.png';
        if (level_id == "Starter") {
            document.getElementById("currentWord").innerHTML = '<table align="center"><tr><td align="right" style="font-size:xx-large; color:red">' + array[array_i].slice(0, 1) + '</td><td align="right" style="font-size:xx-large; color:black">' + array[array_i].slice(1) + '</td></tr></table>';
            spellCheck.pattern = array[array_i].slice(0, 1);
            mSpellCheck.pattern = array[array_i].slice(0, 1);
        } else {
            spellCheck.pattern = array[array_i];
            mSpellCheck.pattern = array[array_i];
        }
    } else {
        fail.play();
        document.getElementById("spellCheck").style.backgroundColor = "lightpink";
        document.getElementById("mSpellCheck").style.backgroundColor = "lightpink";
        document.getElementById("spellCheck").placeholder = "Oops!";
        document.getElementById("mSpellCheck").placeholder = "Oops!"
    }
    setTimeout(function () {
        var tempVoc = new Audio(level_id+'/audio/'+array[array_i]+'.mp3');
        tempVoc.play();
        document.getElementById("spellCheck").style.backgroundColor = "white";
        document.getElementById("mSpellCheck").style.backgroundColor = "white";
        document.getElementById("spellCheck").placeholder = "Spell It!";
        document.getElementById("mSpellCheck").placeholder = "Spell It!";
    }, 2000);
    setTimeout(function () {
        document.getElementById("vNext").removeAttribute("disabled");
    }, 2000);
    spellCheck.focus();
};

// checks grammar input from user
function gArraySlide(tdId) {
    document.getElementById('g0r1d0').onclick = ''
    document.getElementById('g0r1d2').onclick = ''
    document.getElementById('g0r2d0').onclick = ''
    document.getElementById('g0r2d2').onclick = ''
    if (grammarCheck.value != document.getElementById(tdId).textContent) {
        fail.play();
        setTimeout(function () {
            speak(sentence);
        }, 2000);
    } else {
        success.play();
        setTimeout(function () {
            setGrammar(currentUnit);
        }, 2000);
    }
    setTimeout(function () {
        document.getElementById('g0r1d0').onclick = function () { gArraySlide('g0r1d0') }
        document.getElementById('g0r1d2').onclick = function () { gArraySlide('g0r1d2') }
        document.getElementById('g0r2d0').onclick = function () { gArraySlide('g0r2d0') }
        document.getElementById('g0r2d2').onclick = function () { gArraySlide('g0r2d2') }
    }, 4000);
};

// checks phonics input from user
function pArraySlide() {
    document.getElementById("pNext").setAttribute("disabled", "disabled");
    if (phonicsCheck.value.toLowerCase() == phonicsCheck.pattern || mPhonicsCheck.value.toLowerCase() == mPhonicsCheck.pattern) {
        success.play();
        document.getElementById("phonicsCheck").style.backgroundColor = "lightgreen";
        document.getElementById("phonicsCheck").style.borderColor = "green";
        document.getElementById("mPhonicsCheck").style.backgroundColor = "lightgreen";
        document.getElementById("mPhonicsCheck").style.borderColor = "green";
        phonicsCheck.value = "";
        mPhonicsCheck.value = "";
        pArray_i++;
        if (pArray_i > (pArray.length - 1)) {
            pArray_i = 0;
        }
        document.getElementById("phonProg").value = pArray_i / pArray.length * 100;
        phonicsCheck.pattern = pArray[pArray_i].pattern;
        mPhonicsCheck.pattern = pArray[pArray_i].pattern;
    } else {
        fail.play();
        document.getElementById("phonicsCheck").style.backgroundColor = "lightpink";
        document.getElementById("phonicsCheck").style.borderColor = "red";
        document.getElementById("mPhonicsCheck").style.backgroundColor = "lightpink";
        document.getElementById("mPhonicsCheck").style.borderColor = "red";
        phonicsCheck.value = "";
        mPhonicsCheck.value = "";
    }
    setTimeout(function () {
        tempPhonics = new Audio('phonics/'+pArray[pArray_i].value+'.mp3');
        tempPhonics.play();
        document.getElementById("phonicsCheck").style.backgroundColor = "white";
        document.getElementById("phonicsCheck").style.borderColor = "gray";
        document.getElementById("mPhonicsCheck").style.backgroundColor = "white";
        document.getElementById("mPhonicsCheck").style.borderColor = "gray";
    }, 2000);
    setTimeout(function () {
        document.getElementById("pNext").removeAttribute("disabled");
    }, 2000);
    phonicsCheck.focus();
};

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

function pluralize(NUM) {
    if (NUM == "one") {
        NOUN = NOUNArray[0].NN;
    } else {
        NOUN = NOUNArray[0].NNS;
    }
    return NOUN;
};

function conjugate_VB(PRP, Verb) {
    if (Verb == "beVerb") {
        if (PRP == 'I') { VERB = beVerb.VBPArray[0] }
        else if (PRP == 'you' || PRP == 'they' || PRP == 'we') { VERB = beVerb.VBPArray[1] }
        else { VERB = beVerb.VBZ }
    } else if (typeof window[Verb] === 'undefined' || window[Verb] === null) {
        if (PRP == 'I' || PRP == 'you' || PRP == 'they' || PRP == 'we') {
            VERB = Verb.slice(0, -4);
        }
        else {
            VERB = Verb.slice(0, -4);
            if (VERB.slice(-1) == "y") {
                VERB = VERB.slice(0, -1);
                VERB = VERB + "ies";
            } else {
                VERB = VERB + 's'
            }
        }
    } else {
        if (PRP == 'I' || PRP == 'you' || PRP == 'they' || PRP == 'we') { VERB = window[Verb].VB }
        else { VERB = window[Verb].VBZ }
    }
    return VERB;
};

function conjugate_VBD(PRP, Verb) {
    if (Verb == "beVerb") {
        if (PRP == 'I' || PRP == 'he' || PRP == 'she') { VERB = beVerb.VBDArray[0] }
        else { VERB = beVerb.VBDArray[1] }
    } else if (typeof window[Verb] === 'undefined' || window[Verb] === null) {
        if (PRP == 'I' || PRP == 'you' || PRP == 'they' || PRP == 'we') {
            VERB = Verb.slice(0, -4) + "ed";
        }
    } else {
        VERB = window[Verb].VBD;
    }
    return VERB;
};

function setDET(NOUNPHRASE) { // adapted from https://github.com/EamonNerbonne/a-vs-an/blob/master/A-vs-An/AvsAn-JsDemo/AvsAn.js
    // Getting the first word 
    var match = /\w+/.exec(NOUNPHRASE);
    if (match)
        var NOUN = match[0];
    else
        return "an";
    NOUN.toLowerCase();
    // Specific start of words that should be preceeded by 'an'
    var alt_cases = ["honest", "hour", "hono"];
    for (var i in alt_cases) {
        if (NOUN.indexOf(alt_cases[i]) == 0)
            return "an";
    }
    // Single letter word which should be preceeded by 'an'
    if (NOUN.length == 1) {
        if ("aedhilmnorsx".indexOf(NOUN) >= 0)
            return "an";
        else
            return "a";
    }
    // Capital words which should likely be preceeded by 'an'
    if (NOUN.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/)) {
        return "an";
    }
    // Special cases where a word that begins with a vowel should be preceeded by 'a'
    regexes = [/^e[uw]/, /^onc?e\b/, /^uni([^nmd]|mo)/, /^u[bcfhjkqrst][aeiou]/]
    for (var i in regexes) {
        if (NOUN.match(regexes[i]))
            return "a"
    }
    // Special capital words (UK, UN)
    if (NOUN.match(/^U[NK][AIEO]/)) {
        return "a";
    }
    else if (NOUN == NOUN.toUpperCase()) {
        if ("aedhilmnorsx".indexOf(NOUN[0]) >= 0)
            return "an";
        else
            return "a";
    }
    // Basic method of words that begin with a vowel being preceeded by 'an'
    if ("aeiou".indexOf(NOUN[0]) >= 0)
        return "an";
    // Instances where y follwed by specific letters is preceeded by 'an'
    if (NOUN.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/))
        return "an";
    return "a";
};