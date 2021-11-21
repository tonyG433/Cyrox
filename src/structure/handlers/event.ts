import CyroxClient from "../Client";
import fs from 'fs'
import IEvent from "../interfaces/IEvent";
import chalk from "chalk"

const handler = (client: CyroxClient) => {
    const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js') || file.endsWith('ts'))
    console.log((`\n[`) + chalk.magenta('LOAD') + (`]`) + ' ' + chalk.cyan('Loading events...\n'))

    for (const file of eventFiles) {
        const req = require(`../../events/${file}`)

        const event: IEvent = req.default


        console.log((`\t[` + chalk.yellow('EVENT') + ']' + ' ' + chalk.magenta(`${event.name}`) + ' ' + chalk.blueBright('event has been loaded!\t')))

        if (event.once) {
            client.once(event.name, (...args) => event.run(client, ...args))
        } else {

            client.on(event.name as any, (...args: any[]) => event.run(client, ...args))
        }
    }
}

export default handler