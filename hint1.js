// Game Logic
//const canvas = document.getElementById('game-canvas');
const scoreValue = document.getElementById('score-value');
const timeValue = document.getElementById('time-value');

let score = 0;
let time = 60;

// Update Score
function updateScore(value) {
    score += value;
    scoreValue.textContent = score;
}

// Update Time
function updateTime() {
    time -= 1;
    timeValue.textContent = time;

    if (time <= 0) {
        clearInterval(timer);
        alert('Game Over!');
        window.location.href = "home.html";
    }
}

// Game Timer
const timer = setInterval(updateTime, 1000);
// Get the button element
var button = document.querySelector('.button');

// Add event listener to button
button.addEventListener('click', function() {
    // Redirect to another page
    window.location.href = "hint2.html";
});
var button1 = document.querySelector('.button1');

// Add event listener to button
button1.addEventListener('click', function() {
    // Redirect to another page
    window.location.href = "home.html";
});