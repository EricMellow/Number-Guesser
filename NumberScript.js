//Generates Random Number
function generateRandomNumber() {
  var number = Math.floor(Math.random() * 101);
  return number;
};

var randomNumber = generateRandomNumber();
var guessButton = document.querySelector('.guessbutton');
var clearButton = document.querySelector('.clearbutton');
var lastGuess = document.querySelector('.lastguess');
var resetButton = document.querySelector('#reset');
var hint = document.querySelector('.hint');
var userGuess = document.querySelector('.userguess');

//Button disable
userGuess.addEventListener('input', function() {
    if (userGuess.value.length > 0) {
  clearButton.classList.add('button-enabled');
  guessButton.classList.add('button-enabled');
  resetButton.classList.add('button-enabled');
} else {
  clearButton.classList.remove('button-enabled');
  guessButton.classList.remove('button-enabled');
  resetButton.classList.remove('button-enabled');
};
})

guessButton.addEventListener('onmouseover', function() {
  guessButton.classList.add('button-hover');
};


//Guess Button submit and appropriate response
guessButton.addEventListener('click', function () {
  var newGuess = userGuess.value;
// console.log(randomNumber);
  newGuess = parseInt(newGuess, 10);
  lastGuess.innerText = newGuess;
 if (Number.isNaN(newGuess)) { 
  lastGuess.innerText = 'Oops!';
  hint.innerText = 'That is not a number. Please guess a number between 0 and 100';
}  else if (newGuess > 100) {
  lastGuess.innerText = 'Oops!';
  hint.innerText = 'Please guess a number between 0 and 100';
} else if (newGuess < 0) {
  lastGuess.innerText = 'Oops!';
  hint.innerText = 'Please guess a number between 0 and 100';
} else if (newGuess === randomNumber) {
  hint.innerText = 'BOOM!'; 
} else if (randomNumber < newGuess) {
  hint.innerText = 'That is too high'; 
} else {
  hint.innerText = 'That is too low';
  }
});

//Clear Button function
clearButton.addEventListener('click', function () {
  userGuess.value = "";
  clearButton.classList.remove('button-enabled');
  guessButton.classList.remove('button-enabled');
});

//Reset Button function
resetButton.addEventListener('click', function() {
  location.reload();
  clearButton.classList.remove('button-enabled');
  guessButton.classList.remove('button-enabled');
  resetButton.classList.remove('button-enabled');
});
