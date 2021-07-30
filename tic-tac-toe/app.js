const gameBoard = (() => {
	let boardState = ['', '', '', '', '', '', '', '', '']
	const gameSquares = document.querySelectorAll('.square')
	const resetBtn = document.querySelector('#reset')
	const resultDisplay = document.querySelector('p')

	const render = () => {
		setTimeout(
			() =>
				gameSquares.forEach((square, i) => {
					square.innerText = boardState[i]
				}),
			100
		)
	}

	const reset = () => {
		boardState = boardState.map(el => (el = ''))
		player1.turn = true
		player2.turn = false
		render()
	}

	const playTurn = e => {
		let i = e.target.dataset.index
		switch (player1.turn) {
			case true:
				if (boardState[i]) return
				boardState.splice(i, 1, player1.id)
				player1.turn = false
				player2.turn = true
				break
			case false:
				if (boardState[i]) return
				boardState.splice(i, 1, player2.id)
				player1.turn = true
				player2.turn = false
				break
			default:
				console.log('not working')
		}

		render()
	}

	const gameOver = () => {
		console.log(boardState)
		gameBoard.boardState.forEach((el, i) => {
			switch (el) {
				case 'x':
					// checking for row
					if (
						(el === boardState[1] &&
							el === boardState[0] &&
							el === boardState[2]) ||
						(el === boardState[3] &&
							el === boardState[4] &&
							el === boardState[5]) ||
						(el === boardState[6] &&
							el === boardState[7] &&
							el === boardState[8])
					) {
						player1.win = true
					}
					// checking for column
					else if (
						(el === boardState[0] &&
							el === boardState[3] &&
							el === boardState[6]) ||
						(el === boardState[1] &&
							el === boardState[4] &&
							el === boardState[7]) ||
						(el === boardState[2] &&
							el === boardState[5] &&
							el === boardState[8])
					) {
						player1.win = true
					}
					// checking for diagonal
					else if (
						(el === boardState[0] &&
							el === boardState[4] &&
							el === boardState[8]) ||
						(el === boardState[2] &&
							el === boardState[4] &&
							el === boardState[6])
					) {
						player1.win = true
					} else {
						player1.win = false
					}
				case 'o':
					// checking for row
					if (
						(el === boardState[1] &&
							el === boardState[0] &&
							el === boardState[2]) ||
						(el === boardState[3] &&
							el === boardState[4] &&
							el === boardState[5]) ||
						(el === boardState[6] &&
							el === boardState[7] &&
							el === boardState[8])
					) {
						player2.win = true
					}
					// checking for column
					else if (
						(el === boardState[0] &&
							el === boardState[3] &&
							el === boardState[6]) ||
						(el === boardState[1] &&
							el === boardState[4] &&
							el === boardState[7]) ||
						(el === boardState[2] &&
							el === boardState[5] &&
							el === boardState[8])
					) {
						player2.win = true
					}
					// checking for diagonal
					else if (
						(el === boardState[0] &&
							el === boardState[4] &&
							el === boardState[8]) ||
						(el === boardState[2] &&
							el === boardState[4] &&
							el === boardState[6])
					) {
						player2.win = true
					} else {
						player2.win = false
					}
			}
			if (player1.win === true && player2.win === false) {
				resultDisplay.innerText = 'Player 1 Wins'
			} else if (player1.win === false && player2.win === true) {
				resultDisplay.innerText = 'Player 2 Wins'
			} else if (player1.win === false && player2.win === false) {
				resultDisplay.innerText = "It's a tie!"
			}
		})
	}

	gameSquares.forEach(square => square.addEventListener('click', playTurn))
	resetBtn.addEventListener('click', reset)

	return {
		boardState,
		gameOver,
	}
})()

const game = (() => {
	return {}
})()

const displayController = (() => {
	// Code code

	return {
		//object to return
	}
})()

const Player = (name, id, turn) => {
	return {
		name,
		id,
		turn,
	}
}

const player1 = Player('Theo', 'x', true)
const player2 = Player('Kristina', 'o', false)

window.addEventListener('click', gameBoard.gameOver)

// gameBoard.gameSquares.forEach(square =>
// 	square.addEventListener('click', gameBoard.playTurn)
// )
