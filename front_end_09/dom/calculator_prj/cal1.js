let val = "", number, decimal, equal, operator, allowSquareRoot = true;
let display = document.forms['myForm']['display'];

function getNumber(num) {
	if (equal) {
		val = num;
		display.value = val;
		number = true;
		equal = false;
	}
	else {
		val = display.value + num;
		display.value = val;
		number = true;
	}
	if (operator) {
		decimal = false;
	}
	squareRoot('a');
}

function getOperand(op) {
	display.value = val + op;
	operator = true;
	equal = false;
	allowSquareRoot = false;
	squareRoot('a');
}
function getDecimal() {
	if (number && !decimal) {
		display.value = val + '.';
		decimal = true;
		operator = false;
	}
}

function compute() {
	if (val) {
		val = eval(val);
		display.value = val;
		equal = true;
		decimal = false;
		number = false;
		allowSquareRoot = true;
		squareRoot('a');
	}
}

function allClear() {
	val = '';
	display.value = val;
	decimal = false;
}

function backSpace() {
	val = display.value;
	val = val.substr(0, val.length - 1);
	display.value = val;
}

function squareRoot(x) {
	if (x == 'r') {
		val = Math.sqrt(val);
		display.value = val;
	}
	else if (x == 's') {
		val = val * val;
		display.value = val;
	}
	else if (x == 'a' && allowSquareRoot) {
		document.getElementById('r').disabled = false;
		document.getElementById('s').disabled = false;
	}
	else if (!allowSquareRoot) {
		document.getElementById('r').disabled = true;
		document.getElementById('s').disabled = true;
	}
}