#!/usr/bin/env node

import handleError from '../../src/utils/errorHandler.js'
import init from '../../src/engine/gameRunner.js'
import runCalculatorGame from '../../src/games/calculator.js'

handleError(() => init(runCalculatorGame))
