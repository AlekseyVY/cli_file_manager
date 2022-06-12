import State from "./state.js";
import path from "path";
import fs from "fs";

export const cat = async (data) => {
    const currDir = State.currentDirectory;
    const file = path.join(currDir, data);
    const encoding = 'utf8';
    const dirExistsCheck = await fs.promises.access(file).then(() => true).catch(() => false);
    dirExistsCheck ? await ( async () => {
        const content = await fs.promises.readFile(file, encoding);
        console.log(content);
    })() : console.log('File didn\'t exist!');
}