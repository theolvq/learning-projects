//button selection
const btns = document.querySelectorAll('.btn')
const digits = document.querySelectorAll('.operand')
const operators = document.querySelectorAll('.operator')
const equal = document.querySelector('#equal')
const clear = document.querySelector('#clear')
const del = document.querySelector('#delete')
const result = document.querySelector('.result')
const display = document.querySelector('.display')

// operation functions
const add = (a, b) => parseFloat(a) + parseFloat(b)
const subtract = (a, b) => parseFloat(a) - parseFloat(b)
const multiply = (a, b) => parseFloat(a) * parseFloat(b)
const divide = (a, b) => parseFloat(a) / parseFloat(b)

const operate = (n1, n2, operator) => {
	switch (operator) {
		case '+':
			add(n1, n2)
			break
		case '-':
			subtract(n1, n2)
			break
		case 'x':
			multiply(n1, n2)
			break
		case '÷':
			divide(n1, n2)
			break
	}
}

// Object literal
const calculator = {}

//General functions
const appendNumber = e => {
	if (!calculator.currentOperand) {
		calculator.currentOperand = e.target.textContent
		result.innerText = calculator.currentOperand
	} else if (calculator.currentOperand) {
		calculator.currentOperand += e.target.textContent
		result.innerText = calculator.currentOperand
	} else if (calculator.operator) {
		calculator.previousOperand = calculator.currentOperand
		calculator.currentOperand = e.target.textContent
		display.innerText = calculator.previousOperand
		result.innerText = ''
	}
}

const getOperator = e => {
	if (!calculator.operator) {
		calculator.operator = e.target.textContent
	}
	console.log(calculator.operator)
}

// Event listeners
digits.forEach(digit => digit.addEventListener('click', appendNumber))

operators.forEach(operator => operator.addEventListener('click', getOperator))

equal.addEventListener('click', () => {
	operate(
		calculator.previousOperand,
		calculator.currentOperand,
		calculator.operator
	)
})
