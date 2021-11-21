import IEvent from "../structure/interfaces/IEvent";
import chalk from "chalk"

let event: IEvent = {
    name: 'ready',
    run: (client) => {
        console.log(chalk.green(`\nLogged in as`) + ' ' + chalk.magenta(`${client.user?.username}`) + ' ' + chalk.green('and ready to go!'))

    }
}

export default event