import path from "path";
import {fileURLToPath} from "url";
import {getArgs} from "../helpers/getArgs.js";


class State {
    constructor() {
        const homeDir = path.dirname(fileURLToPath(import.meta.url)).split(path.sep);
        homeDir.pop();
        this._name = getArgs(process.argv);
        this._currDir = homeDir.join(path.sep);
    }

    get name() {
        return this._name;
    }

    get currentDirectory() {
        console.log(this._currDir)
        return this._currDir;
    }

    setCurrentDirectory(data) {
        this._currDir = data;
    }
}

export default new State();