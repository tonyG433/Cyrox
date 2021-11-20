import _config from '../config.json'
import IConfig from './structure/interfaces/IConfig'
const config: IConfig = _config
import CyroxClient from './structure/Client'
import { Message } from 'revolt.js/dist/maps/Messages'

const client = new CyroxClient(config)


client.start()