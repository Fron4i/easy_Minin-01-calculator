const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const mulBtn = document.getElementById('mul');
const diviBtn = document.getElementById('divi');
const submitBtn = document.getElementById('submit');
let action = '+';

plusBtn.onclick = function() {
	action = '+'
}

minusBtn.onclick = function() {
	action = '-'
}

mulBtn.onclick = function() {
	action = '*'
}

diviBtn.onclick = function() {
	action = '/'
}

function printResult(result) {
	if (result < 0) {
		resultElement.style.color = 'red';
	} else {
		resultElement.style.color = 'green';
	}
	resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionString) {
	const num1 = +inp1.value; 
	const num2 = +inp2.value; 

	if (actionString == '-') {
		return num1 - num2;
	} else if (actionString == '+') {
		return num1 + num2;
	} else if (actionString == '*') {
		return num1 * num2;
	} else if (actionString == '/') {
		return num1 / num2;
	}
}

submitBtn.onclick = function() {
	let sum = computeNumbersWithAction(input1, input2, action);
	printResult(sum);
}