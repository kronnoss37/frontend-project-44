import runDefineEvenGame from '../games/even.js'
import runCalculatorGame from '../games/calculator.js'
import runDefineGCDGame from '../games/gcd.js'
import runProgressionGame from '../games/progression.js'
import runDefinePrimeGame from '../games/prime.js'

const gameList = {
  1: runDefineEvenGame,
  2: runCalculatorGame,
  3: runDefineGCDGame,
  4: runProgressionGame,
  5: runDefinePrimeGame,
}

const defineGame = gameNumber => gameList[gameNumber]

export default defineGame
