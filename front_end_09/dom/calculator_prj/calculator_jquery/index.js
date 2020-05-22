// keep track value
const calculator = {
	displayValue: '0',
	firstOperand: null,
	pendingOperand: false,
	operator: null
};
// update display
updateDisplay = () => {
	const display = document.getElementById('display');
	display.value = calculator.displayValue;
}
updateDisplay();
// key presses
const keys = document.getElementById('key');
keys.addEventListener('click', (e) => {
	const { target } = e;
	if (!target.matches('input')) {
		return;
	}
	if (target.classList.contains('operand')) {
		getOperator(target.value);
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
	if (target.classList.contains('backspace')) {
		backSpace();
		updateDisplay();
		return;
	}
	inputDigit(target.value);
	updateDisplay();
})
// input digits
inputDigit = (digit) => {
	const { displayValue, pendingOperand } = calculator;
	if (pendingOperand == true) {
		calculator.displayValue = digit;
		calculator.pendingOperand = false;
	} else {
		calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
	}
	console.log(calculator);
}
// input decimal
inputDecimal = (dot) => {
	if (calculator.pendingOperand == true) return;
	if (!calculator.displayValue.includes(dot)) {
		calculator.displayValue += dot;
	}
}
// operator
getOperator = (nextOperator) => {
	const { firstOperand, displayValue, operator } = calculator;
	const inputValue = parseFloat(displayValue);
	if (operator && calculator.pendingOperand) {
		calculator.operator = nextOperator;
		console.log(operator);
		return;
	}

	if (firstOperand == null) {
		calculator.firstOperand = inputValue;
	} else if (operator) {
		const result = performCalculation[operator](firstOperand, inputValue);
		calculator.displayValue = String(result);
		calculator.firstOperand = result;
	}
	calculator.pendingOperand = true;
	calculator.operator = nextOperator;
	console.log(calculator);
}

const performCalculation = {
	'+': (firstOperand, pendingOperand) => firstOperand + pendingOperand,
	'-': (firstOperand, pendingOperand) => firstOperand - pendingOperand,
	'÷': (firstOperand, pendingOperand) => firstOperand / pendingOperand,
	'x': (firstOperand, pendingOperand) => firstOperand * pendingOperand,
	'%': (firstOperand, pendingOperand) => firstOperand % pendingOperand,
	'=': (firstOperand, pendingOperand) => pendingOperand
};
// reset calculator
clearAll = () => {
	calculator.displayValue = '0';
	calculator.firstOperand = null;
	calculator.pendingOperand = false;
	calculator.operator = null;
	console.log(calculator);
}
// backspace
backSpace = () => {
	let value = calculator.displayValue.slice(0, - 1);
	calculator.displayValue = value;
};
// function Math
const functionCal = (e) => {
	let currentNumb = Number(firstOperand.val());
	switch (e) {
		case 'x':
			console.log(Number, e);
			return currentNumb * currentNumb;
		case '&radic;':
			return Math.sqrt(currentNumb);
		case 'sin':
			return Math.sin(currentNumb);
		case 'cos':
			return Math.cos(currentNumb);
		case 'x!':
			return calFactorial(currentNumb);
	}
}

// change background color
const button = document.getElementById("color");
const body = document.querySelector("body");
const colors = ["orange", "gold", "violet", "cyan"];
body.style.backgroundColor = "gold";
button.addEventListener('click', changeColor);
function changeColor() {
	const colorId = parseInt(Math.random() * colors.length);
	body.style.backgroundColor = colors[colorId];
}