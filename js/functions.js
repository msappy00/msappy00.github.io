var bookNumber;
var className = "";
var level_id = "";
var blank = {displayName: '', correct: 0, attempted: 0};
var classList = [blank, blank, blank, blank, blank, blank];
var currentUnit = "";
var array_i = 0;
var cArray_i = 0;
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

function setClass(classN) {
    sessionStorage.setItem("className", classN);
    document.getElementById("className").textContent = classN;
    className = classN;
    classList = [blank, blank, blank, blank, blank, blank];
    document.getElementById("Ss1").textContent = classList[0].displayName;
    document.getElementById("Ss2").textContent = classList[1].displayName;
    document.getElementById("Ss3").textContent = classList[2].displayName;
    document.getElementById("Ss4").textContent = classList[3].displayName;
    document.getElementById("Ss5").textContent = classList[4].displayName;
    document.getElementById("Ss6").textContent = classList[5].displayName;
    var jsData = JSON.stringify(classList);
    window.sessionStorage.setItem("classList", jsData);
    for (student in classList) {
        sNum = Number(student) + 1;
        if (classList[student].displayName != ''){
            document.getElementById("SR"+sNum+"-btn").innerHTML = '<input class="w3-check" type="checkbox" checked id="SR'+sNum+'">';
            if (classList[student].attempted){
                var score = classList[student].correct / classList[student].attempted * 100;
                score = Math.round(score);
                document.getElementById("SP"+sNum).textContent = score+"%";
            }
        } else {
            document.getElementById("SR"+sNum+"-btn").innerHTML = '';
            document.getElementById("SP"+sNum).textContent = "";
        }
    }
    cArray_i = 0;
    document.getElementById("displayName").textContent = classList[cArray_i].displayName;
};

function clearClass() {
    classList = [];
    sessionStorage.setItem("className", "");
    document.getElementById("className").textContent = "";
    setClass("");
};
function setLevel(level) {
    sessionStorage.setItem("sessionLevel", level);
    level_id = level;
    levelId.textContent = level;
    currentUnit = "";
    setVocab('');
    setGrammar('');
    setQuiz('');
};

function clearLevel() {
    sessionStorage.setItem("sessionLevel", "");
    level_id = " ";
    levelId.textContent = " ";
    currentUnit = "";
    setVocab(currentUnit);
    setGrammar(currentUnit);
    setQuiz(currentUnit);
};

