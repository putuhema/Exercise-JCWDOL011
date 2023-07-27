// 1. multiplication
let m = 9
for (let i = 1; i <= 10; i++) {
  console.log(`${m} x ${i} = ${m * i}`)
}

// 2. check palindrome
let txt = "makam"
let revText = ''

for (let i = txt.length - 1; i >= 0; i--) {
  revText += txt[i]
}

if (txt === revText) {
  console.log(`${txt} is palindrome`)
} else {
  console.log(`${txt} is not palindrome`)
}

// 3. centimeter to kilometer
let cm = 250_000
let km = cm / 100_000
console.log(`${cm}cm to is ${km}km`)

// 4. convert currency(IDR)
let amount = 100000
let amountStr = String(amount)
let str = ""
for (let i = amountStr.length - 1, count = 0; i >= 0; i--, count++) {
  str = amountStr[i] + str
  if (count === 2 && i != 0) {
    str = "." + str
    count = -1
  }
}
console.log(`${amount} to IDR = Rp. ${str}`)

// 5. remove a string of a given search string
let ss = "Hello world"
let searchString = "ell"

let resultSS = ss.split(searchString).join('')
console.log(`remove "${searchString}" from "${ss}" -> ${resultSS}`)

// 6. capitalize first letter of each world
let words = "hello world"
let capitalizeWord = words.split(' ')
  .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
  .join(' ')

console.log(`${words} -> ${capitalizeWord}`)


// 7. reverse string
let stringToReverse = "hello world"
let result = ''

for (let i = stringToReverse.length - 1; i >= 0; i--) {
  result += stringToReverse[i]
}

console.log(`from "${stringToReverse} reverse to "${result}"`)


// 8. swap case character from string
let swapString = "The QuiCk BrOwn Fox"
let swappedString = ""

for (let i = 0; i < swapString.length; i++) {
  const char = swapString.charAt(i)

  if (char === char.toUpperCase()) {
    swappedString += char.toLowerCase()
  } else {
    swappedString += char.toUpperCase()
  }
}

console.log(`from "${swapString}" to "${swappedString}"`)

// 9. find the largest of two given integers
let num1 = 3
let num2 = 6

let biggest = num1 > num2 ? `${num1} is larger than ${num2}` : `${num2} is larger than ${num1}`

console.log(biggest)


// 10. sorting three number using if
let a = 9
let b = 1
let c = 2

let sort = ''

if (a > b) {
  if (a > c) {
    if (b > c) {
      sort = `${c}, ${b}, ${a}`
    } else {
      sort = `${b}, ${c}, ${a}`
    }
  } else {
    sort = `${b}, ${a}, ${c}`
  }
} else {
  if (b > c) {
    if (a > c) {
      sort = `${c}, ${a}, ${b}`
    } else {
      sort = `${a}, ${c}, ${b}`
    }
  } else {
    sort = `${a}, ${b}, ${c}`
  }
}

console.log(`${a}, ${b}, ${c} -> ${sort}`)

// 11. check data types
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

// 12. change every letter "a" into *
let letter = "An apple a day keeps the doctor away"
let convertToStar = ""

for (let i = 0; i < letter.length; i++) {
  const char = letter.toLowerCase().charAt(i)

  if (char === 'a') {

    convertToStar += '*'
  } else {
    convertToStar += char
  }
}

console.log(`from "${letter}" to "${convertToStar}"`)


