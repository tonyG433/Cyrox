import chalk from "chalk";
/**
 * Cool logger thingy
 * @param {string} type - basically the first things in the [] before the log
 * @param {string} msg - the actual thing that is being logged
 */

const logger = (type: string, msg: string) => {
    const loggedType = type.toLocaleUpperCase()
    if (!type) type = 'Null'
    switch (type) {
        case 'Load': // [LOAD]
            console.log(`\n[` + chalk.magenta(`${loggedType}`) + `]` + ' ' + chalk.cyan`${msg}`);
            break

        case 'Command': // [COMMAND]
        case 'Event': // [EVENT]
            console.log(`\t[` + chalk.yellow(`${loggedType}`) + `]` + ' ' + chalk.blue`${msg}`);
            break

        case 'Debug': // [DEBUG]
            console.log(`\n[` + chalk.yellow(`${loggedType}`) + `]` + ' ' + chalk.white`${msg}`)
            break

        case 'Error': // [ERROR]
            console.log(`\n[` + chalk.red(`${loggedType}`) + `]` + ' ' + chalk.red`${msg}`)
            break

        case 'Command Ran': // [COMMAND RAN]
            console.log(`\n[` + chalk.yellow(`${loggedType}`) + `]` + ' ' + chalk.blue`${msg}`)
            break

        default: // [SOMETHING ELSE]
            console.log(`\n[` + chalk.magenta(`${loggedType}`) + `]` + ' ' + chalk.blue`${msg}`);
            break
    }

};

export default logger