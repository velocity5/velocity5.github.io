const calculator = {
	displayValue: '0',
	firstOperand: null,
	waitingForSecondOperand: false,
	operator: null,
};

//--------------------------------------------------------
function updateDisplay() {
	const display = document.querySelector('.calculator_display');
	display.value = calculator.displayValue;
}
updateDisplay();
//------------------------------------------------
const keys = document.querySelector('.calculator_key');
keys.addEventListener('click', event => {
	const {target} = event;
		if (!target.matches('button'))
			return;
		if (target.classList.contains('operator')) {
			handleOperand(target.value);
			updateDisplay();
			return;
		}
		if (target.classList.contains('decimal')) {
			inputDecimal(target.value);
			updateDisplay();
			return;
		}
		if (target.classList.contains('all-clear')) {
			clearAll();
			updateDisplay();
			return;
		}
		inputDigit(target.value);
		updateDisplay();
});
//--------------------------------------------------------------
function inputDigit(digit) {
	const { displayValue, waitingForSecondOperand } = calculator;
	if (waitingForSecondOperand === true) {
		calculator.displayValue = digit;
		calculator.waitingForSecondOperand = false;
	} else {
	calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
	}
}

function inputDecimal(dot) {
	if (calculator.waitingForSecondOperand === true) return;
	if (!calculator.displayValue.includes(dot)) {
		calculator.displayValue += dot;
	}
}
//------------------------------------------------------------------
function handleOperand(nextOperator) {
	const { firstOperand, displayValue, operator} = calculator;
	const inputValue = parseFloat(displayValue);
	if (operator && calculator.waitingForSecondOperand) {
		calculator.operator = nextOperator;
		console.log(calculator);
		return;
	}

	if (firstOperand === null) {
		calculator.firstOperand = inputValue;
	} else if (operator) {
		const currentValue = firstOperand || 0;
		const result = performCalculation[operator](firstOperand, inputValue);
		calculator.displayValue = String(result);
		calculator.firstOperand = result;
	}
	calculator.waitingForSecondOperand = true;
	calculator.operator = nextOperator;
	console.log(calculator);
}
const performCalculation = {
	'/': (firstOperand, secondOperand) => firstOperand / secondOperand,
	'x': (firstOperand, secondOperand) => firstOperand * secondOperand,
	'+': (firstOperand, secondOperand) => firstOperand + secondOperand,
	'-': (firstOperand, secondOperand) => firstOperand - secondOperand,
	'%': (firstOperand, secondOperand) => firstOperand % secondOperand,
	'=': (firstOperand, secondOperand) => secondOperand
};

function clearAll() {
	calculator.displayValue = '0';
	calculator.firstOperand = null;
	calculator.waitingForSecondOperand = false;
	calculator.operator = null;
	console.log(calculator);
}
function back() {
	const display = document.querySelector('.calculator_display');
	let x = display.value;
	x = x.substring(0, x.length - 1);
	display.value = x;
}