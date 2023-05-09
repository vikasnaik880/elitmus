// JavaScript code
//const form = document.getElementById('answer-form');
//const answerInput = document.getElementById('answer-input');
const homeBtn = document.getElementById('home-btn');
const clickMeBtn = document.getElementById('click-me-btn');

// Handle form submission
/*form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form submission
  const answer = answerInput.value;
  // TODO: check answer and take appropriate action
});*/

// Handle home button click
homeBtn.addEventListener('click', () => {
  location.href = 'home.html'; // redirect to home page
});

// Handle "Click Me" button click
clickMeBtn.addEventListener('click', () => {
  location.href = 'hint3.html'; // redirect to clickme page
});