#!/usr/bin/env node

import { communicationWithUser, getRandomNumber, getRandomMathOperator } from '../../src/index.js';

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

const prepareQuestionAndAnswer = () => {
  let maxNumberInOperation = 50;
  const firstNum = getRandomNumber(maxNumberInOperation);
  const mathOperator = getRandomMathOperator();
  if (mathOperator === '*') {
    maxNumberInOperation = 10;
  }
  const secondNum = getRandomNumber(maxNumberInOperation);

  const mathExpression = [firstNum, mathOperator, secondNum];
  const correctAnswer = calculateExpression(...mathExpression);
  return [mathExpression, correctAnswer];
};

const rulesOfTheGame = 'What is the result of the expression?';

communicationWithUser(rulesOfTheGame, prepareQuestionAndAnswer);
