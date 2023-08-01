// 1. triangle pattern
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


// 2. replace 3, 5, 3 & 5 with Fizz, Buzz, FizzBuzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let result = ''
    if (i % 3 === 0) {
      result += 'Fizz'
    }

    if (i % 5 === 0) {
      result += 'Buzz'
    }

    console.log(result || i.toString())
  }
}

fizzBuzz(15)

// 3. Body Max Index(BMI)
function BMI(weight, height) {
  let heightInMeters = height / 100
  let bmi = weight / Math.pow(heightInMeters, 2)

  if (bmi < 18.5) {
    return 'less weight'
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'ideal'
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'overweight'
  } else if (bmi >= 30 && bim <= 39.9) {
    return 'very overweight'
  } else if (bmi > 39.9) {
    return 'obesity'
  }
}

console.log(BMI(65, 174))

// 4. remove odd numbers in an array
let inputArr = [1, 2, 4, 6, 7, 8, 9, 13, 20]
let removeOdd = (arr) => arr.filter(a => a % 2 === 0)

console.log(removeOdd(inputArr))

// 5. convert string to array
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



