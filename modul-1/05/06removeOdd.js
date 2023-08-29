const removeOdd = (arr) => arr.filter(v => v % 2 === 0)
let arrayToRemove = [1, 1, 3, 4, 8, 6, 12, 15]

console.log(removeOdd(arrayToRemove)) // [4, 8, 6, 12]
