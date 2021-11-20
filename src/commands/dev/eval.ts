import ICommand from '../../structure/interfaces/ICommand';

const command: ICommand = {
    name: 'evaluate',
    description: 'Evaluate code directly from Revolt (Dev only)',
    aliases: 'eval',
    async run(client, message, args) {
        let code = args.join(' ');

        if(message.author_id !== '01FM5NDVGW37F0E2MGPE0CM20H') {
            return message.channel!.sendMessage('Only my developer can use this command',);
        }
        if (!code) {
            return message.channel!.sendMessage('Please provide valid code to evaluate.',);
        }

        const words = ['secret', 'token', 'process.env', 'config.json', 'fs', 'ip', 'f'];
        for (const word of words) {
            if (code.replace('\\', '').toLowerCase().includes(word)) {
                return message.channel!.sendMessage('No, I dont think i will ');
            }
        }

        try {
            eval(code)
        }
        catch (error) {
            return message.channel!.sendMessage('error');
        }
    }


}

export default command