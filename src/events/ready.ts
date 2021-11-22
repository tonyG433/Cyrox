import IEvent from "../structure/interfaces/IEvent";
import chalk from "chalk"
import logger from "../utils/logger";

let event: IEvent = {
    name: 'ready',
    run: (client) => {
        logger('Ready', `Logged in as` + ' ' + chalk.bold.white(`${client.user?.username}`) + ' ' + `and ready to go!`)
    }
}

export default event