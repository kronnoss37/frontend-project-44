#!/usr/bin/env node
import {
  communicationWithUser, makeQuestion, getRandomNumber, isPrimeNumber,
} from '../../src/index.js';

const getCorrectAnswerInThisGame = () => {
  const num = getRandomNumber();
  makeQuestion(num);
  return isPrimeNumber(num);
};

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

communicationWithUser(rulesOfTheGame, getCorrectAnswerInThisGame);
