// Questions that will be asked

const Questions = [
	{
	  q: "What is the main goal of Fairtrade?",
	  a: [
		{ text: "To make coffee more affordable.", isCorrect: false },
		{ text: "To reduce the amount of coffee produced.", isCorrect: false },
		{ text: "To increase the price of coffee.", isCorrect: false },
		{ text: "To improve the lives of poor producers.", isCorrect: true },
	  ],
	},
	{
	  q: "What is a smallholder coffee farmer?",
	  a: [
		{ text: "A farmer who makes a small profit.", isCorrect: false },
		{ text: "A farmer who owns a small farm.", isCorrect: true },
		{ text: "A farmer who uses cheap pesticides.", isCorrect: false },
		{ text: "A farmer who produces a small crop.", isCorrect: false },
	  ],
	},
	{
	  q: "What are some of the challenges faced by smallholder coffee farmers?",
	  a: [
		{ text: "They earn less than they need to survive.", isCorrect: false },
		{ text: "They lack infrastructure such as roads, schools, and hospitals.", isCorrect: false },
		{ text: "They use cheap pesticides that damage the environment.", isCorrect: false },
		{ text: "All of the above.", isCorrect: true },
	  ],
	},
	{
		q: "How does Fairtrade help smallholder coffee farmers?",
		a: [
		  { text: "By cutting out the middlemen and buying straight from farmers.", isCorrect: false },
		  { text: "By helping farmers build infrastructure in their communities.", isCorrect: false },
		  { text: "By introducing farmers to eco-friendly farming practices.", isCorrect: false },
		  { text: "All of the above.", isCorrect: true },
		],
	  },
	  {
		q: "What are some of the benefits of Fairtrade for smallholder coffee farmers?",
		a: [
		  { text: "They earn more money from their coffee beans.", isCorrect: false },
		  { text: "Their communities are stronger and more sustainable.", isCorrect: false },
		  { text: "They are able to grow organic coffee, which is more profitable.", isCorrect: false },
		  { text: "All of the above.", isCorrect: true },
		],
	  },
	  {
		q: "What are some of the benefits of Fairtrade for consumers?",
		a: [
		  { text: "They can help improve the lives of poor producers.", isCorrect: false },
		  { text: "They can buy coffee that is produced in a sustainable way.", isCorrect: false },
		  { text: "They can buy coffee that is more affordable.", isCorrect: false },
		  { text: "All of the above.", isCorrect: true },
		],
	  },
	  {
		q: "What is the difference between Fairtrade and organic coffee?",
		a: [
			{ text: "Fairtrade coffee is more expensive than organic coffee.", isCorrect: false },
			{ text: "Organic coffee is produced in a sustainable way, while Fairtrade coffee is not.", isCorrect: false },
			{ text: "Organic coffee is more expensive than Fairtrade coffee.", isCorrect: false },
			{ text: "Fairtrade coffee is produced in a sustainable way, while organic coffee is not.", isCorrect: true },	
		],
	  },
	  {
		q: "Which coffee brand is Fairtrade-certified?",
		a: [
		  { text: "Taipei Coffee", isCorrect: false },
		  { text: "OKOGREEN", isCorrect: false },
		  { text: "Formosa Coffee", isCorrect: false },
		  { text: "All of the above.", isCorrect: true },
		],
	  },
	  {
		q: "How can I help support Fairtrade?",
		a: [
		  { text: "Buy Fairtrade-certified coffee.", isCorrect: false },
		  { text: "Donate to Fairtrade.", isCorrect: false },
		  { text: "Volunteer for Fairtrade.", isCorrect: false },
		  { text: "All of the above.", isCorrect: true },
		],
	  },
	  {
		q: "What is the future of Fairtrade?",
		a: [	
			{ text: "Fairtrade will continue to grow and help more coffee farmers.", isCorrect: true },
			{ text: "Fairtrade will decline in popularity.", isCorrect: false },
			{ text: "Fairtrade will be replaced by a new organization.", isCorrect: false },
			{ text: "None of the above.", isCorrect: false },
		],
	  },
  ];

let currQuestion = 0
let score = 0

function randomizeStrings(strings) {
	for (let i = strings.length - 1; i > 0; i--) {
	  const j = Math.floor(Math.random() * (i + 1));
	  [strings[i], strings[j]] = [strings[j], strings[i]];
	}
  
	return strings;
  }

function loadQues() {
	document.getElementById('submit_btn').style.display="block";
	document.getElementById('next_btn').style.display="none";
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	Questions[currQuestion].a = randomizeStrings(Questions[currQuestion].a);

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
	document.getElementById('submit_btn').style.display="block";
	document.getElementById('next_btn').style.display="none";
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("submit_btn").remove()
		document.getElementById("next_btn").remove()
		loadScore();
	}
}

function showAnswer(feedback) {
	document.getElementById('submit_btn').style.display="none";
	document.getElementById('next_btn').style.display="block";
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = feedback;
	opt.innerHTML = Questions[currQuestion].a[selectedAns].text
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		showAnswer("Correct!");
	} else {
		showAnswer("Oops.");
	}
}
