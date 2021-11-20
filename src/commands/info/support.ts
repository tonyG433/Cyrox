import ICommand from '../../structure/interfaces/ICommand'

const command: ICommand = {
    name: 'support',
    description: 'Join our support server if you are having any issue with Cyrox.',
    aliases: 'server',
    async run (client, message, args) {
        message.channel!.sendMessage(`### Support server\n Join our support server if you are having an issue with Cyrox, by clicking [here](https://app.revolt.chat/invite/QRqsdGzq)`)
    }
}

export default command