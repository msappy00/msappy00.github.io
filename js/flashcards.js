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
  // document.getElementById('flashcard-audio').setAttribute('src', 'audio/' + currentCard.answer + '.mp3');
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
flashcards.push({ question: 'What is the name of the animal that the coffee farmers in Colombia are working to protect?', answer: 'the Andean bear' });
flashcards.push({ question: 'What is the other name for the Andean bear, based on its facial markings?', answer: 'the spectacled bear' });
flashcards.push({ question: 'What continent is the Andean bear native to?', answer: 'South America' });
flashcards.push({ question: 'What is the main role of the Andean bear in the local ecosystem?', answer: 'to help spread various plant seeds around the environment' });
flashcards.push({ question: 'What is the main food source of the Andean bear?', answer: 'plants' });
flashcards.push({ question: 'What is the name of the mountain range that the Andean bear depends on for food and shelter?', answer: 'the Andes Mountains' });
flashcards.push({ question: 'What is the main reason for the loss of the Andean bear\’s habitat?', answer: 'the clearing of land for coffee farms' });
flashcards.push({ question: 'What is the main reason for the hunting of the Andean bear by the farmers?', answer: 'to protect their source of income from the bears\’ crop and cattle raiding' });
flashcards.push({ question: 'How many Andean bears are estimated to be left in the wild?', answer: 'about 10,000' });
flashcards.push({ question: 'What is the name of the program that was created to educate people about the Andean bear and encourage conservation?', answer: 'Conservamos la Vida' });
flashcards.push({ question: 'What does the name of the program mean in English?', answer: 'conserving life' });
flashcards.push({ question: 'What are some of the benefits that the program provides to the people who participate in it?', answer: 'the materials they need for coffee growing and processing, feeding their animals, and creating fences to keep bears out' });
flashcards.push({ question: 'What are some of the measures that the farmers take to prevent the bears from entering their farms?', answer: 'creating fences and leaving large areas of land untouched for the bears' });
flashcards.push({ question: 'What is the name of the joint business that the local farmers formed to sell their coffee?', answer: 'Café Oso Andino' });
flashcards.push({ question: 'What is the name of the coffee brand that is inspired by the Andean bear?', answer: 'Andean Bear Coffee' });
flashcards.push({ question: 'What is the main outcome of the joint business for the local farmers?', answer: 'bringing more wealth into the region' });
flashcards.push({ question: 'How does protecting the Andean bear and the local forests affect the coffee business?', answer: 'positively' });
flashcards.push({ question: 'What is the main message of Conservamos la Vida?', answer: 'that it is possible for conservation and business to work together successfully' });

// Shuffle the cards
shuffle(flashcards);

// Show the first card
showNextCard();

// Bind button click events
document.getElementById('good-button').addEventListener('click', markGood);
document.getElementById('try-again-button').addEventListener('click', markTryAgain);
