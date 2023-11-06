const BUTTONSCONTAINER = document.querySelector("#buttonsContainer");
const RESULTBAR = document.querySelector('#result');
const ZERO = document.querySelector("#zero");
const ONE = document.querySelector("#one");
const TWO = document.querySelector("#two");
const THREE = document.querySelector("#three");
const FOUR = document.querySelector("#four");
const FIVE = document.querySelector("#five");
const SIX = document.querySelector("#six");
const SEVEN = document.querySelector("#seven");
const EIGHT = document.querySelector("#eight");
const NINE = document.querySelector("#nine");

ZERO.addEventListener("click", () => {
  handleButtonClick(0); // Call a function with the numerical value
});

ONE.addEventListener("click", () => {
  handleButtonClick(1);
});

TWO.addEventListener("click", () => {
  handleButtonClick(2);
});

THREE.addEventListener("click", () => {
  handleButtonClick(3);
});

FOUR.addEventListener("click", () => {
  handleButtonClick(4);
});

FIVE.addEventListener("click", () => {
  handleButtonClick(5);
});

SIX.addEventListener("click", () => {
  handleButtonClick(6);
});

SEVEN.addEventListener("click", () => {
  handleButtonClick(7);
});

EIGHT.addEventListener("click", () => {
  handleButtonClick(8);
});

NINE.addEventListener("click", () => {
  handleButtonClick(9);
});

function add(operand1, operand2) {
  return operand1 + operand2;
}

function subtract(operand1, operand2) {
  return operand1 - operand2;
}

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function divide(operand1, operand2) {
  if (operand2 == 0) {
    return "Cannot divide by 0";
  }
  return operand1 / operand2;
}

function operate(operand1, operand2, operatorASCII) {
  switch (operatorASCII) {
    case "+":
      return add(operand1, operand2);
    case "-":
      return subtract(operand1, operand2);
    case "*":
      return multiply(operand1, operand2);
    case "/":
      return divide(operand1, operand2);
  }
}

function handleButtonClick(value) {
    RESULTBAR.textContent = value;
    return value;
}
