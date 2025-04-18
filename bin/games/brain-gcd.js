#!usr/bin/env node
import {
  getRandomNumber, makeQuestion, communicationWithUser, calculateGCD,
} from '../../src/index.js';

const getCorrectAnswerInThisGame = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  makeQuestion(firstNum, secondNum);
  return calculateGCD(firstNum, secondNum);
};

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

communicationWithUser(rulesOfTheGame, getCorrectAnswerInThisGame);
