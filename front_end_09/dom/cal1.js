
let display = document.getElementById('calculator_display');
function getNumber(num) {
	switch(num) {
		case 1:
			display.value += '1';
			break;
		case 2:
			display.value += '2';
			break;
		case 3:
			display.value += '3';
			break;
		case 4:
			display.value += '4';
			break;
		case 5:
			display.value += '5';
			break;
		case 6:
			display.value += '6';
			break;
		case 7:
			display.value += '7';
			break;
		case 8:
			display.value += '8';
			break;
		case 9:
			display.value += '9';
			break;
		case 0:
			display.value += '0';
			break;
	}
}
// get operand
function getOperand(operand) {
	switch(operand) {
		case '+':
			display.value += '+';
			break;
		case '-':
			display.value += '-';
			break;
		case '*':
			display.value += '*';
			break;
		case '/':
			display.value += '/';
			break;
		case '%':
			display.value += '%';
			break;

	}
}

// clear screen
function clearScreen() {
	document.getElementById('calculator_display').value = "";
	document.getElementById('answer').value = "";
}
// backspace function
function backScreen() {
	let x = display.value;
	if (x.length > 0) {
		x = x.substring(0, x.length - 1);
		display.value = x;
	}
}
function comPute() {
	let ans = eval(display.value);
	document.getElementById('answer').value = ans;
}
let i = 0;
function getDecimal() {
	if (i == 0) {
		display.value += '.';	
		i = 1;
	} 
}
