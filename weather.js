#!/usr/bin/env node

import { getArgs } from "./helpers/args.js"
import { Arg } from './helpers/const.js'
import { getWeather } from "./services/api.service.js"
import { printError, printHelp, printSuccess } from "./services/log.service.js"
import { saveKeyValue } from "./services/storage.service.js"

const saveToken = async (token) => {
  if (!token?.trim?.()?.length) {
    printError('Token not provided')
    return
  }
  try {
    await saveKeyValue(Arg.token, token)
    printSuccess('Token Saved')
  } catch (error) {
    printError(error.message)
  }
}

const initCLI = () => {
  const args = getArgs(process.argv)

  if (args.h) {
    // help
    printHelp()
  }

  if (args.s) {
    // save city
  }

  if (args.t) {
    // save token
    return saveToken(args.t)
  }

  // output weather
  getWeather('moscow')
}

initCLI()
