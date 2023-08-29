const firstArray = [1, 2, 3]
const secondArray = [3, 2, 1]
const addingTwoArrays = (first, second) => first.length === second.length ?
  first.map((f, i) => f + second[i]) : []

console.log(addingTwoArrays(firstArray, secondArray)) // [4, 4, 4]
