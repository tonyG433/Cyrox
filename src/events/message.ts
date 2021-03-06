import IEvent from "../structure/interfaces/IEvent";
import { Message } from 'revolt.js/dist/maps/Messages'
import IConfig from "../structure/interfaces/IConfig";
import _config from '../../config.json'
const config: IConfig = _config
import logger from "../utils/logger";

let event: IEvent = {
    name: 'message',
    run: (client, message: Message) => {

        if (message.author?.bot || typeof message.content !== 'string') return

        let args: string[] = message.content.slice(config.prefix.length).split(/ +/g)

        let commandName = args.shift()?.toLowerCase()

        let command = client.commands.get(commandName as string) ?? client.commands.find(c => {
            if (typeof c.aliases === 'string') c.aliases = [c.aliases]

            return !!c.aliases && c.aliases.includes(commandName as string)
        })

        if (!command) return

        try {
            command.run(client, message, args)
            // logger('Command Ran', `${message.author?.username} has ran the command ${command.name} (channel name: ${message.channel?.name}, Server name: )`)
        } catch (err) {
            console.error(err)
        }
        //
        // logger('Message', `${message.author?.username} says:` + ' ' + chalk.yellow(`${message.content}`))
    }
}

export default event