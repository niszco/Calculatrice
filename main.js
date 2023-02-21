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

// An array to store values that have been previously pressed by the user;
let screenBuffer = [];
// Current value of the display;
const currentValue = display.innerHTML;
// Last value of the display;
const lastValue = screenBuffer[screenBuffer.length - 1];

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

// Result
result.addEventListener('click', function() {
  var inputString = display.innerHTML;
  var numbers = inputString.split(/\+|\-|\*|\÷/g);
  var operators = inputString.replace(/[0-9]|\,/g,"").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);

for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "*") {
      return updateDisplay(numbers[i] *= numbers[i + 1]);
    }
    else if (operators[i] === "÷") {
      return updateDisplay(numbers[i] /= numbers[i + 1]);
    }
    else if (operators[i] === "-") {
      return updateDisplay(numbers[i] -= numbers[i + 1]);
    }
    else if (operators[i] === "+") {
      return updateDisplay(numbers[i] += numbers[i + 1]);
    }
  }
}
)


