import IEvent from "../structure/interfaces/IEvent";

let event: IEvent = {
    name: 'ready',
    run: (client) => {
        console.log(`\nLogged in as ${client.user?.username} and ready to go!`)
    }
}

export default event