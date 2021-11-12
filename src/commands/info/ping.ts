import ICommand from '../../structure/interfaces/ICommand'

const command: ICommand = {
    name: 'ping',
    description: 'Sends the bot\'s ping.',
    aliases: 'test',
    async run (client, message, args) {
        message.channel!.sendMessage(`>Pong! :pingpog: \n >> API Latency: ${client.websocket.ping} ms`)
    }
}

export default command