import { Client, ClientOptions } from 'revolt.js'

import Collection from '@discordjs/collection'
import { readdirSync } from 'fs'
import chalk from "chalk"
import logger from "../utils/logger";

import ICommand from './interfaces/ICommand'
import IConfig from './interfaces/IConfig'

import cmdHandler from './handlers/command'
import eventHandler from './handlers/event'

class CyroxClient extends Client {
    private _config: IConfig
    public categories = readdirSync('./src/commands')
    public commands = new Collection<string, ICommand>()

    public loadCommands = cmdHandler
    public loadEvents = eventHandler

    constructor(config: IConfig, options?: ClientOptions) {
        super(options)

        this._config = config
    }

    public start() {
        logger('Starting','Starting the bot. Please hold...')
        this.loadCommands(this)
        this.loadEvents(this)
        this.loginBot(this._config.token)
    }

}

export default CyroxClient