import path from "path";
import State from "./state.js";
import fs from "fs";
import * as zlib from "zlib";

export const compress = async (pathFrom, pathTo) => {
    const checkPathFrom = pathFrom && pathFrom.startsWith('c:');
    const checkPathTo = pathTo && pathTo.startsWith('c:');
    const fileName = `${pathFrom.split(path.sep).pop()}.br`;
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
                const compress = zlib.createBrotliCompress();
                read.pipe(compress).pipe(write);
            } catch(e) {
                console.log(e)
            }
        } else {
            console.log('Wrong path or file didnt exist!')
        }
    } catch {
        console.log('Permission denied!');
    }
}