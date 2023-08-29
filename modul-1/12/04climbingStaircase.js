const climbingStairCase = (n) => {
    if (n < 4) return n
    let fib = [1, 1]
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib[n]
}



console.log(climbingStairCase(2))
console.log(climbingStairCase(3))