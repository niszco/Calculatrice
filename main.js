const device = document.querySelector('.device_frame');
const buttons = document.querySelector('.device_buttons');

buttons.addEventListener('click', x => {
  if (x.target.matches('device_buttons')) {
    const buttons = x.target;
    const action = buttons.dataset.action;
    const buttonsContent = buttons.textContent;
    const displayNumber = display.textContent
  }
})

function display(value) {
  if (value == null) {
    equals.value += '';
  } else {
    equals.value = value;
  }
}