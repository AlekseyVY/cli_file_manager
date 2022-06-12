import path from "path";
import State from "./state.js";
import fs from "fs";
import * as zlib from "zlib";
import { pipeline } from 'node:stream';

export const decompress = async (pathFrom, pathTo = '') => {
    const checkPathFrom = pathFrom && pathFrom.startsWith('c:');
    const checkPathTo = pathTo && pathTo.startsWith('c:');
    let fileName = pathFrom.split(path.sep).pop();
    fileName = fileName.slice(0, fileName.length - 3)
    console.log(fileName)
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
                const decompress = zlib.createBrotliDecompress();
                read.pipe(decompress).pipe(write);
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