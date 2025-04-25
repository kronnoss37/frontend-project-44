#!/usr/bin/env node
import { communicationWithUser, getRandomNumber, isPrimeNumber } from '../../src/index.js';

const getCorrectAnswer = (...num) => (isPrimeNumber(num) ? 'yes' : 'no');

const prepareQuestionAndAnswer = () => {
  const num = getRandomNumber();
  const correctAnswer = getCorrectAnswer(num);
  return [[num], correctAnswer];
};

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

communicationWithUser(rulesOfTheGame, prepareQuestionAndAnswer);
