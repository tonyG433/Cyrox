import CyroxClient from '../Client'
import { Message } from 'revolt.js/dist/maps/Messages'

interface IRun {
    (
        client: CyroxClient,
        message: Message,
        args: string[]
    ): any | Promise<any>
}

export default interface ICommand {
    name: string,
    description?: string,
    aliases?: string | string[]
    run: IRun
}