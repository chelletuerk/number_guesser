var inputField = document.querySelector('.userInput');
var submitButton = document.querySelector('.submit');
var clearButton = document.querySelector('.clear');
var showGuess = document.querySelector('.userGuess');
var resetButton = document.querySelector('.reset');
var highLow = document.querySelector('.highLow')
var minText = document.querySelector('.mintext')
var maxText = document.querySelector('.maxtext')
var newMin = document.querySelector('.min-input')
var newMax = document.querySelector('.max-input')
var rangeButton = document.querySelector('.change-range-button')
var soHigh = "That is too high";
var soLow = "That is too low";
var outOfRange = "Your guess is outside the range!"
var win = "Correct!"
var realNumber = null
var gameWon = false;

resetButton.setAttribute('disabled', true);

submitButton.addEventListener('click', function() {
  // showGuess.innerText = inputField.value;
  realNumber = parseInt(inputField.value)
  inputField.value = "";
  if(checkIfInputIsValid()){
    conceptOfGame();
  }
})

clearButton.addEventListener('click', function() {
 showGuess.innerText = "";
})

rangeButton.addEventListener('click', function() {
  min = parseInt(newMin.value)
  max = parseInt(newMax.value)
  theNumber = randomNum()
  minText.innerText=min;
  maxText.innerText=max;
  console.log(theNumber)
})


var min = 1
var max = 100
var theNumber = randomNum()
minText.innerText=min;
maxText.innerText=max;
console.log(theNumber)
console.log('min: ',min,' max: ', max)

resetButton.addEventListener('click', function() {
  theNumber = randomNum();
  min = min - 10
  max = max + 10
  showGuess.innerText = "";
  highLow.innerText = "";
  minText.innerText=min;
  maxText.innerText=max;
  console.log(theNumber);
  console.log('min: ',min,' max: ', max)
  resetButton.setAttribute('disabled', true);
})


//generates the random number
function randomNum() {
return Math.floor(Math.random() * (max - min + 1)) + min;
}


function checkIfInputIsValid() {
  if (realNumber > max) {
    highLow.innerText = outOfRange
    return false
  }  else if (realNumber < min) {
    highLow.innerText = outOfRange
    return false
  }
  return true;
}

function conceptOfGame() {

  console.log(realNumber===theNumber)

  if (realNumber > theNumber) {
    showGuess.innerText = realNumber
    highLow.innerText = soHigh
  } else if (realNumber < theNumber) {
    showGuess.innerText = realNumber;
    highLow.innerText = soLow;
    console.log(realNumber + soLow)
  } else if (realNumber===theNumber) {
    showGuess.innerText = realNumber;
    highLow.innerText = win;
    gameWon = true;
    resetButton.removeAttribute('disabled');
  }
};
