import path from "path";
import State from "./state.js";

export const up = async () => {
    const dir = State.currentDirectory.split(path.sep)
    dir.length > 1 ? dir.pop() : null;
    State.setCurrentDirectory(dir.length > 1 ? dir.join(path.sep) : `C:${path.sep}`);
}