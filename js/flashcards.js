// Define your queue data structure
var flashcards = [];

// Function to show the next card
function showNextCard() {
  var currentCard = flashcards[0]; // return first card
  if (!currentCard) {
    // Handle no cards remaining
    document.getElementById('flashcard-container').innerHTML = 'No cards left!';
    return;
  }
  document.getElementById('flashcard-question').textContent = currentCard.question;
  document.getElementById('flashcard-answer').textContent = "";
  document.getElementById('answer-button').addEventListener('click', () => {
    document.getElementById('flashcard-answer').textContent = currentCard.answer;
    document.getElementById('answer-button').disabled = true;
    document.getElementById('good-button').disabled = false;
    document.getElementById('try-again-button').disabled = false;
  });
}

// Handle "good" button click
function markGood() {
  var currentCard = flashcards.shift(); // Remove the card from the queue
  document.getElementById('answer-button').disabled = false;
  showNextCard();
}

// Handle "try-again" button click
function markTryAgain() {
  document.getElementById('answer-button').disabled = false;
  var currentCard = flashcards.shift(); // Remove first card
  flashcards.push(currentCard); // Add it back to the end
  showNextCard();
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

// Load initial cards (replace with your data source)
flashcards.push({ question: '(動物)有親緣關係的(文中接 to N. 指「和………………有親緣關係」)；相關的', answer: 'related' });
flashcards.push({ question: '一般、通常；典型地', answer: 'typically' });
flashcards.push({ question: '全球地；在全球各地', answer: 'globally' });
flashcards.push({ question: '可靠的、值得信賴的、確鑿的', answer: 'reliable' });
flashcards.push({ question: '向前、朝前', answer: 'forward' });
flashcards.push({ question: '天真的；無辜的；清白的', answer: 'innocent' });
flashcards.push({ question: '措詞、詞語；術語、專門名稱', answer: 'term' });
flashcards.push({ question: '洲；大陸', answer: 'continent' });
flashcards.push({ question: '狩獵者、獵人', answer: 'hunter' });
flashcards.push({ question: '肉眼可見的；明顯的', answer: 'visible' });

// Shuffle the cards
shuffle(flashcards);

// Show the first card
showNextCard();

// Bind button click events
document.getElementById('good-button').addEventListener('click', markGood);
document.getElementById('try-again-button').addEventListener('click', markTryAgain);
