import ICommand from '../../structure/interfaces/ICommand'

const command: ICommand = {
    name: 'say',
    description: 'Say something as the bot ;)',
    aliases: 'talk',
    async run (client, message, args) {

          message.channel!.sendMessage(`${args.join(" ")}`)
    }
}

export default command