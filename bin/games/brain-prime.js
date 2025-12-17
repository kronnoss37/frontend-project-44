#!/usr/bin/env node

import handleError from '../../src/utils/errorHandler.js'
import init from '../../src/engine/gameRunner.js'
import runDefinePrimeGame from '../../src/games/prime.js'

handleError(() => init(runDefinePrimeGame))
