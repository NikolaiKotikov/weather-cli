import axios from "axios";
import got from 'got';
import { API_URL, Arg, ICON_BASE_URL } from '../helpers/const.js';
import { getKeyValue } from './storage.service.js';

export const getWeather = async () => {
    const token = await getKeyValue(Arg.token)
    const city = await getKeyValue(Arg.city)
    if (!token) {
        throw new Error('Token not found. Set token with command -t [API_KEY]')
    }
    if (!token) {
        throw new Error('City not found. Set city with command -s [City]')
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

export const getIcon = async (code) => {
    const url = `${ICON_BASE_URL}${code}.png`
    const data = await got(url).buffer()
    return data
}
