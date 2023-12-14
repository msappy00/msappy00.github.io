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
    document.getElementById('known-button').disabled = false;
    document.getElementById('unknown-button').disabled = false;
  });
}

// Handle "known" button click
function markKnown() {
  var currentCard = flashcards.shift(); // Remove the card from the queue
  document.getElementById('answer-button').disabled = false;
  showNextCard();
}

// Handle "unknown" button click
function markUnknown() {
  document.getElementById('answer-button').disabled = false;
  var currentCard = flashcards.shift(); // Remove first card
  flashcards.push(currentCard); // Add it back to the end
  showNextCard();
}

// Load initial cards (replace with your data source)
flashcards.push({ question: 'What is the capital of France?', answer: 'Paris' });
flashcards.push({ question: 'The tallest mountain in the world is...', answer: 'Mount Everest' });
flashcards.push({ question: '3', answer: 'Th' });
flashcards.push({ question: '4', answer: 'Fo' });
flashcards.push({ question: '5', answer: 'Fi' });
flashcards.push({ question: '6', answer: 'Si' });
flashcards.push({ question: '7', answer: 'Se' });
flashcards.push({ question: '8', answer: 'Ei' });
flashcards.push({ question: '9', answer: 'Ni' });
flashcards.push({ question: '10', answer: 'Te' });

// Show the first card
showNextCard();

// Bind button click events
document.getElementById('known-button').addEventListener('click', markKnown);
document.getElementById('unknown-button').addEventListener('click', markUnknown);
