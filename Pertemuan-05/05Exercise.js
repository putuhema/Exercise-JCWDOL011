// 1. get the lowest, highest and average value
// a. with sort function
function getLowHighAverageSort(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  const length = sortedArray.length

  return `{ low: ${sortedArray[0]}, hight: ${sortedArray[length - 1]}, average: ${sortedArray.reduce((a, c) => a + c, 0) / length} }`
}


// b. without sort function
function getLowHighAverage(arr) {
  let low = arr[0]
  let high = arr[0]
  let average = 0
  let total = 0

  arr.forEach(v => {
    if (v < low) {
      low = v
    }
    if (v > high) {
      high = v
    }
    total += v
  })

  average = total / arr.length
  return `{ low:${low}, high:${high}, average:${average} }`
}

let arr = [5, 3, 3, 2, 1, 1, 9, 11]
const withSort = getLowHighAverageSort(arr)
const withoutSort = getLowHighAverage(arr)

console.log(withSort) // {low: 1, height: 11, average: 4.375}
console.log(withoutSort) // {low: 1, height: 11, average: 4.375 }


// 2. concatenating words from array
function concatArrayToStr(arr) {
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      str += `and ${arr[i]}`
    } else {
      str += `${arr[i]}, `
    }
  }

  return str

}

console.log(concatArrayToStr(["hello", 'world', 'coding'])) // hello, world, and coding

// 3. split str to array
const splitStrToArray = (str, delimeter) => {
  let strArr = []
  let currentWord = ''
  for (let char of str) {
    if (char !== delimeter) {
      currentWord += char
    } else {
      strArr.push(currentWord)
      currentWord = ''
    }
  }

  strArr.push(currentWord)

  return strArr
}

console.log(splitStrToArray('hello world', ' ')) //['hello', 'world']

// 4. add two arrays of integer
const firstArray = [1, 2, 3]
const secondArray = [3, 2, 1]
const addingTwoArrays = (first, second) => first.length === second.length ?
  first.map((f, i) => f + second[i]) : []

console.log(addingTwoArrays(firstArray, secondArray)) // [4, 4, 4]

// 5. add element in the end of array
const pushUnique = (value, array) => {
  if (!array.includes(value)) {
    array.push(value)
  }
}

let uniq = []
pushUnique(2, uniq)
pushUnique(3, uniq)
pushUnique(3, uniq)
pushUnique(4, uniq)
pushUnique(4, uniq)
pushUnique(5, uniq)
console.log(uniq) // [2, 3, 4, 5]


// 6. removes all odd numbers in an array 
const removeOdd = (arr) => arr.filter(v => v % 2 === 0)
let arrayToRemove = [1, 1, 3, 4, 8, 6, 12, 15]

console.log(removeOdd(arrayToRemove)) // [4, 8, 6, 12]

