import { getRandomNumber, makeQuestion, communicationWithUser } from '../index.js'

const calculateExpression = (firstOperand, mathOperator, secondOperand) => {
  switch (mathOperator) {
    case '+':
      return firstOperand + secondOperand
    case '-':
      return firstOperand - secondOperand
    case '*':
      return firstOperand * secondOperand
    default:
      return null // error?
  }
}

const getRandomMathOperator = () => {
  const arrayOfOperators = ['+', '-', '*']
  return arrayOfOperators[getRandomNumber(arrayOfOperators.length - 1)]
}

const getSecondOperand = (mathOperator) => {
  let maxNumberInOperation = 50
  if (mathOperator === '*') {
    maxNumberInOperation = 10
  }
  return getRandomNumber(maxNumberInOperation)
}

const prepareQuestionAndAnswer = () => {
  const firstNum = getRandomNumber(50)
  const mathOperator = getRandomMathOperator()
  const secondNum = getSecondOperand(mathOperator)

  const correctAnswer = calculateExpression(firstNum, mathOperator, secondNum)
  const questionParam = makeQuestion(firstNum, mathOperator, secondNum)
  return [questionParam, correctAnswer]
}

export default (userName) => {
  const rulesOfTheGame = 'What is the result of the expression?'
  communicationWithUser(rulesOfTheGame, prepareQuestionAndAnswer, userName)
}
