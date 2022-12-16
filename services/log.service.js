import chalk from 'chalk'
import dedent from 'dedent'

const printError = (error) => {
    console.log(chalk.bgRed(`ERROR ${error}`))
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen(`SUCCESS ${message}`))
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

export { printError, printSuccess, printHelp }
