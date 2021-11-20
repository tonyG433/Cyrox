import ICommand from '../../structure/interfaces/ICommand'

const command: ICommand = {
    name: '8ball',
    description: 'Ask the bot anything and get an answer 🎱',
    aliases: '8b',
    async run (client, message, args) {
        let responses = ["Definitely.", "It is certain", "Probably not.",
            "Perhaps.",
            "Maybe, ehhh don't take my word for it.", "Yes, obviously",
            "Ask again.",
            "How do you not know this.",
            "No clue bro.",
            "Uhhh not sure about the answer to that one.", "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Very doubtful.", "My sources say yes."]
        let question = args[0]
        let result = Math.floor((Math.random() * responses.length))
        if (!question) return message.reply("Please ask a question")
        message.channel!.sendMessage(`${responses[result]}`)
    }
}

export default command