const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
};
function updateDisplay() {
    const display = document.querySelector("#calculator_display");
    display.value = calculator.displayValue;
}
updateDisplay();

// handling key pressed
const keys = document.querySelector(".calculator_key");
keys.addEventListener('click', (e) => {
    const {target} = e;
    if(!target.matches('button')) {
        return;
    }
    if(target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if(target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    if(target.classList.contains('back_space')) {
        clearCalculator(target.value);
        updateDisplay();
        return;
    }
    if(target.classList.contains('all-clear')) {
        resetCalculator(target.value);
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
});
function inputDigit(digit) {
    const {displayValue, waitingForSecondOperand} = calculator;
    // if displayValue is 0 => append digit otherwise add another digit after it and display on screen
    if(waitingForSecondOperand == true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit; 
    }
}
console.log(calculator);
function inputDecimal(dot) {
    if(calculator.waitingForSecondOperand == true) return;
    if(!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}
// handling operators
function handleOperator(nextOperator) {
    const {firstOperand, displayValue, operator} = calculator;
    const inputValue = parseFloat(displayValue);
    if(operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }
    if(firstOperand == null) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation[operator](firstOperand, inputValue);
        calculator.displayValue = String(result);
    }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}
console.log(calculator);
const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '%': (firstOperand, secondOperand) => firstOperand % secondOperand,
    '=': (firstOperand, secondOperand) => {
        return secondOperand;
    }
};
function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}
function clearCalculator() {
    let values = document.getElementById("#calculator_display").displayValue;
    values = values.substr(0, values.length - 1);
}