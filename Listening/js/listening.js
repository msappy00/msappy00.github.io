// check if service worker is supported
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("listening.js")
        .then((reg) => console.log('service worker registered', reg))
        .catch((err) => console.log('service worker not registered', err))
}

const listening = {
    question1: "Gorbachev was the leader of the _____.",
    choiceA: " USSR",
    choiceB: " USA",
    choiceC: " March, 1985",
    answer1choice: "A",
    answer1: "Gorbachev was the leader of the USSR.",
    question2: "When did he die?",
    choiceD: " He died in 91.",
    choiceE: " He died in 1985.",
    choiceF: " He died on Tuesday.",
    answer2choice: "F",
    answer2: "He died on Tuesday."
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
    document.getElementById(listening.answer1choice).style.background = "lightgreen";
}

function checkAnswer2() {
    document.getElementById("feedback2").textContent = listening.answer2;
    document.getElementById(listening.answer2choice).style.background = "lightgreen";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
