// check if service worker is supported
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("listening.js")
        .then((reg) => console.log('service worker registered', reg))
        .catch((err) => console.log('service worker not registered', err))
}

const listening = {
    question1: "With great ______ comes great responsibility.",
    choiceA: " power",
    choiceB: " hour",
    choiceC: " people",
    answer1: "With great power comes great responsibility.",
    question2: "Who is he?",
    choiceD: " He is Ironman.",
    choiceE: " He is Spider-man.",
    choiceF: " He is Wonder Woman.",
    answer2: "He is Spider-man."
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
    document.getElementById("A").style.background = "lightgreen";
}

function checkAnswer2() {
    document.getElementById("feedback2").textContent = listening.answer2;
    document.getElementById("E").style.background = "lightgreen";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();