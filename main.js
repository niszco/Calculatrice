"use strict";

const input = document.getElementById('display_screen');
const number = document.querySelectorAll('.buttons_num');
const operations = document.querySelectorAll('.buttons_operations');
const result = document.getElementById('equals');
const display = document.getElementById('display_device')
const cursor = document.getElementById('cursor');
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

function clearDisplay(value) {
  display.innerHTML = value;
}

function displayNumbers(number) {
  for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function(x) {
      let currentString = input.innerHTML;
      let lastChar = currentString[currentString.length - 1];

      if (resultDisplayed === false) {
        input.innerHTML += x.target.innerHTML;
      } else if (resultDisplayed === true && lastChar == '&plus' || lastChar == '&times' || lastChar == '&divide' || lastChar == '-') {
        resultDisplayed = false;
        input.innerHTML	+= x.target.innerHTML;
      } else {
        resultDisplayed = false;
        input.innerHTML = "";
        input.innerHTML += x.target.innerHTML;
      }
    });

  }
}
