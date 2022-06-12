import State from "./state.js";
import path from "path";

export const cd = async (data) => {
    const currDir = State.currentDirectory;
    const check = data && data.startsWith('c:');
    try {
        check ? State.setCurrentDirectory(data) : State.setCurrentDirectory(path.join(currDir, data))
    } catch {
        console.log('Wrong directory path!')
    }
}