const gameBoard = (() => {
	let _boardState = ['', '', '', '', '', '', '', '', '']
	const gameSquares = document.querySelectorAll('.square')

	const render = () => {
		gameSquares.forEach((square, i) => {
			square.innerText = _boardState[i]
		})
	}

	const playTurn = e => {
		let i = e.target.dataset.index
		switch (player1.turn) {
			case true:
				_boardState.splice(i, 1, player1.id)
				player1.turn = false
				player2.turn = true
				break
			case false:
				_boardState.splice(i, 1, player2.id)
				player1.turn = true
				player2.turn = false
				break
			default:
				console.log('not working')
		}
		console.log(_boardState)
	}

	return {
		gameSquares,
		render,
		playTurn,
	}
})()

const game = (() => {
	// some code
	const getTurn = () => {
		switch (player1.id) {
			case true:
				player1.id = false
				player2.id = true
				break
			case false:
				player1.id = true
				player2.id = false
				break
		}
	}
	return {
		// object to return
	}
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

gameBoard.gameSquares.forEach(square =>
	square.addEventListener('click', gameBoard.playTurn)
)
gameBoard.gameSquares.forEach(square =>
	square.addEventListener('click', gameBoard.render)
)
