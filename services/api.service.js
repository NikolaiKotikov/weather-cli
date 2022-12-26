import axios from "axios"
import { API_URL, Arg } from '../helpers/const.js'
import { getKeyValue } from './storage.service.js'

export const getWeather = async (city) => {
    const token = await getKeyValue(Arg.token)
    if (!token) {
        throw new Error('Token not found. Set token with command -t [API_KEY]')
    }
    const { data } = await axios.get(API_URL, {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric'
        }
    })
    return data
}
