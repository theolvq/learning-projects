const gameBoard = (() => {
	let _boardState = ['', '', '', '', '', '', '', '', '']
	const gameSquares = document.querySelectorAll('.square')
	const resetBtn = document.querySelector('#reset')

	const render = () => {
		gameSquares.forEach((square, i) => {
			square.innerText = _boardState[i]
		})
	}

	const reset = () => {
		_boardState = _boardState.map(el => (el = ''))
		player1.turn = true
		player2.turn = false
		render()
	}

	const playTurn = e => {
		let i = e.target.dataset.index
		switch (player1.turn) {
			case true:
				if (_boardState[i]) return
				_boardState.splice(i, 1, player1.id)
				player1.turn = false
				player2.turn = true
				render()
				break
			case false:
				if (_boardState[i]) return
				_boardState.splice(i, 1, player2.id)
				player1.turn = true
				player2.turn = false
				render()
				break
			default:
				console.log('not working')
		}
	}

	gameSquares.forEach(square => square.addEventListener('click', playTurn))
	resetBtn.addEventListener('click', reset)

	return {}
})()

const game = (() => {
	// some code
	const getTurn = () => {}
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

// gameBoard.gameSquares.forEach(square =>
// 	square.addEventListener('click', gameBoard.playTurn)
// )
