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
