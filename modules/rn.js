import State from "./state.js";
import path from "path";
import fs from "fs";

export const rn = async (oldFile, newFile) => {
    const currDir = State.currentDirectory;
    const fromFile = path.join(currDir, oldFile);
    const toFile = path.join(currDir, newFile);
    const renameFileToCheck = await fs.promises.access(toFile).then(() => true).catch(() => false);
    const renameFileFromCheck = await fs.promises.access(fromFile).then(() => true).catch(() => false);
    if(renameFileFromCheck && !renameFileToCheck) {
        await fs.promises.rename(fromFile, toFile);
    } else {
        console.log('Rename operation false!');
    }
}