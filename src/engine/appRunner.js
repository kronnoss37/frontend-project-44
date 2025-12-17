import readlineSync from 'readline-sync'
import defineGame from '../registry/gameRegistry.js'

const validateUserInput = (userInput) => {
  const normalizedInput = Number(userInput)

  if (!Number.isInteger(normalizedInput)) {
    throw new Error('Input data must be a number')
  }

  if (normalizedInput < 1 || normalizedInput > 5) {
    throw new Error('Input data is invalid. Please enter any number from 1 to 5 to select a game.')
  }
}

const getQuestionMessage = () => {
  const gameMenu = [
    'Check if a Number is Even',
    'Calculator',
    'Find the Greatest Common Divisor',
    'Arithmetic Progression',
    'Check is a Number id Prime',
  ]
  const enterRule = 'Select a game'
  const gamesString = gameMenu.map((gameName, i) => `${i + 1} - ${gameName}`).join('\n')
  const inputMessage = 'Enter the game number'

  return `${enterRule}:\n${gamesString}\n${inputMessage}: `
}

const runAllGames = (userName) => {
  const questionMessage = getQuestionMessage()

  while (true) {
    const userInput = readlineSync.question(questionMessage)

    validateUserInput(userInput)

    const runGame = defineGame(userInput)
    runGame(userName)

    const userExitInput = readlineSync.question('Enter "q" or "exit" to exit, or something else to continue: ')
    if (userExitInput === 'q' || userExitInput === 'exit') {
      console.log('Thanks for the game. See you next time!')
      break
    }
  }
}

export default runAllGames
