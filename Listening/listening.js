// check if service worker is supported
if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register("listening.js", {scope: '/Listening/' }).then(function(reg) {
    console.log('Successfully registered. Scope is ' + reg.scope);
    }).catch(function(error) {
        console.log('Registering failed ' + error);
    });
} else {
    console.log('Service worker can not be registered on this device');
}

const listening = {
    question1: "I bought a loaf of ",
    choiceA: "bread",
    choiceB: "jam",
    choiceC: "potatoes",
    answer1: "I bought a loaf of bread.",
    question2: "I bought six kilos of ",
    choiceD: "flour",
    choiceE: "milk",
    choiceF: "oil",
    answer2: "I bought six kilos of flour."
  };

function setContent() {
    document.getElementById("question1").textContent = listening.question1;
    document.getElementById("choiceA").textContent = listening.choiceA;
    document.getElementById("choiceB").textContent = listening.choiceB;
    document.getElementById("choiceC").textContent = listening.choiceC;
    document.getElementById("question2").textContent = listening.question2;
    document.getElementById("choiceD").textContent = listening.choiceD;
    document.getElementById("choiceE").textContent = listening.choiceE;
    document.getElementById("choiceF").textContent = listening.choiceF;
    
    // Get the element with id="defaultOpen" and click on it
    openTab(event, '聆聽');
}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function checkAnswer1() {
    document.getElementById("feedback1").textContent = listening.answer1;
}

function checkAnswer2() {
    document.getElementById("feedback2").textContent = listening.answer2;
}
