import { getRandomNumber, makeQuestion } from '../index.js';

const calculateExpression = (firstOperand, mathOperator, secondOperand) => {
  switch (mathOperator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return null;
  }
};

const getRandomMathOperator = () => {
  const arrayOfOperators = ['+', '-', '*'];
  return arrayOfOperators[getRandomNumber(arrayOfOperators.length - 1)];
};

export const prepareQuestionAndAnswer = () => {
  let maxNumberInOperation = 50;
  const firstNum = getRandomNumber(maxNumberInOperation);
  const mathOperator = getRandomMathOperator();
  if (mathOperator === '*') {
    maxNumberInOperation = 10;
  }
  const secondNum = getRandomNumber(maxNumberInOperation);

  const correctAnswer = calculateExpression(firstNum, mathOperator, secondNum);
  const qeuestionParam = makeQuestion(firstNum, mathOperator, secondNum);
  return [qeuestionParam, correctAnswer];
};

export const rulesOfTheGame = 'What is the result of the expression?';
