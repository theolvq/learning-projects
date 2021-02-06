//button selection
const btns = document.querySelectorAll('.btn')
const digits = document.querySelectorAll('.operand')
const operator = document.querySelectorAll('.operator')
const equal = document.querySelector('#equal')
const clear = document.querySelector('#clear')
const del = document.querySelector('#delete')
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

digits.forEach(digit =>
	digit.addEventListener('click', () => {
		calculator.operand = digit.textContent
		console.log(calculator.operand)
	})
)
