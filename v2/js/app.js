const btns = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
const result = document.querySelector('.result');
const equal = document.querySelector('#equal');
const operator = document.querySelectorAll('.operator');

btns.forEach(btn =>
	btn.addEventListener('click', e => {
		let currentOperandTextContent = e.target.textContent;
		let previousOperandTextContent = currentOperandTextContent;
		display.textContent = currentOperandTextContent;
	})
);

equal.addEventListener('click', () => {
	switch (operator) {
		case '÷':
			result.textContent = current;
	}
});
