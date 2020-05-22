let currentVal = "", number, decimal, equal, operator;
let display = document.forms['myForm']['display'];

function getNumber(num) {
	if (equal) {
		currentVal = num;
		display.value = currentVal;
		number = true;
		equal = false;
	}
	else {
		currentVal = display.value + num;
		display.value = currentVal;
		number = true;
	}
	if (operator) {
		decimal = false;
	}
}

function getOperand(op) {
	display.value = currentVal + op;
	operator = true;
	equal = false;
}
function getDecimal() {
	if (number && !decimal) {
		display.value = currentVal + '.';
		decimal = true;
		operator = false;
	}
}

function compute() {
	if (currentVal) {
		currentVal = eval(currentVal);
		display.value = currentVal;
		equal = true;
		decimal = false;
		number = false;
	}
}

function allClear() {
	currentVal = '';
	display.value = currentVal;
	decimal = false;
}

function backSpace() {
	currentVal = display.value;
	currentVal = currentVal.substr(0, currentVal.length - 1);
	display.value = currentVal;
}

function squareRoot(x) {
	if (x == 'root') {
		currentVal = Math.sqrt(currentVal);
		display.value = currentVal;
	}
	else if (x == 'square') {
		currentVal = currentVal * currentVal;
		display.value = currentVal;
	}
}
function sincosCal(x) {
	if (x == 'sin') {
		currentVal = Math.sin(currentVal);
		display.value = currentVal;
	}
	else if (x == 'cos') {
		currentVal = Math.cos(currentVal);
		display.value = currentVal;
	}
}
function getFactorial() {
	if (currentVal) {
		let result = 1;
		for (let i = 1; i <= currentVal; i++) {
			result = result * i;
		}
		display.value = result;
	}
}