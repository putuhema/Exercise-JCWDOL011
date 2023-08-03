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
