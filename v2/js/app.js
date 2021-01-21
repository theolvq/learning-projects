const btns = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
const result = document.querySelector('.result');
const equal = document.querySelector('#equal');
const operator = document.querySelectorAll('.operator');
const operand = document.querySelectorAll('.operand');

const add = (a, b) => parseFloat(a) + parseFloat(b);
const subtract = (a, b) => parseFloat(a) - parseFloat(b);
const multiply = (a, b) => parseFloat(a) * parseFloat(b);
const divide = (a, b) => parseFloat(a) / parseFloat(b);

const operate = (n1, n2, operator) => {
	switch (operator) {
		case '+':
			return add(n1, n2);
		case '-':
			return subtract(n1, n2);
		case 'x':
			return multiply(n1, n2);
		case '÷':
			return divide(n1, n2);
	}
};

operand.forEach(button =>
	button.addEventListener('click', () => appendNumber(button.innerText))
);

const appendNumber = () => {};
