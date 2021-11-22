import { readdirSync } from 'fs'
import CyroxClient from '../Client'
import ICommand from '../interfaces/ICommand'
import chalk from "chalk"
import logger from "../../utils/logger";

const handler = (client: CyroxClient) => {
    for (const folder of client.categories) {
        if (folder === 'context') continue

        const commandFiles = readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('js') || file.endsWith('ts'))

        logger('Load', `Searching for` + ' ' + chalk.underline.bold.white(`${folder}`) + ' ' + `commands...\n`)


        for (const file of commandFiles) {
            const req = require(`../../commands/${folder}/${file}`)

            const command: ICommand = req.default

            client.commands.set(command.name, command)


            logger('Command', chalk.magenta(`${file}`) + ' ' + 'has been loaded!')
        }
    }
}

export default handler