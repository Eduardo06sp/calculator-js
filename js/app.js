function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculate(a, b, operator) {
  switch (operator) {
    case '÷':
      if (b === 0) {
	return 'Can\'t divide by 0!';
      }

      return divide(a, b);
      break;
    case '×':
      return multiply(a, b);
      break;
    case '−':
      return subtract(a, b);
      break;
    case '+':
      return add(a, b);
      break;
  }
}

let operandA = null;
let operandB = null;
let operator = '';
let result = '';

const calculatorNumbers = document.querySelector('.numbers');
calculatorNumbers.addEventListener('mousedown', updateNumberDisplayed);

function updateNumberDisplayed(e) {
  let number = e.key || e.target.textContent;

  if (validateNumber(number)) {
    result += number;
    updateDisplay(result);
  }
}

function validateNumber(number) {
  let integer = parseInt(number);

  if (integer === 1 ||
      integer === 2 ||
      integer === 3 ||
      integer === 4 ||
      integer === 5 ||
      integer === 6 ||
      integer === 7 ||
      integer === 8 ||
      integer === 9 ||
      integer === 0) {
    return true;
  } else {
    return false;
  }
}

function updateDisplay(content) {
  const calcDisplay = document.querySelector('.display-content');
  calcDisplay.textContent = content;
}
