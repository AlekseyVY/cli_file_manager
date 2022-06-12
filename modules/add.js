import State from "./state.js";
import path from "path";
import fs from "fs";

export const add = async (data) => {
    const currDir = State.currentDirectory;
    const file = path.join(currDir, data);
    const status = await fs.promises.access(file).then(() => true).catch(() => false);
    try {
        status ? console.log('File currently exists!') : await fs.promises.writeFile(file, '');
    } catch {
        console.log('Permission denied!')
    }
}