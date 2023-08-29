let stringToReverse = "hello world"
let result = ''

for (let i = stringToReverse.length - 1; i >= 0; i--) {
  result += stringToReverse[i]
}

console.log(`from "${stringToReverse} reverse to "${result}"`)
