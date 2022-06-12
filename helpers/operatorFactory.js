import {add, cat, cd, compress, cp, decompress, hashing, ls, mv, os, rm, rn, up} from "../modules/index.js";


export const operatorFactory = async (props) => {
    const [data, args1, args2] = props;
    switch(data) {
        case 'up':
            await up();
            break;
        case 'cd':
            await cd(args1);
            break;
        case 'ls':
            await ls();
            break;
        case 'cat':
            await cat(args1);
            break;
        case 'add':
            await add(args1);
            break;
        case 'rn':
            await rn(args1, args2);
            break;
        case 'cp':
            await cp(args1, args2);
            break;
        case 'mv':
            await mv(args1, args2)
            break;
        case 'rm':
            await rm(args1);
            break;
        case 'os':
            await os(args1);
            break;
        case 'hash':
            await hashing(args1);
            break;
        case 'compress':
            await compress(args1, args2);
            break;
        case 'decompress':
            await decompress(args1, args2);
            break;
        default:
            console.log('wrong command');
            break;
    }
}