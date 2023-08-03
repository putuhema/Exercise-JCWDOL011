function triangle(height) {
  let number = 1
  let row = ''
  for (let i = 1; i <= height; i++) {
    for (let j = 0; j < i; j++) {
      row += number.toString().padStart(2, '0') + ' '
      number++
    }
    row += '\n'
  }
  return row

}

console.log(triangle(4))
