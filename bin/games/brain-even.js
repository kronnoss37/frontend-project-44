#!/usr/bin/env node

import { getRandomNumber, communicationWithUser, isEvenNumber } from '../../src/index.js';

const getCorrectAnswer = (num) => (isEvenNumber(num) ? 'yes' : 'no');

const prepareQuestionAndAnswer = () => {
  const num = getRandomNumber();
  const correctAnswer = getCorrectAnswer(num);
  return [[num], correctAnswer];
};

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

communicationWithUser(rulesOfTheGame, prepareQuestionAndAnswer);
