import readline from "readline";
import {operatorFactory} from "./helpers/operatorFactory.js";
import State from "./modules/state.js";


export const main = async () => {
    const username = State.name;
    console.log(`Welcome to the File Manager, ${username}!`)
    const rl = readline.createInterface({ input: process.stdin });
    rl.on('line', async (input) => {
        const data = input.trim().toLowerCase().split(' ');
        if(input === '.exit') {
            rl.close();
        } else {
            await operatorFactory(data);
        }
    })
    rl.on("SIGINT", function () {
        process.emit("SIGINT");
    });
    rl.on('close', () => {
        console.log(`Thank you for using File Manager, ${username}!`)
    })
    process.on("SIGINT", function () {
        console.log(`Thank you for using File Manager, ${username}!`)
        process.exit();
    });
}

await main()