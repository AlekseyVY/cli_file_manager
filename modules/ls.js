import fs from "fs";
import State from "./state.js";

export const ls = async () => {
    const dir = State.currentDirectory;
    await (async () => {
        const files = await fs.promises.readdir(dir);
        files.forEach((file) => console.log(file));
    })();
}