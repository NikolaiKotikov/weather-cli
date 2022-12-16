export const getArgs = (args) => {
    const [, , ...rest] = args
    const res = {}
    rest.forEach((element, index, array) => {
        if (element.startsWith('-')) {
            if (index === array.length - 1) {
                res[element.substring(1)] = true
            } else if (!array[index + 1].startsWith('-')) {
                res[element.substring(1)] = array[index + 1]
            } else {
                res[element.substring(1)] = true
            }
        }
    });
    return res
}
