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
