// check if service worker is supported
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("listening.js", { scope: '/Listening/' })
    .then(reg => console.log('Successfully registered. Scope is ${reg.scope}'))
    .catch(error => console.log('Registering failed ${error}'));
} else {
    console.log('Service worker cannot be registered on this device');
}

const listening = {
    question1: "Why do we wear shoes?",
    choiceA: "to make our feet cold",
    choiceB: "to make our feet look pretty",
    choiceC: "to protect our feet and make them feel comfortable",
    answer1: "We wear shoes to protect our feet and make them feel comfortable when we walk or run.",
    question2: "What are the different types of shoes?",
    choiceD: "rubber bands, shoe laces, and shoehorns",
    choiceE: "sneakers, sandals, and boots",
    choiceF: "running shoes, soccer balls, and baseball caps",
    answer2: "Sneakers, sandals, and boots are all types of shoes."
}

function setContent(event) {
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
    const tabcontent = [...document.getElementsByClassName("tabcontent")];
        tabcontent.forEach(tab => {
        tab.style.display = "none";
    });
    const tablinks = [...document.getElementsByClassName("tablinks")];
    tablinks.forEach(tab => {
        tab.classList.remove("active");
    });
}

function checkAnswer1() {
    document.getElementById("feedback1").textContent = listening.answer1;
}

function checkAnswer2() {
    document.getElementById("feedback2").textContent = listening.answer2;
}
