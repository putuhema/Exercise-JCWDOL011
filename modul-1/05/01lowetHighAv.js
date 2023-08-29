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
