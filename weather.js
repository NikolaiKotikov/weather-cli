#!/usr/bin/env node

import { getArgs } from "./helpers/args.js"

const initCLI = () => {
  const args = getArgs(process.argv)

  if (args.h) {
    // help
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