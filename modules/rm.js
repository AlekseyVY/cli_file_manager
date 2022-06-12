import fs from "fs";
import path from "path";
import State from "./state.js";

export const rm = async (data) => {
    const check = data && data.startsWith('c:');
    try {
        check
            ? await fs.promises.unlink(data)
            : await (async () => {
                const currDir = State.currentDirectory;
                const file = path.join(currDir, data);
                await fs.promises.unlink(file);
            })()
    } catch {
        console.log('File not exist!')
    }
}