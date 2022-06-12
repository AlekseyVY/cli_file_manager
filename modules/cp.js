import State from "./state.js";
import path from "path";
import fs from "fs";
import {rm} from "./rm.js";

export const cp = async (pathFrom, pathTo, del = false) => {
    const checkPathFrom = pathFrom && pathFrom.startsWith('c:');
    const checkPathTo = pathTo && pathTo.startsWith('c:');
    const fileName = pathFrom.split(path.sep).pop();
    let fromFile
    let  toFile;
    checkPathFrom ? fromFile = pathFrom : fromFile = path.join(State.currentDirectory, pathFrom);
    checkPathTo ? toFile = pathTo : toFile = path.join(State.currentDirectory, pathTo);
    const dirCopyToCheck = await fs.promises.access(fromFile).then(() => true).catch(() => false);
    const dirCopyFromCheck = await fs.promises.access(toFile).then(() => true).catch(() => false);
    try {
        if(dirCopyToCheck && dirCopyFromCheck) {
            try {
                const read = fs.createReadStream(fromFile);
                const write = fs.createWriteStream(path.join(toFile, fileName));
                read.pipe(write);
                read.on('end', () => {
                    del ? rm(fromFile.toLowerCase().trim()) : null;
                })
            } catch {}
        } else {
            console.log('Wrong path or file didnt exist!')
        }
    } catch {
        console.log('Permission denied!');
    }
}