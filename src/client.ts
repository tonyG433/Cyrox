import { Client, ClientOptions } from 'revolt.js'

class CyroxClient extends Client {
    private _config: {
        token: string
    }

    constructor(config: {
        token: string
    }, options?: ClientOptions) {
        super(options)

        this._config = config
    }

    public start() {
        console.log('Starting...')
        this.loginBot(this._config.token)
    }
}

export default CyroxClient