// Define your queue data structure
const flashcards = [];

// Function to show the next card
function showNextCard() {
  const currentCard = flashcards.shift(); // Remove and return first card
  if (!currentCard) {
    // Handle no cards remaining
    document.getElementById('flashcard-container').innerHTML = 'No cards left!';
    return;
  }
  document.getElementById('flashcard-question').textContent = currentCard.question;
  document.getElementById('aud-mp3').src = currentCard.audio;
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
  // Remove the card from the queue
  document.getElementById('answer-button').disabled = false;
  showNextCard();
}

// Handle "unknown" button click
function markUnknown() {
  document.getElementById('answer-button').disabled = false;
  const currentCard = flashcards.shift(); // Remove first card
  flashcards.push(currentCard); // Add it back to the end
  showNextCard();
}

// Load initial cards (replace with your data source)
flashcards.push({ question: 'Repeat:', audio: 'audio/horse.mp3', answer: 'horse' });
flashcards.push({ question: 'What is the capital of France?', audio: 'audio/blank.mp3', answer: 'Paris' });
flashcards.push({ question: 'The tallest mountain in the world is...', audio: 'audio/blank.mp3', answer: 'Mount Everest' });

// Show the first card
showNextCard();

// Bind button click events
document.getElementById('known-button').addEventListener('click', markKnown);
document.getElementById('unknown-button').addEventListener('click', markUnknown);
