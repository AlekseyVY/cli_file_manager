import fs from "fs";
import State from "./state.js";
import path from "path";
import * as hash from 'crypto';

export const hashing = async (data) => {
    const check = data && data.startsWith('c:');
    const encoding = 'utf8';
    try {
        check
            ? await (async () => {
                const content = await fs.promises.readFile(data, encoding)
                const result = hash.createHash('sha256').update(content).digest('hex')
                console.log(result);
            })()
            : await (async () => {
                const currDir = State.currentDirectory;
                const file = path.join(currDir, data);
                const content = await fs.promises.readFile(file);
                const result = hash.createHash('sha256').update(content).digest('hex')
                console.log(result);
            })()
    } catch {
        console.log('File not exist!')
    }
}