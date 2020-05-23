let currentVal = "", number, decimal, equal, operator;
let display = document.forms['myForm']['display'];
// let ct;
$(document).ready(function () {
	$(".number").click(function () {
		// if (!operator) { $("#display").val("") }
		Val = $(this).val(); /* get number and assign to currentVal*/
		console.log(Val);
		dp = $("#display").val();/* get display value */
		if (dp) {
			$("#display").val(dp + Val);
		}
		else {
			$("#display").val(Val);
		}

		if (dp) { currentVal = dp + Val; }
		else { currentVal = Val; }
	});

	$("#decimal").click(function () {
		$("#display").val(currentVal + '.');
		decimal = true;
		operator = false;
	})
	$("#percent").click(function () {
		$("#display").val(currentVal / 100);
	})

	$("#allClear").click(function () {
		$("#display").val('');
	})
	$("#backSpace").click(function () {
		$("#display").val($("#display").val()
			.substr(0, $("#display").val().length - 1));
	})
	$("#equal").click(function () {
		if (operator === "x") {
			result = eval($("#display").val().replace("x", "*"));
		}
		else if (operator === "/") {
			result = eval($("#display").val().replace("÷", "/"));
		}
		else {
			result = eval($("#display").val());
		}
		currentVal = result;
		$("#display").val(result);
		operator = false;
	})

});

function getOperand(op) {
	display.value = currentVal + op;
	if (op === "*") {
		display.value = currentVal + op.replace("*", "x");
		return operator = "x";
	}
	else if (op === "/") {
		display.value = currentVal + op.replace("/", "÷");
		return operator = "/";
	}
	operator = true;
	equal = false;
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
// change background color
const button = document.getElementsByClassName('btn-grad');
const body = document.querySelector('body');
const colors = ['crimson', 'orange', 'green', 'cyan'];
body.style.backgroundColor = 'violet';
$(button).click(function () {
	const colorIndex = parseInt(Math.random() * colors.length);
	body.style.backgroundColor = colors[colorIndex];
})