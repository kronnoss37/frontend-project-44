#!/usr/bin/env node

import { getRandomNumber, communicationWithUser } from '../src/index.js';

const getCorrectAnswerInThisGame = (num) => (num % 2 === 0 ? 'yes' : 'no');

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

communicationWithUser(rulesOfTheGame, getRandomNumber, getCorrectAnswerInThisGame);
