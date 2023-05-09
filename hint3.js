// List of words to be scrambled
var words = ['fruit'];

// Get a random word from the list
var word = words[Math.floor(Math.random() * words.length)];

// Scramble the word by shuffling its letters
var scrambledWord = scrambleWord(word);

// Display the scrambled word
var scrambledWordElement = document.getElementById('scrambled-word');
scrambledWordElement.textContent = scrambledWord;

// Get the input field, submit button, and hint button
var guessInput = document.getElementById('guess-input');
var submitButton = document.getElementById('submit-button');
var hintButton = document.getElementById('hint-button');

// Listen for the submit button click event
submitButton.addEventListener('click', function() {
  // Get the user's guess
  var guess = guessInput.value;
  
  // Check if the guess is correct
  if (guess === word) {
    // Redirect the user to another page
    window.location.href = 'hint3(1).html';
  } else {
    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Incorrect. Try again.';
    resultElement.style.color = 'red';
  }
});
// Listen for the hint button click event
hintButton.addEventListener('click', function() {
  // Display the first letter of the word as a hint
  var hintElement = document.getElementById('hint');
  hintElement.textContent = 'Hint: ' + word.charAt(0).toUpperCase();
});

// Function to scramble a word by shuffling its letters
function scrambleWord(word) {
  var letters = word.split('');
  for (var i = letters.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = letters[i];
    letters[i] = letters[j];
    letters[j] = temp;
  }
  return letters.join('');
}
