#!/usr/bin/env node

import { communicationWithUser } from '../../src/index.js';
import prepareQuestionAndAnswer from '../../src/games/gcd.js';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

communicationWithUser(rulesOfTheGame, prepareQuestionAndAnswer);
