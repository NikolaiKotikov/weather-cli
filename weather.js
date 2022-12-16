#!/usr/bin/env node

import { getArgs } from "./helpers/args.js"
import { printHelp } from "./services/log.service.js"

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
  }

  // output weather
}

initCLI()
