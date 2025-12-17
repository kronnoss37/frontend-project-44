#!/usr/bin/env node

import handleError from '../../src/utils/errorHandler.js'
import init from '../../src/engine/gameRunner.js'
import runProgressionGame from '../../src/games/progression.js'

handleError(() => init(runProgressionGame))
