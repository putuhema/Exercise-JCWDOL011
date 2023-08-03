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
