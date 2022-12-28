#!/usr/bin/env node

import { getArgs } from "./helpers/args.js"
import { Arg } from './helpers/const.js'
import { getWeather } from "./services/api.service.js"
import { printError, printHelp, printSuccess, printWeather } from "./services/log.service.js"
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

const saveCity = async (city) => {
  if (!city?.trim?.()?.length) {
    printError('Token not provided')
    return
  }
  try {
    await saveKeyValue(Arg.city, city)
    printSuccess('City saved')
  } catch (error) {
    printError(error.message)
  }
}

const getForecast = async () => {
  try {
    const weather = await getWeather()
    printWeather(weather)
  } catch (error) {
    if (error?.response?.status === 404) {
      printError('Wrong city')
    }
    else if (error?.response?.status === 401) {
      printError('Wrong token')
    }
    else {
      printError(error.message)
    }
  }
}

const initCLI = () => {
  const args = getArgs(process.argv)

  if (args.h) {
    return printHelp()
  }

  if (args.s) {
    return saveCity(args.s)
  }

  if (args.t) {
    return saveToken(args.t)
  }
  return getForecast()
}

initCLI()
