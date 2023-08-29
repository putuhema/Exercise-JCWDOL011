const mostCommonChar = (str) => {
    const map = new Map()

    for (let s of str) {
        if (!map.has(s)) {
            map.set(s, 1)
        } else {
            map.set(s, map.get(s) + 1)
        }
    }

    let char = ''
    let count = 0
    for (let [key, value] of map) {
        if (value > count) {
            char = key
            count = value
        }
    }

    return { char, count }
}


console.log(mostCommonChar('mostcommonchar'))