import { Message } from 'revolt.js/dist/maps/Messages'
import CyroxClient from "../Client";

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