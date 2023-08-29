let type = 0
let input = 'str' // 34 or {}

if (typeof input === 'string') {
  type = 1
} else if (typeof input === 'number') {
  type = 2
} else {
  type = 3
}

console.log(`${input} type is ${type}`)
