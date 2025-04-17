#!/usr/bin/env node

import { getRandomExpression, communicationWithUser } from '../../src/index.js';

const getCorrectAnswerInThisGame = (mathExpression) => {
  const arrayElements = mathExpression.split(' ');
  const mathOperator = arrayElements[1];
  const firstOperand = Number(arrayElements[0]);
  const secondOperand = Number(arrayElements[2]);

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

const rulesOfTheGame = 'What is the result of the expression?';

communicationWithUser(rulesOfTheGame, getRandomExpression, getCorrectAnswerInThisGame);
