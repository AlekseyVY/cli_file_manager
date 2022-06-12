import {cp} from "./cp.js";


export const mv = async (arg1, arg2) => {
    await cp(arg1, arg2, true);
}