function checkSessionStorage() {
    levelId.textContent = sessionStorage.getItem("sessionLevel");
    setLevel(levelId.textContent);
    if (sessionStorage.getItem("className")){
        className = sessionStorage.getItem("className");
    }
    document.getElementById("className").textContent = className;
    if (sessionStorage.getItem("classList")) {
        var jsData = window.sessionStorage.getItem("classList");
        classList = JSON.parse(jsData);
        document.getElementById("Ss1").textContent = classList[0].displayName;
        document.getElementById("Ss2").textContent = classList[1].displayName;
        document.getElementById("Ss3").textContent = classList[2].displayName;
        document.getElementById("Ss4").textContent = classList[3].displayName;
        document.getElementById("Ss5").textContent = classList[4].displayName;
        document.getElementById("Ss6").textContent = classList[5].displayName;
        for (student in classList) {
            sNum = Number(student) + 1;
            if (classList[student].displayName != ''){
                document.getElementById("SR"+sNum+"-btn").innerHTML = '<input class="w3-check" type="checkbox" checked id="SR'+sNum+'">';
                if (classList[student].attempted){
                    var score = classList[student].correct / classList[student].attempted * 100;
                    score = Math.round(score);
                    document.getElementById("SP"+sNum).textContent = score+"%";
                }
            } else {
                document.getElementById("SR"+sNum+"-btn").innerHTML = '';
                document.getElementById("SP"+sNum).textContent = "";
            }
        }
    }
    else {
        classList = [blank, blank, blank, blank, blank, blank];
    }
    cArray_i = 0;
    document.getElementById("displayName").textContent = classList[cArray_i].displayName;
    //readUserData("Ss1");
};
// say a message
function speak(text, callback) {
    var u = new SpeechSynthesisUtterance();
    u.text = text;
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
function vArraySlide() {
    sNum = cArray_i + 1;
    sName = classList[cArray_i];
    if (spellCheck.value != spellCheck.pattern){
        if (!classList[cArray_i].correct){
            classList[cArray_i].correct = 10;
        }
        fail.play();
        document.getElementById("spellCheck").style.backgroundColor = "lightpink";
        document.getElementById("spellCheck").placeholder = "Oops!";
    } else {
        success.play();
        document.getElementById("spellCheck").style.backgroundColor = "lightgreen";
        document.getElementById("spellCheck").placeholder = "Correct!";
        if (classList[cArray_i].correct){
            classList[cArray_i].correct += 1;
        } else {
            classList[cArray_i].correct = 11;
        }
        spellCheck.value = "";
        array_i++;
        if (array_i > (array.length - 1)) {
            array_i = 0;
            shuffleArray(array);
        }
        document.getElementById("vocProg").value = array_i/array.length*100;
        if (level_id == "Level 9" || level_id == "Level 10" || level_id == "Level 11" || level_id == "Level 12") {
            document.getElementById("current_vocab").innerHTML = '<button class="w3-button w3-white w3-round" onClick="vArraySlide()" class="w3-image">NEXT</button>';
        }
        else document.getElementById("current_vocab").innerHTML =  '<img src="'+level_id+'/images/'+array[array_i]+'.png" onClick="vArraySlide()" class="w3-image" />';
        if (level_id == "Starter") {
            currentWord.innerHTML = '<table align="center"><tr><td align="right" style="font-size:xx-large; color:red">'+array[array_i].slice(0,1)+'</td><td align="right" style="font-size:xx-large; color:black">'+array[array_i].slice(1)+'</td></tr></table>';
            spellCheck.pattern = array[array_i].slice(0,1);
        } else {
            spellCheck.pattern = array[array_i];
        }
        setTimeout(function(){
                    speak(array[array_i]);
                    document.getElementById("spellCheck").style.backgroundColor = "white";
                    document.getElementById("spellCheck").placeholder = "Spell It!";
                    }, 2000);
        //vocabAudio.innerHTML = '<audio controls autoplay><source src="'+level_id+'/audio/'+array[array_i]+'.mp3" type="audio/mp3" /></audio>';
        spellCheck.focus();
    }
    scoreChange();
    cArraySlide();
    //writeUserData("Ss1", PNow);
};

function gArraySlide(tdId) {
    sNum = cArray_i + 1;
    var score = classList[cArray_i].score;
    if (grammarCheck.value != document.getElementById(tdId).textContent){
        if (!classList[cArray_i].correct){
            classList[cArray_i].correct = 10;
        }
        fail.play();
        setTimeout(function(){speak(grammarCheck.value);
                    }, 1000);
    } else {
        success.play();
        if (classList[cArray_i].correct){
            classList[cArray_i].correct += 1;
        } else {
            classList[cArray_i].correct = 11;
        }
        setGrammar(currentUnit);
    }
    scoreChange();
    cArraySlide();
};
function pArraySlide() {
    sNum = cArray_i + 1;
    var score = classList[cArray_i].score;
    if (phonicsCheck.value != phonicsCheck.pattern) {
        if (!classList[cArray_i].correct){
            classList[cArray_i].correct = 10;
        }
        fail.play();
        document.getElementById("phonicsCheck").style.backgroundColor = "lightpink";
    }
    else {
        phonicsCheck.value = "";
        success.play();
        document.getElementById("phonicsCheck").style.backgroundColor = "lightgreen";
        if (classList[cArray_i].correct){
            classList[cArray_i].correct += 1;
        } else {
            classList[cArray_i].correct = 11;
        }
        pArray_i++;
        if (pArray_i > (pArray.length - 1)) {
            pArray_i = 0;
        }
        phonicsCheck.pattern = pArray[pArray_i].pattern;
        
    }
    setTimeout(function(){
        phonicsAudio.innerHTML = '<audio controls autoplay><source src="phonics/'+pArray[pArray_i].value+'.mp3" type="audio/mp3" /></audio>';
        document.getElementById("phonicsCheck").style.backgroundColor = "white";
        phonicsCheck.value = "";
    }, 2000);
    phonicsCheck.focus();
    scoreChange();
    cArraySlide();
};
function scoreChange() {
    if (classList[cArray_i].displayName != ''){
        sNum = cArray_i + 1;
        if (classList[cArray_i].attempted){
            classList[cArray_i].attempted += 1;
        } else {
            classList[cArray_i].attempted = 11;
        }
        score = classList[cArray_i].correct / classList[cArray_i].attempted * 100;
        score = Math.round(score);
        document.getElementById("SP"+sNum).textContent = score+"%";
        var jsData = JSON.stringify(classList);
        window.sessionStorage.setItem("classList", jsData);
    }
};
function cArraySlide() {
    if (className != "") {
        cArray_i += 1;
        if (cArray_i > 5) {
            cArray_i = 0;
        }
        if (classList[cArray_i].displayName != "") {
            if (document.getElementById("SR" + (cArray_i + 1)).checked) {
                document.getElementById("displayName").textContent = classList[cArray_i].displayName;
            } else {
                cArraySlide();
            }
        } else {
            cArray_i = 5;
            cArraySlide();
        }
    }
};

function checkGrammar2(qInt, x, y) {
    if (x == y) {
        document.getElementById("grammarButton"+qInt).style.border = "4px solid black";
        document.getElementById("grammarButton"+qInt).style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("grammarButton"+qInt).style.textDecoration = "line-through";
    }
};
function showGrammar() {
    document.getElementById("g0r3d0").innerHTML = '<h3>'+sampleAnswer+'</h3>';
};

function showGrammar1() {
    document.getElementById("g0r2d0").innerHTML = '<h3>'+sampleAnswer1+'</h3>';
};
function showGrammar2() {
    document.getElementById("g0r5d0").innerHTML = '<h3>'+sampleAnswer2+'</h3>';
};
function setCss(tabName, userInput){
    var i;
    var x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    switch (tabName){
        case 'home':
            clearLevel();
            break;
        case 'vocab_tab':
            setVocab(userInput);
            break;
        case 'grammar_tab':
            setGrammar(userInput);
            break;
        case 'phonics_tab':
            setPhonics(userInput);
            break;
        case 'quizMaker_tab':
            setQuiz(userInput);
            break;
        default:
            break;
    }
};

    /**
     * Handles the sign in button press.
     */
function toggleSignIn() {
    if (firebase.auth().currentUser) {
        // [START signout]
        document.getElementById("sign-in-btn").innerHTML = "Login";
        firebase.auth().signOut();
        // [END signout]
    } else {
        document.getElementById('id01').style.display='block';
    }
};

function SignIn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Sign in with email and pass.
    // [START authwithemail]
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
        } else {
        alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
        });
        // [END authwithemail]
        document.getElementById('id01').style.display='none';
};


function sendPasswordReset() {
    var email = document.getElementById('email').value;
    // [START sendpasswordemail]
    firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
        }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode == 'auth/invalid-email') {
                alert(errorMessage);
                } else if (errorCode == 'auth/user-not-found') {
                alert(errorMessage);
                }
                console.log(error);
                // [END_EXCLUDE]
                });
                // [END sendpasswordemail];
};
function readUserData(sName) {
return firebase.database().ref("/" + sName).once("value").then(function(snapshot) {
                                                                    var PrevL = (snapshot.val().PLearned);
                                                                    document.getElementById('readData').textContent = PrevL;
                                                                    })
};
function writeUserData(sName, PLearned) {
    var userId = firebase.auth().currentUser;
    var usersRef = firebase.database().ref("/" + sName).set({
                                                            PLearned: PLearned
    });
    document.getElementById('readData').textContent = PLearned;
};

initApp = function() {
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;
        user.getIdToken().then(function(accessToken) {
            document.getElementById('sign-in-btn').textContent = 'Logout';});
    } else {
        // User is signed out.
        document.getElementById('sign-in-btn').textContent = 'Login';
    }
    }, function(error) {console.log(error);});
};

//window.addEventListener('load', function() {
    //initApp()
//});

function aniDrop() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}