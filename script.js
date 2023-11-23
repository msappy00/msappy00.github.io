// Questions that will be asked

const Questions = [
	{
	  q: "What country is considered to be the birthplace of coffee?",
	  a: [
		{ text: "Ethiopia", isCorrect: true },
		{ text: "Brazil", isCorrect: false },
		{ text: "Colombia", isCorrect: false },
		{ text: "Italy", isCorrect: false },
	  ],
	},
	{
	  q: "Which type of coffee bean is considered to be the most expensive?",
	  a: [
		{ text: "Kopi Luwak", isCorrect: true },
		{ text: "Arabica", isCorrect: false },
		{ text: "Robusta", isCorrect: false },
		{ text: "Liberica", isCorrect: false },
	  ],
	},
	{
	  q: "What is the most popular way to make coffee in the United States?",
	  a: [
		{ text: "Drip coffee", isCorrect: true },
		{ text: "Espresso", isCorrect: false },
		{ text: "French press", isCorrect: false },
		{ text: "Pour-over", isCorrect: false },
	  ],
	},
  ];

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function showAnswer() {
	const question = document.getElementById("ques")
	question.textContent = Questions[currQuestion].q;

}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		showAnswer();
	} else {
		showAnswer();
	}
}
