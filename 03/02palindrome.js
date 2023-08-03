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
