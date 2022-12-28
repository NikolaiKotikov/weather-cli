import chalk from 'chalk';
import dedent from 'dedent';
import terminalImage from 'terminal-image';
import { getIcon } from './api.service.js';

const printError = (error) => {
    console.log(chalk.bgRed('ERROR'), error)
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen('SUCCESS'), message)
}

const printHelp = () => {
    console.log(
        dedent`${chalk.magenta(' HELP ')}
            Without params - show weather
            -s [CITY] set city
            -h show help
            -t [API_KEY] set token
            `
    )
}

const printWeather = async (data) => {
    const icon = await getIcon(data.weather[0].icon)
    console.log(await terminalImage.buffer(icon, { width: '12.5%' }));
    console.log(
        dedent(`
        ${data.weather[0].description}
        ${chalk.blue.bold('City:')} ${data.name}
        ${chalk.blue.bold('Temp:')} ${data.main.temp}
        ${chalk.blue.bold('Feels like:')} ${data.main.feels_like}
        `)
    )
    // console.log(data)
}

export { printError, printSuccess, printHelp, printWeather };
