import ICommand from '../../structure/interfaces/ICommand'
const command: ICommand = {
    name: 'botinfo',
    description: 'Get info on the bot',
    aliases: 'bi',
    async run (client, message, args) {
        message.channel!.sendMessage(`## Bot Info\n ### I am a pretty cool bot! Here are some facts about me: \n - Revolt.js version: \`5.1.0-alpha.10\` \n - TypeScript version: \`4.3.5\` \n - ts-node version: \`10.4.0\` \n - Current ping: \`${client.websocket.ping}\`ms \n - [Source code on GitHub](<https://github.com/tonyG433/Cyrox>) \n - [Join our support server](https://app.revolt.chat/invite/0rz6FHEt) \n - [Add me to your server](https://app.revolt.chat/bot/01FM5Q2BVG11V4NSRXPWR29TVP)`)
    }
}

export default command