let convertToArray = (str, delimeter) => {
  let splitStr = []
  let currentWord = ''
  for (let char of str) {
    if (char !== delimeter) {
      currentWord += char
    } else {
      splitStr.push(currentWord)
      currentWord = ""
    }
  }

  splitStr.push(currentWord)

  return splitStr
}

let strInput = "hello world"
console.log(convertToArray(strInput, " "))
