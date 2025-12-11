import { getRandomNumber, makeQuestion, communicationWithUser } from '../index.js'

const isEvenNumber = num => num % 2 === 0

const getCorrectAnswer = num => (isEvenNumber(num) ? 'yes' : 'no')

const prepareQuestionAndAnswer = () => {
  const num = getRandomNumber()
  const correctAnswer = getCorrectAnswer(num)
  const qeuestionParam = makeQuestion(num)
  return [qeuestionParam, correctAnswer]
}

export default () => {
  const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".'
  communicationWithUser(rulesOfTheGame, prepareQuestionAndAnswer)
}
