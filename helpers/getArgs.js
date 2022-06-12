export const getArgs = (data) => {
    const [node, dir, name] = Object.entries(data);
    return name[1].split('=')[1];
}