#!/usr/bin/env node

import { communicationWithUser } from '../../src/index.js';
import prepareQuestionAndAnswer from '../../src/games/even.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

communicationWithUser(rulesOfTheGame, prepareQuestionAndAnswer);
