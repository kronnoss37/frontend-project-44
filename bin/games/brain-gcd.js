#!/usr/bin/env node

import handleError from '../../src/utils/errorHandler.js'
import init from '../../src/engine/gameRunner.js'
import runDefineGCDGame from '../../src/games/gcd.js'

handleError(() => init(runDefineGCDGame))
