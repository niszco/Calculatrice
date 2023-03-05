// Constantes et autres;
const calculator = document.querySelector('device_frame');
const buttons = document.querySelectorAll('button');
const number = document.querySelectorAll('.buttons_num');
const operations = document.querySelectorAll('.buttons_operations');
const result = document.getElementById('equals');
const clear = document.getElementById('clear');
const decimal = document.getElementById('float');
const display = document.getElementById('display_device')
const audio = new Audio('./click1.wav');

// Un drapeau pour savoir si le résultat est affiché ou non;
let resultDisplayed = false;

// Un tableau pour stocker toutes les valeurs; 
let screenBuffer = [];

// Dernière valeur du buffer;
const lastString = screenBuffer[screenBuffer.length - 1];

// Joue un son quand l'utilisateur presse une touche;
buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

// Fonctions principales :

// Affiche les nombres et les opérateurs;
function displayScreenCommon(value) {
  if (lastString === "+" || lastString === "-" || lastString === "*" || lastString === "÷") {
    operations.addEventListener('click', () => {

    })
  }
  screenBuffer.push(value);
  display.innerHTML += value;
}

// Efface les valeurs de l'écran;
clear.addEventListener('click', function() {
  display.innerHTML = '';
})

// Met à jour l'écran de la calculatrice (utilisé notamment pour afficher le résultat d'un opération);
function updateDisplay(value) {
  display.innerHTML = value;
}

// Evénement qui calcule le résultat et tri les opérateurs et les nombres;
result.addEventListener('click', function() {
  let inputString = display.innerHTML;
  // Sous-tableaux qui sépare les nombres des opérateurs et invérsement;
  let numbers = inputString.split(/\+|\-|\^|\√|\*|\÷|\%/g);
  let operators = inputString.replace(/[0-9]|\./g,"").split("");
  
  console.log(screenBuffer);
  console.log(inputString);
  console.log(operators);
  console.log(numbers);


for (let i = 0; i < numbers.length; i++) {
// Chaque opérateur est testé, selon l'opérateur, le calcul sera effectué
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
    else if (operators[i] === "%") {
      resultDisplayed = true;
      return updateDisplay(numbers[i] / 100);
    }
  }
})