#!/usr/bin/env node
import {
  communicationWithUser, makeQuestion, getRandomNumber, makeProgression,
} from '../../src/index.js';

const getCorrectAnswerInThisGame = () => {
  const stepOfProgression = getRandomNumber(20, 1);
  const firstNumInProgression = getRandomNumber(20, 1);
  const progression = makeProgression(firstNumInProgression, stepOfProgression);

  const indexOfMissingNum = getRandomNumber(9);
  const conversationOfNum = progression[indexOfMissingNum];
  progression[indexOfMissingNum] = '..';
  makeQuestion(progression.join(' '));
  return conversationOfNum;
};

const rulesOfTheGame = 'What number is missing in the progression?';

communicationWithUser(rulesOfTheGame, getCorrectAnswerInThisGame);
