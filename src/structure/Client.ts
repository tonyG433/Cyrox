import { Client, ClientOptions } from 'revolt.js'

import Collection from '@discordjs/collection'
import { readdirSync } from 'fs'

// @ts-ignore
import ICommand from '../interfaces/ICommand'
// @ts-ignore
import IConfig from '../interfaces/IConfig'

// @ts-ignore
import cmdHandler from './handlers/command'

class CyroxClient extends Client {
    private _config: IConfig
    public categories = readdirSync('./src/commands')
    public commands = new Collection<string, ICommand>()
    public loadCommands = cmdHandler

    constructor(config: IConfig, options?: ClientOptions) {
        super(options)

        this._config = config
    }

    public start() {
        console.log('Starting...')
        this.loadCommands(this)
        this.loginBot(this._config.token)
    }
}

export default CyroxClient