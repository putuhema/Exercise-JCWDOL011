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
