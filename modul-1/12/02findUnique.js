const findSingleNumber = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
            }
        }
        if (count === 1) return arr[i]
    }
    return -1
}


const findSingleNumberOpt = (arr) => {
    const counts = {}

    for (const num of arr) {
        if (counts[num]) {
            counts[num]++
        } else {
            counts[num] = 1
        }
    }

    for (const num of arr) {
        if (counts[num] === 1) return num
    }

    return -1
}

console.log(findSingleNumberOpt([2, 2, 1, 3, 1]))