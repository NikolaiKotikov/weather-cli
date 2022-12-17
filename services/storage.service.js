import { homedir } from 'os'
import { join } from 'path'
import { promises } from 'fs'

const filePath = join(homedir(), 'weather-data.json')

const isExists = async (path) => {
  try {
    await promises.stat(path)
  } catch (error) {
    return false
  }
}

const saveKeyValue = async (key, value) => {
  const data = {}
  if (await isExists(filePath)) {
    const file = await promises.readFile(filePath)
    data = JSON.parse(file)
  }
  data[key] = value
  await promises.writeFile(filePath, JSON.stringify(data))
}

export { saveKeyValue }
