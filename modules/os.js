import * as OS from 'os';

export const os = async (arg) => {
    const data = arg.slice(2).toLowerCase().trim();
    switch(data) {
        case 'eol':
            console.log(JSON.stringify(OS.EOL));
            break;
        case 'cpus':
            console.log(OS.cpus());
            break;
        case 'homedir':
            console.log(OS.homedir());
            break;
        case 'username':
            console.log(OS.userInfo().username)
            break;
        case 'architecture':
            console.log(process.arch)
            break;
        default:
            console.log('Wong command!');
            break;
    }
}