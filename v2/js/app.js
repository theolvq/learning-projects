// Object literal
const calculator = {}

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
// const add = (a, b) =>
// 	(result.innerText = (parseFloat(a) + parseFloat(b)).toFixed(6))
// const subtract = (a, b) =>
// 	(result.innerText = (parseFloat(a) - parseFloat(b)).toFixed(6))
// const multiply = (a, b) =>
// 	(result.innerText = (parseFloat(a) * parseFloat(b)).toFixed(6))
// const divide = (a, b) =>
// 	(result.innerText = (parseFloat(a) / parseFloat(b)).toFixed(6))

const operate = () => {
	let num1 = calculator.previousOperand
	let num2 = calculator.currentOperand
	let operator = calculator.operator
	let operationResult
	switch (operator) {
		case '+':
			operationResult = parseFloat(num1) + parseFloat(num2)
			break
		case '-':
			operationResult = parseFloat(num1) - parseFloat(num2)
			break
		case 'x':
			operationResult = parseFloat(num1) * parseFloat(num2)
			break
		case '÷':
			operationResult = parseFloat(num1) / parseFloat(num2)
			break
	}
	display.innerText =
		calculator.previousOperand +
		calculator.operator +
		calculator.currentOperand
	result.innerText = operationResult
}

//General functions
const appendNumber = e => {
	if (!calculator.currentOperand) {
		calculator.currentOperand = e.target.textContent
		result.innerText = calculator.currentOperand
	} else if (calculator.currentOperand && !calculator.operator) {
		calculator.currentOperand += e.target.textContent
		result.innerText = calculator.currentOperand
	} else if (calculator.operator && !calculator.previousOperand) {
		calculator.previousOperand = calculator.currentOperand
		calculator.currentOperand = e.target.textContent
		display.innerText = calculator.previousOperand + calculator.operator
		result.innerText = calculator.currentOperand
	} else if (calculator.previousOperand) {
		calculator.currentOperand += e.target.textContent
		result.innerText = calculator.currentOperand
	}
}

const getOperator = e => {
	if (!calculator.operator) {
		calculator.operator = e.target.textContent
	}
	display.innerText = calculator.currentOperand + calculator.operator
	result.innerText = ''
}

const clearAll = () => {
	calculator.currentOperand = undefined
	calculator.previousOperand = undefined
	calculator.operator = undefined
	result.innerText = ''
	display.innerText = ''
}

const deleteOne = () => {
	calculator.currentOperand = calculator.currentOperand.slice(0, -1)
	result.innerText = calculator.currentOperand
}

// Event listeners
digits.forEach(digit => digit.addEventListener('click', appendNumber))

operators.forEach(operator => operator.addEventListener('click', getOperator))

equal.addEventListener('click', operate)

clear.addEventListener('click', clearAll)

del.addEventListener('click', deleteOne)
