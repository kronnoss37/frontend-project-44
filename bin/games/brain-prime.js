#!/usr/bin/env node
import { communicationWithUser } from '../../src/index.js';
import prepareQuestionAndAnswer from '../../src/games/prime.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

communicationWithUser(rulesOfTheGame, prepareQuestionAndAnswer);
