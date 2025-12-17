#!/usr/bin/env node

import handleError from '../../src/utils/errorHandler.js'
import init from '../../src/engine/gameRunner.js'
import runDefineEvenGame from '../../src/games/even.js'

handleError(() => init(runDefineEvenGame))
