let words = "hello world"
let capitalizeWord = words.split(' ')
  .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
  .join(' ')

console.log(`${words} -> ${capitalizeWord}`)
