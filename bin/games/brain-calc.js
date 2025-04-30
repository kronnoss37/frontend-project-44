#!/usr/bin/env node

import { communicationWithUser } from '../../src/index.js';
import prepareQuestionAndAnswer from '../../src/games/calculator.js';

const rulesOfTheGame = 'What is the result of the expression?';

communicationWithUser(rulesOfTheGame, prepareQuestionAndAnswer);
