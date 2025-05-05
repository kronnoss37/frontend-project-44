#!/usr/bin/env node

import { communicationWithUser } from '../../src/index.js';
import { prepareQuestionAndAnswer, rulesOfTheGame } from '../../src/games/progression.js';

communicationWithUser(rulesOfTheGame, prepareQuestionAndAnswer);
