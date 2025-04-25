#!/usr/bin/env node
import { communicationWithUser, getRandomNumber } from '../../src/index.js';

const makeProgression = (num, step) => {
  const resultProgression = [];
  const amountOfNumsInProgression = 10;
  let currentNum = num;

  for (let i = 0; i < amountOfNumsInProgression; i += 1) {
    resultProgression[i] = currentNum;
    currentNum += step;
  }

  return resultProgression;
};

const prepareQuestionAndAnswer = () => {
  const stepOfProgression = getRandomNumber(20, 1);
  const firstNumInProgression = getRandomNumber(20, 1);
  const progression = makeProgression(firstNumInProgression, stepOfProgression);

  const indexOfMissingNum = getRandomNumber(9);
  const conversationOfNum = progression[indexOfMissingNum];
  progression[indexOfMissingNum] = '..';
  return [progression, conversationOfNum];
};

const rulesOfTheGame = 'What number is missing in the progression?';

communicationWithUser(rulesOfTheGame, prepareQuestionAndAnswer);
