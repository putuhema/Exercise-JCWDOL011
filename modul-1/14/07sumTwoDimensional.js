const sumTWoDimensional = (arrays) => {
    let sum = 0
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            sum += arrays[i][j]
        }
    }

    return sum
}


console.log(sumTWoDimensional([[1, 2, 3], [4, 5, 6]]))