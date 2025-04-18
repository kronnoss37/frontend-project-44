#!/usr/bin/env node

import {
  communicationWithUser, makeQuestion, getRandomNumber, getRandomMathOperator, calculateExpression,
} from '../../src/index.js';

const getCorrectAnswerInThisGame = () => {
  let maxNumberInOperation = 50;
  const firstNum = getRandomNumber(maxNumberInOperation);
  const mathOperator = getRandomMathOperator();
  if (mathOperator === '*') {
    maxNumberInOperation = 10;
  }
  const secondNum = getRandomNumber(maxNumberInOperation);
  makeQuestion(firstNum, mathOperator, secondNum);
  return calculateExpression(firstNum, secondNum, mathOperator);
};

const rulesOfTheGame = 'What is the result of the expression?';

communicationWithUser(rulesOfTheGame, getCorrectAnswerInThisGame);
