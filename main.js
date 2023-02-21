const number = document.querySelectorAll('.buttons_num');
const operations = document.querySelectorAll('.buttons_operations');
const result = document.getElementById('equals');
const display = document.getElementById('display_device')
const cursor = document.getElementById('cursor');
const currentValue = display.innerHTML;
const lastValue = screenBuffer[screenBuffer.length - 1];

let resultDisplayed = false;
let screenBuffer = [];

function displayScreenCommon(value) {
  screenBuffer.push(value);
  display.innerHTML += value;
}

function displayScreenOthers(value) {
  screenBuffer.unshift(value);
  display.innerHTML += value;
}

function clearDisplay() {
  display.innerHTML = '';
}

function clearOneNumber() {
  for (let i = 0; i < screenBuffer.length; i++) {
    if (i === screenBuffer[0]) {
      return display.innerHTML = '';
    }
   else if (i !== screenBuffer[0]) {
  screenBuffer.pop(value)
  display.innerHTML = value;
    }
  }
}


function frac(value) {
  screenBuffer.unshift(value);
  display.innerHTML += value;
}

function percent(value) {
  value = screenBuffer[screenBuffer.length - 1] * (screenBuffer[screenBuffer.length - 1] * 100);
  display.innerHTML += value;
}

function equals(lastValue, currentValue) {
  
}

function calcSqr(value) {
  return Math.sqrt(value);
}


