var inputField = document.querySelector('.userInput');
var submitButton = document.querySelector('.submit');
var showGuess = document.querySelector('.userGuess');
var clearButton = document.querySelector('.clear');
var theNumber = randomNumber();

//The submit button functionality
submitButton.addEventListener('click', function() {
  var realNumber = parseInt(inputField.value);
  checkTheNumbers(realNumber);
inputField.value = "";
});

//The clear button functionality
clearButton.addEventListener('click', function() {
  showGuess.innerText = "";
});

//The function for generating a random number
function randomNumber() {
return Math.floor(Math.random() * 100);
}

//we want our 'too high' or 'too low' statements to show up in our showGuess section
function checkTheNumbers(realNumber) {
  var tooHigh = " Your Guess is TOO high!";
  var tooLow = " Your Guess is TOO low!";
  if (realNumber > theNumber) {
    return showGuess.innerText = realNumber + tooHigh;
  } else if (realNumber < theNumber) {
    return showGuess.innerText = realNumber + tooLow;
  }
}
