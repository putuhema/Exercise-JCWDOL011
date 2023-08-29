const lcm = (a, b) => {
    const gcd = (x, y) => {
        do {
            const remainder = x % y
            x = y
            y = remainder
        } while (y !== 0)
        return x
    }

    return (a * b) / gcd(a, b)
}

console.log(lcm(48))
console.log(lcm(48))