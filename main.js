const input = process.stdin
input.setEncoding('utf-8')

const Image = require('./images')
const image = new Image()

//User Stats
const gameState = {
	correctAns: 'ali',
	userGuess: '',
	totalGuesses: new Set(),
	score: 0,
	chances: 10,
	checkWinLoss: () => {
		let ans = []
		gameState.totalGuesses.add('a')
		gameState.totalGuesses.add('l')
		gameState.totalGuesses.add('i')
		for (let item of gameState.totalGuesses) {
			ans.push(item.toLowerCase())
		}

		ans = ans.join('')
		//Win
		if (gameState.correctAns.length === ans.length && gameState.chances > 0) {
			if (ans === gameState.correctAns) {
				console.log(`Congrats, you won the game! Your score is ${gameState.score}`)
			} else {
				console.log(`You Lose! Score ${gameState.score}`)
				process.exit()
			}
		} else if (gameState.chances > 0){

		}
	}
}
gameState.checkWinLoss()
// // Get Reader input
// input.on('data', (data) => {
// 	gameState.correctAns = gameState.correctAns.length > 0 ? gameState.correctAns.toLowerCase() : data.trim().toLowerCase()
	
// 	if (data === 'ex1') {
// 		process.exit()
// 	}

// 	gameState.userGuess = data.trim().toLowerCase()

// 	if (gameState.userGuess.length > 1 || gameState.userGuess <= 0) {
// 		console.log('Incorrect Input')
// 		gameState.userGuess = false
// 	}

// 	if (gameState.userGuess) {
// 		if (gameState.correctAns.includes(gameState.userGuess) && !gameState.totalGuesses.has(gameState.userGuess)) {
// 			gameState.score += 1
// 			image.viewGameStats()
// 		}
// 		else {
// 			gameState.chances -= 1
// 			image.viewGameStats()
// 		}
// 	}

// 	gameState.checkWinLoss()
// })

console.log('Welcome to the Hangman Game\n Please enter the word that you want your friends to guess')
