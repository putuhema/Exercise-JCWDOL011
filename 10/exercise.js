// soal 1
const shiftAndAppend = (str) =>
  str.split(' ').map(word =>
    `${word.slice(1)}${word[0]}ay`
  ).join(' ')

console.log(shiftAndAppend('Pig latin is cool !'))


// soal 2
const convertArrToPhoneNumber = (arr) =>
  `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`

console.log(convertArrToPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

