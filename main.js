// Constants and others;
const calculator = document.querySelector('device_frame');
const buttons = document.querySelectorAll('button');
const number = document.querySelectorAll('.buttons_num');
const operations = document.querySelectorAll('.buttons_operations');
const result = document.getElementById('equals');
const clear = document.getElementById('clear');
const decimal = document.getElementById('float');
const display = document.getElementById('display_device')
const audio = new Audio('./click1.wav');

// A flag for knowing when the result is displayed or not;
let resultDisplayed = false;

// An array to store every values that have been previously pressed by the user;
let screenBuffer = [];

// Current value of the display;
const currentValue = display.innerHTML;
// Last value of the display;
const lastString = screenBuffer[screenBuffer.length - 1];

// Play a sound when any buttons is pressed;
buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

// Main functions for the calculator to work :

// Display numbers in the display;
function displayScreenCommon(value) {
  screenBuffer.push(value);
  display.innerHTML += value;
}

// Display operators in the display;
function displayScreenOthers(value) {
  screenBuffer.unshift(value);
  display.innerHTML += value;
}

// Clear the display;
clear.addEventListener('click', function() {
  display.innerHTML = '';
})

// Update the display when the 'equal' key is pressed;
function updateDisplay(value) {
  display.innerHTML = value;
}

// Check if the number is a decimal;
function decimalBoolean() {
  if (!display.innerHTML.includes(',')) {
    display.innerHTML += decimal;
  }
}

function operatorsLimit() {
  let inputString = display.innerHTML;
  // Sub array to distinguish numbers and operators from each other;
  let numbers = inputString.split(/\+|\-|\^|\√|\*|\÷/g);
  let operators = inputString.replace(/[0-9]|\,/g,"").split("");
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "*" || operators === "-" || operators === "+" || operators === "/" || operators === "^") {

    }
  }
};

// Result
result.addEventListener('click', function() {
  let inputString = display.innerHTML;
  // Sub array to distinguish numbers and operators from each other;
  let numbers = inputString.split(/\+|\-|\^|\√|\*|\÷/g);
  let operators = inputString.replace(/[0-9]|\,/g,"").split("");
  
  console.log(inputString);
  console.log(operators);
  console.log(numbers);

// Loop that is needed to calculate the result with conditions;
for (let i = 0; i < numbers.length; i++) {
// Every operator is tested to see if it matches the current operator displayed;
    if (operators[i] === "*") {
      resultDisplayed = true;
      return updateDisplay(numbers[i] *= numbers[i + 1]);
    }
    else if (operators[i] === "÷") {
      resultDisplayed = true;
      return updateDisplay(numbers[i] /= numbers[i + 1]);
    }
    else if (operators[i] === "-") {
      resultDisplayed = true;
      return updateDisplay(numbers[i] -= numbers[i + 1]);
    }
    else if (operators[i] === "+") {
      resultDisplayed = true;
      return updateDisplay(parseFloat(numbers[i], 10) + parseFloat(numbers[i + 1], 10));
    }
    else if (operators[i] === "^") {
      resultDisplayed = true;
      return updateDisplay(numbers[i] ** numbers[i + 1]);
    }
    else if (operators[i] === "√") {
      resultDisplayed = true;
      return updateDisplay(Math.sqrt(numbers[i]));
    }
  }
})