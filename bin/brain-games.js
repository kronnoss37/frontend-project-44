#!/usr/bin/env node

import handleError from '../src/utils/errorHandler.js'
import greetingUser from '../src/cli/cli.js'

handleError(greetingUser)
