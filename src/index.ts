
import CyroxClient from './client';
import config  from '../config.json'

const client = new CyroxClient(config)

client.on('ready', async () =>
    console.info(`Logged in as ${client.user!.username}!`)
);


client.start()