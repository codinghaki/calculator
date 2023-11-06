const BUTTONSCONTAINER = document.querySelector('#buttonsContainer');

function add(operand1, operand2){
    return operand1 + operand2;
}

function subtract(operand1, operand2){
    return operand1 - operand2;
}

function multiply(operand1, operand2){
    return operand1 * operand2;
}

function divide(operand1, operand2){
    if (operand2 == 0){
        return 'Cannot divide by 0';
    }
    return operand1 / operand2;
}

function operate(operand1, operand2, operatorASCII){
    switch(operatorASCII){
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

for (let i = 0; i < 18; i++){
    let calculatorButton = document.createElement('div');
    calculatorButton.style.backgroundColor = 'black';
    calculatorButton.classList.add('calculatorButton');
    BUTTONSCONTAINER.appendChild(calculatorButton);
}