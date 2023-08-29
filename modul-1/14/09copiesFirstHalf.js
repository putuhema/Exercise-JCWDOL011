const copyFirstHalf = (arr) =>
    arr.slice(0, Math.floor(arr.length / 2) + 1)


const originalArray = [1, 2, 3, 4, 5]
const copiedHalf = copyFirstHalf(originalArray)

console.log(copiedHalf)