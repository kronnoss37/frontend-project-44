#!/usr/bin/env node

import handleError from '../src/utils/errorHandler.js'
import init from '../src/engine/gameRunner.js'
import runAllGames from '../src/engine/appRunner.js'

handleError(() => init(runAllGames))
