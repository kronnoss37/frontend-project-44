import { getRandomNumber, makeQuestion, communicationWithUser } from '../index.js'

const isEvenNumber = num => num % 2 === 0

const getCorrectAnswer = num => (isEvenNumber(num) ? 'yes' : 'no')

const prepareQuestionAndAnswer = () => {
  const num = getRandomNumber()
  const correctAnswer = getCorrectAnswer(num)
  const questionParam = makeQuestion(num)
  return [questionParam, correctAnswer]
}

export default (userName) => {
  const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".'
  communicationWithUser(rulesOfTheGame, prepareQuestionAndAnswer, userName)
}
