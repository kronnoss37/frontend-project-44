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

const getSecondOperand = (mathOperator) => {
  let maxNumberInOperation = 50;
  if (mathOperator === '*') {
    maxNumberInOperation = 10;
  }
  return getRandomNumber(maxNumberInOperation);
};

export const prepareQuestionAndAnswer = () => {
  const firstNum = getRandomNumber(50);
  const mathOperator = getRandomMathOperator();
  const secondNum = getSecondOperand(mathOperator);

  const correctAnswer = calculateExpression(firstNum, mathOperator, secondNum);
  const qeuestionParam = makeQuestion(firstNum, mathOperator, secondNum);
  return [qeuestionParam, correctAnswer];
};

export const rulesOfTheGame = 'What is the result of the expression?';
