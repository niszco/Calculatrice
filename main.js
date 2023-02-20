const buttons = document.querySelector("button")
const display = document.quertySelector("display_numbers");

console.log(buttons)

function calculate(buttons) {
  console.log(buttons);
}

buttons.forEach(buttons => buttons.addEventListener('click', () => calculate(buttons)))