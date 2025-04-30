#!/usr/bin/env node
import { communicationWithUser } from '../../src/index.js';
import prepareQuestionAndAnswer from '../../src/games/progression.js';

const rulesOfTheGame = 'What number is missing in the progression?';

communicationWithUser(rulesOfTheGame, prepareQuestionAndAnswer);
