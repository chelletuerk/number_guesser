var inputField = document.querySelector('.userInput');
var submitButton = document.querySelector('.submit');
var clearButton = document.querySelector('.clear');
var showGuess = document.querySelector('.userGuess');
var resetButton = document.querySelector('.reset');
var highLow = document.querySelector('.highLow')
var soHigh = "That is too high";
var soLow = "That is too low";
var win = "Correct!"
var notNumber = "That is not a number"
var realNumber = null


submitButton.addEventListener('click', function() {
  // showGuess.innerText = inputField.value;
  realNumber = parseInt(inputField.value)
  inputField.value = "";
  console.log(realNumber);
  theShit();
})

clearButton.addEventListener('click', function() {
 showGuess.innerText = "";
})

var theNumber = randomNum()
var min = 1
var max = 100

resetButton.addEventListener('click', function() {
  theNumber = randomNum();
  min = min - 10
  max = max + 10
  showGuess.innerText = "";
  highLow.innerText = "";
})

//generates the random number
function randomNum() {
return Math.floor(Math.random() * 100)

}


function theShit() {

 console.log(realNumber===theNumber)


  if (realNumber > theNumber) {
  console.log("1")
    showGuess.innerText = realNumber
    highLow.innerText = soHigh

} else if (realNumber < theNumber) {
  console.log("2")
  showGuess.innerText = realNumber
  highLow.innerText = soLow

  console.log(realNumber + soLow)
} else if (realNumber===theNumber) {

  showGuess.innerText = realNumber
  highLow.innerText = win
  }
};
