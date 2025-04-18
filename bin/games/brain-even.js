#!/usr/bin/env node

import {
  getRandomNumber, communicationWithUser, makeQuestion, isEvenNumber,
} from '../../src/index.js';

const getCorrectAnswerInThisGame = () => {
  const num = getRandomNumber();
  makeQuestion(num);
  return isEvenNumber(num);
};

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

communicationWithUser(rulesOfTheGame, getCorrectAnswerInThisGame);
