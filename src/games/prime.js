import { getRandomNumber, makeQuestion, communicationWithUser } from '../index.js'

const isPrimeNumber = (num) => {
  if (num <= 1) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (!(num % i) && num !== i) {
      return false
    }
  }
  return true
}

const getCorrectAnswer = (...num) => (isPrimeNumber(num) ? 'yes' : 'no')

const prepareQuestionAndAnswer = () => {
  const num = getRandomNumber()
  const correctAnswer = getCorrectAnswer(num)
  const qeuestionParam = makeQuestion(num)
  return [qeuestionParam, correctAnswer]
}

export default () => {
  const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  communicationWithUser(rulesOfTheGame, prepareQuestionAndAnswer)
}
